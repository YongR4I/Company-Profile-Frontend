"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

interface ProjectImageCarouselProps {
  images: string[];
  title: string;
  category: string;
}

export default function ProjectImageCarousel({
  images,
  title,
  category,
}: ProjectImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });
  const hasMulti = images.length > 1;

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  // Sync scroll position to active index
  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollLeft = el.scrollLeft;
    const slideWidth = el.offsetWidth;
    const index = Math.round(scrollLeft / slideWidth);
    setActiveIndex(Math.min(index, images.length - 1));
  }, [images.length]);

  // Navigate to a specific slide
  const goTo = useCallback(
    (index: number) => {
      const el = scrollRef.current;
      if (!el) return;
      const slideWidth = el.offsetWidth;
      el.scrollTo({ left: slideWidth * index, behavior: "smooth" });
    },
    []
  );

  // Drag-to-swipe handlers
  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (!hasMulti) return;
      const el = scrollRef.current;
      if (!el) return;
      setIsDragging(true);
      dragStart.current = { x: e.clientX, scrollLeft: el.scrollLeft };
      el.setPointerCapture(e.pointerId);
      el.style.cursor = "grabbing";
    },
    [hasMulti]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      const el = scrollRef.current;
      if (!el) return;
      const dx = e.clientX - dragStart.current.x;
      el.scrollLeft = dragStart.current.scrollLeft - dx;
    },
    [isDragging]
  );

  const onPointerUp = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      const el = scrollRef.current;
      if (!el) return;
      setIsDragging(false);
      el.style.cursor = "";
      el.releasePointerCapture(e.pointerId);
      // Snap to nearest slide
      const slideWidth = el.offsetWidth;
      const index = Math.round(el.scrollLeft / slideWidth);
      el.scrollTo({ left: slideWidth * index, behavior: "smooth" });
    },
    [isDragging]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && activeIndex < images.length - 1) {
        goTo(activeIndex + 1);
      } else if (e.key === "ArrowLeft" && activeIndex > 0) {
        goTo(activeIndex - 1);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, images.length, goTo]);

  return (
    <div className="w-full flex flex-col gap-4 md:gap-6">
      {/* Main carousel viewport */}
      <div
        className="relative w-full group/nav"
        style={{
          clipPath: mounted ? "inset(0 0 0 0)" : "inset(0 0 6% 0)",
          opacity: mounted ? 1 : 0,
          transition:
            "clip-path 900ms cubic-bezier(0.23, 1, 0.32, 1), opacity 700ms cubic-bezier(0.23, 1, 0.32, 1)",
          transitionDelay: "150ms",
        }}
      >
        {/* Slides container — CSS scroll-snap */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth rounded-[20px] md:rounded-[28px] outline outline-1 outline-white/[0.08] select-none"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
            cursor: hasMulti ? "grab" : "default",
          }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="relative w-full shrink-0 snap-center"
              style={{ aspectRatio: "16/9" }}
            >
              <Image
                src={src}
                alt={`${title} — ${category} ${i + 1}`}
                fill
                className="object-cover"
                priority={i === 0}
                unoptimized
                draggable={false}
              />
              {/* Subtle scale on active slide via CSS */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundColor: i === activeIndex ? "transparent" : "rgba(0,0,0,0.15)",
                  transition: "background-color 500ms cubic-bezier(0.23, 1, 0.32, 1)",
                }}
              />
            </div>
          ))}
        </div>

        {/* Hide scrollbar via inline style */}
        <style>{`
          .scrollbar-hide::-webkit-scrollbar { display: none; }
        `}</style>

        {/* Navigation arrows — only when multiple images */}
        {hasMulti && (
          <>
            <button
              onClick={() => goTo(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 md:w-12 md:h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/60 disabled:opacity-0 disabled:pointer-events-none transition-[opacity,background-color,color] duration-200 ease-out opacity-0 group-hover/nav:opacity-100"
              aria-label="Previous image"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => goTo(activeIndex + 1)}
              disabled={activeIndex === images.length - 1}
              className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 md:w-12 md:h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/60 disabled:opacity-0 disabled:pointer-events-none transition-[opacity,background-color,color] duration-200 ease-out opacity-0 group-hover/nav:opacity-100"
              aria-label="Next image"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </>
        )}

        {/* Image counter badge */}
        <div
          className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-10 bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 text-white/80 text-xs font-medium tabular-nums tracking-wider"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 500ms cubic-bezier(0.23, 1, 0.32, 1), transform 500ms cubic-bezier(0.23, 1, 0.32, 1)",
            transitionDelay: "600ms",
          }}
        >
          {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </div>

        {/* Bottom gradient for grounding */}
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black/30 to-transparent pointer-events-none rounded-[20px] md:rounded-[28px]" />
      </div>

      {/* Thumbnail strip — only when multiple images */}
      {hasMulti && (
        <div
          className="flex gap-2 md:gap-3 overflow-x-auto pb-1"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 600ms cubic-bezier(0.23, 1, 0.32, 1), transform 600ms cubic-bezier(0.23, 1, 0.32, 1)",
            transitionDelay: "400ms",
          }}
        >
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="relative shrink-0 w-16 h-12 md:w-24 md:h-16 rounded-[10px] md:rounded-[14px] overflow-hidden outline outline-1 transition-[outline-color,opacity] duration-300 ease-out"
              style={{
                outlineColor:
                  i === activeIndex
                    ? "rgba(255,255,255,0.5)"
                    : "rgba(255,255,255,0.08)",
                opacity: i === activeIndex ? 1 : 0.5,
              }}
              aria-label={`View image ${i + 1}`}
            >
              <Image
                src={src}
                alt={`${title} thumbnail ${i + 1}`}
                fill
                className="object-cover"
                unoptimized
                draggable={false}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
