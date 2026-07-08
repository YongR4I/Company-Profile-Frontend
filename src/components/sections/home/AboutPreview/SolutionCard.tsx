import Image from "next/image";
import React from "react";

interface SolutionCardProps {
  solution: {
    title: string;
    description: string;
    paddingTop: string;
    marginTop: string;
    icon: string;
  };
}

export default function SolutionCard({ solution }: SolutionCardProps) {
  return (
    <div
      className={`group w-full max-w-[512px] h-[594px] bg-water-900 border border-water-300/20 hover:border-water-300/40 rounded-[20px] pb-[30px] px-[25px] flex flex-col relative overflow-hidden mx-auto ${solution.marginTop} ${solution.paddingTop}`}
    >
      {/* The Text Content */}
      <div className="relative z-10 flex flex-col gap-[10px]">
        <h3 className="text-heading-h3 text-white font-semibold">
          {solution.title}
        </h3>
        <p className="text-heading-h4 text-[#d0d0d0]">{solution.description}</p>
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
          className="object-contain w-70 h-70 translate-y-1/4 pointer-events-none
                opacity-60 group-hover:opacity-90
                group-hover:translate-y-1/5 transition-transform duration-300"
        />
      </div>
    </div>
  );
}
