import Image from "next/image";
import React from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface SolutionCardProps {
  solution: {
    title: string;
    description: string;
    paddingTop: string;
    marginTop: string;
    icon: string;
  };
  index?: number;
}

export default function SolutionCard({ solution, index = 0 }: SolutionCardProps) {
  return (
    <ScrollReveal delay={index * 150} duration={600} direction="up">
      <div
        className={`group w-full max-w-[512px] h-[450px] sm:h-[480px] md:h-[594px] bg-water-900 border border-water-300/20 rounded-[20px] pb-[30px] px-[25px] flex flex-col relative overflow-hidden mx-auto transition-[border-color,transform] duration-300 ease-out hover:border-water-300/40 hover:scale-[1.01] ${solution.marginTop} ${solution.paddingTop}`}
      >
      {/* The Text Content */}
      <div className="relative z-10 flex flex-col gap-[10px]">
        <h3 className="text-2xl md:text-heading-h3 text-white font-semibold">
          {solution.title}
        </h3>
        <p className="text-body-large md:text-heading-h4 text-[#d0d0d0] leading-relaxed">{solution.description}</p>
      </div>

      {/* Background vector glow */}
      <Image
        src="/images/sections/about/BlueFire.svg"
        alt=""
        fill
        className="absolute bottom-0 left-0 w-full h-auto z-0 pointer-events-none translate-y-1/4 
              opacity-80 group-hover:opacity-100
              group-hover:translate-y-1/5 transition-transform duration-1000 delay-30"
      />
      {/* icons */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <Image
          src={`/icons/ui/${solution.icon}.svg`}
          alt=""
          width={320}
          height={320}
          className="object-contain w-52 h-52 md:w-70 md:h-70 translate-y-1/4 pointer-events-none
                opacity-60 group-hover:opacity-90
                group-hover:translate-y-1/5 transition-transform duration-300"
        />
      </div>
      </div>
    </ScrollReveal>
  );
}
