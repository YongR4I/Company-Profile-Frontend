import CommonLayout from "@/components/layout/CommonLayout";
import ScrollReveal from "@/components/ui/ScrollReveal";
import React from "react";

interface MissionProps {
  label?: string;
  text?: string;
}

export default function Mission({ label, text }: MissionProps) {
  return (
    <CommonLayout className="h-fit! flex-col items-start justify-center py-16 md:py-24">
      <div className="w-full text-left">
        <ScrollReveal delay={0} duration={500} direction="right">
          <span
            className="text-gray-600 tracking-tighter block mb-4 md:mb-6"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(18px, 2.5vw, 28px)",
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            {label || "Our Mission"}
          </span>
        </ScrollReveal>
        <ScrollReveal delay={150} duration={600} direction="up">
          <p
            className="text-white font-medium w-4/5 whitespace-pre-line"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(24px, 4vw, 56px)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            {text || (
              <>
                We build reliable, scalable digital solutions that empower businesses
                to innovate, adapt, and achieve sustainable growth.
                <br />
                <br />
                Our mission is to accelerate digital transformation through strategic
                thinking, modern engineering, and innovative technology—delivering
                measurable outcomes that create lasting business value.
              </>
            )}
          </p>
        </ScrollReveal>
      </div>
    </CommonLayout>
  );
}
