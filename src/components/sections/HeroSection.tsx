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

        <Magnet padding={50} disabled={false} magnetStrength={3}>
          <button className="px-8 py-3 mt-4 glass text-white font-medium tracking-wide rounded-full border border-cyan-primary/30 hover:border-cyan-primary transition-colors hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]">
            Explore My Work
          </button>
        </Magnet>
      </div>

      <ScrollIndicator />
    </section>
  );
}
