"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";

const experiences = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "TechNova Solutions",
    period: "2024 - Present",
    description: "Leading the frontend team to build highly interactive web applications using Next.js and React Bits."
  },
  {
    id: 2,
    role: "Full-Stack Engineer",
    company: "Creative Digital Agency",
    period: "2022 - 2024",
    description: "Developed scalable APIs with Node.js and built responsive interfaces with React and Tailwind CSS."
  },
  {
    id: 3,
    role: "Web Developer Intern",
    company: "StartUp Inc.",
    period: "2021 - 2022",
    description: "Assisted in maintaining legacy codebases and migrating them to modern React architectures."
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-24 bg-background relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-wider">
            Career <span className="text-cyan-primary">Journey</span>
          </h2>
        </div>

        <div className="relative border-l-2 border-cyan-primary/20 pl-8 md:pl-12 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Timeline Node */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1 w-5 h-5 rounded-full bg-background border-4 border-cyan-primary shadow-[0_0_10px_rgba(0,212,255,0.5)]" />
              
              <ScrollReveal 
                baseOpacity={0} 
                baseRotation={0} 
                blurStrength={4}
                rotationEnd="bottom center"
                wordAnimationEnd="bottom center"
                containerClassName="mb-0"
              >
                <div className="glass p-6 md:p-8 rounded-2xl hover:border-cyan-primary/40 transition-colors group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-primary transition-colors">{exp.role}</h3>
                    <span className="text-cyan-primary/70 font-mono text-sm mt-1 md:mt-0">{exp.period}</span>
                  </div>
                  <h4 className="text-lg text-white/70 mb-4">{exp.company}</h4>
                  <p className="text-dim-text leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
