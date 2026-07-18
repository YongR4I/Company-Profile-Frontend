import { getTranslations } from "next-intl/server";
import CommonLayout from '@/components/layout/CommonLayout';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import React from 'react';
import { getCta } from '@/lib/strapi-services';
import ScrollReveal from '@/components/ui/ScrollReveal';

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

interface CTAProps {
  locale?: string;
}

export default async function CTA({ locale }: CTAProps) {
  const t = await getTranslations({ locale: locale || "en", namespace: "common" });
  const ctaData = await getCta(locale);

  const title = ctaData?.title || t("ctaTitle");
  const description = ctaData?.description || t("ctaDescription");
  const buttonText = ctaData?.buttonText || t("ctaButton");
  const href = ctaData?.buttonHref || "/contact";

  return (
    <CommonLayout className="h-fit! px-6 sm:px-10 py-10 items-center justify-center">
      <ScrollReveal delay={0} duration={700} direction="up" className="w-full max-w-[1598px]">
        <div
          id="cta-div"
          className="w-full bg-linear-to-b from-[#040B0D] from-6% via-[#337E9D] via-76% to-[#55C6CA] rounded-[2.5rem] border border-[#122C37] overflow-hidden relative px-6 pt-10 sm:px-10 transition-[box-shadow] duration-300 ease-out hover:shadow-[0_8px_40px_rgba(85,198,202,0.1)]"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between w-full relative z-10">
            <div className="flex flex-col items-center text-center gap-8 lg:w-1/2 py-6 lg:py-0">
              <h2 className="text-white font-semibold text-[clamp(28px,5vw,56px)] leading-[1.05] tracking-[-1.12px] max-w-[744px]">
                {title}
              </h2>
              <p className="text-ice-300 text-[clamp(16px,1.8vw,24px)] leading-relaxed tracking-[-0.48px] max-w-[640px]">
                {description}
              </p>
              <Link
                href={href}
                className="group flex items-center gap-3 bg-white rounded-full px-8 py-4 transition-[background-color,transform] duration-200 ease-out hover:bg-ice-100 active:scale-95"
              >
                <span className="text-heading-h4 font-semibold text-water-600">
                  {buttonText}
                </span>
                <ArrowOutwardIcon className="text-water-600 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <div className="w-full lg:w-1/2 flex items-center justify-center relative h-[250px] sm:h-[300px] lg:h-[500px] mt-6 lg:mt-0">
              <Image
                src="/images/branding/whale.png"
                alt="Sabiru Mascot"
                fill
                className="object-contain lg:absolute lg:right-[-40px] lg:bottom-[-100px] translate-y-4 animate-[float_6s_ease-in-out_infinite]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </CommonLayout>
  );
}
