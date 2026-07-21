"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { portfolioData } from "@/data/portfolio";
import { PortfolioItem } from "@/types/portfolio";
import ProjectCard from "./ProjectCard";

const INITIAL_VISIBLE = 4;

interface ProjectGridProps {
  projects?: PortfolioItem[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const t = useTranslations("portfolio");
  const [showAll, setShowAll] = useState(false);
  const sectionRef = React.useRef<HTMLElement>(null);

  const handleShowLess = () => {
    setShowAll(false);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Use passed projects or fallback to default data
  const displayProjects = projects ?? portfolioData;

  const visibleProjects = showAll
    ? displayProjects
    : displayProjects.slice(0, INITIAL_VISIBLE);

  return (
    <section ref={sectionRef} className="w-full bg-[#040A0C] border-t border-[#132731] relative">
      <div className={`relative overflow-hidden ${!showAll ? "pb-32" : ""}`}>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              showRightBorder={index % 2 === 0}
              showBottomBorder={index < Math.ceil(visibleProjects.length / 2) * 2 - 2}
            />
          ))}
        </div>

        {!showAll && displayProjects.length > INITIAL_VISIBLE && (
          <>
            <div className="absolute bottom-0 left-0 w-full h-48 pointer-events-none bg-gradient-to-b from-transparent to-[#040A0C]" />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
              <button
                onClick={() => setShowAll(true)}
                className="group/btn flex items-center gap-3 text-white/70 hover:text-white transition-[color] duration-300 cursor-pointer active:scale-[0.96]"
              >
                <span className="text-sm font-medium tracking-wider uppercase">{t("seeMore")}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover/btn:translate-y-1"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
            </div>
          </>
        )}

        {showAll && displayProjects.length > INITIAL_VISIBLE && (
          <div className="w-full flex justify-center py-16">
            <button
              onClick={handleShowLess}
              className="group/btn flex items-center gap-3 text-white/70 hover:text-white transition-[color] duration-300 cursor-pointer active:scale-[0.96]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover/btn:-translate-y-1"
              >
                <polyline points="18 15 12 9 6 15" />
              </svg>
              <span className="text-sm font-medium tracking-wider uppercase">{t("showLess")}</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
