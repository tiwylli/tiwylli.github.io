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
import CvtBackground from "@/components/CvtBackground";

export default function HomePage() {
  return (
    <main className="relative min-h-screen scroll-smooth text-slate-900 bg-white">
      <div className="z-0" style={{ position: "relative", minHeight: "100vh" }}>
        <CvtBackground
          iterations={1000}
          numSites={1000}
          palette={["#ffffffff"]}
          strokeColor="#0079121e"
        />
        <div className="relative z-10 px-8 sm:px-12 md:px-24">
          <HeaderNav />
          <HeroSection />
          {/* <AboutSection /> */}
          <ExperienceSection />
          <ResearchSection />
          <EducationSection />
          <ProjectsSection />
          <LeadershipSection />
          <footer className="py-5 text-center text-sm text-slate-500">
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
