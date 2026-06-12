"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import ScrollVelocity from "@/components/animations/ScrollVelocity";

export function AboutSection() {
  return (
    <section id="about" className="relative w-full py-24 bg-background flex flex-col items-center justify-center border-t border-white/5">
      <div className="max-w-4xl px-4 md:px-8 mb-24 text-center">
        <ScrollReveal
          enableBlur={true}
          baseOpacity={0}
          baseRotation={5}
          blurStrength={10}
          containerClassName="mb-12"
          textClassName="text-dim-text"
        >
          I am a creative developer specializing in building immersive digital experiences. 
          With a strong foundation in frontend technologies and a passion for cyberpunk aesthetics, 
          I blend code and design to push the boundaries of what is possible on the web.
        </ScrollReveal>
      </div>

      {/* Tech Stack Marquee */}
      <div className="w-full relative py-12 bg-black/50 border-y border-white/5 overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />
        
        <ScrollVelocity 
          texts={['React • Next.js • TypeScript • Tailwind CSS • WebGL • Framer Motion • Node.js • GSAP']} 
          velocity={50}
          className="text-cyan-primary/50 uppercase"
        />
        <ScrollVelocity 
          texts={['UI/UX Design • Cyberpunk UI • Interactive Web • 3D Experiences • Performance Optimization']} 
          velocity={50}
          className="text-white/30 uppercase mt-4"
        />
      </div>
    </section>
  );
}
