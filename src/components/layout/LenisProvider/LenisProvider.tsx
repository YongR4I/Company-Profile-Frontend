"use client";

import { useEffect, type ReactNode } from "react";

interface LocomotiveProviderProps {
  children: ReactNode;
}

export default function LocomotiveProvider({ children }: LocomotiveProviderProps) {
  useEffect(() => {
    let locomotiveScroll: import("locomotive-scroll").default | null = null;

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      locomotiveScroll = new LocomotiveScroll({
        // v5 uses native scroll — no wrapper element needed.
        // All options are passed directly to its internal Lenis instance.
        lenisOptions: {
          duration: 1.2,
          easing: (t: number) => 1 - Math.pow(1 - t, 3),
          wheelMultiplier: 1.0,
          syncTouch: false,
          touchMultiplier: 1.5,
        },
      });
    })();

    return () => {
      locomotiveScroll?.destroy();
    };
  }, []);

  // Pure behavior — no wrapper DOM element, no layout changes.
  return <>{children}</>;
}
