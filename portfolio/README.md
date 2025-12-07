# DevPortfolio (Next.js + HeroUI)

Single‑page portfolio inspired by https://ryanfitzgerald.github.io/devportfolio/, implemented with Next.js (App Router), HeroUI, and Tailwind.

## Quick Start

- Install: `npm install`
- Develop: `npm run dev`
- Open: http://localhost:3000

## Project Structure

- `app/page.tsx` — Assembles sections (HeaderNav, HeroSection, AboutSection, ProjectsSection, ExperienceSection, EducationSection). Reorder/remove as needed.
- `components/*` — Flat section components with inline docs:
  - `HeaderNav.tsx`, `HeroSection.tsx`, `AboutSection.tsx`, `ProjectsSection.tsx`, `ExperienceSection.tsx`, `EducationSection.tsx`.
- `data/portfolio.ts` — Central content (nav items, hero, about, projects, roles, education).
- `types/portfolio.ts` — Shared types for content.

## How To Edit Content

- Name & tagline: `data/portfolio.ts` → `hero`
- Skills and about: `data/portfolio.ts` → `about`
- Projects: `data/portfolio.ts` → `projects`
- Experience: `data/portfolio.ts` → `roles`
- Education: `data/portfolio.ts` → `education`
- Header items: `data/portfolio.ts` → `navItems` (must match section `id`s)

## Styling Notes

- Accent color: Tailwind classes use `blue-600`. Change to any Tailwind color (or create CSS vars).
- Spacing/typography: Tweak Tailwind classes directly in each component. The visual is intentionally minimal.
- Smooth scroll: Enabled via `scroll-smooth` on `<main>` in `app/page.tsx`.

## Tech

- Next.js 15 (App Router), TypeScript
- HeroUI v2 components
- Tailwind CSS v4

## Optional Enhancements

- Use `next/font` to load IBM Plex Mono (to match the reference exactly).
- Add project thumbnails to cards (extend `Project` with `image`).
- Add mobile nav menu and active section highlighting.

## License

MIT
