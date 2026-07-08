"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

const INITIAL_VISIBLE = 4;

export default function ProjectGrid() {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = React.useRef<HTMLElement>(null);

  const handleShowLess = () => {
    setShowAll(false);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const visibleProjects = showAll
    ? portfolioData
    : portfolioData.slice(0, INITIAL_VISIBLE);

  return (
    <section ref={sectionRef} className="w-full bg-[#040A0C] border-t border-[#132731] relative">
      <div className={`relative overflow-hidden ${!showAll ? "pb-32" : ""}`}>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`p-8 md:p-12 lg:p-16 flex flex-col gap-6 bg-transparent hover:bg-white/5
                ${index % 2 === 0 ? "md:border-r border-[#132731]" : ""}
                ${index < Math.ceil(visibleProjects.length / 2) * 2 - 2 ? "border-b border-[#132731]" : ""}
              `}
            >
              <div className="relative w-full aspect-[4/3] rounded-[18px] overflow-hidden">
                <Image 
                  src={project.imageUrl} 
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-0 left-0 z-10">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm px-6 py-2 rounded-full">
                    {project.category}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
                  <div>
                    <h3 className="text-white text-[32px] font-medium tracking-tight">
                      {project.title}
                    </h3>
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
          ))}
        </div>

        {!showAll && portfolioData.length > INITIAL_VISIBLE && (
          <>
            <div className="absolute bottom-0 left-0 w-full h-48 pointer-events-none bg-gradient-to-b from-transparent to-[#040A0C]" />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
              <button
                onClick={() => setShowAll(true)}
                className="group flex items-center gap-3 text-white/70 hover:text-white transition-all duration-300 cursor-pointer"
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
                  className="transition-transform duration-300 group-hover:translate-y-1"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
            </div>
          </>
        )}

        {showAll && portfolioData.length > INITIAL_VISIBLE && (
          <div className="w-full flex justify-center py-16">
            <button
              onClick={handleShowLess}
              className="group flex items-center gap-3 text-white/70 hover:text-white transition-all duration-300 cursor-pointer"
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
                className="transition-transform duration-300 group-hover:-translate-y-1"
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
