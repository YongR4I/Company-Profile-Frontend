import { getTranslations } from "next-intl/server";
import CommonLayout from "@/components/layout/CommonLayout";
import ScrollReveal from "@/components/ui/ScrollReveal";
import React from "react";

interface MissionProps {
  label?: string;
  text?: string;
  locale?: string;
}

export default async function Mission({ label, text, locale }: MissionProps) {
  const t = await getTranslations({ locale: locale || "en", namespace: "about" });

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
            {label || t("missionLabel")}
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
            {text || t("missionText")}
          </p>
        </ScrollReveal>
      </div>
    </CommonLayout>
  );
}
