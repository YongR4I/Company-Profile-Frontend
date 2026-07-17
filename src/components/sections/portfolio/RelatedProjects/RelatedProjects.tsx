import React from "react";
import Image from "next/image";
import Link from "next/link";
import CommonLayout from "@/components/layout/CommonLayout";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { PortfolioItem } from "@/types/portfolio";

interface RelatedProjectsProps {
  projects: PortfolioItem[];
}

export default function RelatedProjects({ projects }: RelatedProjectsProps) {
  if (projects.length === 0) return null;

  return (
    <CommonLayout className="h-fit! flex-col py-16 md:py-24 border-t border-[#132731]">
      <div className="w-full flex flex-col gap-10 md:gap-14">
        {/* Section heading */}
        <ScrollReveal delay={0} duration={500} direction="right">
          <div className="flex flex-col gap-3">
            <span
              className="text-gray-600 uppercase tracking-wider text-sm font-medium"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Explore More
            </span>
            <h2
              className="text-white font-medium tracking-tight"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "clamp(28px, 4vw, 48px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                textWrap: "balance",
              }}
            >
              Related Projects
            </h2>
          </div>
        </ScrollReveal>

        {/* Project cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 120} duration={500} direction="up">
              <Link
                href={`/portfolio/${project.slug}`}
                className="group block"
                style={{
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                {/* Card — press feedback */}
                <div className="flex flex-col gap-5 transition-transform duration-150 ease-out active:scale-[0.98]">
                  {/* Image */}
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
                    {/* Category badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm px-5 py-1.5 rounded-full">
                        {project.category}
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <h3 className="text-white text-xl md:text-2xl font-medium tracking-tight">
                        {project.title}
                      </h3>
                      <svg
                        width="20"
                        height="20"
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

                    <div className="flex flex-row flex-wrap gap-2">
                      {project.technologies?.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="border border-[#3A4A52] text-white/80 text-xs px-4 py-1.5 rounded-full transition-[border-color] duration-200 ease-out hover:border-water-400/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </CommonLayout>
  );
}
