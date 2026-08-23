import type { ReactNode } from 'react';

export function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <section className="pt-20 md:pt-28 pb-24 md:pb-32">
      <div className="container-content max-w-4xl">
        <div className="eyebrow mb-6">{eyebrow}</div>
        <h1 className="font-display text-5xl md:text-7xl leading-[1.02]">{title}</h1>
        <p className="mt-5 text-sm text-graphite/55">{updated}</p>
        <div className="mt-14 space-y-12 text-graphite/80 leading-relaxed">{children}</div>
      </div>
    </section>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-3xl mb-4 text-graphite">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

export const legalListClass = 'list-disc pl-5 space-y-2';
