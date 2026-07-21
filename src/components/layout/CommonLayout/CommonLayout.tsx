import React from "react";

interface CommonLayoutProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

export default function CommonLayout({
  children,
  className = "",
  id,
  style,
}: CommonLayoutProps) {
  const hasHeight = className.includes("h-") || className.includes("min-h-");
  const defaultHeight = hasHeight ? "" : "min-h-[100dvh]";

  return (
    <section
      id={id}
      className={`w-full px-6 sm:px-12 md:px-18 flex relative bg-water-900 ${defaultHeight} ${className}`}
      style={style}
    >
      {children}
    </section>
  );
}
