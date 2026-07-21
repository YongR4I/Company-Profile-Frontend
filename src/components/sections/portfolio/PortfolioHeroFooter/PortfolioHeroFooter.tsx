"use client";

import CommonLayout from "@/components/layout/CommonLayout";
import React from "react";

interface PortfolioHeroFooterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
}

export default function PortfolioHeroFooter({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: PortfolioHeroFooterProps) {
  return (
    <CommonLayout
      className="bg-[#040A0C] flex flex-row items-center justify-between !h-auto py-8 border-b border-[#132731]"
      id="portfolio-hero-footer"
    >
      <div className="w-full flex flex-row items-center justify-between overflow-x-auto gap-8 pr-4 md:pr-8">
        {categories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`whitespace-nowrap transition-all duration-300 font-medium text-[clamp(16px,1.5vw,22px)] ${
                isActive
                  ? "bg-[#132731] hover:bg-[#1c3645] text-white px-8 md:px-10 py-3 rounded-full"
                  : "text-white hover:text-gray-300 underline underline-offset-[12px] decoration-1 px-2 py-3"
              }`}
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {category}
            </button>
          );
        })}
      </div>
    </CommonLayout>
  );
}
