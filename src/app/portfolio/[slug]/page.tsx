import HeroHeader from "@/components/shared/HeroHeader";
import CTA from "@/components/shared/CTA";
import CommonLayout from "@/components/layout/CommonLayout";
import Image from "next/image";
import { getPortfolioBySlug } from "@/lib/strapi-services";
import { toPortfolioItem } from "@/lib/mappers";
import { notFound } from "next/navigation";
import React from "react";

interface PortfolioDetailProps {
  params: {
    slug: string;
  };
}

export default async function PortfolioDetailPage({ params }: PortfolioDetailProps) {
  const strapiPortfolio = await getPortfolioBySlug(params.slug);

  if (!strapiPortfolio) {
    notFound();
  }

  const portfolio = toPortfolioItem(strapiPortfolio);

  return (
    <div className="flex flex-col min-h-screen bg-water-900">
      <HeroHeader
        title={portfolio.title}
        subtitle={portfolio.category}
        variant="subpage"
      />

      <CommonLayout className="h-fit! flex-col py-16 md:py-24 gap-12 md:gap-20">
        {/* Main Image */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[24px] overflow-hidden">
          <Image
            src={portfolio.imageUrl}
            alt={portfolio.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Details and Description */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 w-full">
          {/* Left Column: Metadata */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            {portfolio.client && (
              <div className="flex flex-col gap-2 border-b border-[#132731] pb-6">
                <span className="text-gray-400 text-sm uppercase tracking-wider font-medium">Client</span>
                <span className="text-white text-xl">{portfolio.client}</span>
              </div>
            )}
            
            {portfolio.date && (
              <div className="flex flex-col gap-2 border-b border-[#132731] pb-6">
                <span className="text-gray-400 text-sm uppercase tracking-wider font-medium">Date</span>
                <span className="text-white text-xl">
                  {new Date(portfolio.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                  })}
                </span>
              </div>
            )}

            {portfolio.technologies && portfolio.technologies.length > 0 && (
              <div className="flex flex-col gap-4 pb-6">
                <span className="text-gray-400 text-sm uppercase tracking-wider font-medium">Technologies</span>
                <div className="flex flex-row flex-wrap gap-3">
                  {portfolio.technologies.map((tech, i) => (
                    <span key={i} className="border border-[#3A4A52] text-white text-sm px-5 py-2 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Description */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl text-white font-medium mb-4">About the Project</h2>
            <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
              {portfolio.description}
            </p>
          </div>
        </div>
      </CommonLayout>

      <CTA />
    </div>
  );
}
