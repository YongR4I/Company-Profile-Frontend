"use client";

import React from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface Partner {
  name: string;
  logoUrl?: string;
  websiteUrl?: string;
}

interface PartnerGridProps {
  partners: Partner[];
}

export default function PartnerGrid({ partners }: PartnerGridProps) {
  return (
    <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-[15px] sm:gap-[20px]">
      {partners.map((partner, index) => {
        const card = (
          <ScrollReveal delay={index * 80} duration={500} direction="up">
            <div
              className="group h-[120px] sm:h-[180px] lg:h-[243px] rounded-[1.25rem] border border-water-600/70 p-[15px] sm:p-[30px] flex items-center justify-center overflow-hidden transition-[border-color,transform,background] duration-300 ease-out hover:border-water-600 hover:scale-[1.03] bg-[radial-gradient(86.71%_79.65%_at_9.6%_100.14%,_#132F3B_0%,_#071115_100%)] hover:bg-[radial-gradient(86.71%_79.65%_at_9.6%_100.14%,_#194152_0%,_#071115_100%)]"
            >
              {partner.logoUrl ? (
                <Image
                  src={partner.logoUrl}
                  alt={partner.name}
                  width={280}
                  height={180}
                  className="max-h-full w-auto object-contain transition-transform duration-300 ease-out group-hover:scale-105"
                  unoptimized={partner.logoUrl.startsWith("http")}
                />
              ) : (
                <span className="text-gray-500 text-sm">{partner.name}</span>
              )}
            </div>
          </ScrollReveal>
        );

        return partner.websiteUrl ? (
          <a
            key={index}
            href={partner.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            {card}
          </a>
        ) : (
          <React.Fragment key={index}>{card}</React.Fragment>
        );
      })}
    </div>
  );
}
