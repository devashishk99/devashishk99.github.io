import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

export function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const quote = quoteRef.current;
    if (!section || !quote) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=100%',
          pin: true,
          scrub: 0.5,
        },
      });

      scrollTl.fromTo(
        quote.querySelectorAll('.line'),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, ease: 'none' },
        0
      );

      scrollTl.fromTo(quote, { opacity: 1 }, { opacity: 0, ease: 'power2.in' }, 0.7);
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-[#0A0A0F] overflow-hidden z-[60]"
    >
      <div className="absolute inset-0">
        <img
          src="/philosophy_bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0A0A0F]/80 to-[#0A0A0F]" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div ref={quoteRef} className="text-center px-6 max-w-4xl">
          <div className="line font-mono text-[clamp(1.5rem,4vw,3.5rem)] font-bold text-white leading-tight mb-4">
            "Build for <span className="text-cyan">reliability</span> first.
          </div>
          <div className="line font-mono text-[clamp(1.5rem,4vw,3.5rem)] font-bold text-white leading-tight mb-4">
            Optimize for <span className="text-magenta">clarity</span>.
          </div>
          <div className="line font-mono text-[clamp(1.5rem,4vw,3.5rem)] font-bold text-white leading-tight">
            Let the <span className="text-cyan">code</span> speak."
          </div>
          <div className="line mt-8 text-white/40 font-mono text-sm">
            — Devashish Kamble
          </div>
        </div>
      </div>
    </section>
  );
}
