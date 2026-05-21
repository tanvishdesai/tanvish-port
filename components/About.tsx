"use client";

import { Calendar, GraduationCap, MapPin, Sparkles } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const stats = [
  { value: "8.46", label: "CGPA" },
  { value: "2023-2027", label: "B.E. IT" },
  { value: "4+", label: "Papers" },
  { value: "15+", label: "Projects" },
];

const pillars = [
  {
    title: "Research Thinking",
    body: "I focus on reproducible experiments, clear ablations, and practical deployment constraints from day one.",
  },
  {
    title: "Creative Engineering",
    body: "I prototype quickly, test interaction ideas early, and shape products that feel alive instead of generic.",
  },
  {
    title: "Systems Mindset",
    body: "From model compression to frontend delivery, I care about latency, maintainability, and user experience equally.",
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="about"
          title="A researcher who ships"
          description="I build AI work that is measurable in papers and meaningful in products."
          align="left"
        />

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <AnimatedSection>
            <div className="surface-card-strong p-7 md:p-8">
              <p className="text-base leading-relaxed text-black/75 md:text-lg">
                I&apos;m Tanvish Desai, an Information Technology student at LDRP-ITR, KSV University. My work centers on making models <strong className="text-black">smaller, faster, and more interpretable</strong> without sacrificing quality.
              </p>
              <p className="mt-4 text-base leading-relaxed text-black/75 md:text-lg">
                I have worked across multimodal deepfake detection, federated medical imaging, super-resolution, and reinforcement learning benchmarks while also shipping real full-stack products for communities and startups.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="surface-card px-4 py-4">
                  <div className="flex items-center gap-2 text-sm text-black/70">
                    <GraduationCap size={15} />
                    Degree
                  </div>
                  <p className="mt-1 text-sm font-semibold text-black">B.E. Information Technology</p>
                </div>
                <div className="surface-card px-4 py-4">
                  <div className="flex items-center gap-2 text-sm text-black/70">
                    <MapPin size={15} />
                    Institute
                  </div>
                  <p className="mt-1 text-sm font-semibold text-black">LDRP-ITR, KSV University</p>
                </div>
                <div className="surface-card px-4 py-4">
                  <div className="flex items-center gap-2 text-sm text-black/70">
                    <Calendar size={15} />
                    Timeline
                  </div>
                  <p className="mt-1 text-sm font-semibold text-black">2023 - 2027</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="surface-card p-6 md:p-7 h-full">
              <div className="mb-5 flex items-center gap-2">
                <Sparkles size={16} className="text-[#2b57ef]" />
                <h3 className="text-lg font-semibold text-black">Creative DNA</h3>
              </div>

              <div className="space-y-3">
                {pillars.map((pillar) => (
                  <div key={pillar.title} className="rounded-xl border border-black/10 bg-white/65 px-4 py-3">
                    <p className="text-sm font-semibold text-black">{pillar.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-black/70">{pillar.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 0.08}>
              <div className="surface-card px-5 py-5 text-center">
                <p className="text-2xl font-semibold text-black md:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-black/55">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
