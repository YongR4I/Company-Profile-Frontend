import React from "react";
import CommonLayout from "@/components/layout/CommonLayout";
import TextReveal from "@/components/ui/TextReveal";
import ScrollReveal from "@/components/ui/ScrollReveal";

export interface HeroHeaderProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  variant?: "home" | "portfolio" | "subpage";
  backgroundImage?: string;
}

export default function HeroHeader({
  title,
  subtitle,
  variant = "subpage",
  backgroundImage = "/images/sections/hero/Hero.png",
}: HeroHeaderProps) {
  if (variant === "home") {
    return (
      <section
        className="min-h-[calc(100dvh-10rem)] w-full bg-cover bg-center bg-no-repeat flex items-center top-0 left-0 px-6 sm:px-12 md:px-16 relative py-20"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className="absolute bottom-0 left-0 w-full h-[171px] pointer-events-none bg-gradient-to-b from-transparent to-[#040A0C] to-80%" />
        <div className="w-full relative z-10">
          <TextReveal
            variant="blur-in"
            as="h1"
            delay={300}
            direction="bottom"
            length={40}
            delayMode="line"
            className="text-white font-medium text-[clamp(28px,7.5vw,80px)] tracking-tight leading-[1.1] sm:leading-[1.1] whitespace-pre-line"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {title}
          </TextReveal>
        </div>
      </section>
    );
  }

  if (variant === "portfolio") {
    return (
      <CommonLayout
        className="!min-h-[calc(100dvh-10rem)] max-sm:!min-h-[calc(100dvh-30rem)] !bg-cover !bg-center !bg-no-repeat items-end justify-start !px-4 md:!px-18 pb-[80px]"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-water-900/60 mix-blend-multiply" />
        <div className="absolute bottom-0 left-0 w-full h-[300px] pointer-events-none bg-gradient-to-b from-transparent to-[#040A0C] to-90%" />
        <div className="w-full relative z-10 text-left flex flex-col justify-end h-full">
          <ScrollReveal delay={200} duration={700} direction="up">
            <h1
              className="text-white font-bold text-[clamp(60px,10vw,120px)] tracking-tighter leading-[0.9] whitespace-pre-line"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {title}
            </h1>
          </ScrollReveal>
        </div>
      </CommonLayout>
    );
  }

  // Default: subpage
  return (
    <CommonLayout className="!h-[300px] md:!h-[381px] !bg-water-900 items-end justify-center">
      <div className="w-full relative z-10 text-center flex flex-col items-center gap-2">
        {subtitle && (
          <TextReveal
          variant="blur-in"
          as="span"
          delay={300}
          direction="bottom"
          length={40}
          delayMode="line"
            className="text-white tracking-tighter"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(18px, 2.5vw, 28px)",
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            {subtitle}
          </TextReveal>
        )}
        <ScrollReveal delay={400} duration={600} direction="up">
          <h1
            className="text-white font-medium italic tracking-tight leading-[1.1] whitespace-pre-line"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(32px, 5vw, 72px)",
            }}
          >
            {title}
          </h1>
        </ScrollReveal>
      </div>
    </CommonLayout>
  );
}
