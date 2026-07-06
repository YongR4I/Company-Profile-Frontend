import CommonLayout from "@/components/layout/CommonLayout";
import Image from "next/image";
import React from "react";
import SolutionCard from "./SolutionCard";

const solutions = [
  {
    title: "Tailored Solutions",
    description:
      "Built around your business goals, workflows, and unique challenges.",
    marginTop: "md:mt-[109px]",
    paddingTop: "pt-[30px]",
    icon: "2Rectangle"
  },
  {
    title: "Modern Engineering",
    description: "Built with modern, scalable, and secure technologies.",
    marginTop: "md:mt-0",
    paddingTop: "pt-[30px]",
    icon: "2Saw"
  },
  {
    title: "Long-Term Partnership",
    description: "Your trusted partner from idea to long-term growth.",
    marginTop: "md:mt-[109px]",
    paddingTop: "pt-[30px]",
    icon: "2Arrow"
  },
];

export default function AboutSection() {
  return (
    <CommonLayout
      id="about-section"
      className="h-fit! w-full flex justify-center"
    >
      <div className="max-w-[1598px] w-full grid grid-cols-1 md:grid-cols-3 gap-[30px] px-4 md:px-0">
        {solutions.map((solution, index) => (
          <SolutionCard key={index} solution={solution} />
        ))}
      </div>
    </CommonLayout>
  );
}
