import { getTranslations } from "next-intl/server";
import CommonLayout from "@/components/layout/CommonLayout";
import { ServiceItem } from "@/types/services";
import ServiceRow from "./ServiceRow";

interface ServicesGridProps {
  items?: ServiceItem[];
  locale?: string;
}

export default async function ServicesGrid({ items, locale }: ServicesGridProps) {
  const t = await getTranslations({ locale: locale || "en", namespace: "services" });

  const defaultServices = [
    {
      title: t("svc1Title"),
      description: t("svc1Desc"),
      iconUrl: "/icons/services/Vector.svg",
    },
    {
      title: t("svc2Title"),
      description: t("svc2Desc"),
      iconUrl: "/icons/services/Vector-1.svg",
    },
    {
      title: t("svc3Title"),
      description: t("svc3Desc"),
      iconUrl: "/icons/services/Vector-2.svg",
    },
    {
      title: t("svc4Title"),
      description: t("svc4Desc"),
      iconUrl: "/icons/services/Vector-3.svg",
    },
    {
      title: t("svc5Title"),
      description: t("svc5Desc"),
      iconUrl: "/icons/services/Vector-4.svg",
    },
  ];

  const isCollectionEmpty = items && items.length === 0;
  const displayServices = items && items.length > 0 ? items : (isCollectionEmpty ? [] : defaultServices);

  return (
    <CommonLayout className="h-fit! flex-col items-start justify-center py-16 md:py-24">
      {isCollectionEmpty ? (
        <div className="w-full py-20 flex flex-col items-center justify-center text-center gap-4">
          <h3 className="text-2xl text-white font-medium">{t("emptyTitle")}</h3>
          <p className="text-gray-400 max-w-[500px]">
            {t("emptyDesc")}
          </p>
        </div>
      ) : (
        <div className="w-full flex flex-col gap-8 md:gap-20">
          {displayServices.map((service, index) => (
            <ServiceRow
              key={index}
              title={service.title}
              description={service.description}
              iconUrl={service.iconUrl || "/icons/services/Vector.svg"}
              isLast={index === displayServices.length - 1}
              delay={index * 100}
            />
          ))}
        </div>
      )}
    </CommonLayout>
  );
}
