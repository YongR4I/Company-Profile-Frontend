import { getTranslations } from "next-intl/server";
import CommonLayout from "@/components/layout/CommonLayout";
import React from "react";
import SolutionCard from "./SolutionCard";
import { SolutionItem } from "@/types/strapi";
import { toSolutionCard } from "@/lib/mappers";

interface AboutPreviewProps {
  items?: SolutionItem[];
  locale?: string;
}

export default async function AboutPreview({ items, locale }: AboutPreviewProps) {
  const t = await getTranslations({ locale: locale || "en", namespace: "home" });

  const defaultSolutions = [
    {
      title: t("solution1Title"),
      description: t("solution1Desc"),
      marginTop: "md:mt-[109px]",
      paddingTop: "pt-[30px]",
      icon: "2Rectangle",
    },
    {
      title: t("solution2Title"),
      description: t("solution2Desc"),
      marginTop: "md:mt-0",
      paddingTop: "pt-[30px]",
      icon: "2Saw",
    },
    {
      title: t("solution3Title"),
      description: t("solution3Desc"),
      marginTop: "md:mt-[109px]",
      paddingTop: "pt-[30px]",
      icon: "2Arrow",
    },
  ];

  const displaySolutions = items && items.length > 0
    ? items.map((item, index) => {
        const mapped = toSolutionCard(item);
        return {
          ...mapped,
          marginTop: index === 1 ? "md:mt-0" : "md:mt-[109px]",
          paddingTop: "pt-[30px]",
          icon: mapped.iconUrl || defaultSolutions[index]?.icon || "2Rectangle",
        };
      })
    : defaultSolutions;

  return (
    <CommonLayout
      id="about-section"
      className="h-fit! w-full flex justify-center"
    >
      <div className="max-w-[1598px] w-full grid grid-cols-1 md:grid-cols-3 gap-[30px] px-4 md:px-0">
        {displaySolutions.map((solution, index) => (
          <SolutionCard key={index} solution={solution} index={index} />
        ))}
      </div>
    </CommonLayout>
  );
}
