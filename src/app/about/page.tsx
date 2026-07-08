import HeroHeader from "@/components/shared/HeroHeader";
import Mission from "@/components/sections/about/Mission";
import Process from "@/components/sections/about/Process";
import Partners from "@/components/shared/Partners";
import CTA from "@/components/shared/CTA";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-water-900">
      <HeroHeader
        title={
          <>
            About <span className="text-water-300">Sabiru</span>
          </>
        }
        subtitle="Who Are We"
      />
      <Mission />
      <Process />
      <Partners />
      <CTA />
      <Footer />
    </div>
  );
}
