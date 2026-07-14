"use client";

import React, { useState } from "react";
import PortfolioHeroFooter from "./PortfolioHeroFooter";
import ProjectGrid from "./ProjectGrid";
import { PortfolioItem } from "@/types/portfolio";
import CommonLayout from "@/components/layout/CommonLayout";

interface PortfolioGridContainerProps {
  projects?: PortfolioItem[];
}

export default function PortfolioGridContainer({ projects }: PortfolioGridContainerProps) {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  // Handle empty state exactly as requested: explain why there's no content
  if (projects && projects.length === 0) {
    return (
      <CommonLayout className="h-fit! flex-col items-center justify-center py-32 text-center border-t border-[#132731]">
        <h3 className="text-2xl text-white font-medium mb-4">Portfolio Coming Soon</h3>
        <p className="text-gray-400 max-w-[600px]">
          We haven't added any projects to our portfolio in the CMS yet. Please check back later to see our latest work.
        </p>
      </CommonLayout>
    );
  }

  // Determine available categories
  // If projects is undefined, we use default categories just so the UI doesn't break
  const categories = projects
    ? ["All Projects", ...Array.from(new Set(projects.map((p) => p.category)))]
    : ["All Projects", "Company Profile", "E-Commerce", "CMS", "POS"];

  // Filter projects based on active category
  let filteredProjects = projects;
  if (projects && activeCategory !== "All Projects") {
    filteredProjects = projects.filter((p) => p.category === activeCategory);
  }

  return (
    <div className="w-full flex flex-col">
      <PortfolioHeroFooter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      {/* If filtering results in empty, we can just pass empty, ProjectGrid maps safely */}
      <ProjectGrid projects={filteredProjects} />
    </div>
  );
}
