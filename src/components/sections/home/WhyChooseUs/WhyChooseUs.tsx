import { getTranslations } from "next-intl/server";
import CommonLayout from "@/components/layout/CommonLayout";
import Image from "next/image";
import React from "react";
import { WhyChooseItem } from "@/types/strapi";
import { toWhyCard } from "@/lib/mappers";
import WhyCard from "./WhyCard";

interface WhyChooseUsProps {
  items?: WhyChooseItem[];
  locale?: string;
}

export default async function WhyChooseUs({ items, locale }: WhyChooseUsProps) {
  const t = await getTranslations({ locale: locale || "en", namespace: "home" });

  const defaultWhyCards = [
    {
      number: "1",
      title: t("why1Title"),
      description: t("why1Desc"),
    },
    {
      number: "2",
      title: t("why2Title"),
      description: t("why2Desc"),
    },
    {
      number: "3",
      title: t("why3Title"),
      description: t("why3Desc"),
    },
    {
      number: "4",
      title: t("why4Title"),
      description: t("why4Desc"),
    },
  ];

  const displayCards = items && items.length > 0
    ? items.map(toWhyCard)
    : defaultWhyCards;

  return (
    <CommonLayout
      id="whyus-section"
      className="h-fit! w-full justify-center overflow-hidden py-10 md:py-20"
    >
      <div className="relative w-full z-1">
        <div className="hidden lg:flex absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[20%] z-1 w-[450px] h-[450px] pointer-events-none justify-center">
          <Image
            src="/images/branding/robot.png"
            alt="Robot mascot"
            width={450}
            height={450}
            className="w-auto h-auto object-contain animate-[float_6s_ease-in-out_infinite] translate-y-4"
          />
        </div>

        <div className="hidden lg:flex flex-row items-center justify-between gap-[180px]">
          <div className="flex flex-col gap-40">
            {displayCards[1] && <WhyCard {...displayCards[1]} className="translate-x-[10vw]" delay={100} />}
            {displayCards[0] && <WhyCard {...displayCards[0]} delay={250} />}
          </div>
          <div className="flex flex-col gap-40">
            {displayCards[2] && <WhyCard {...displayCards[2]} className="translate-x-[-10vw]" delay={400} />}
            {displayCards[3] && <WhyCard {...displayCards[3]} delay={550} />}
          </div>
        </div>

        <div className="flex lg:hidden flex-col gap-[30px] items-center w-full">
          {displayCards.map((card, index) => (
            <WhyCard key={card.number || index} {...card} delay={index * 150} />
          ))}
        </div>

        <div className="hidden lg:block absolute left-0 w-full z-3 h-[90px] pointer-events-none bg-gradient-to-b from-transparent to-[#040A0C] to-80%" />

        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: "url(/images/shared/gridbg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div
          className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[100rem] h-[100rem] z-0 pointer-events-none"
          style={{
            borderRadius: "99rem",
            background: "radial-gradient(41.31% 41.31% at 50% 50%, #49A6CC 0%, rgba(73, 166, 204, 0.00) 100%)",
          }}
        />
      </div>
    </CommonLayout>
  );
}
