"use client";

import { BookOpen, Trophy, Users, Zap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const achievements = [
  {
    icon: <BookOpen size={18} />,
    title: "Published Research",
    description:
      "Paper published at ICDSA 2025 (Springer, Scopus Indexed) and three papers accepted at AICCoNS 2026.",
    tone: "text-[#149e6f] bg-[#149e6f]/12 border-[#149e6f]/25",
  },
  {
    icon: <Zap size={18} />,
    title: "IdeaOne 2025 Zonal Finalist",
    description:
      "Built complete AI/ML modules for the ICMR Pune challenge and reached zonal finals with an end-to-end solution.",
    tone: "text-[#f05e2f] bg-[#f05e2f]/12 border-[#f05e2f]/25",
  },
  {
    icon: <Trophy size={18} />,
    title: "Impactthon, KSV",
    description:
      "Placed as 4th runner-up, demonstrating rapid product thinking and execution under tight hackathon constraints.",
    tone: "text-[#2b57ef] bg-[#2b57ef]/12 border-[#2b57ef]/25",
  },
  {
    icon: <Users size={18} />,
    title: "10+ National Hackathons",
    description:
      "Participated in SIH, SSIP, UYIR, Mindbend, Intel AI and ISRO-affiliated events with cross-functional teams.",
    tone: "text-[#6a46d4] bg-[#6a46d4]/12 border-[#6a46d4]/25",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="highlights"
          title="Milestones that shaped my craft"
          description="Competitive wins, publications, and high-pressure builds that sharpened execution."
          align="left"
        />

        <div className="grid gap-4 md:grid-cols-2">
          {achievements.map((achievement, index) => (
            <AnimatedSection key={achievement.title} delay={index * 0.08}>
              <article className="surface-card-strong h-full p-6">
                <span className={`inline-flex rounded-xl border p-2.5 ${achievement.tone}`}>
                  {achievement.icon}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-black">{achievement.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-black/70">{achievement.description}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
