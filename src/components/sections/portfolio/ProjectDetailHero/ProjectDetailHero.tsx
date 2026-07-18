"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { PortfolioItem } from "@/types/portfolio";

interface ProjectDetailHeroProps {
  portfolio: PortfolioItem;
}

export default function ProjectDetailHero({ portfolio }: ProjectDetailHeroProps) {
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger mount animations after first paint
    const frame = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div ref={heroRef} className="w-full flex flex-col gap-8 md:gap-12">
      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-2 text-sm"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 600ms cubic-bezier(0.23, 1, 0.32, 1), transform 600ms cubic-bezier(0.23, 1, 0.32, 1)",
          transitionDelay: "100ms",
        }}
      >
        <Link
          href="/portfolio"
          className="text-gray-400 hover:text-water-300 transition-[color] duration-200 ease-out uppercase tracking-wider font-medium"
        >
          Portfolio
        </Link>
        <span className="text-gray-600" aria-hidden="true">/</span>
        <span className="text-gray-500 uppercase tracking-wider font-medium">
          {portfolio.category}
        </span>
      </nav>

      {/* Hero Image with clip-path reveal */}
      <div
        className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[24px] overflow-hidden outline outline-1 outline-white/[0.08]"
        style={{
          clipPath: mounted ? "inset(0 0 0 0)" : "inset(0 0 6% 0)",
          opacity: mounted ? 1 : 0,
          transition: "clip-path 800ms cubic-bezier(0.23, 1, 0.32, 1), opacity 600ms cubic-bezier(0.23, 1, 0.32, 1)",
          transitionDelay: "200ms",
        }}
      >
        <Image
          src={portfolio.imageUrl}
          alt={portfolio.title}
          fill
          className="object-cover"
          priority
          unoptimized
        />
        {/* Bottom gradient for grounding */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

        {/* Category badge */}
        <div className="absolute top-5 left-5 md:top-8 md:left-8 z-10">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm px-6 py-2 rounded-full">
            {portfolio.category}
          </div>
        </div>
      </div>

      {/* Project Title + Date */}
      <div
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-8"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 600ms cubic-bezier(0.23, 1, 0.32, 1), transform 600ms cubic-bezier(0.23, 1, 0.32, 1)",
          transitionDelay: "350ms",
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
