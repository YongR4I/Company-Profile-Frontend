import HeroHeader from "@/components/shared/HeroHeader";
import PortfolioHeroFooter from "@/components/sections/portfolio/PortfolioHeroFooter";
import ProjectGrid from "@/components/sections/portfolio/ProjectGrid";
import Partners from "@/components/shared/Partners";
import CTA from "@/components/shared/CTA";
import Footer from "@/components/layout/Footer";

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <HeroHeader
        title={
          <>
            CLIENT
            <br />
            PROJECT
          </>
        }
        variant="portfolio"
      />
      <PortfolioHeroFooter />
      <ProjectGrid />
      <Partners />
      <CTA />
      <Footer />
    </div>
  );
}
