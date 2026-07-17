import CommonLayout from "@/components/layout/CommonLayout";
import CTA from "@/components/shared/CTA";
import ProjectDetailHero from "@/components/sections/portfolio/ProjectDetailHero";
import RelatedProjects from "@/components/sections/portfolio/RelatedProjects";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getPortfolioBySlug, getPortfolios } from "@/lib/strapi-services";
import { toPortfolioItem } from "@/lib/mappers";
import { getRelatedProjects } from "@/lib/portfolio-utils";
import { portfolioData } from "@/data/portfolio";
import { notFound } from "next/navigation";
import React from "react";
import Link from "next/link";

interface PortfolioDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PortfolioDetailPage({ params }: PortfolioDetailProps) {
  const { slug } = await params;
  const strapiPortfolio = await getPortfolioBySlug(slug);

  // Use Strapi data if available, otherwise fallback to local portfolioData
  let portfolio;
  if (strapiPortfolio) {
    portfolio = toPortfolioItem(strapiPortfolio);
  } else {
    const localMatch = portfolioData.find((p) => p.slug === slug);
    if (!localMatch) {
      notFound();
    }
    portfolio = localMatch;
  }

  // Fetch all portfolios for related projects (fallback to local data)
  const allPortfolios = await getPortfolios();
  const allMapped = allPortfolios.length > 0
    ? allPortfolios.map(toPortfolioItem)
    : portfolioData;
  const relatedProjects = getRelatedProjects(
    portfolio.slug,
    portfolio.category,
    allMapped,
    2
  );

  return (
    <div className="flex flex-col min-h-screen bg-water-900">
      {/* Hero Section with animations */}
      <CommonLayout className="h-fit! flex-col pt-32 md:pt-40 pb-8 md:pb-12">
        <ProjectDetailHero portfolio={portfolio} />
      </CommonLayout>

      {/* Metadata + Description Section */}
      <CommonLayout className="h-fit! flex-col py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 w-full">
          {/* Left Column: Metadata */}
          <ScrollReveal delay={0} duration={500} direction="left">
            <aside className="w-full lg:w-[320px] xl:w-[360px] shrink-0 flex flex-col gap-0">
              {portfolio.client && (
                <div className="flex flex-col gap-2 border-b border-[#132731] py-6 first:pt-0">
                  <span
                    className="text-gray-500 text-xs uppercase tracking-[0.12em] font-medium"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Client
                  </span>
                  <span className="text-white text-lg font-medium">
                    {portfolio.client}
                  </span>
                </div>
              )}

              {portfolio.date && (
                <div className="flex flex-col gap-2 border-b border-[#132731] py-6">
                  <span
                    className="text-gray-500 text-xs uppercase tracking-[0.12em] font-medium"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Date
                  </span>
                  <span className="text-white text-lg tabular-nums">
                    {portfolio.date}
                  </span>
                </div>
              )}

              <div className="flex flex-col gap-2 border-b border-[#132731] py-6">
                <span
                  className="text-gray-500 text-xs uppercase tracking-[0.12em] font-medium"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Category
                </span>
                <span className="text-white text-lg">
                  {portfolio.category}
                </span>
              </div>

              {portfolio.technologies && portfolio.technologies.length > 0 && (
                <div className="flex flex-col gap-3 py-6">
                  <span
                    className="text-gray-500 text-xs uppercase tracking-[0.12em] font-medium"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Technologies
                  </span>
                  <div className="flex flex-row flex-wrap gap-2">
                    {portfolio.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="border border-[#3A4A52] text-white text-sm px-5 py-2 rounded-full transition-[border-color] duration-200 ease-out hover:border-water-400/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </ScrollReveal>

          {/* Right Column: Description */}
          <ScrollReveal delay={200} duration={600} direction="right">
            <div className="w-full flex flex-col gap-6 lg:pt-0">
              <h2
                className="text-2xl md:text-3xl lg:text-4xl text-white font-medium tracking-tight"
                style={{
                  fontFamily: "var(--font-inter)",
                  textWrap: "balance",
                }}
              >
                About the Project
              </h2>

              {/* Decorative accent line */}
              <div className="w-16 h-[2px] bg-gradient-to-r from-water-300 to-water-500 rounded-full" />

              <p
                className="text-gray-300 text-base md:text-lg leading-[1.75] whitespace-pre-line"
                style={{
                  fontFamily: "var(--font-inter)",
                  textWrap: "pretty",
                }}
              >
                {portfolio.description}
              </p>

              {/* Back to portfolio link */}
              <div className="mt-8 md:mt-12">
                <Link
                  href="/portfolio"
                  className="group/back inline-flex items-center gap-2 text-water-300 hover:text-water-200 transition-[color] duration-200 ease-out"
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
                    className="transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/back:-translate-x-1"
                  >
                    <path d="M19 12H5" />
                    <path d="m12 19-7-7 7-7" />
                  </svg>
                  <span className="text-sm font-medium tracking-wider uppercase">
                    Back to Portfolio
                  </span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </CommonLayout>

      {/* Related Projects */}
      <RelatedProjects projects={relatedProjects} />

      {/* CTA */}
      <CTA />
    </div>
  );
}
