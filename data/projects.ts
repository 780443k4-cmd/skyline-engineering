// Real, built/in-progress SKYLINE Engineering projects — one indexable page per
// project (app/[locale]/projects/[slug]/page.tsx). Populate this array only with
// verified, owner-confirmed facts (name, location, areas, dates, services,
// real photographs). Do NOT invent placeholder projects, specs or figures:
// an empty array renders an honest "coming soon" state on the listing page
// instead of fabricated content. See docs/photo-seo-guidelines.md for the
// filename/alt/caption convention to use once real photos are added.

export type ProjectStatus = 'planning' | 'in_progress' | 'completed';

export type ProjectGalleryImage = {
  /** e.g. /images/projects/villa-finestrat-ridge/skyline-engineering-villa-finestrat-pool-terrace-01.webp */
  src: string;
  /** Unique, descriptive alt text — never reused verbatim across images. */
  alt: string;
  caption?: string;
};

export type ProjectUpdate = {
  date: string; // ISO 8601, e.g. '2026-06-01'
  text: string;
};

export type Project = {
  slug: string;
  name: string;
  location: string;
  type: string;
  plotArea?: string;
  builtArea?: string;
  status: ProjectStatus;
  constructionStart?: string;
  expectedCompletion?: string;
  /** Which of Skyline Engineering's own services were provided on this project. */
  servicesProvided: string[];
  /** Short, factual summary — no invented claims. */
  summary: string;
  gallery: ProjectGalleryImage[];
  updates?: ProjectUpdate[];
};

// Intentionally empty until real project data is confirmed by the owner.
export const projects: Project[] = [];
