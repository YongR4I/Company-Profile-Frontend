import AboutHero from "@/components/sections/about/hero";
import OurMission from "@/components/sections/about/ourmission";
import OurProcess from "@/components/sections/about/ourprocess";
import Partner from "@/components/sections/about/partner";
import CTA from "@/components/sections/about/cta";
import Footer from "@/components/sections/about/footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-water-900">
      <AboutHero />
      <OurMission />
      <OurProcess />
      <Partner />
      <CTA />
      <Footer />
    </div>
  );
}
