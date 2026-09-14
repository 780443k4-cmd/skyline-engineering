'use client';

import Image from 'next/image';
import { notFound } from 'next/navigation';
import CTASection from '@/components/sections/CTASection';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import { projects } from '@/data/projects';

export default function ProjectDetailPage({ slug }: { slug: string }) {
  const { t } = useLanguage();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const f = t.projectsPage.fields;
  const statusLabel = t.projectsPage.status[project!.status];

  return (
    <>
      <section className="pt-20 md:pt-28 pb-16 border-b border-line">
        <div className="container-content">
          <div className="eyebrow mb-6">{project!.location}</div>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.02] max-w-3xl">
            {project!.name}
          </h1>
          <p className="mt-6 text-graphite/75 text-lg max-w-2xl">{project!.summary}</p>
        </div>
      </section>

      <section className="py-16 border-b border-line">
        <div className="container-content grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="eyebrow mb-2">{f.location}</div>
            {project!.location}
          </div>
          <div>
            <div className="eyebrow mb-2">{f.type}</div>
            {project!.type}
          </div>
          {project!.plotArea && (
            <div>
              <div className="eyebrow mb-2">{f.plotArea}</div>
              {project!.plotArea}
            </div>
          )}
          {project!.builtArea && (
            <div>
              <div className="eyebrow mb-2">{f.builtArea}</div>
              {project!.builtArea}
            </div>
          )}
          <div>
            <div className="eyebrow mb-2">{f.status}</div>
            {statusLabel}
          </div>
          {project!.constructionStart && (
            <div>
              <div className="eyebrow mb-2">{f.constructionStart}</div>
              {project!.constructionStart}
            </div>
          )}
          {project!.expectedCompletion && (
            <div>
              <div className="eyebrow mb-2">{f.expectedCompletion}</div>
              {project!.expectedCompletion}
            </div>
          )}
        </div>
      </section>

      {project!.servicesProvided.length > 0 && (
        <section className="py-16 border-b border-line">
          <div className="container-content">
            <div className="eyebrow mb-4">{f.servicesProvided}</div>
            <ul className="flex flex-wrap gap-3 text-sm">
              {project!.servicesProvided.map((s) => (
                <li key={s} className="border border-line px-4 py-2">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {project!.gallery.length > 0 && (
        <section className="py-16 border-b border-line">
          <div className="container-content">
            <div className="eyebrow mb-6">{f.gallery}</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {project!.gallery.map((img) => (
                <figure key={img.src}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={640}
                    height={480}
                    className="w-full h-auto object-cover"
                  />
                  {img.caption && (
                    <figcaption className="mt-2 text-xs text-graphite/60">{img.caption}</figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {project!.updates && project!.updates.length > 0 && (
        <section className="py-16 border-b border-line">
          <div className="container-content max-w-2xl">
            <div className="eyebrow mb-6">{f.updates}</div>
            <div className="divide-y divide-line">
              {project!.updates.map((u) => (
                <div key={u.date} className="py-4">
                  <div className="text-xs text-graphite/50 mb-1">{u.date}</div>
                  <p className="text-sm text-graphite/80">{u.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection title={t.projectsPage.cta.split('\n').join(' ')} text={t.projectsPage.ctaText} />
    </>
  );
}
