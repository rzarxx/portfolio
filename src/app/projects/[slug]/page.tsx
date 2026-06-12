import { getProjectBySlug, projectsData } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Magnet from "@/components/animations/MagneticButton";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} | Reza Kusuma`,
    description: project.description,
  };
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  // Find prev/next projects
  const currentIndex = projectsData.findIndex(p => p.id === project.id);
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <article className="max-w-5xl mx-auto px-4 md:px-8">
        
        {/* Back Link */}
        <Link href="/#projects" className="inline-flex items-center text-dim-text hover:text-cyan-primary transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Hero Section */}
        <ScrollReveal baseOpacity={0} blurStrength={4}>
          <header className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6 tracking-tight">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </header>
        </ScrollReveal>

        {/* Large Thumbnail */}
        <ScrollReveal baseOpacity={0} blurStrength={4} containerClassName="mb-16">
          <div className="w-full aspect-video relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,212,255,0.1)]">
            <Image 
              src={project.image} 
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </ScrollReveal>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          
          {/* Left Column: Description */}
          <div className="md:col-span-2 space-y-12">
            <ScrollReveal baseOpacity={0}>
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">The Challenge</h2>
                <p className="text-dim-text text-lg leading-relaxed">{project.challenge}</p>
              </section>
            </ScrollReveal>

            <ScrollReveal baseOpacity={0}>
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">The Solution</h2>
                <p className="text-dim-text text-lg leading-relaxed">{project.solution}</p>
              </section>
            </ScrollReveal>
          </div>

          {/* Right Column: Sidebar Info */}
          <div className="md:col-span-1 space-y-8">
            <ScrollReveal baseOpacity={0}>
              <div className="glass p-6 rounded-2xl border border-white/5">
                <h3 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-cyan-primary/10 border border-cyan-primary/20 rounded-md text-cyan-primary font-mono text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal baseOpacity={0}>
              <div className="flex flex-col gap-4">
                {project.liveUrl && (
                  <Magnet padding={10} magnetStrength={2}>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-cyan-primary text-background font-bold py-4 px-6 rounded-xl hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all">
                      <ExternalLink className="w-5 h-5" />
                      Visit Live Site
                    </a>
                  </Magnet>
                )}
                {project.githubUrl && (
                  <Magnet padding={10} magnetStrength={2}>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-transparent border border-white/20 text-white font-bold py-4 px-6 rounded-xl hover:border-cyan-primary hover:text-cyan-primary transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                      View Source Code
                    </a>
                  </Magnet>
                )}
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* Project Navigation */}
        <nav className="border-t border-white/10 pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          {prevProject ? (
            <Link href={`/projects/${prevProject.slug}`} className="group flex flex-col items-start w-full sm:w-1/2">
              <span className="text-dim-text text-sm mb-2 flex items-center gap-2 group-hover:text-cyan-primary transition-colors">
                <ArrowLeft className="w-4 h-4" /> Previous Project
              </span>
              <span className="text-xl font-bold text-white group-hover:text-cyan-primary transition-colors">{prevProject.title}</span>
            </Link>
          ) : <div className="w-full sm:w-1/2" />}

          {nextProject ? (
            <Link href={`/projects/${nextProject.slug}`} className="group flex flex-col items-end w-full sm:w-1/2 text-right">
              <span className="text-dim-text text-sm mb-2 flex items-center gap-2 group-hover:text-cyan-primary transition-colors">
                Next Project <ArrowRight className="w-4 h-4" />
              </span>
              <span className="text-xl font-bold text-white group-hover:text-cyan-primary transition-colors">{nextProject.title}</span>
            </Link>
          ) : <div className="w-full sm:w-1/2" />}
        </nav>

      </article>
    </main>
  );
}
