import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const CONTACTS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'devashishk99@gmail.com',
    href: 'mailto:devashishk99@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: '/in/devashishk99',
    href: 'https://linkedin.com/in/devashishk99',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '/devashishk99',
    href: 'https://github.com/devashishk99',
  },
];

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        content.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: content,
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full min-h-screen bg-[#0A0A0F] py-24 z-[70]"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative px-6 lg:px-[8vw]">
        <div ref={contentRef} className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-cyan font-mono text-sm">{'>'}</span>
            <span className="text-white/40 font-mono text-sm">contact.sh</span>
          </div>

          <h2 className="font-mono text-[clamp(2rem,4vw,3.5rem)] font-bold text-white mb-4">
            Let's <span className="text-cyan">collaborate</span>.
          </h2>

          <p className="text-white/50 text-lg mb-12">
            Open to engineering roles, research partnerships, and interesting problems.
          </p>

          <div className="space-y-4 mb-12">
            {CONTACTS.map((contact, i) => (
              <a
                key={i}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center justify-center gap-4 p-4 bg-white/[0.03] rounded-lg border border-white/10 hover:border-cyan/30 transition-colors group"
              >
                <contact.icon size={20} className="text-cyan" />
                <span className="text-white/80 font-mono">{contact.value}</span>
                <ExternalLink
                  size={16}
                  className="text-white/40 group-hover:text-cyan transition-colors"
                />
              </a>
            ))}
          </div>

          <div className="font-mono text-white/40 text-sm">
            <span className="text-cyan">$</span> await collaboration...
          </div>
        </div>
      </div>
    </section>
  );
}
