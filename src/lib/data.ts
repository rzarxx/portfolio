export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  challenge: string;
  solution: string;
  liveUrl?: string;
  githubUrl?: string;
};

export const projectsData: Project[] = [
  {
    id: "1",
    slug: "project-alpha",
    title: "Project Alpha",
    description: "A cyberpunk-themed web application utilizing advanced WebGL techniques for immersive experiences.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    techStack: ["Next.js", "React Three Fiber", "Tailwind CSS", "Framer Motion"],
    challenge: "The main challenge was optimizing 3D rendering performance on lower-end devices while maintaining the high-fidelity cyberpunk aesthetic.",
    solution: "Implemented level-of-detail (LOD) strategies and dynamic texture scaling based on the user's hardware capabilities, alongside efficient React state management to minimize unnecessary re-renders.",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "2",
    slug: "project-beta",
    title: "Project Beta",
    description: "Interactive 3D data visualization dashboard for complex datasets.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    techStack: ["React", "D3.js", "WebGL", "TypeScript"],
    challenge: "Parsing and visualizing gigabytes of real-time data without blocking the main browser thread.",
    solution: "Utilized Web Workers for data processing and OffscreenCanvas for parallel rendering, resulting in a smooth 60fps experience even during heavy data loads.",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "3",
    slug: "project-gamma",
    title: "Project Gamma",
    description: "Experimental UI with WebGL components and interactive storytelling.",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop",
    techStack: ["Three.js", "GSAP", "Next.js", "SCSS"],
    challenge: "Creating a seamless narrative flow that integrates DOM elements with 3D canvas objects cohesively.",
    solution: "Developed a custom synchronization layer between GSAP scroll triggers and the WebGL camera, allowing for pixel-perfect alignment between HTML text and 3D geometries.",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((project) => project.slug === slug);
}
