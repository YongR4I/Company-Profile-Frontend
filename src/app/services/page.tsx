import ServicesHero from "@/components/sections/services/hero";
import ServiceSection from "@/components/sections/services/service-section";
import Partners from "@/components/sections/Partners";
import CTA from "@/components/sections/CTA/CTA";
import Footer from "@/components/layout/Footer";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-water-900">
      <ServicesHero />
      <ServiceSection />
      <Partners />
      <CTA />
      <Footer />
    </div>
  );
}
