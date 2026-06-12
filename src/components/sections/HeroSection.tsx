"use client";

import BlurText from "@/components/animations/BlurText";
import Aurora from "@/components/animations/Aurora";
import Magnet from "@/components/animations/MagneticButton";
import GlitchText from "@/components/animations/GlitchText";
import { TerminalIntro } from "@/components/animations/TerminalIntro";
import { ScrollIndicator } from "@/components/shared/ScrollIndicator";

export function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center bg-background">
      {/* Background Aurora */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Aurora 
          colorStops={['#00f0ff', '#1a1a1a', '#00f0ff']}
          amplitude={1.2}
          blend={0.5}
        />
      </div>

      {/* Main Content */}
      <div className="z-10 text-center flex flex-col items-center justify-center max-w-4xl px-4">
        <TerminalIntro />
        
        <div className="mb-2">
          <BlurText 
            text="Reza Kusuma" 
            className="text-4xl md:text-6xl font-bold tracking-tight text-foreground"
            delay={50}
            animateBy="words"
            direction="top"
          />
        </div>

        <div className="mb-8 relative w-full h-24 md:h-32 flex items-center justify-center">
          <GlitchText speed={0.5} enableShadows={true} className="text-cyan-primary text-2xl md:text-4xl uppercase tracking-[0.2em]">
            Full-Stack Developer
          </GlitchText>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <Magnet padding={30} disabled={false} magnetStrength={2}>
            <a href="#projects" className="px-8 py-3 glass text-white font-bold tracking-wide rounded-full border border-cyan-primary/30 hover:border-cyan-primary hover:bg-cyan-primary/10 transition-colors hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]">
              Explore My Work
            </a>
          </Magnet>
          
          <Magnet padding={30} disabled={false} magnetStrength={2}>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white text-background font-bold tracking-wide rounded-full border border-white hover:bg-gray-200 transition-colors flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Download CV
            </a>
          </Magnet>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
