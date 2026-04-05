"use client";

import { Mail, Phone, Github, ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const links = [
  {
    icon: <Mail size={22} />,
    label: "Email",
    value: "tanvishdesai.05@gmail.com",
    href: "mailto:tanvishdesai.05@gmail.com",
  },
  {
    icon: <Phone size={22} />,
    label: "Phone",
    value: "+91 9016505667",
    href: "tel:+919016505667",
  },
  {
    icon: <Github size={22} />,
    label: "GitHub",
    value: "TanvishDesai",
    href: "https://github.com/TanvishDesai",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <span className="inline-block font-mono text-sm tracking-wider text-cyan-400 mb-3">
            // contact
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-100 mb-6">
            Let&apos;s{" "}
            <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            I&apos;m open to research internships, collaborations, and
            opportunities in efficient AI systems and multimodal learning.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <a
            href="mailto:tanvishdesai.05@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-medium text-lg hover:opacity-90 transition-all hover:shadow-lg hover:shadow-cyan-500/25 mb-12"
          >
            Say Hello
            <ArrowUpRight size={20} />
          </a>
        </AnimatedSection>

        <AnimatedSection delay={0.25}>
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === "GitHub" ? "_blank" : undefined}
                rel={link.label === "GitHub" ? "noopener noreferrer" : undefined}
                className="glass rounded-2xl p-5 flex flex-col items-center gap-3 group hover:bg-slate-900/40 transition-all gradient-border"
              >
                <div className="text-slate-400 group-hover:text-cyan-400 transition-colors">
                  {link.icon}
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-0.5">
                    {link.label}
                  </div>
                  <div className="text-sm text-slate-300 font-medium">
                    {link.value}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
