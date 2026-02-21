import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            end: 'top 70%',
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative w-full py-8 bg-[#0A0A0F] border-t border-white/5 z-[80]"
    >
      <div className="px-6 lg:px-[8vw] flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-white/40 text-sm font-mono">
          <span className="text-cyan">$</span>
          <span>exit</span>
        </div>
        <p className="text-white/30 text-sm font-mono">
          © 2026 Devashish Kamble · Built with React + GSAP
        </p>
      </div>
    </footer>
  );
}
