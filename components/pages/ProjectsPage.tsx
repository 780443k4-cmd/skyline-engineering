'use client';

import Link from 'next/link';
import CTASection from '@/components/sections/CTASection';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import { projects } from '@/data/projects';

function Lines({ text }: { text: string }) {
  const [first, second] = text.split('\n');
  return (
    <>
      {first}
      {second && (
        <>
          <br />
          {' '}
          {second}
        </>
      )}
    </>
  );
}

export default function ProjectsPage() {
  const { localizePath, t } = useLanguage();
  const p = t.projectsPage;

  return (
    <>
      <section className="pt-20 md:pt-28 pb-16 border-b border-line">
        <div className="container-content">
          <div className="eyebrow mb-6">{p.eyebrow}</div>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.02] max-w-3xl">
            <Lines text={p.title} />
          </h1>
          <p className="mt-6 text-graphite/75 text-lg max-w-2xl">{p.intro}</p>
        </div>
      </section>

      {projects.length === 0 ? (
        <section className="py-24 md:py-32">
          <div className="container-content max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl mb-5">{p.emptyTitle}</h2>
            <p className="text-graphite/75 leading-relaxed mb-8">{p.emptyText}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={localizePath('/villas')}
                className="inline-block border border-ink px-8 py-4 text-xs tracking-widest2 uppercase hover:bg-ink hover:text-warmwhite transition-colors text-center"
              >
                {t.common.nav[0]}
              </Link>
              <Link
                href={localizePath('/process')}
                className="inline-block border border-ink px-8 py-4 text-xs tracking-widest2 uppercase hover:bg-ink hover:text-warmwhite transition-colors text-center"
              >
                {t.common.nav[2]}
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-24 md:py-32">
          <div className="container-content grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={localizePath(`/projects/${project.slug}`)}
                className="block border border-line p-8 hover:border-skyline transition-colors"
              >
                <div className="eyebrow mb-2">{project.location}</div>
                <h2 className="font-display text-2xl mb-3">{project.name}</h2>
                <p className="text-sm text-graphite/70 leading-relaxed mb-4">{project.summary}</p>
                <span className="text-xs tracking-widest2 uppercase">{p.status[project.status]}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <CTASection title={<Lines text={p.cta} />} text={p.ctaText} />
    </>
  );
}
