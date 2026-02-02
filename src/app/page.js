
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import ExperienceSection from "@/components/landing/ExperienceSection";
import OfferingsSection from "@/components/landing/OfferingsSection";
import WorkshopSection from "@/components/landing/WorkshopSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <OfferingsSection />
      <ExperienceSection />
      <WorkshopSection />

    </main>
  );
}
