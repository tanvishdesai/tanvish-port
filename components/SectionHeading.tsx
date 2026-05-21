"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "left" ? "text-left" : "text-center";
  const bodyAlign = align === "left" ? "mr-auto" : "mx-auto";

  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-14 md:mb-16 ${alignment}`}
    >
      <span className="section-kicker inline-flex items-center gap-2 mb-3">
        <span className="h-px w-6 bg-black/30" />
        {label}
      </span>
      <h2 className="headline-gradient text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance">
        {title}
      </h2>
      {description && (
        <p className={`max-w-2xl text-base md:text-lg text-black/70 leading-relaxed text-balance ${bodyAlign}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
