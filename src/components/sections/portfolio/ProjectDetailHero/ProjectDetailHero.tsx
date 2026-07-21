"use client";

import React, { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import { PortfolioItem } from "@/types/portfolio";
import ProjectImageCarousel from "@/components/sections/portfolio/ProjectImageCarousel/ProjectImageCarousel";

interface ProjectDetailHeroProps {
  portfolio: PortfolioItem;
}

export default function ProjectDetailHero({ portfolio }: ProjectDetailHeroProps) {
  const [mounted, setMounted] = useState(false);

  const allImages =
    portfolio.images && portfolio.images.length > 0
      ? portfolio.images
      : [portfolio.imageUrl];

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="w-full flex flex-col gap-8 md:gap-12">
      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-2 text-sm"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(12px)",
          transition:
            "opacity 600ms cubic-bezier(0.23, 1, 0.32, 1), transform 600ms cubic-bezier(0.23, 1, 0.32, 1)",
          transitionDelay: "100ms",
        }}
      >
        <Link
          href="/portfolio"
          className="text-gray-400 hover:text-water-300 transition-[color] duration-200 ease-out uppercase tracking-wider font-medium"
        >
          Portfolio
        </Link>
        <span className="text-gray-600" aria-hidden="true">
          /
        </span>
        <span className="text-gray-500 uppercase tracking-wider font-medium">
          {portfolio.category}
        </span>
      </nav>

      {/* Image Carousel */}
      <ProjectImageCarousel
        images={allImages}
        title={portfolio.title}
        category={portfolio.category}
      />

      {/* Category badge — overlaid on carousel area via absolute positioning inside carousel, 
          but we also show it below for context on mobile */}
      <div
        className="md:hidden"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(8px)",
          transition:
            "opacity 500ms cubic-bezier(0.23, 1, 0.32, 1), transform 500ms cubic-bezier(0.23, 1, 0.32, 1)",
          transitionDelay: "350ms",
        }}
      >
        <span className="bg-white/5 border border-white/10 text-white/70 text-xs px-4 py-1.5 rounded-full">
          {portfolio.category}
        </span>
      </div>

      {/* Project Title + Date */}
      <div
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-8"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(16px)",
          transition:
            "opacity 600ms cubic-bezier(0.23, 1, 0.32, 1), transform 600ms cubic-bezier(0.23, 1, 0.32, 1)",
          transitionDelay: "400ms",
        }}
      >
        <h1
          className="text-white font-medium tracking-tight leading-[1.05]"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "clamp(32px, 5vw, 64px)",
            textWrap: "balance",
          }}
        >
          {portfolio.title}
        </h1>
        {portfolio.date && (
          <span className="text-gray-400 text-base md:text-lg shrink-0 tabular-nums pb-1">
            {portfolio.date}
          </span>
        )}
      </div>
    </div>
  );
}
