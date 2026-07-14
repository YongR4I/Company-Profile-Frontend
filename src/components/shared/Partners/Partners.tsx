import React from "react";
import Image from "next/image";
import CommonLayout from "@/components/layout/CommonLayout";
import HeadlineChild from "@/components/shared/HeadlineChild";
import { getPartnerPage } from "@/lib/strapi-services";
import { toPartnerCard } from "@/lib/mappers";

// Static fallback data — used only when Strapi has no data
const defaultPartners = [
  { name: "Partner 1", logoUrl: "/images/shared/partners/partner-1.png", websiteUrl: undefined },
  { name: "Partner 2", logoUrl: "/images/shared/partners/partner-2.png", websiteUrl: undefined },
  { name: "Partner 3", logoUrl: "/images/shared/partners/partner-3.png", websiteUrl: undefined },
  { name: "Partner 4", logoUrl: "/images/shared/partners/partner-4.png", websiteUrl: undefined },
  { name: "Partner 5", logoUrl: "/images/shared/partners/partner-5.png", websiteUrl: undefined },
  { name: "Partner 6", logoUrl: "/images/shared/partners/partner-6.png", websiteUrl: undefined },
  { name: "Partner 7", logoUrl: "/images/shared/partners/partner-7.png", websiteUrl: undefined },
  { name: "Partner 8", logoUrl: "/images/shared/partners/partner-8.png", websiteUrl: undefined },
];

export default async function Partners() {
  const partnerPage = await getPartnerPage();

  const title = partnerPage?.title || "Partners in innovation";
  const description = partnerPage?.description || "Our clients trust us to transform ideas into scalable digital solutions. Now it's your turn to build with confidence.";

  // Use Strapi partners if available, otherwise fall back to static
  const partners =
    partnerPage?.partnerList && partnerPage.partnerList.length > 0
      ? partnerPage.partnerList.map(toPartnerCard)
      : defaultPartners;

  return (
    <>
      <HeadlineChild className="flex flex-col items-start justify-start gap-5 mt-12 mb-6 md:mt-20 md:mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-display-sub w-full max-w-[600px] font-medium text-white">
          {title}
        </h2>
        {description && (
          <p className="text-body-large md:text-heading-h4 text-gray-400 w-full lg:w-1/2">
            {description}
          </p>
        )}
      </HeadlineChild>

      <CommonLayout className="h-fit! px-6 sm:px-10 py-10 items-center justify-center">
        <div className="relative w-full max-w-[1598px]">
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage: "url(/images/shared/gridbg.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-[15px] sm:gap-[20px]">
            {partners.map((partner, index) => {
              const card = (
                <div
                  key={index}
                  className="h-[120px] sm:h-[180px] lg:h-[243px] rounded-[1.25rem] border border-water-600/70 p-[15px] sm:p-[30px] flex items-center justify-center overflow-hidden hover:border-water-600 transition-all duration-300 bg-[radial-gradient(86.71%_79.65%_at_9.6%_100.14%,_#132F3B_0%,_#071115_100%)] hover:bg-[radial-gradient(86.71%_79.65%_at_9.6%_100.14%,_#194152_0%,_#071115_100%)] hover:scale-105"
                >
                  {partner.logoUrl ? (
                    <Image
                      src={partner.logoUrl}
                      alt={partner.name}
                      width={280}
                      height={180}
                      className="max-h-full w-auto object-contain"
                      unoptimized={partner.logoUrl.startsWith("http")}
                    />
                  ) : (
                    <span className="text-gray-500 text-sm">{partner.name}</span>
                  )}
                </div>
              );

              // Wrap in anchor if websiteUrl exists
              return partner.websiteUrl ? (
                <a
                  key={index}
                  href={partner.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {card}
                </a>
              ) : (
                <React.Fragment key={index}>{card}</React.Fragment>
              );
            })}
          </div>
        </div>
      </CommonLayout>
    </>
  );
}
