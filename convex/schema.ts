import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  projects: defineTable({
    title: v.string(),
    repository: v.string(), // GitHub URL
    repoName: v.string(), // "tanvishdesai/repo-name"
    classification: v.optional(v.string()), // The raw classification
    abstract: v.optional(v.string()), // The short summary
    topics: v.array(v.string()), // ['research', 'applications', etc.]
    readmeContent: v.optional(v.string()),
    lastSyncedCommit: v.optional(v.string()),
    lastSyncedAt: v.optional(v.number()), // Timestamp
  }).index("by_repoName", ["repoName"]),
});
