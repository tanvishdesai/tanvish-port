"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Mail, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="hero-gradient-orb hero-gradient-orb-1" />
      <div className="hero-gradient-orb hero-gradient-orb-2" />
      <div className="hero-gradient-orb hero-gradient-orb-3" />

      <div className="absolute inset-0 dot-pattern opacity-40" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-cyan-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to Research Opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="text-slate-100">Tanvish</span>{" "}
          <span className="gradient-text">Desai</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          AI/ML Researcher & Full-Stack Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="text-base md:text-lg text-slate-500 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Building efficient AI systems — from multimodal deepfake detection to
          edge-deployed foundation models. Published researcher with 4+ papers
          and 15+ projects.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="group px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-medium hover:opacity-90 transition-all hover:shadow-lg hover:shadow-cyan-500/25"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 rounded-full glass text-slate-300 font-medium hover:text-slate-100 hover:bg-white/10 transition-all"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex items-center justify-center gap-5"
        >
          <a
            href="https://github.com/TanvishDesai"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass text-slate-400 hover:text-cyan-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="mailto:tanvishdesai.05@gmail.com"
            className="p-3 rounded-full glass text-slate-400 hover:text-cyan-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="/Tanvish_Desai_CV.pdf"
            target="_blank"
            className="p-3 rounded-full glass text-slate-400 hover:text-cyan-400 transition-colors"
            aria-label="Resume"
          >
            <FileText size={20} />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors">
          <span className="text-xs font-mono tracking-wider">SCROLL</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
