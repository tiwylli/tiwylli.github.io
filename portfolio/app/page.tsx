/**
 * Single-page portfolio layout
 * - Sections are composed below; content lives in `data/portfolio.ts`.
 * - Reorder or remove sections as needed.
 * - Smooth anchor scrolling is enabled via the `scroll-smooth` class on <main>.
 */
import HeaderNav from "@/components/HeaderNav";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ResearchSection from "@/components/ResearchSection";
import LeadershipSection from "@/components/LeadershipSection";
import { BackgroundLayer } from "@/components/BackgroundLayer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen scroll-smooth bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      <div className="relative z-0 min-h-screen">
        <BackgroundLayer />
        <div className="relative z-10 px-8 sm:px-12 md:px-24">
          <HeaderNav />
          <HeroSection />
          {/* <AboutSection /> */}
          <ExperienceSection />
          <ResearchSection />
          <EducationSection />
          <ProjectsSection />
          <LeadershipSection />
          <footer className="flex flex-col items-center justify-between gap-3 py-6 text-sm text-slate-500 dark:text-slate-400 sm:flex-row">
            <p className="text-center sm:text-left">
              © 2025 Wylliam Cantin Charawi — Made with ♥ using Next.js +
              HeroUI & GPU-accelerated chaos.
            </p>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 font-semibold text-emerald-700 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-400 hover:text-emerald-800 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 dark:border-emerald-900/60 dark:bg-slate-900/70 dark:text-emerald-200 dark:hover:border-emerald-700 dark:hover:text-emerald-100"
              href="#top"
            >
              ↑ Back to top
            </a>
          </footer>
        </div>
      </div>
    </main>
  );
}
