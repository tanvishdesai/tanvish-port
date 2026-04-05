"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#research", label: "Research" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full ${
          scrolled ? "glass-strong shadow-lg shadow-black/20" : "bg-transparent"
        }`}
      >
        <div className="flex items-center gap-1 px-2 py-2">
          <a
            href="#hero"
            className="px-4 py-2 font-bold text-sm tracking-wide gradient-text"
          >
            TD
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-slate-400 hover:text-slate-100 transition-colors rounded-full hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex ml-2 px-5 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-40 glass-strong rounded-2xl p-6 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-slate-300 hover:text-slate-100 hover:bg-white/5 rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-5 py-3 text-center font-medium rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-white"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
