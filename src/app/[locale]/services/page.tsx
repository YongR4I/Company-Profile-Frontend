import { getTranslations } from "next-intl/server";
import HeroHeader from "@/components/shared/HeroHeader";
import ServicesGrid from "@/components/sections/services/ServicesGrid";
import Partners from "@/components/shared/Partners";
import CTA from "@/components/shared/CTA";
import { getServicesPage, getServices } from "@/lib/strapi-services";
import { toServiceItem } from "@/lib/mappers";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  const [pageData, services] = await Promise.all([
    getServicesPage(locale),
    getServices(locale),
  ]);

  const mappedServices = services.map(toServiceItem);

  return (
    <div className="flex flex-col min-h-screen bg-water-900">
      <HeroHeader
        title={
          <>
            {t("heroTitle")}
          </>
        }
        subtitle={pageData?.heroSubtitle || t("heroSubtitle")}
      />
      <ServicesGrid items={mappedServices} locale={locale} />
      <Partners locale={locale} />
      <CTA locale={locale} />
    </div>
  );
}
