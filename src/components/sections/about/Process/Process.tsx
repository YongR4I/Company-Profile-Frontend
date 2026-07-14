import CommonLayout from "@/components/layout/CommonLayout";
import React from "react";
import { ProcessStep as ProcessStepType } from "@/types/strapi";
import { toProcessStep } from "@/lib/mappers";

const defaultProcessSteps = [
  {
    number: "1",
    title: "Share Your Vision",
    description: "Tell us your goals, challenges, and project requirements.",
    marginTop: "md:mt-0",
    minHeight: "min-h-[500px] md:min-h-[600px]",
  },
  {
    number: "2",
    title: "Plan & Build",
    description: "We define the solution and begin development together.",
    marginTop: "md:mt-[40px]",
    minHeight: "min-h-[520px] md:min-h-[640px]",
  },
  {
    number: "3",
    title: "Review & Refine",
    description: "Test, improve, and perfect every detail before launch.",
    marginTop: "md:mt-[80px]",
    minHeight: "min-h-[540px] md:min-h-[680px]",
  },
  {
    number: "4",
    title: "Launch & Grow",
    description: "Go live with ongoing support for future growth.",
    marginTop: "md:mt-[120px]",
    minHeight: "min-h-[560px] md:min-h-[720px]",
  },
];

interface ProcessProps {
  label?: string;
  steps?: ProcessStepType[];
}

export default function Process({ label, steps }: ProcessProps) {
  const displaySteps = steps && steps.length > 0
    ? steps.map((step, index) => {
        const mapped = toProcessStep(step, index);
        return {
          ...mapped,
          marginTop: defaultProcessSteps[index]?.marginTop || "md:mt-0",
          minHeight: defaultProcessSteps[index]?.minHeight || "min-h-[500px]",
        };
      })
    : defaultProcessSteps;

  return (
    <CommonLayout className="h-fit! flex-col items-start justify-center py-16 md:py-24">
      <div className="w-full">
        <span
          className="text-gray-600 tracking-tighter block mb-12 md:mb-16"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "clamp(18px, 2.5vw, 28px)",
            fontWeight: 400,
            lineHeight: 1.2,
          }}
        >
          {label || "Our Process"}
        </span>

        <div className="relative flex flex-col md:flex-row md:items-start md:gap-0 overflow-x-auto no-scrollbar">
          {/* Connecting line */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-0 min-w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M 0.5,26 L 26.5,26 L 27.5,33 L 51.5,33 L 52.5,40 L 76.5,40 L 77.5,47 L 99.5,47"
              stroke="white"
              strokeWidth="0.15"
              fill="none"
            />
            <circle cx="0.5" cy="26" r="0.6" fill="white" />
            <circle cx="26.5" cy="26" r="0.6" fill="white" />
            <circle cx="27.5" cy="33" r="0.6" fill="white" />
            <circle cx="51.5" cy="33" r="0.6" fill="white" />
            <circle cx="52.5" cy="40" r="0.6" fill="white" />
            <circle cx="76.5" cy="40" r="0.6" fill="white" />
            <circle cx="77.5" cy="47" r="0.6" fill="white" />
            <circle cx="99.5" cy="47" r="0.6" fill="white" />
          </svg>

          {displaySteps.map((step) => (
            <div
              key={step.number}
              className={`group relative bg-water-900 border border-water-300/30 hover:border-water-300/60 p-8 md:p-10 flex flex-col w-full md:flex-1 shrink-0 ${step.marginTop} ${step.minHeight}`}
            >
              <div className="relative z-10 flex flex-col gap-4 md:gap-6">
                <h3
                  className="text-white font-medium"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "clamp(28px, 3.5vw, 64px)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-[#d0d0d0]"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "clamp(16px, 1.8vw, 28px)",
                    lineHeight: 1.4,
                    fontWeight: 400,
                  }}
                >
                  {step.description}
                </p>
              </div>

              <span
                className="absolute bottom-4 md:bottom-6 right-4 md:right-6 text-transparent bg-clip-text bg-linear-to-b from-white to-transparent font-semibold leading-none pointer-events-none select-none"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "clamp(80px, 8vw, 140px)",
                }}
              >
                {step.number}
              </span>
            </div>
          ))}
        </div>
      </div>
    </CommonLayout>
  );
}
