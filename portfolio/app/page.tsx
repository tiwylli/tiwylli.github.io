import BackgroundGrid from "@/components/BackgroundGrid";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#dbe8ff] via-white to-white text-slate-900">
      <BackgroundGrid />
      <Navbar />
      <HeroSection />
    </main>
  );
}
