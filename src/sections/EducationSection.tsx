import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { SectionHeader } from '@/components/SectionHeader';

const EDUCATION = [
  {
    degree: 'M.Sc. Cognitive Science (Double Degree)',
    school: 'Osnabrück University & University of Trento',
    location: 'Germany & Italy',
    period: 'Oct 2024',
  },
  {
    degree: 'B.Tech. Computer Science',
    school: 'Visvesvaraya National Institute of Technology',
    location: 'India',
    period: 'Dec 2020',
  },
];

export function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    const ctx = gsap.context(() => {
      const items = content.querySelectorAll('.edu-card');
      items.forEach((item, i) => {
        gsap.fromTo(
          item,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: item,
              start: 'top 88%',
              end: 'top 65%',
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
      id="education"
      className="relative w-full min-h-screen bg-[#0A0A0F] py-24 z-[22]"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative px-6 lg:px-[8vw]">
        <div className="max-w-4xl mx-auto">
          <SectionHeader fileLabel="education.json">
            Background & <span className="text-magenta">foundation</span>.
          </SectionHeader>
          <div ref={contentRef} className="space-y-6">
            {EDUCATION.map((edu, i) => (
              <div
                key={i}
                className="edu-card p-6 bg-white/[0.03] rounded-lg border border-white/10 hover:border-cyan/30 transition-colors"
              >
                <h3 className="font-mono text-lg font-semibold text-white">{edu.degree}</h3>
                <p className="text-cyan text-sm font-mono mt-1">{edu.school}</p>
                <p className="text-white/40 text-sm mt-1">{edu.location}</p>
                <span className="text-xs text-white/40 font-mono mt-2 inline-block">
                  {edu.period}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
