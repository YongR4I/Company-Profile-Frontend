import HeroHeader from "@/components/shared/HeroHeader";
import ServicesGrid from "@/components/sections/services/ServicesGrid";
import Partners from "@/components/shared/Partners";
import CTA from "@/components/shared/CTA";
import Footer from "@/components/layout/Footer";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-water-900">
      <HeroHeader
        title={
          <>
            <span className="text-water-300">Sabiru</span> Services
          </>
        }
        subtitle="What we do for you"
      />
      <ServicesGrid />
      <Partners />
      <CTA />
      <Footer />
    </div>
  );
}
