'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import { projects } from '@/data/projects';

/**
 * Compact proof-of-work card linking location pages (Finestrat / Benidorm /
 * Costa Blanca) to a real, completed project page. Only renders once at
 * least one verified project exists in data/projects.ts — no placeholder
 * or invented content. Project fields (name/location/type) are stored
 * unlocalized in data/projects.ts by design (see that file), matching how
 * the /projects and /projects/[slug] pages already render them on every
 * locale.
 */
export default function RecentProjectBlock() {
  const { t, localizePath } = useLanguage();
  const project = projects[0];
  if (!project) return null;

  const cover =
    project.gallery.find((g) => g.src.includes('pool-terrace')) ??
    project.gallery[project.gallery.length - 1];

  return (
    <section className="py-16 md:py-20 border-b border-line">
      <div className="container-content">
        <div className="eyebrow mb-6">{t.projectsPage.recentProjectEyebrow}</div>
        <Link href={localizePath(`/projects/${project.slug}`)} className="group grid md:grid-cols-2 gap-6 md:gap-10 items-center">
          <div className="relative aspect-[4/3] overflow-hidden bg-line">
            <Image
              src={cover.src}
              alt={cover.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div>
            <h3 className="font-display text-2xl md:text-3xl mb-2">{project.name}</h3>
            <p className="text-sm text-graphite/70 mb-1">
              {project.location} — {project.type}
            </p>
            {project.status === 'completed' && (
              <p className="text-sm text-graphite/70 mb-4">{t.projectsPage.turnkeyLabel}</p>
            )}
            <span className="inline-block mt-2 text-xs tracking-widest2 uppercase border-b border-ink pb-1 group-hover:text-skyline group-hover:border-skyline transition-colors">
              {t.projectsPage.recentProjectCta}
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
