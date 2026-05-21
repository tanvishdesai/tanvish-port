"use client";

import { BookOpen, FlaskConical } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

type PaperStatus = "published" | "accepted" | "in-progress";

interface Paper {
  title: string;
  venue: string;
  status: PaperStatus;
  notes: string[];
  stack: string[];
}

const papers: Paper[] = [
  {
    title: "Low-Resource Gujarati Image Captioning System",
    venue: "ICDSA 2025, Springer (Scopus Indexed)",
    status: "published",
    notes: [
      "Designed a low-resource Gujarati captioning pipeline with transfer learning.",
      "Used subword tokenization to improve linguistic coverage.",
      "Reached BLEU-4 scores of 0.225 / 0.192.",
    ],
    stack: ["PyTorch", "ResNet-18", "GRU", "SentencePiece"],
  },
  {
    title: "PIN-Lite: Efficient and Explainable Multimodal Deepfake Detection",
    venue: "Manuscript in Preparation",
    status: "in-progress",
    notes: [
      "Achieved about 8.5x parameter compression and 2.2x lower latency.",
      "Introduced Explainability Preservation Score (EPS) for student-teacher alignment.",
      "Strengthened robustness under noisy and shifted distributions.",
    ],
    stack: ["PyTorch", "Multimodal", "Compression", "XAI"],
  },
  {
    title: "Population-Regularized PPO for Multi-Agent RL",
    venue: "Research Project",
    status: "in-progress",
    notes: [
      "Added population constraints to stabilize zero-sum policies.",
      "Built The Gauntlet robustness suite with Nash averaging.",
      "Observed 2-3 orders lower exploitability against baselines.",
    ],
    stack: ["OpenSpiel", "PyTorch", "Game Theory", "Optimization"],
  },
  {
    title: "3 Papers at AICCoNS 2026",
    venue: "International Conference on AI, Computation, Communication and Network Security",
    status: "accepted",
    notes: ["Three papers accepted for presentation in April 2026."],
    stack: ["Deep Learning", "AI Security", "Applied Research"],
  },
];

const statusStyles: Record<PaperStatus, string> = {
  published: "bg-[#149e6f]/12 text-[#0e7753] border-[#149e6f]/30",
  accepted: "bg-[#f05e2f]/12 text-[#b34723] border-[#f05e2f]/30",
  "in-progress": "bg-[#2b57ef]/12 text-[#1f43bb] border-[#2b57ef]/30",
};

const statusLabels: Record<PaperStatus, string> = {
  published: "Published",
  accepted: "Accepted",
  "in-progress": "In Progress",
};

export default function Research() {
  return (
    <section id="research" className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="research"
          title="Publications and active research"
          description="A focused track record in efficient AI, explainability, and robust learning systems."
          align="left"
        />

        <div className="space-y-5">
          {papers.map((paper, index) => (
            <AnimatedSection key={paper.title} delay={index * 0.08}>
              <article className="surface-card-strong p-6 md:p-7">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex gap-3">
                    <div className="mt-1 rounded-xl border border-black/10 bg-white p-2.5 text-black/70">
                      {paper.status === "published" ? <BookOpen size={18} /> : <FlaskConical size={18} />}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold leading-snug text-black md:text-xl">{paper.title}</h3>
                      <p className="mt-1 text-sm text-black/65">{paper.venue}</p>
                    </div>
                  </div>

                  <span className={`w-fit rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${statusStyles[paper.status]}`}>
                    {statusLabels[paper.status]}
                  </span>
                </div>

                <ul className="mt-4 space-y-2">
                  {paper.notes.map((note) => (
                    <li key={note} className="flex gap-2 text-sm leading-relaxed text-black/75">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-black/55" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {paper.stack.map((item) => (
                    <span key={item} className="ghost-chip px-2.5 py-1 text-xs font-mono text-black/75">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
