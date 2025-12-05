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
import CvtBackground from "@/components/CvtBackground";

export default function HomePage() {
  return (
    <main className="relative min-h-screen scroll-smooth text-slate-900">
      <div className="z-0" style={{ position: "relative", minHeight: "100vh" }}>
        <CvtBackground numSites={140} iterations={4} />
        <div className="relative z-10">
          <HeaderNav />
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ExperienceSection />
          <EducationSection />
          <footer className="py-10 text-center text-sm text-slate-500">
            <p>
              Built with Next.js + HeroUI. This page mirrors the DevPortfolio
              layout. Content is placeholder and can be customized.
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}
