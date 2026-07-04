import Link from "next/link";
import React from "react";

interface SocialButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function SocialButton({ href, children }: SocialButtonProps) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <div
        className="w-fit h-auto aspect-square p-2 rounded-full transition-colors duration-200 border border-white
          hover:bg-white hover:text-water-900"
      >
        {children}
      </div>
    </Link>
  );
}
