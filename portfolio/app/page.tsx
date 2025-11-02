import AboutMeSection from "@/components/AboutMeSection";
import ExperienceSection from "@/components/ExperienceSection";
import LandingHero from "@/components/LandingHero";
import ProjectsSection from "@/components/ProjectsSection";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <LandingHero />
      <AboutMeSection />
      <ProjectsSection limit={2} />
      <ExperienceSection limit={2} />
    </main>
  );
}
