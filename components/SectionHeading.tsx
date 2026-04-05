"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="mb-16 text-center"
    >
      <span className="inline-block font-mono text-sm tracking-wider text-cyan-400 mb-3">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
