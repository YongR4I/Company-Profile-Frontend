"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

interface SocialIconsRowProps {
  children: React.ReactNode;
}

export default function SocialIconsRow({ children }: SocialIconsRowProps) {
  return (
    <ScrollReveal delay={200} duration={500} direction="right">
      <div className="social-container w-full md:w-auto flex flex-row justify-start md:justify-end items-center gap-4">
        {children}
      </div>
    </ScrollReveal>
  );
}
