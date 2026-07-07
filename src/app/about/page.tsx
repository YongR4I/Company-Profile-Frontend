import AboutHero from "@/components/sections/about/hero";
import OurMission from "@/components/sections/about/ourmission";
import OurProcess from "@/components/sections/about/ourprocess";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-water-900">
      <AboutHero />
      <OurMission />
      <OurProcess />
    </div>
  );
}
