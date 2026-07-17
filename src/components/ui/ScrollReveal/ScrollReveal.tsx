"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

const directionMap = {
  up: "translateY(16px)",
  down: "translateY(-16px)",
  left: "translateX(16px)",
  right: "translateX(-16px)",
};

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 500,
  direction = "up",
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const initialTransform = directionMap[direction];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : initialTransform,
        transition: `opacity ${duration}ms cubic-bezier(0.23, 1, 0.32, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.23, 1, 0.32, 1) ${delay}ms`,
        willChange: isVisible ? undefined : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
