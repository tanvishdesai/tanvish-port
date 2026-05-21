"use client";

import { Brain, Code2, Cpu, Palette } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

interface SkillGroup {
  title: string;
  icon: React.ReactNode;
  score: number;
  note: string;
  skills: string[];
}

const groups: SkillGroup[] = [
  {
    title: "Core Engineering",
    icon: <Code2 size={18} />,
    score: 92,
    note: "Shipping products quickly with clean architecture",
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "Docker", "Git", "Bash", "Vercel"],
  },
  {
    title: "ML and Deep Learning",
    icon: <Brain size={18} />,
    score: 95,
    note: "From model training to deployment optimization",
    skills: ["PyTorch", "TensorFlow", "HuggingFace", "Scikit-learn", "OpenCV", "ONNX", "Keras"],
  },
  {
    title: "Research Methods",
    icon: <Cpu size={18} />,
    score: 90,
    note: "Rigorous experiments and measurable claims",
    skills: [
      "Ablation Studies",
      "Model Compression",
      "Vision Transformers",
      "Federated Learning",
      "Explainable AI",
      "Benchmarking",
    ],
  },
  {
    title: "Creative Systems",
    icon: <Palette size={18} />,
    score: 87,
    note: "Interfaces and interaction ideas with technical depth",
    skills: ["Generative Tools", "Rapid Prototyping", "Game Mechanics", "Audio-Visual Systems", "Product Design"],
  },
];

const creativityLenses = [
  { label: "Idea Originality", value: "High" },
  { label: "Execution Quality", value: "High" },
  { label: "Research to Product", value: "Very High" },
  { label: "Iteration Speed", value: "High" },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="skills"
          title="Technical strength with a visible creative edge"
          description="A capability map designed to show how I think, build, and iterate."
          align="left"
        />

        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <AnimatedSection>
            <div className="surface-card-strong p-6 md:p-7">
              <p className="section-kicker">Skill Radar</p>
              <h3 className="mt-2 text-2xl font-semibold text-black">Capability matrix</h3>

              <div className="mt-6 space-y-4">
                {groups.map((group) => (
                  <div key={group.title} className="rounded-xl border border-black/12 bg-white/70 px-4 py-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2 text-black">
                        <span className="rounded-lg border border-black/15 bg-white p-2 text-black/75">{group.icon}</span>
                        <div>
                          <p className="text-sm font-semibold">{group.title}</p>
                          <p className="text-xs text-black/60">{group.note}</p>
                        </div>
                      </div>
                      <span className="text-sm font-mono text-black/70">{group.score}%</span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-black/10">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-[#2b57ef] via-[#5879fb] to-[#f05e2f]"
                        style={{ width: `${group.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="grid h-full gap-4">
              <div className="surface-card p-5 md:p-6">
                <p className="section-kicker">Creativity Profile</p>
                <h3 className="mt-2 text-xl font-semibold text-black">How creativity shows up in my work</h3>
                <div className="mt-4 grid gap-2">
                  {creativityLenses.map((lens) => (
                    <div key={lens.label} className="flex items-center justify-between rounded-lg border border-black/10 bg-white/70 px-3 py-2.5 text-sm">
                      <span className="text-black/75">{lens.label}</span>
                      <span className="font-semibold text-black">{lens.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {groups.map((group, index) => (
                <div key={group.title} className="surface-card px-4 py-4">
                  <p className="text-sm font-semibold text-black">{group.title}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`ghost-chip px-2.5 py-1 text-[11px] font-mono text-black/75 ${index % 2 === 0 ? "" : "bg-white/80"}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
