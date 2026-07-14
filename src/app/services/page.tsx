import HeroHeader from "@/components/shared/HeroHeader";
import ServicesGrid from "@/components/sections/services/ServicesGrid";
import Partners from "@/components/shared/Partners";
import CTA from "@/components/shared/CTA";
import { getServicesPage, getServices } from "@/lib/strapi-services";
import { toServiceItem } from "@/lib/mappers";

export default async function ServicesPage() {
  const [pageData, services] = await Promise.all([
    getServicesPage(),
    getServices(),
  ]);

  // Map raw Strapi Service[] → ServiceItem[] so `icon` object becomes `iconUrl` string
  const mappedServices = services.map(toServiceItem);

  return (
    <div className="flex flex-col min-h-screen bg-water-900">
      <HeroHeader
        title={
          <>
            <span className="text-water-300">Sabiru</span> Services
          </>
        }
        subtitle={pageData?.heroSubtitle || "What we do for you"}
      />
      <ServicesGrid items={mappedServices} />
      <Partners />
      <CTA />
    </div>
  );
}
