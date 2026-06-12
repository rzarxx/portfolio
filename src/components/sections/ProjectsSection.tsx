"use client";

import TiltedCard from "@/components/animations/TiltedCard";
import SpotlightCard from "@/components/animations/SpotlightCard";
import GlitchText from "@/components/animations/GlitchText";

const dummyProjects = [
  {
    id: 1,
    title: "Project Alpha",
    description: "A cyberpunk-themed web application.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Project Beta",
    description: "Interactive 3D data visualization dashboard.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Project Gamma",
    description: "Experimental UI with WebGL components.",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop",
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="mb-16 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 uppercase tracking-wider">
            Featured <span className="text-cyan-primary">Work</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-primary/50 mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyProjects.map((project) => (
            <SpotlightCard 
              key={project.id} 
              className="p-4 flex flex-col items-center justify-center group" 
              spotlightColor="rgba(0, 240, 255, 0.15)"
            >
              <div className="w-full h-[250px] mb-6 rounded-2xl overflow-hidden relative">
                <TiltedCard
                  imageSrc={project.image}
                  altText={project.title}
                  captionText={project.title}
                  containerHeight="100%"
                  containerWidth="100%"
                  imageHeight="100%"
                  imageWidth="100%"
                  rotateAmplitude={12}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                  overlayContent={
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300" />
                  }
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-dim-text text-center text-sm">{project.description}</p>
              
              <button className="mt-6 px-6 py-2 border border-white/10 hover:border-cyan-primary text-sm tracking-widest text-white/70 hover:text-cyan-primary uppercase rounded-full transition-all">
                View Details
              </button>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
