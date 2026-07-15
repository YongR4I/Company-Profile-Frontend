import CommonLayout from "@/components/layout/CommonLayout";
import TextReveal from "@/components/ui/TextReveal";
import React from "react";

interface AboutHeadlineProps {
  headline?: string;
  description?: string;
}

export default function AboutHeadline({ headline, description }: AboutHeadlineProps) {
  return (
    <CommonLayout id="about-headline" className="h-fit! flex flex-col md:flex-row items-start md:items-center justify-between mt-16 mb-8 md:mt-50 md:mb-30 py-5 gap-6 md:gap-12">
      <TextReveal
      variant="blur-in"
      as="h2"
      delay={1500}
      direction="right"
      length={40}
      className="text-3xl sm:text-4xl md:text-display-sub w-full max-w-[640px] font-medium text-white">
        {headline || "Technology That Grows With Your Business"}
      </TextReveal>
      <p className="text-body-large md:text-heading-h4 w-full max-w-[480px] text-gray-400">
        {description || "We create custom software, web platforms, and mobile applications that simplify workflows, improve business impact."}
      </p>
    </CommonLayout>
  );
}
