"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github, Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#research", label: "Research" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Highlights" },
  { href: "#contact", label: "Contact" },
];

const githubProfile = "https://github.com/TanvishDesai";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -42, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, delay: 0.15 }}
        className="fixed top-3 left-0 right-0 z-50"
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 md:px-6 transition-all duration-300 ${
            scrolled
              ? "surface-card-strong"
              : "rounded-2xl border border-black/10 bg-white/70 backdrop-blur"
          }`}
        >
          <a
            href="#hero"
            className="font-mono text-xs md:text-sm tracking-[0.15em] text-black/70 uppercase"
          >
            TANVISH.DESAI
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm text-black/65 hover:bg-white hover:text-black transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href={githubProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="button-outline inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-black/80"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href="#contact"
              className="button-primary inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold"
            >
              Collaborate
              <ArrowUpRight size={16} />
            </a>
          </div>

          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden rounded-full border border-black/20 bg-white/85 p-2 text-black"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-[78px] z-40 surface-card-strong p-5 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-black/70 hover:bg-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-4 flex gap-2">
              <a
                href={githubProfile}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="button-outline flex-1 text-center px-4 py-2.5 text-sm font-medium text-black/80"
              >
                GitHub Profile
              </a>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="button-primary flex-1 text-center px-4 py-2.5 text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
