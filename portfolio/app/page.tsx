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

export default function HomePage() {
  return (
    <main className="scroll-smooth bg-white text-slate-900">
      <HeaderNav />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <footer className="bg-white py-10 text-center text-sm text-slate-500">
        <p>
          Built with Next.js + HeroUI. This page mirrors the DevPortfolio
          layout. Content is placeholder and can be customized.
        </p>
      </footer>
    </main>
  );
}
