"use client";

import { Trophy, Users, Zap, BookOpen } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const achievements = [
  {
    icon: <BookOpen size={20} />,
    title: "Published Researcher",
    description:
      "Paper published at ICDSA 2025 (Springer, Scopus-Indexed). 3 papers accepted at AICCoNS 2026. Additional manuscripts in preparation.",
    accent: "text-emerald-400 bg-emerald-500/10",
  },
  {
    icon: <Zap size={20} />,
    title: "IdeaOne 2025 — Zonal Finals",
    description:
      "Built complete AI/ML modules for the IdeaOne Hackathon (ICMR, Pune), reaching the Zonal Finals with an end-to-end solution.",
    accent: "text-amber-400 bg-amber-500/10",
  },
  {
    icon: <Trophy size={20} />,
    title: "4th Runner-Up — Impactthon, KSV",
    description:
      "Competed and placed at the Impactthon hackathon at KSV, demonstrating rapid prototyping and problem-solving.",
    accent: "text-cyan-400 bg-cyan-500/10",
  },
  {
    icon: <Users size={20} />,
    title: "10+ National Hackathons",
    description:
      "Led and contributed to teams in SIH, SSIP, Tic-Tech-Toe, UYIR, Mindbend, Intel AI, and ISRO-affiliated events.",
    accent: "text-violet-400 bg-violet-500/10",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="// achievements"
          title="Highlights"
          description="Awards, publications, and experiences that shaped my journey."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <div className="glass rounded-2xl p-6 md:p-8 h-full gradient-border group">
                <div
                  className={`p-3 rounded-xl ${item.accent} w-fit mb-4`}
                >
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
