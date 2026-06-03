"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Brain, Code2, Github, Palette, Wrench } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import Link from "next/link";

type Category = "all" | "research" | "applications" | "ai-tools" | "creative";

const githubProfile = "https://github.com/TanvishDesai";

const categories: { id: Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "research", label: "Research" },
  { id: "applications", label: "Applications" },
  { id: "ai-tools", label: "AI Tools" },
  { id: "creative", label: "Creative" },
];

const categoryMeta = {
  research: { icon: Brain, tone: "from-[#2b57ef]/18 via-[#5f77ff]/15 to-transparent" },
  applications: { icon: Code2, tone: "from-[#149e6f]/18 via-[#48b58f]/12 to-transparent" },
  "ai-tools": { icon: Wrench, tone: "from-[#f05e2f]/17 via-[#f89a6f]/12 to-transparent" },
  creative: { icon: Palette, tone: "from-[#8f67f5]/16 via-[#d2b8ff]/12 to-transparent" },
};

export default function Projects() {
  const [active, setActive] = useState<Category>("all");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const rawProjects = useQuery(api.projects.getProjects);

  const filtered = useMemo(() => {
    if (!rawProjects) return [];
    return active === "all"
      ? rawProjects
      : rawProjects.filter((project) => project.topics?.includes(active));
  }, [active, rawProjects]);

  return (
    <section id="projects" className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="projects"
          title="Selected work across research, product, and creative builds"
          description="Powered dynamically by Convex. Every card links to GitHub or deep-dives into the README."
          align="left"
        />

        <AnimatedSection>
          <div className="surface-card mb-8 flex flex-col gap-4 p-4 md:flex-row md:items-center md:justify-between md:p-5">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActive(category.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active === category.id
                      ? "bg-black text-white"
                      : "border border-black/15 bg-white/75 text-black/70 hover:bg-white"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <a
              href={githubProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="button-outline inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-black/80"
            >
              <Github size={16} />
              Open GitHub Profile
            </a>
          </div>
        </AnimatedSection>

        {rawProjects === undefined ? (
          <div className="py-20 text-center font-mono text-sm text-black/50">Loading projects from Convex...</div>
        ) : (
          <motion.div layout className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => {
                // Determine primary category for UI colors based on tags
                const primaryCategory = (project.topics?.find((t) => Object.keys(categoryMeta).includes(t)) || "research") as keyof typeof categoryMeta;
                const meta = categoryMeta[primaryCategory];
                const CategoryIcon = meta.icon;

                return (
                  <motion.article
                    layout
                    key={project._id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.25 }}
                    onMouseEnter={() => setHoveredProject(project._id)}
                    onMouseLeave={() => setHoveredProject(null)}
                    className="surface-card-strong relative flex h-full flex-col overflow-hidden"
                  >
                    <div className={`h-1.5 w-full bg-gradient-to-r ${meta.tone}`} />

                    <div className="flex flex-1 flex-col p-5">
                      <div className="mb-3 flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <span className="rounded-lg border border-black/15 bg-white/70 p-2 text-black/70">
                            <CategoryIcon size={18} />
                          </span>
                          <div>
                            <h3 className="text-lg font-semibold text-black">{project.title}</h3>
                            <p className="mt-0.5 text-xs font-mono uppercase tracking-[0.15em] text-black/55">
                              {project.repoName?.split('/')[1] || "Project"}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Display abstract on hover, else the raw title or brief summary */}
                      <div className="relative min-h-[4rem] text-sm leading-relaxed text-black/70">
                        <AnimatePresence mode="wait">
                          {hoveredProject === project._id ? (
                            <motion.div
                              key="abstract"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="absolute inset-0 z-10 bg-white/95"
                            >
                              {project.abstract || "No abstract available."}
                            </motion.div>
                          ) : (
                            <motion.div
                              key="classification"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            >
                              {project.classification || "A project by Tanvish Desai"}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.topics?.slice(0, 3).map((item) => (
                          <span key={item} className="ghost-chip px-2.5 py-1 text-xs font-mono text-black/75">
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto pt-5 flex gap-2">
                        <a
                          href={project.repository}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="button-outline inline-flex flex-1 items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium text-black/80"
                        >
                          <Github size={15} />
                          GitHub
                        </a>
                        <Link
                          href={`/projects/${project.repoName || "unknown"}`}
                          className="button-outline inline-flex flex-1 items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium text-black/80"
                        >
                          View more
                          <ArrowUpRight size={15} />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
