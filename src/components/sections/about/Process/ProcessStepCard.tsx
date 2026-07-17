"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

interface ProcessStepCardProps {
  number: string;
  title: string;
  description: string;
  marginTop: string;
  minHeight: string;
  delay?: number;
}

export default function ProcessStepCard({
  number,
  title,
  description,
  marginTop,
  minHeight,
  delay = 0,
}: ProcessStepCardProps) {
  return (
    <ScrollReveal delay={delay} duration={600} direction="up">
      <div
        className={`group relative bg-water-900 border border-water-300/30 p-8 md:p-10 flex flex-col w-full md:flex-1 shrink-0 transition-[border-color,box-shadow] duration-300 ease-out hover:border-water-300/60 hover:shadow-[0_0_24px_rgba(86,195,240,0.08)] ${marginTop} ${minHeight}`}
      >
        <div className="relative z-10 flex flex-col gap-4 md:gap-6">
          <h3
            className="text-white font-medium"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(28px, 3.5vw, 64px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </h3>
          <p
            className="text-[#d0d0d0]"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(16px, 1.8vw, 28px)",
              lineHeight: 1.4,
              fontWeight: 400,
            }}
          >
            {description}
          </p>
        </div>

        <span
          className="absolute bottom-4 md:bottom-6 right-4 md:right-6 text-transparent bg-clip-text bg-linear-to-b from-white to-transparent font-semibold leading-none pointer-events-none select-none transition-opacity duration-300 group-hover:opacity-70"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "clamp(80px, 8vw, 140px)",
          }}
        >
          {number}
        </span>
      </div>
    </ScrollReveal>
  );
}
