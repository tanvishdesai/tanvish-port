"use client";

import { ExternalLink, BookOpen, FlaskConical } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

type PaperStatus = "published" | "accepted" | "in-preparation";

interface Paper {
  title: string;
  venue: string;
  status: PaperStatus;
  tech: string[];
  highlights: string[];
}

const papers: Paper[] = [
  {
    title: "Low-Resource Gujarati Image Captioning System",
    venue: "ICDSA 2025, Springer (Scopus-Indexed)",
    status: "published",
    tech: ["PyTorch", "ResNet-18", "GRU", "SentencePiece"],
    highlights: [
      "Built a Gujarati image captioning pipeline for low-resource settings using Flickr8k/30k",
      "Implemented subword tokenization and transfer learning for improved linguistic coverage",
      "Achieved BLEU-4 scores of 0.225 / 0.192",
    ],
  },
  {
    title: "PIN-Lite: Efficient and Explainable Multimodal Deepfake Detection",
    venue: "Manuscript in Preparation",
    status: "in-preparation",
    tech: ["PyTorch", "Multimodal Learning", "Model Compression", "XAI"],
    highlights: [
      "~8.5× parameter compression and ~2.2× inference latency reduction for edge deployment",
      "Proposed Explainability Preservation Score (EPS) aligning student–teacher saliency maps",
      "Integrated synchronization and calibration losses for robustness under noise and distribution shift",
    ],
  },
  {
    title: "Population-Regularized PPO (PRPO) for Multi-Agent RL",
    venue: "Research Project",
    status: "in-preparation",
    tech: ["PyTorch", "OpenSpiel", "Game Theory", "Optimization"],
    highlights: [
      "Added Nash-based population constraints to stabilize policies in zero-sum games",
      'Built "The Gauntlet" evaluation suite using Nash averaging across populations',
      "Achieved 2–3 orders of magnitude reduction in exploitability vs PSRO/DQN across 32 seeds",
    ],
  },
  {
    title: "DINO-Ranger: Efficient Transformer-Based Single-Image Super-Resolution",
    venue: "Research Project",
    status: "in-preparation",
    tech: ["Vision Transformers", "SwinIR", "DINO", "Self-Supervised Learning"],
    highlights: [
      "Hybrid Swin Transformer with DINO-based perceptual supervision and FFT frequency losses",
      "Physics-inspired ISP degradation pipeline simulating realistic noise and artifacts",
      "Outperformed baselines on Urban100 by +2.05 dB PSNR",
    ],
  },
  {
    title: "3 Papers at AICCoNS 2026",
    venue: "International Conf. on AI, Computation, Communication & Network Security",
    status: "accepted",
    tech: ["Deep Learning", "AI Security", "Neural Networks"],
    highlights: [
      "Three papers accepted at AICCoNS 2026, to be presented in April 2026",
    ],
  },
];

const statusConfig: Record<PaperStatus, { label: string; color: string }> = {
  published: { label: "Published", color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
  accepted: { label: "Accepted", color: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
  "in-preparation": { label: "In Preparation", color: "bg-violet-500/10 text-violet-400 border-violet-500/20" },
};

export default function Research() {
  return (
    <section id="research" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="// research"
          title="Publications & Research"
          description="Focused on making AI models smaller, faster, and more interpretable for real-world deployment."
        />

        <div className="space-y-6">
          {papers.map((paper, i) => (
            <AnimatedSection key={paper.title} delay={i * 0.08}>
              <div className="glass rounded-2xl p-6 md:p-8 gradient-border group hover:bg-slate-900/40 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                  <div className="flex-shrink-0 p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 w-fit">
                    {paper.status === "published" ? (
                      <BookOpen size={20} />
                    ) : (
                      <FlaskConical size={20} />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-lg md:text-xl font-semibold text-slate-100">
                        {paper.title}
                      </h3>
                      <span
                        className={`px-2.5 py-0.5 text-xs font-medium rounded-full border ${statusConfig[paper.status].color}`}
                      >
                        {statusConfig[paper.status].label}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 mb-4 flex items-center gap-1.5">
                      <ExternalLink size={13} />
                      {paper.venue}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {paper.highlights.map((h, idx) => (
                        <li key={idx} className="text-sm text-slate-300 flex gap-2">
                          <span className="text-cyan-500 mt-1 flex-shrink-0">&#8226;</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {paper.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-800/80 text-slate-400 border border-slate-700/40"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
