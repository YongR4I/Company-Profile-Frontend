import { getTranslations } from "next-intl/server";
import HeroHeader from "@/components/shared/HeroHeader";
import PortfolioGridContainer from "@/components/sections/portfolio/PortfolioGridContainer";
import Partners from "@/components/shared/Partners";
import CTA from "@/components/shared/CTA";
import { getPortfolioPage, getPortfolios } from "@/lib/strapi-services";
import { toPortfolioItem } from "@/lib/mappers";

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "portfolio" });
  const [pageData, portfolios] = await Promise.all([
    getPortfolioPage(locale),
    getPortfolios(locale),
  ]);

  const mappedPortfolios = portfolios.map(toPortfolioItem);

  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <HeroHeader
        title={
          <>
            {t("heroTitle")}
          </>
        }
        subtitle={pageData?.heroTitle}
        variant="portfolio"
      />
      <PortfolioGridContainer projects={mappedPortfolios} />
      <Partners locale={locale} />
      <CTA locale={locale} />
    </div>
  );
}
