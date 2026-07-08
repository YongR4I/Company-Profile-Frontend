import CommonLayout from "@/components/layout/CommonLayout";
import React from "react";

export default function AboutHeadline() {
  return (
    <CommonLayout id="about-headline" className="h-fit! flex flex-col md:flex-row items-start md:items-center justify-between mt-16 mb-8 md:mt-50 md:mb-30 py-5 gap-6 md:gap-12">
      <h2 className="text-3xl sm:text-4xl md:text-display-sub w-full max-w-[640px] font-medium text-white">
        Technology That Grows With Your Business
      </h2>
      <p className="text-body-large md:text-heading-h4 w-full max-w-[480px] text-gray-400">
        We create custom software, web platforms, and mobile applications that simplify workflows, improve business impact.
      </p>
    </CommonLayout>
  );
}
