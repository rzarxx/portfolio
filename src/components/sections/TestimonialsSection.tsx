"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";

const testimonials = [
  {
    id: 1,
    name: "Alex Rahman",
    role: "CTO at TechNova",
    content: "Reza has an exceptional eye for detail and a deep understanding of modern web architectures. His work on our main platform was nothing short of brilliant.",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
  {
    id: 2,
    name: "Sarah Wijaya",
    role: "Product Manager",
    content: "Working with Reza was incredibly smooth. He communicates complex technical concepts clearly and always delivers high-quality code on time.",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
  {
    id: 3,
    name: "Budi Santoso",
    role: "Founder of StartupX",
    content: "The level of polish and the cinematic animations Reza brought to our landing page increased our conversion rate significantly. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        <ScrollReveal>
          <div className="mb-16 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 uppercase tracking-wider text-center">
              Client <span className="text-cyan-primary">Testimonials</span>
            </h2>
            <div className="w-24 h-1 bg-cyan-primary/50 mt-4 rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.id} baseOpacity={0} blurStrength={4} containerClassName="h-full">
              <div 
                className="h-full flex flex-col justify-between p-8 rounded-2xl glass border border-white/5 relative group hover:border-cyan-primary/30 transition-colors"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="mb-6 relative">
                  <div className="text-cyan-primary/20 absolute -top-4 -left-4 text-6xl font-serif">"</div>
                  <p className="text-dim-text text-lg leading-relaxed relative z-10 italic">
                    {t.content}
                  </p>
                </div>
                
                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-cyan-primary/30 group-hover:border-cyan-primary transition-colors">
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{t.name}</h4>
                    <p className="text-cyan-primary/70 text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
