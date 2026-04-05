"use client";

import { Code2, Brain, Cpu, FlaskConical } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

interface SkillGroup {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "Languages & Tools",
    icon: <Code2 size={20} />,
    skills: [
      "Python",
      "JavaScript",
      "SQL",
      "Bash",
      "Git",
      "Docker",
      "Jupyter",
      "Streamlit",
      "Vercel",
      "Kaggle",
    ],
  },
  {
    title: "ML / DL Frameworks",
    icon: <Brain size={20} />,
    skills: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "HuggingFace",
      "Scikit-learn",
      "OpenCV",
      "OpenSpiel",
      "SentencePiece",
      "ONNX",
    ],
  },
  {
    title: "Core Techniques",
    icon: <Cpu size={20} />,
    skills: [
      "Vision Transformers",
      "CNNs / BiLSTM",
      "DINO / Self-Supervised",
      "Knowledge Distillation",
      "Structured Pruning",
      "Multimodal Learning",
      "Explainable AI",
      "Federated Learning",
      "RAG Pipelines",
      "Semantic Segmentation",
      "Frequency-Domain Modeling",
      "Siamese Networks",
    ],
  },
  {
    title: "Research Skills",
    icon: <FlaskConical size={20} />,
    skills: [
      "Experimental Design",
      "Ablation Studies",
      "Optimization",
      "Reproducibility",
      "Technical Writing",
      "Benchmarking",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="// skills"
          title="Technical Arsenal"
          description="Tools, frameworks, and techniques I use to build and research."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <AnimatedSection key={group.title} delay={i * 0.1}>
              <div className="glass rounded-2xl p-6 md:p-8 h-full gradient-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                    {group.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-200">
                    {group.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-lg bg-slate-800/60 text-slate-300 border border-slate-700/40 hover:border-cyan-500/30 hover:text-cyan-300 hover:bg-cyan-500/5 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
