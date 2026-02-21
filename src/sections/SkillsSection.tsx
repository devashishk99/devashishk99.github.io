import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { SectionHeader } from '@/components/SectionHeader';

const SKILL_CATEGORIES = [
  { title: 'Languages', skills: ['Python', 'Java', 'TypeScript/JavaScript', 'Bash'] },
  {
    title: 'Backend & API development',
    skills: [
      'FastAPI',
      'Flask',
      'Node.js',
      'Express',
      'REST APIs',
      'Webhook integration',
      'OAuth2',
      'JWT',
    ],
  },
  {
    title: 'Data, storage, and search',
    skills: ['PostgreSQL', 'Redis', 'SQLAlchemy', 'SQL', 'Whoosh', 'Pandas'],
  },
  {
    title: 'AI / LLMs',
    skills: [
      'OpenAI',
      'LangChain',
      'LangGraph',
      'RAG',
      'vector embeddings',
      'Prompt engineering',
      'Tool calling / function calling',
      'Conversational AI',
      'Retell AI',
      'LLM evaluation',
    ],
  },
  {
    title: 'Automation & scheduling',
    skills: ['Scheduling automation', 'Cron jobs / scheduled sync'],
  },
  {
    title: 'Web automation & scraping',
    skills: ['Playwright', 'Crawling / monitoring pipelines'],
  },
  {
    title: 'DevOps, delivery, and tooling',
    skills: ['Docker', 'Git / GitHub', 'CI/CD', 'Postman'],
  },
  {
    title: 'Enterprise / workplace integrations',
    skills: ['Microsoft Graph API', 'SharePoint', 'Jira', 'Confluence', 'Slack', 'Cal.com'],
  },
  {
    title: 'Reliability & operations',
    skills: [
      'Incident triage',
      'on-call support',
      'Debugging via logs / stack traces',
      'Root cause analysis (RCA)',
    ],
  },
];

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    const ctx = gsap.context(() => {
      const items = content.querySelectorAll('.tech-item');
      items.forEach((item, i) => {
        gsap.fromTo(
          item,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            scrollTrigger: {
              trigger: item,
              start: 'top 88%',
              end: 'top 68%',
              scrub: true,
            },
            delay: i * 0.015,
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative w-full min-h-screen bg-[#0A0A0F] py-24 z-50"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative px-6 lg:px-[8vw]">
        <div className="max-w-5xl mx-auto">
          <SectionHeader fileLabel="skills.yaml">
            Tech <span className="text-magenta">stack</span>.
          </SectionHeader>

          <div ref={contentRef} className="space-y-10">
            {SKILL_CATEGORIES.map((cat, catIndex) => (
              <div key={catIndex} className="skill-category">
                <h3 className="font-mono text-sm font-semibold text-cyan mb-3 border-b border-white/10 pb-2">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((tech, i) => (
                    <span
                      key={i}
                      className="tech-item px-3 py-1.5 bg-white/[0.03] border border-white/10 rounded text-white/70 font-mono text-sm hover:border-cyan/50 hover:text-cyan transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
