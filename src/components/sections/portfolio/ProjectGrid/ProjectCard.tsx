"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { PortfolioItem } from "@/types/portfolio";

interface ProjectCardProps {
  project: PortfolioItem;
  showRightBorder?: boolean;
  showBottomBorder?: boolean;
}

export default function ProjectCard({
  project,
  showRightBorder = false,
  showBottomBorder = false,
}: ProjectCardProps) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className={`group block p-8 md:p-12 lg:p-16 bg-transparent
        transition-all duration-300 ease-out
        hover:bg-white/5
        ${showRightBorder ? "md:border-r border-[#132731]" : ""}
        ${showBottomBorder ? "border-b border-[#132731]" : ""}
        @media(hover:hover){hover:border-water-600/40}
      `}
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      <div className="flex flex-col gap-6 transition-transform duration-150 ease-out active:scale-[0.98]">
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
  );
}
