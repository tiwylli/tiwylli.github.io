/**
 * Single-page portfolio layout
 * - Sections are composed below; content lives in `data/portfolio.ts`.
 * - Reorder or remove sections as needed.
 * - Smooth anchor scrolling is enabled via the `scroll-smooth` class on <main>.
 */
import HeaderNav from "@/components/HeaderNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
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
          <footer className="py-5 text-center text-sm text-slate-500 dark:text-slate-400">
            <p>
              © 2025 Wylliam Cantin Charawi — Made with ♥ using Next.js +
              HeroUI & GPU-accelerated chaos.
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}
