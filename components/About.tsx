"use client";

import { GraduationCap, MapPin, Calendar, Sparkles } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const stats = [
  { value: "4+", label: "Research Papers" },
  { value: "15+", label: "Projects Built" },
  { value: "10+", label: "Hackathons" },
  { value: "8.46", label: "CGPA / 10" },
];

const interests = [
  "Foundation Models",
  "Multimodal Learning",
  "Model Compression",
  "Explainable AI",
  "Edge AI Systems",
  "Deepfake Detection",
  "Signal-Processing DL",
  "Hardware-Aware Optimization",
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="// about me"
          title="Building Efficient AI"
          description="Driven by a passion for making AI systems that are compact, explainable, and deployable at the edge."
        />

        <div className="grid md:grid-cols-5 gap-8 mb-16">
          <AnimatedSection className="md:col-span-3">
            <div className="glass rounded-2xl p-8 h-full">
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                I&apos;m Tanvish Desai, a B.E. Information Technology student at
                LDRP-ITR, KSV University, focused on making AI models{" "}
                <span className="text-cyan-400">smaller, faster, and more transparent</span>{" "}
                without sacrificing accuracy. My research spans multimodal deepfake
                detection, super-resolution, reinforcement learning, and federated
                medical imaging.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Beyond research, I build full-stack applications — from real-time
                dashboards to gamified fitness platforms — and have competed in{" "}
                <span className="text-cyan-400">10+ national hackathons</span>{" "}
                including SIH, SSIP, and IdeaOne (Zonal Finals).
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <GraduationCap size={16} className="text-cyan-400" />
                  <span>B.E. Information Technology</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <MapPin size={16} className="text-cyan-400" />
                  <span>LDRP-ITR, KSV University</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Calendar size={16} className="text-cyan-400" />
                  <span>2023 — 2027</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="md:col-span-2" delay={0.15}>
            <div className="glass rounded-2xl p-8 h-full">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles size={18} className="text-violet-400" />
                <h3 className="text-lg font-semibold text-slate-200">
                  Research Interests
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 text-sm rounded-full bg-slate-800/80 text-slate-300 border border-slate-700/50 hover:border-cyan-500/30 hover:text-cyan-300 transition-colors cursor-default"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <div className="glass rounded-2xl p-6 text-center group hover:border-cyan-500/20 transition-colors">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
