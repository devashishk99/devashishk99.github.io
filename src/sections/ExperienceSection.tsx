import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { SectionHeader } from '@/components/SectionHeader';

const EXPERIENCES = [
  {
    company: 'Fraunhofer Italia',
    role: 'Applied Engineer',
    period: 'Oct 2024 – Present',
    description:
      'Driving AI and automation from idea to production—shipping scalable services with a focus on reliability and low latency. Work closely with stakeholders to turn ambiguous needs into delivered solutions that reduce manual work and improve decision speed.',
    tags: ['LangChain', 'RAG', 'FastAPI'],
  },
  {
    company: 'Fidelity Investments',
    role: 'Software Engineer',
    period: 'Aug 2020 – Jul 2022',
    description:
      'Modernized legacy systems and improved maintainability through planned migrations and rollback strategies. Owned production reliability via on-call, root-cause analysis, and cross-team coordination; improved internal user efficiency through workflow redesign and automation.',
    tags: ['Java', 'Angular', 'DevOps'],
  },
];

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;
    if (!section || !cards) return;

    const ctx = gsap.context(() => {
      const cardElements = cards.querySelectorAll('.exp-card');
      cardElements.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 60%',
              scrub: true,
            },
            delay: i * 0.1,
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative w-full min-h-screen bg-[#0A0A0F] py-24 z-30"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative px-6 lg:px-[8vw]">
        <div className="max-w-4xl mx-auto">
          <SectionHeader fileLabel="experience.json">
            Where I've <span className="text-magenta">shipped</span>.
          </SectionHeader>

          <div ref={cardsRef} className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/50 via-cyan/20 to-transparent" />

            <div className="space-y-12">
              {EXPERIENCES.map((exp, i) => (
                <div
                  key={i}
                  className={`exp-card relative flex flex-col md:flex-row ${
                    i % 2 === 0 ? 'md:flex-row-reverse' : ''
                  } items-start gap-8`}
                >
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan glow-cyan" />

                  <div
                    className={`ml-8 md:ml-0 md:w-[45%] ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}
                  >
                    <div className="p-6 bg-white/[0.03] rounded-lg border border-white/10 hover:border-cyan/30 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-mono text-lg font-semibold text-white">
                          {exp.company}
                        </h3>
                        <span className="text-xs text-white/40 font-mono">{exp.period}</span>
                      </div>
                      <p className="text-cyan text-sm mb-3 font-mono">{exp.role}</p>
                      <p className="text-white/60 text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, j) => (
                          <span
                            key={j}
                            className="px-2 py-1 text-xs bg-cyan/10 text-cyan rounded font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
