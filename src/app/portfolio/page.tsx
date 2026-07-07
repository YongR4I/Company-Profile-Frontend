import PortfolioHero from "@/components/sections/portfolio/hero";
import PortfolioHeroFooter from "@/components/sections/portfolio/herofooter";
import ProjectGrid from "@/components/sections/portfolio/projectgrid";
import Partner from "@/components/sections/portfolio/partner";
import CTA from "@/components/sections/portfolio/cta";
import Footer from "@/components/sections/portfolio/footer";

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <PortfolioHero />
      <PortfolioHeroFooter />
      <ProjectGrid />
      <Partner />
      <CTA />
      <Footer />
    </div>
  );
}
