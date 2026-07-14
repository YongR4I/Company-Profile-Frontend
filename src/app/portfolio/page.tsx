import HeroHeader from "@/components/shared/HeroHeader";
import PortfolioGridContainer from "@/components/sections/portfolio/PortfolioGridContainer";
import Partners from "@/components/shared/Partners";
import CTA from "@/components/shared/CTA";
import { getPortfolioPage, getPortfolios } from "@/lib/strapi-services";
import { toPortfolioItem } from "@/lib/mappers";

export default async function PortfolioPage() {
  const [pageData, portfolios] = await Promise.all([
    getPortfolioPage(),
    getPortfolios(),
  ]);

  // Map raw Strapi Portfolio[] → PortfolioItem[] so `category` becomes a string,
  // not the raw Strapi object {id, documentId, title, slug} that caused the React error.
  const mappedPortfolios = portfolios.map(toPortfolioItem);

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
        subtitle={pageData?.heroTitle}
        variant="portfolio"
      />
      <PortfolioGridContainer projects={mappedPortfolios} />
      <Partners />
      <CTA />
    </div>
  );
}
