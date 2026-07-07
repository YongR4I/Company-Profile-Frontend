import CommonLayout from '@/components/layout/CommonLayout'
import Link from 'next/link'
import React from 'react'

function ArrowOutwardIcon({ className }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5.25 3.75L14.25 3.75L14.25 12.75"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.25 3.75L3.75 14.25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function CTA() {
  return (
    <CommonLayout className="h-fit! px-10 py-10 items-center justify-center">
    <div
      id="cta-div"
      className="w-full bg-linear-to-b from-[#040B0D] from-6% via-[#337E9D] via-76% to-[#55C6CA] rounded-[2.5rem] border border-[#122C37] overflow-hidden relative px-10 py-10"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full relative z-10">
        {/* Left Content */}
        <div className="flex flex-col items-center text-center gap-8 md:w-1/2 py-10 md:py-0">
          <h2 className="text-white font-semibold text-[clamp(32px,5vw,56px)] leading-[1.05] tracking-[-1.12px] max-w-[744px]">
            Ready to Transform Your <br />
            <span className="italic">Business?</span>
          </h2>
          <p className="text-ice-300 text-[clamp(16px,2vw,24px)] leading-[32px] tracking-[-0.48px] max-w-[640px]">
            Our clients trust us to transform ideas into scalable digital solutions. Now it&apos;s your turn to build with confidence.
          </p>
          <Link
            href="/contact"
            className="group flex items-center gap-3 bg-white rounded-full px-8 py-4 transition-all duration-200 hover:bg-ice-100"
          >
            <span className="text-heading-h4 font-semibold text-water-600">
              Let&apos;s Talk
            </span>
            <ArrowOutwardIcon className="text-water-600 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Right Content - Character Image */}
        <div className="md:w-1/2 flex items-center justify-center relative h-[300px] md:h-[500px]">
          <img
            src="/images/whalesabiru.png"
            alt="Sabiru Mascot"
            className="object-contain h-full w-auto md:absolute md:right-[-40px] md:bottom-[-40px]"
          />
        </div>
      </div>

    </div>
    </CommonLayout>
  )
}
