import { query, mutation, action } from "./_generated/server";
import { v } from "convex/values";
import { api } from "./_generated/api";

export const getProjects = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("projects").collect();
  },
});

export const getProjectByRepoName = query({
  args: { repoName: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("projects")
      .withIndex("by_repoName", (q) => q.eq("repoName", args.repoName))
      .first();
  },
});

export const insertInitialProjects = mutation({
  args: {
    projects: v.array(
      v.object({
        title: v.string(),
        repository: v.string(),
        repoName: v.string(),
        classification: v.optional(v.string()),
        abstract: v.optional(v.string()),
        topics: v.array(v.string()),
      })
    ),
  },
  handler: async (ctx, args) => {
    let count = 0;
    for (const project of args.projects) {
      const existing = await ctx.db
        .query("projects")
        .withIndex("by_repoName", (q) => q.eq("repoName", project.repoName))
        .first();
      
      if (!existing) {
        await ctx.db.insert("projects", {
          title: project.title,
          repository: project.repository,
          repoName: project.repoName,
          classification: project.classification,
          abstract: project.abstract,
          topics: project.topics,
        });
        count++;
      }
    }
    return count;
  },
});

export const updateAbstracts = mutation({
  args: {
    updates: v.array(v.object({ title: v.string(), newAbstract: v.string() })),
  },
  handler: async (ctx, args) => {
    let count = 0;
    const allProjects = await ctx.db.query("projects").collect();
    
    for (const project of allProjects) {
      const update = args.updates.find(u => u.title === project.title);
      if (update) {
        await ctx.db.patch(project._id, { abstract: update.newAbstract });
        count++;
      }
    }
    return count;
  },
});

export const updateProjectReadme = mutation({
  args: {
    id: v.id("projects"),
    readmeContent: v.string(),
    lastSyncedCommit: v.optional(v.string()),
    lastSyncedAt: v.number(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      readmeContent: args.readmeContent,
      lastSyncedCommit: args.lastSyncedCommit,
      lastSyncedAt: args.lastSyncedAt,
    });
  },
});

export const syncAllReadmes = action({
  args: {},
  handler: async (ctx) => {
    const projects = await ctx.runQuery(api.projects.getProjects);
    
    for (const project of projects) {
      if (!project.repoName) continue;

      try {
        const headers: HeadersInit = {
          "User-Agent": "Convex-Sync",
        };
        if (process.env.GITHUB_TOKEN) {
          headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
        }

        // Fetch commit info
        const commitRes = await fetch(`https://api.github.com/repos/${project.repoName}/commits?per_page=1`, {
          headers
        });
        
        if (commitRes.ok) {
          const commits = await commitRes.json();
          const latestCommit = commits[0]?.sha;

          // If commit hasn't changed, skip
          if (latestCommit && project.lastSyncedCommit === latestCommit) {
            console.log(`Skipping ${project.repoName}, no new commits.`);
            continue;
          }

          // Fetch README
          const readmeHeaders = { ...headers, "Accept": "application/vnd.github.v3.raw" };
          const readmeRes = await fetch(`https://api.github.com/repos/${project.repoName}/readme`, {
            headers: readmeHeaders
          });

          if (readmeRes.ok) {
            const readmeContent = await readmeRes.text();
            await ctx.runMutation(api.projects.updateProjectReadme, {
              id: project._id,
              readmeContent,
              lastSyncedCommit: latestCommit,
              lastSyncedAt: Date.now(),
            });
            console.log(`Successfully synced README for ${project.repoName}`);
          } else {
            console.warn(`Failed to fetch README for ${project.repoName}: ${readmeRes.status} ${readmeRes.statusText}`);
          }
        } else {
          console.error(`Failed to fetch commits for ${project.repoName}: ${commitRes.status} ${commitRes.statusText}`);
        }
      } catch (e) {
        console.error(`Error syncing ${project.repoName}:`, e);
      }

      // Respect GitHub API rate limits roughly (not fully authenticated, so 60/hr limit applies)
      // Since it's a serverless function, it's better to pause slightly if iterating many
      await new Promise(r => setTimeout(r, 1000));
    }
  },
});

export const getMissingReadmes = query({
  args: {},
  handler: async (ctx) => {
    const projects = await ctx.db.query("projects").collect();
    return projects.filter(p => !p.readmeContent).map(p => p.repoName);
  },
});
