# Photo SEO guidelines — real project photography

Applies once real, completed/in-progress project photos are added to
`data/projects.ts` (the `gallery` field). Do not apply these patterns to
placeholder/concept renders (`public/images/concepts/`) — those are already
labelled as concepts and are out of scope here.

## Filenames

Pattern: `skyline-engineering-villa-[location]-[description]-[NN].webp`

- `[location]`: lowercase, hyphenated — `finestrat`, `benidorm`, `costa-blanca`.
- `[description]`: 2–4 words describing what's actually in the shot —
  `pool-terrace`, `master-bedroom`, `exterior-facade-night`, `kitchen-island`.
  Never reuse the same description across different photos of the same
  project; if there are several pool shots, number/differentiate them
  (`pool-terrace-sunset`, `pool-terrace-aerial`).
- `[NN]`: two-digit sequence per project (`01`, `02`, …) only if needed to
  disambiguate otherwise-identical descriptions.
- Format: `.webp` (fallback `.jpg` only if a source can't be converted).

Examples:
- `skyline-engineering-villa-finestrat-pool-terrace-01.webp`
- `skyline-engineering-villa-benidorm-master-bedroom.webp`
- `skyline-engineering-villa-finestrat-exterior-facade-night.webp`

## Alt text

- Describe the specific photo, not the project in general: "Infinity pool
  and covered terrace of a Skyline Engineering villa in Finestrat, Costa
  Blanca overlooking the sea" rather than "Skyline Engineering villa".
- Always include the real location (Finestrat / Benidorm / Costa Blanca) —
  this is what ties the image back to the entity for image search and AI
  crawlers.
- Never reuse one alt string across multiple images in the same gallery —
  each `ProjectGalleryImage.alt` in `data/projects.ts` must be unique.
- Keep it factual: don't claim a feature the photo doesn't show.

## Captions

- Optional (`ProjectGalleryImage.caption`), but when used, add information
  the alt text doesn't carry — e.g. the room name plus a material or supplier
  detail confirmed by the owner, not the same sentence restated.

## Where this is enforced in code

- `data/projects.ts` — `ProjectGalleryImage` type (`src`, `alt`, `caption?`).
- `components/pages/ProjectDetailPage.tsx` — renders `alt`/`caption` per
  image; add new photos there via the `gallery` array on a `Project` entry.

## Do not

- Do not batch-generate alt text by template substitution only
  ("Skyline Engineering villa in {location}, photo {n}") — write each one
  to reflect what's actually in the frame.
- Do not upload photos of a project before the owner has confirmed the
  project's factual details (location, status, dates) in `data/projects.ts`.
