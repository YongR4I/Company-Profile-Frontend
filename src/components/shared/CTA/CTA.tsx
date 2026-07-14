import CommonLayout from '@/components/layout/CommonLayout';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getCta } from '@/lib/strapi-services';

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
  );
}

export default async function CTA() {
  const ctaData = await getCta();

  const title = ctaData?.title || "Ready to Transform Your Business?";
  const description = ctaData?.description || "Our clients trust us to transform ideas into scalable digital solutions. Now it's your turn to build with confidence.";
  const buttonText = ctaData?.buttonText || "Let's Talk";
  const href = ctaData?.buttonHref || "/contact";

  return (
    <CommonLayout className="h-fit! px-6 sm:px-10 py-10 items-center justify-center">
      <div
        id="cta-div"
        className="w-full bg-linear-to-b from-[#040B0D] from-6% via-[#337E9D] via-76% to-[#55C6CA] rounded-[2.5rem] border border-[#122C37] overflow-hidden relative px-6 pt-10 sm:px-10"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between w-full relative z-10">
          {/* Left Content */}
          <div className="flex flex-col items-center text-center gap-8 lg:w-1/2 py-6 lg:py-0">
            <h2 className="text-white font-semibold text-[clamp(28px,5vw,56px)] leading-[1.05] tracking-[-1.12px] max-w-[744px]">
              {title}
            </h2>
            <p className="text-ice-300 text-[clamp(16px,1.8vw,24px)] leading-relaxed tracking-[-0.48px] max-w-[640px]">
              {description}
            </p>
            <Link
              href={href}
              className="group flex items-center gap-3 bg-white rounded-full px-8 py-4 transition-all duration-200 hover:bg-ice-100"
            >
              <span className="text-heading-h4 font-semibold text-water-600">
                {buttonText}
              </span>
              <ArrowOutwardIcon className="text-water-600 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Right Content - Character Image */}
          <div className="w-full lg:w-1/2 flex items-center justify-center relative h-[250px] sm:h-[300px] lg:h-[500px] mt-6 lg:mt-0">
            <Image
              src="/images/branding/whale.png"
              alt="Sabiru Mascot"
              fill
              className="object-contain lg:absolute lg:right-[-40px] lg:bottom-[-40px]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </CommonLayout>
  );
}
