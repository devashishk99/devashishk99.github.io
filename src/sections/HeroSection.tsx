import { useEffect, useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';

const BOOT_LINES = [
  { text: '$ ssh devashish@portfolio', delay: 0 },
  { text: '> Connecting...', delay: 400 },
  { text: '> Authenticated', delay: 800 },
  { text: '> Loading profile...', delay: 1200 },
];

const PROFILE_DATA = [
  { label: 'NAME', value: 'Devashish Kamble', color: 'cyan' },
  { label: 'ROLE', value: 'Applied AI Engineer', color: 'magenta' },
  { label: 'LOCATION', value: 'Bolzano, Italy', color: 'cyan' },
  { label: 'FOCUS', value: 'Solutions · AI · Reliability', color: 'magenta' },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const [bootComplete, setBootComplete] = useState(false);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const terminal = terminalRef.current;
    if (!section || !terminal) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        terminal,
        { y: 60, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
      );

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=120%',
          pin: true,
          scrub: 0.5,
          onLeaveBack: () => {
            gsap.set(terminal, { opacity: 1, y: 0, scale: 1 });
          },
        },
      });

      scrollTl.fromTo(
        terminal,
        { y: 0, opacity: 1 },
        { y: '-30vh', opacity: 0, ease: 'power2.in' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setBootComplete(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-[#0A0A0F] grid-bg overflow-hidden z-10"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-cyan/5 rounded-full blur-[150px]" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div ref={terminalRef} className="terminal-window w-full max-w-2xl p-6">
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-4 text-xs text-white/40 font-mono">
              devashish@portfolio — zsh
            </span>
          </div>

          <div className="code-block text-white/80 space-y-1">
            {BOOT_LINES.map((line, i) => (
              <div
                key={i}
                className="opacity-0"
                style={{
                  animation: `fadeIn 0.1s ease forwards`,
                  animationDelay: `${line.delay}ms`,
                }}
              >
                {line.text}
              </div>
            ))}

            <div className="pt-4 opacity-0" style={{ animation: 'fadeIn 0.3s ease forwards 1.6s' }}>
              {PROFILE_DATA.map((item, i) => (
                <div key={i} className="flex gap-4 py-1">
                  <span className="text-white/40 w-24">{item.label}:</span>
                  <span
                    className={item.color === 'cyan' ? 'text-cyan' : 'text-magenta'}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="pt-6 flex items-center gap-2 opacity-0"
              style={{ animation: 'fadeIn 0.3s ease forwards 2s' }}
            >
              <span className="text-cyan">$</span>
              <span className={bootComplete ? 'typing-cursor' : ''}>_</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
