"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold font-sans tracking-tighter text-white hover:text-cyan-primary transition-colors">
          Rz<span className="text-cyan-primary">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-sm font-medium text-dim-text hover:text-white transition-colors">About</Link>
          <Link href="#projects" className="text-sm font-medium text-dim-text hover:text-white transition-colors">Projects</Link>
          <Link href="#experience" className="text-sm font-medium text-dim-text hover:text-white transition-colors">Experience</Link>
          <Link href="#skills" className="text-sm font-medium text-dim-text hover:text-white transition-colors">Skills</Link>
        </nav>

        <Link href="#contact" className="hidden md:flex px-5 py-2 glass rounded-full text-sm font-medium text-white hover:border-cyan-primary transition-all">
          Contact Me
        </Link>

        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>
    </motion.header>
  );
}
