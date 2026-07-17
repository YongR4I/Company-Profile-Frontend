"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface ServiceRowProps {
  title: string;
  description: string;
  iconUrl: string;
  isLast?: boolean;
  delay?: number;
}

export default function ServiceRow({
  title,
  description,
  iconUrl,
  isLast = false,
  delay = 0,
}: ServiceRowProps) {
  return (
    <ScrollReveal delay={delay} duration={500} direction="up">
      <div className="flex flex-col bg-transparent group">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8 transition-[background-color] duration-300 ease-out md:-mx-4 md:px-4 md:py-3 md:rounded-xl md:hover:bg-white/[0.02]">
          {/* Title & Icon (Icon is mobile only) */}
          <div className="flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start w-full md:w-[220px] flex-shrink-0 gap-4">
            <h3 className="text-xl md:text-heading-h4 text-white font-medium md:whitespace-nowrap transition-colors duration-300 group-hover:text-water-300">
              {title}
            </h3>
            <div className="block md:hidden flex-shrink-0 transition-transform duration-300 ease-out group-hover:scale-110">
              <Image
                src={iconUrl || "/icons/services/Vector.svg"}
                alt={title}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
          </div>

          {/* Description - Center */}
          <div className="flex-1 flex md:justify-center">
            <p
              className="text-white/80 max-w-[420px] w-full"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "clamp(14px, 1.5vw, 16px)",
                lineHeight: 1.7,
              }}
            >
              {description}
            </p>
          </div>

          {/* Icon (Desktop only) */}
          <div className="hidden md:flex w-[80px] flex-shrink-0 justify-end transition-transform duration-300 ease-out group-hover:scale-110">
            <Image
              src={iconUrl || "/icons/services/Vector.svg"}
              alt={title}
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
        </div>
        {!isLast && (
          <div className="w-full h-px bg-white/20 mt-8 md:mt-20 transition-[background-color] duration-300 group-hover:bg-white/30" />
        )}
      </div>
    </ScrollReveal>
  );
}
