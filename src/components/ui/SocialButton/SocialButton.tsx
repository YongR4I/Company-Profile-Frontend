"use client";

import Link from "next/link";
import React, { useState } from "react";
import Toast from "@/components/ui/Toast";

interface SocialButtonProps {
  href: string;
  "aria-label": string;
  children: React.ReactNode;
  copyValue?: string;
}

export default function SocialButton({
  href,
  "aria-label": ariaLabel,
  children,
  copyValue,
}: SocialButtonProps) {
  const [toast, setToast] = useState<string | null>(null);

  return (
    <>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        onClick={(e) => {
          if (!copyValue) return;
          e.preventDefault();
          navigator.clipboard.writeText(copyValue);
          setToast(`${ariaLabel} copied!`);
          setTimeout(() => setToast(null), 2000);
        }}
      >
        <div
          className="w-fit h-auto aspect-square p-2 rounded-full transition-colors duration-200 border border-white
            hover:bg-white hover:text-water-900"
        >
          {children}
        </div>
      </Link>

      <Toast message={toast} />
    </>
  );
}
