"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { PortfolioItem } from "@/types/portfolio";

const INITIAL_VISIBLE = 4;

interface ProjectGridProps {
  projects?: PortfolioItem[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
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
            <Link
              key={project.id}
              href={`/portfolio/${project.slug}`}
              className={`group block p-8 md:p-12 lg:p-16 bg-transparent
                transition-[border-color] duration-300 ease-out
                ${index % 2 === 0 ? "md:border-r border-[#132731]" : ""}
                ${index < Math.ceil(visibleProjects.length / 2) * 2 - 2 ? "border-b border-[#132731]" : ""}
                @media(hover:hover){hover:border-water-600/40}
              `}
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              {/* Card inner — scale on press */}
              <div className="flex flex-col gap-6 transition-transform duration-150 ease-out active:scale-[0.98]">
                {/* Image container */}
                <div className="relative w-full aspect-[4/3] rounded-[18px] overflow-hidden bg-[#0a1a20] outline outline-1 outline-white/[0.08]">
                  {project.imageUrl ? (
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04]"
                      unoptimized
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-sm">
                      No Image
                    </div>
                  )}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm px-6 py-2 rounded-full">
                      {project.category}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
                    <div className="flex items-center gap-3">
                      <h3 className="text-white text-[32px] font-medium tracking-tight">
                        {project.title}
                      </h3>
                      {/* Arrow hint — visible on hover */}
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-water-300 opacity-0 -translate-x-2 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:opacity-100 group-hover:translate-x-0 shrink-0 hidden md:block"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>
                    <div className="flex flex-row flex-wrap gap-3">
                      {project.technologies?.slice(0, 2).map((tech, i) => (
                        <span key={i} className="border border-[#3A4A52] text-white text-sm px-5 py-2 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-400 text-[16px] leading-relaxed max-w-[90%]">
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
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
                <span className="text-sm font-medium tracking-wider uppercase">See More</span>
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
              <span className="text-sm font-medium tracking-wider uppercase">Show Less</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
