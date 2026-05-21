"use client";

import { ArrowUpRight, Github, Mail, Phone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const links = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "tanvishdesai.05@gmail.com",
    href: "mailto:tanvishdesai.05@gmail.com",
  },
  {
    icon: <Phone size={20} />,
    label: "Phone",
    value: "+91 9016505667",
    href: "tel:+919016505667",
  },
  {
    icon: <Github size={20} />,
    label: "GitHub",
    value: "github.com/TanvishDesai",
    href: "https://github.com/TanvishDesai",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <div className="surface-card-strong p-7 text-center md:p-10">
            <p className="section-kicker">contact</p>
            <h2 className="headline-gradient mt-3 text-3xl font-bold tracking-tight md:text-5xl text-balance">
              Let&apos;s build something ambitious
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-black/72 md:text-lg">
              I&apos;m available for research internships, product collaborations, and AI engineering opportunities where performance and creativity both matter.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a href="mailto:tanvishdesai.05@gmail.com" className="button-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold md:text-base">
                Start a Conversation
                <ArrowUpRight size={16} />
              </a>
              <a
                href="https://github.com/TanvishDesai"
                target="_blank"
                rel="noopener noreferrer"
                className="button-outline inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-black/85 md:text-base"
              >
                <Github size={16} />
                GitHub Profile
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="surface-card flex items-center gap-3 px-4 py-4 text-left hover:bg-white"
                >
                  <span className="rounded-lg border border-black/15 bg-white p-2 text-black/70">{link.icon}</span>
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-black/55">{link.label}</span>
                    <span className="text-sm font-medium text-black/80">{link.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
