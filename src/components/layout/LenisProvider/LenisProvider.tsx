"use client";

import { ReactLenis } from "lenis/react";
import { type ReactNode } from "react";

export default function LenisProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{
      duration: 0.3,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      wheelMultiplier: 0.8,
      touchMultiplier: 0.8,
      gestureOrientation: "vertical",
      syncTouch: true,
    }}>
      {children}
    </ReactLenis>
  );
}
