import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import {
  Activity,
  MessageSquare,
  PhoneCall,
  Search,
} from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';

const PROJECTS = [
  {
    title: 'AI Voice Agent Backend',
    description:
      'Backend for an autonomous phone agent serving a real UK trade client—booking, rescheduling, and cancellation.',
    image: '/project_agent.jpg',
    tags: ['TypeScript', 'Express', 'Retell AI'],
    icon: PhoneCall,
  },
  {
    title: 'Municipal Monitoring Pipeline',
    description:
      'Automated discovery across 500+ public notice-board sites with LLM-based relevance detection.',
    image: '/hero_visual.jpg',
    tags: ['Python', 'Playwright', 'LLM'],
    icon: Activity,
  },
  {
    title: 'Support Reply Assistant',
    description:
      'LangGraph agent with async PostgreSQL memory and scheduled knowledge sync.',
    image: '/project_agent.jpg',
    tags: ['LangChain', 'RAG', 'FastAPI'],
    icon: MessageSquare,
  },
  {
    title: 'Podcast Search Engine',
    description:
      'Crawler, indexer, and query parser with Flask UI for episode-level retrieval.',
    image: '/project_search.jpg',
    tags: ['Flask', 'Whoosh', 'IR'],
    icon: Search,
  },
];

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const grid = gridRef.current;
    if (!section || !grid) return;

    const ctx = gsap.context(() => {
      const cards = grid.querySelectorAll('.project-card');
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 60%',
              scrub: true,
            },
            delay: i * 0.08,
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full min-h-screen bg-[#0A0A0F] py-24 z-40"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative px-6 lg:px-[8vw]">
        <div className="max-w-5xl mx-auto">
          <SectionHeader fileLabel="projects/">
            Selected <span className="text-cyan">work</span>.
          </SectionHeader>

          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project, i) => (
              <div
                key={i}
                className="project-card group relative bg-white/[0.02] rounded-lg border border-white/10 overflow-hidden hover:border-cyan/30 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/50 to-transparent" />
                  <project.icon className="absolute top-4 left-4 text-cyan" size={24} />
                </div>

                <div className="p-5">
                  <h3 className="font-mono text-lg font-semibold text-white mb-2 group-hover:text-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-2 py-1 text-xs bg-white/5 text-white/60 rounded font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
