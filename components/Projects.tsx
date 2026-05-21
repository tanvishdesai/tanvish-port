"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Brain, Code2, Github, Palette, Wrench } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

type Category = "all" | "research" | "applications" | "ai-tools" | "creative";

interface Project {
  title: string;
  description: string;
  tech: string[];
  category: Exclude<Category, "all">;
  highlight: string;
  query: string;
}

const githubProfile = "https://github.com/TanvishDesai";

const categories: { id: Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "research", label: "Research" },
  { id: "applications", label: "Applications" },
  { id: "ai-tools", label: "AI Tools" },
  { id: "creative", label: "Creative" },
];

const projects: Project[] = [
  {
    title: "PIN-Lite",
    description:
      "Multimodal deepfake detection with aggressive compression for edge deployment while preserving explainability.",
    tech: ["PyTorch", "Multimodal", "Distillation", "XAI"],
    category: "research",
    highlight: "8.5x compression",
    query: "PIN-Lite",
  },
  {
    title: "MMLLM-MedXAI",
    description:
      "Breast cancer histopathology pipeline combining centralized attention CNNs and federated optimization strategies.",
    tech: ["PyTorch", "Federated Learning", "Medical AI"],
    category: "research",
    highlight: "Federated Imaging",
    query: "MMLLM-MedXAI",
  },
  {
    title: "HGT-VD",
    description:
      "Video-level deepfake detection using 3D CNNs, transformer reasoning, and generative reconstruction signals.",
    tech: ["PyTorch", "3D CNN", "Transformers", "Video Analysis"],
    category: "research",
    highlight: "Hybrid Pipeline",
    query: "HGT-VD",
  },
  {
    title: "DINO-Ranger",
    description:
      "Super-resolution model with DINO-driven perceptual supervision and frequency-domain objectives.",
    tech: ["Vision Transformers", "SwinIR", "DINO", "FFT"],
    category: "research",
    highlight: "+2.05 dB PSNR",
    query: "DINO-Ranger",
  },
  {
    title: "StrideX",
    description:
      "Gamified fitness app with geospatial territory claiming, community leaderboards, and wellness progression.",
    tech: ["React Native", "Expo", "Convex", "MapLibre"],
    category: "applications",
    highlight: "Mobile + Geospatial",
    query: "StrideX",
  },
  {
    title: "WhatsApp Evolved",
    description:
      "Real-time dashboard with QR login, websocket sync, and secure split cloud/local deployment model.",
    tech: ["Node.js", "Socket.IO", "MongoDB", "JWT"],
    category: "applications",
    highlight: "Real-time System",
    query: "WhatsApp Evolved",
  },
  {
    title: "Compere",
    description:
      "Community film-screening platform with bookings, payment flows, and admin operations dashboard.",
    tech: ["Next.js", "React", "Convex", "Zod"],
    category: "applications",
    highlight: "Full-stack Product",
    query: "Compere",
  },
  {
    title: "SQL Sheet AI",
    description:
      "Browser-based spreadsheet with DuckDB WASM and natural language to SQL query generation.",
    tech: ["Next.js", "DuckDB WASM", "GenAI"],
    category: "ai-tools",
    highlight: "In-browser Analytics",
    query: "SQL Sheet AI",
  },
  {
    title: "Research Assistant",
    description:
      "Paper ingestion and retrieval engine combining graph databases and embedding stores for deep exploration.",
    tech: ["FastAPI", "Neo4j", "ChromaDB", "RAG"],
    category: "ai-tools",
    highlight: "Knowledge Graph + RAG",
    query: "Research Assistant",
  },
  {
    title: "MediPredict AI",
    description:
      "Clinical risk prediction suite with model-based explanations for heart, liver, and ECG diagnostics.",
    tech: ["FastAPI", "React", "XGBoost", "ResNet"],
    category: "ai-tools",
    highlight: "Medical Intelligence",
    query: "MediPredict AI",
  },
  {
    title: "Gauntlet Benchmark",
    description:
      "Robustness benchmark package for multi-agent policies under adversarial and temporal stress settings.",
    tech: ["Python", "MARL", "OpenSpiel", "PettingZoo"],
    category: "ai-tools",
    highlight: "PyPI Library",
    query: "Gauntlet Benchmark",
  },
  {
    title: "Audio Spectrogram Painter",
    description:
      "Creative audio tool to edit mel spectrograms visually and reconstruct transformed waveforms.",
    tech: ["FastAPI", "Next.js", "DSP", "Docker"],
    category: "creative",
    highlight: "Audio x Visual",
    query: "Audio Spectrogram Painter",
  },
  {
    title: "Space Shooter",
    description:
      "Gesture-controlled game experience with hand tracking, bosses, and keyboard fallback controls.",
    tech: ["Pygame", "MediaPipe", "OpenCV", "NumPy"],
    category: "creative",
    highlight: "Gesture Gaming",
    query: "Space Shooter",
  },
];

const categoryMeta = {
  research: { icon: Brain, tone: "from-[#2b57ef]/18 via-[#5f77ff]/15 to-transparent" },
  applications: { icon: Code2, tone: "from-[#149e6f]/18 via-[#48b58f]/12 to-transparent" },
  "ai-tools": { icon: Wrench, tone: "from-[#f05e2f]/17 via-[#f89a6f]/12 to-transparent" },
  creative: { icon: Palette, tone: "from-[#8f67f5]/16 via-[#d2b8ff]/12 to-transparent" },
};

const buildRepoUrl = (query: string) => {
  const q = encodeURIComponent(query);
  return `${githubProfile}?tab=repositories&q=${q}&type=&language=&sort=`;
};

export default function Projects() {
  const [active, setActive] = useState<Category>("all");

  const filtered = useMemo(
    () => (active === "all" ? projects : projects.filter((project) => project.category === active)),
    [active],
  );

  return (
    <section id="projects" className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="projects"
          title="Selected work across research, product, and creative builds"
          description="Every card links to GitHub so your code is one click away."
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

        <motion.div layout className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => {
              const meta = categoryMeta[project.category];
              const CategoryIcon = meta.icon;

              return (
                <motion.article
                  layout
                  key={project.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.25 }}
                  className="surface-card-strong flex h-full flex-col overflow-hidden"
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
                          <p className="mt-0.5 text-xs font-mono uppercase tracking-[0.15em] text-black/55">{project.highlight}</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed text-black/70">{project.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <span key={item} className="ghost-chip px-2.5 py-1 text-xs font-mono text-black/75">
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex gap-2">
                      <a
                        href={buildRepoUrl(project.query)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-outline inline-flex flex-1 items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium text-black/80"
                      >
                        <Github size={15} />
                        GitHub
                      </a>
                      <a
                        href="#contact"
                        className="button-outline inline-flex flex-1 items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium text-black/80"
                      >
                        Discuss
                        <ArrowUpRight size={15} />
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
