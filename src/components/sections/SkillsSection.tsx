"use client";

import Magnet from "@/components/animations/MagneticButton";

const skills = [
  "React.js", "Next.js", "TypeScript", "Tailwind CSS", 
  "Three.js", "GSAP", "Framer Motion", "Node.js", 
  "GraphQL", "PostgreSQL", "WebSockets", "WebGL"
];

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-24 bg-background relative border-t border-white/5">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />
      
      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-wider">
            Technical <span className="text-cyan-primary">Arsenal</span>
          </h2>
          <p className="text-dim-text max-w-2xl mx-auto">
            My toolset for building immersive digital experiences and high-performance web applications.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <Magnet key={index} padding={30} magnetStrength={2}>
              <div className="px-6 py-3 glass rounded-xl border border-white/10 text-white/80 font-mono text-sm hover:text-cyan-primary hover:border-cyan-primary/50 transition-colors cursor-default select-none shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                {skill}
              </div>
            </Magnet>
          ))}
        </div>
      </div>
    </section>
  );
}
