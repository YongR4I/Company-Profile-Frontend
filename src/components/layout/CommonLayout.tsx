import React from "react";
interface CommonLayoutProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function CommonLayout({
  children,
  className,
  id,
}: CommonLayoutProps) {
  return (
    <section
      id={id}
      className={`h-screen w-full px-18 ${className} flex relative bg-water-900`}
    >
      {children}
    </section>
  );
}
