"use client";

import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Skills from "@/components/Skills";

function Divider() {
  return (
    <div className="px-6">
      <div className="section-divider mx-auto max-w-7xl" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Research />
        <Divider />
        <Projects />
        <Divider />
        <Skills />
        <Divider />
        <Achievements />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
