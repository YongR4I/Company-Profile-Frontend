"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

interface WhyCardProps {
  number: string;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

export default function WhyCard({
  number,
  title,
  description,
  className = "",
  delay = 0,
}: WhyCardProps) {
  return (
    <ScrollReveal delay={delay} direction="up" duration={600}>
      <div
        className={`group relative w-full max-w-[430px] rounded-[20px] border border-[rgba(86,195,240,0.5)] bg-[radial-gradient(81.27%_109.27%_at_52.87%_100%,_rgba(145,216,245,0.9)_0%,_rgba(73,166,204,0.9)_41.09%,_rgba(73,166,204,0)_100%)] p-[25px] px-[20px] flex flex-col gap-[10px] transition-[border-color,transform,box-shadow] duration-300 ease-out hover:border-[rgba(86,195,240,0.8)] hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(86,195,240,0.15)] ${className}`}
      >
        <div className="flex items-start justify-between">
          <h3 className="text-heading-h4 text-white font-semibold max-w-3/5">
            {title}
          </h3>
          <span className="text-display-hero text-transparent bg-clip-text bg-linear-to-t from-transparent to-white font-bold leading-none transition-opacity duration-300 group-hover:opacity-80">
            {number}
          </span>
        </div>
        <p className="text-heading-h5 font-normal leading-tight tracking-tight text-ice-200 max-w-4/5">
          {description}
        </p>
      </div>
    </ScrollReveal>
  );
}
