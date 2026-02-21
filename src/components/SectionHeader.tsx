import type { ReactNode } from 'react';

type SectionHeaderProps = {
  fileLabel: string;
  children: ReactNode;
};

export function SectionHeader({ fileLabel, children }: SectionHeaderProps) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-cyan font-mono text-sm">{'>'}</span>
        <span className="text-white/40 font-mono text-sm">{fileLabel}</span>
      </div>
      <h2 className="font-mono text-[clamp(2rem,3.5vw,3rem)] font-bold text-white">
        {children}
      </h2>
    </div>
  );
}
