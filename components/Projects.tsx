"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Brain, Code2, Wrench, Palette } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

type Category = "all" | "research" | "applications" | "ai-tools" | "creative";

interface Project {
  title: string;
  description: string;
  tech: string[];
  category: Category;
  accent: string;
  icon: React.ReactNode;
  highlights?: string;
}

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
      "Multimodal deepfake detection with ~8.5× model compression and ~2.2× inference speedup via distillation-and-pruning for edge deployment. Includes explainability preservation scoring.",
    tech: ["PyTorch", "Multimodal", "XAI", "Distillation"],
    category: "research",
    accent: "from-cyan-500/20 to-blue-500/20",
    icon: <Brain size={20} />,
    highlights: "8.5× compression",
  },
  {
    title: "MMLLM-MedXAI",
    description:
      "Breast cancer histopathology analysis using centralized attention CNNs (EFSANet) and federated learning (FedAlert/FedProx) on PatchCamelyon and BreakHis datasets.",
    tech: ["PyTorch", "Federated Learning", "CNNs", "Medical AI"],
    category: "research",
    accent: "from-rose-500/20 to-pink-500/20",
    icon: <Brain size={20} />,
    highlights: "Federated Learning",
  },
  {
    title: "HGT-VD",
    description:
      "Hybrid Generative Transformer for video-level deepfake detection combining 3D CNNs, transformers, and generative components with face/identity pipeline.",
    tech: ["PyTorch", "3D CNN", "Transformers", "Video Analysis"],
    category: "research",
    accent: "from-amber-500/20 to-orange-500/20",
    icon: <Brain size={20} />,
    highlights: "Video Deepfakes",
  },
  {
    title: "DINO-Ranger",
    description:
      "Super-resolution model using hybrid Swin Transformer with DINO-based perceptual supervision. Outperformed baselines on Urban100 by +2.05 dB PSNR.",
    tech: ["Vision Transformers", "SwinIR", "DINO", "FFT"],
    category: "research",
    accent: "from-emerald-500/20 to-teal-500/20",
    icon: <Brain size={20} />,
    highlights: "+2.05 dB PSNR",
  },
  {
    title: "StrideX",
    description:
      "Gamified fitness app with territory claiming, neighborhood leaderboards, wellness tracking, and real-time geospatial features powered by Convex backend.",
    tech: ["React Native", "Expo", "Convex", "MapLibre", "Turf.js"],
    category: "applications",
    accent: "from-green-500/20 to-emerald-500/20",
    icon: <Code2 size={20} />,
    highlights: "Mobile App",
  },
  {
    title: "WhatsApp Evolved",
    description:
      "Real-time web dashboard for WhatsApp with QR login, WebSocket sync, JWT auth, and split local/cloud deployment model using tunneling.",
    tech: ["Node.js", "Socket.IO", "MongoDB", "Next.js", "JWT"],
    category: "applications",
    accent: "from-green-500/20 to-lime-500/20",
    icon: <Code2 size={20} />,
    highlights: "Real-time",
  },
  {
    title: "Compere",
    description:
      "Film screening community platform for Ahmedabad — movie listings, bookings, UPI payments, admin dashboard, and gallery with Convex backend.",
    tech: ["Next.js 15", "React 19", "Convex", "Shadcn UI", "Zod"],
    category: "applications",
    accent: "from-violet-500/20 to-purple-500/20",
    icon: <Code2 size={20} />,
    highlights: "Full-Stack",
  },
  {
    title: "SQL Sheet AI",
    description:
      "AI-assisted spreadsheet running DuckDB SQL queries in the browser via WASM, with Google GenAI for natural-language-to-SQL conversion over CSV data.",
    tech: ["Next.js", "DuckDB WASM", "Google GenAI", "Papa Parse"],
    category: "ai-tools",
    accent: "from-blue-500/20 to-indigo-500/20",
    icon: <Wrench size={20} />,
    highlights: "In-Browser SQL",
  },
  {
    title: "Research Assistant",
    description:
      "Academic paper pipeline ingesting ArXiv papers into Neo4j (graph) and ChromaDB (embeddings) for semantic retrieval and knowledge-graph navigation.",
    tech: ["FastAPI", "Neo4j", "ChromaDB", "Sentence-Transformers"],
    category: "ai-tools",
    accent: "from-sky-500/20 to-cyan-500/20",
    icon: <Wrench size={20} />,
    highlights: "Dual-Store RAG",
  },
  {
    title: "MediPredict AI",
    description:
      "Multi-module medical risk prediction (heart, liver, ECG) using XGBoost and ResNet models with Google Gemini-powered explanations.",
    tech: ["FastAPI", "React", "XGBoost", "ResNet", "Gemini"],
    category: "ai-tools",
    accent: "from-red-500/20 to-rose-500/20",
    icon: <Wrench size={20} />,
    highlights: "Medical AI",
  },
  {
    title: "Audio Spectrogram Painter",
    description:
      "Upload audio, visually edit its mel spectrogram in the browser, then reconstruct modified audio — full round-trip with phase-cache storage.",
    tech: ["FastAPI", "Next.js", "Docker", "Audio Processing"],
    category: "creative",
    accent: "from-fuchsia-500/20 to-pink-500/20",
    icon: <Palette size={20} />,
    highlights: "Audio × Visual",
  },
  {
    title: "Gauntlet Benchmark",
    description:
      "Multi-agent RL robustness benchmark library (PyPI) with adversarial, environmental, and temporal evaluation suites for policy robustness testing.",
    tech: ["Python", "MARL", "OpenSpiel", "PettingZoo"],
    category: "ai-tools",
    accent: "from-orange-500/20 to-amber-500/20",
    icon: <Wrench size={20} />,
    highlights: "PyPI Package",
  },
  {
    title: "Space Shooter",
    description:
      "Hand-gesture controlled space shooter using MediaPipe hand tracking — dual control modes (gesture + keyboard), bosses, and power-ups.",
    tech: ["Pygame", "MediaPipe", "OpenCV", "NumPy"],
    category: "creative",
    accent: "from-indigo-500/20 to-violet-500/20",
    icon: <Palette size={20} />,
    highlights: "Gesture Control",
  },
];

export default function Projects() {
  const [active, setActive] = useState<Category>("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="// projects"
          title="Selected Work"
          description="A mix of research prototypes, full-stack applications, and creative experiments."
        />

        <AnimatedSection>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${
                  active === cat.id
                    ? "bg-gradient-to-r from-cyan-500 to-violet-500 text-white"
                    : "glass text-slate-400 hover:text-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <div className="glass rounded-2xl overflow-hidden group hover:bg-slate-900/40 transition-all gradient-border h-full flex flex-col">
                  <div
                    className={`h-2 bg-gradient-to-r ${project.accent}`}
                  />
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-slate-800/80 text-cyan-400">
                          {project.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-100 text-lg">
                            {project.title}
                          </h3>
                          {project.highlights && (
                            <span className="text-xs font-mono text-cyan-400">
                              {project.highlights}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-800/60 text-slate-500 border border-slate-700/30"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
