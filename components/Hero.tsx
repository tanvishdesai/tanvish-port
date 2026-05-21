"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  FileText,
  Github,
  Mail,
  Sparkles,
} from "lucide-react";

const creativeSignals = [
  { label: "Research Depth", value: 96 },
  { label: "Creative Prototyping", value: 91 },
  { label: "Product Execution", value: 89 },
  { label: "Visual Thinking", value: 84 },
];

const quickStats = [
  { value: "15+", label: "Projects" },
  { value: "4+", label: "Research Papers" },
  { value: "10+", label: "Hackathons" },
];

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden px-6 pb-20 pt-36 md:pt-40">
      <div className="float-ring h-52 w-52 left-[6%] top-16" />
      <div className="float-ring h-72 w-72 right-[-7%] top-24" />
      <div className="float-ring h-44 w-44 right-[34%] bottom-12" />

      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="ghost-chip inline-flex items-center gap-2 px-4 py-1.5 section-kicker"
          >
            <Sparkles size={14} />
            Open to research and product collaborations
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
            className="mt-6 text-balance text-4xl font-bold leading-[1.07] tracking-tight text-black sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Building <span className="headline-gradient">efficient AI systems</span> with research rigor and creative product craft.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-black/70 md:text-lg"
          >
            I&apos;m Tanvish Desai, an AI/ML researcher and full-stack developer focused on model compression, multimodal intelligence, and bold interfaces that make advanced systems feel usable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#projects" className="button-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold md:text-base">
              Explore Projects
              <ArrowUpRight size={17} />
            </a>
            <a
              href="https://github.com/TanvishDesai"
              target="_blank"
              rel="noopener noreferrer"
              className="button-outline inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-black/80 md:text-base"
            >
              <Github size={17} />
              GitHub Profile
            </a>
            <a href="#contact" className="button-outline inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-black/80 md:text-base">
              <Mail size={16} />
              Let&apos;s Connect
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.7 }}
            className="mt-10 grid max-w-xl grid-cols-3 gap-3"
          >
            {quickStats.map((item) => (
              <div key={item.label} className="surface-card px-4 py-4">
                <p className="text-2xl font-semibold text-black">{item.value}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-black/55">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.35 }}
          className="surface-card-strong p-6 md:p-7"
        >
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="section-kicker">Creative Signal</p>
              <h2 className="mt-1 text-xl font-semibold text-black">How I build</h2>
            </div>
            <span className="ghost-chip px-3 py-1 text-xs font-mono text-black/75">2026</span>
          </div>

          <div className="space-y-4">
            {creativeSignals.map((signal) => (
              <div key={signal.label}>
                <div className="mb-1.5 flex items-center justify-between text-sm text-black/70">
                  <span>{signal.label}</span>
                  <span className="font-mono">{signal.value}%</span>
                </div>
                <div className="h-2 rounded-full bg-black/10">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-[#2b57ef] via-[#5668d9] to-[#f05e2f]"
                    style={{ width: `${signal.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="section-divider my-6" />

          <div className="grid grid-cols-2 gap-3">
            <a
              href="/Tanvish_Desai_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="surface-card flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-black/75 hover:text-black"
            >
              <FileText size={16} />
              Resume
            </a>
            <a
              href="mailto:tanvishdesai.05@gmail.com"
              className="surface-card flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-black/75 hover:text-black"
            >
              <Mail size={16} />
              Email
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-16 flex justify-center"
      >
        <a href="#about" className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-black/55 hover:text-black/80">
          Scroll
          <ArrowDown size={14} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
