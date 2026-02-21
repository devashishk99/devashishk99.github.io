import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const visual = visualRef.current;
    if (!section || !content || !visual) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        },
      });

      scrollTl
        .fromTo(
          content.querySelectorAll('.reveal'),
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.05, ease: 'none' },
          0
        )
        .fromTo(
          visual,
          { x: 80, opacity: 0, scale: 0.9 },
          { x: 0, opacity: 1, scale: 1, ease: 'none' },
          0.1
        );

      scrollTl
        .fromTo(content, { x: 0, opacity: 1 }, { x: '-20vw', opacity: 0, ease: 'power2.in' }, 0.7)
        .fromTo(visual, { x: 0, opacity: 1 }, { x: '20vw', opacity: 0, ease: 'power2.in' }, 0.7);
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full h-screen bg-[#0A0A0F] overflow-hidden z-20"
    >
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="absolute inset-0 flex items-center">
        <div ref={contentRef} className="absolute left-[8vw] top-[15vh] w-[40vw]">
          <div className="reveal flex items-center gap-2 mb-6">
            <span className="text-cyan font-mono text-sm">{'>'}</span>
            <span className="text-white/40 font-mono text-sm">about.md</span>
          </div>

          <h2 className="reveal font-mono text-[clamp(1.8rem,3.5vw,3rem)] font-bold text-white leading-tight mb-6">
            I turn messy problems into
            <br />
            <span className="text-cyan">systems people can rely on</span>.
          </h2>

          <p className="reveal text-white/60 text-base leading-relaxed mb-6 max-w-md">
            Backend-leaning engineer with a Master's in Cognitive Science. I build LLM systems
            and automation pipelines that ship—focused on reliability and measurable
            impact.
          </p>
          <p className="reveal text-white/60 text-base leading-relaxed mb-6 max-w-md">
            I'm aiming for a <span className="text-cyan">solutions engineer</span> path:
            customer-facing tech that leverages AI. I learn fast, ask when I'm stuck, and do my
            best work on teams that care about quality and feedback.
          </p>

          <div className="reveal mt-6 p-4 bg-white/5 rounded border border-white/10 font-mono text-xs">
            <div className="text-white/40 mb-2">// How I work</div>
            <div className="text-cyan">class</div> <div className="text-magenta inline">Engineer</div>{' '}
            <div className="text-white/80 inline">{'{'}</div>
            <div className="pl-4 text-white/60">
              reliabilityFirst = <span className="text-cyan">true</span>;
            </div>
            <div className="pl-4 text-white/60">
              measureImpact = <span className="text-cyan">true</span>;
            </div>
            <div className="pl-4 text-white/60">
              shipOften = <span className="text-cyan">true</span>;
            </div>
            <div className="text-white/80">{'}'}</div>
          </div>
        </div>

        <div
          ref={visualRef}
          className="absolute right-[8vw] top-[15vh] w-[38vw] h-[70vh] rounded-lg overflow-hidden border border-white/10"
        >
          <img
            src="/about_visual.jpg"
            alt="Neural network visualization"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
