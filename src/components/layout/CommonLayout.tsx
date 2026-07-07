import React from "react";
interface CommonLayoutProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

export default function CommonLayout({
  children,
  className,
  id,
  style,
}: CommonLayoutProps) {
  return (
    <section
      id={id}
      className={`h-screen w-full px-18 flex relative bg-water-900 ${className || ""}`}
      style={style}
    >
      {children}
    </section>
  );
}
