import CommonLayout from "@/components/layout/CommonLayout";
import React from "react";
import SolutionCard from "./SolutionCard";
import { SolutionItem } from "@/types/strapi";
import { toSolutionCard } from "@/lib/mappers";

const defaultSolutions = [
  {
    title: "Tailored Solutions",
    description: "Built around your business goals, workflows, and unique challenges.",
    marginTop: "md:mt-[109px]",
    paddingTop: "pt-[30px]",
    icon: "2Rectangle",
  },
  {
    title: "Modern Engineering",
    description: "Built with modern, scalable, and secure technologies.",
    marginTop: "md:mt-0",
    paddingTop: "pt-[30px]",
    icon: "2Saw",
  },
  {
    title: "Long-Term Partnership",
    description: "Your trusted partner from idea to long-term growth.",
    marginTop: "md:mt-[109px]",
    paddingTop: "pt-[30px]",
    icon: "2Arrow",
  },
];

interface AboutPreviewProps {
  items?: SolutionItem[];
}

export default function AboutPreview({ items }: AboutPreviewProps) {
  // Map strapi items to the format expected by SolutionCard if they exist
  const displaySolutions = items && items.length > 0
    ? items.map((item, index) => {
        const mapped = toSolutionCard(item);
        // Inject layout specifics
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
