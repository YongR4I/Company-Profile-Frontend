"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ToastProps {
  message: string | null;
}

export default function Toast({ message }: ToastProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!message || !mounted) return null;

  return createPortal(
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[9999] px-8 py-3 rounded-full bg-linear-to-b from-[#040B0D] from-6% via-[#337E9D] via-76% to-[#55C6CA] border border-[#122C37] text-white text-heading-h6 sm:text-heading-h5 shadow-lg transition-all duration-300 animate-[fadeInDown_0.3s_ease-out]">
      {message}
      <style>{`@keyframes fadeInDown{from{opacity:0;transform:translateY(-16px)}to{opacity:1;transform:translateY(0)}}`}</style>
    </div>,
    document.body,
  );
}
