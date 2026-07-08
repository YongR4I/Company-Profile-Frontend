/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Image from "next/image";
import CommonLayout from "@/components/layout/CommonLayout";
import HeadlineChild from "@/components/shared/HeadlineChild";

const partners = [
  { id: 1, image: "/images/shared/partners/partner-1.png", isEmpty: false },
  { id: 2, image: "/images/shared/partners/partner-2.png", isEmpty: false },
  { id: "empty-1", image: "", isEmpty: true },
  { id: 3, image: "/images/shared/partners/partner-3.png", isEmpty: false },
  { id: 4, image: "/images/shared/partners/partner-4.png", isEmpty: false },
  { id: "empty-2", image: "", isEmpty: true },
  { id: 5, image: "/images/shared/partners/partner-5.png", isEmpty: false },
  { id: 6, image: "/images/shared/partners/partner-6.png", isEmpty: false },
  { id: "empty-3", image: "", isEmpty: true },
  { id: 7, image: "/images/shared/partners/partner-7.png", isEmpty: false },
  { id: 8, image: "/images/shared/partners/partner-8.png", isEmpty: false },
  { id: "empty-4", image: "", isEmpty: true },
];

export interface PartnersProps {
  title?: string;
  description?: string;
  autoplay?: boolean;
  speed?: number;
}

export default function Partners({
  title = "Partners in innovation",
  description = "Our clients trust us to transform ideas into scalable digital solutions. Now it's your turn to build with confidence.",
  autoplay: _autoplay = true,
  speed: _speed = 40,
}: PartnersProps) {
  return (
    <>
      <HeadlineChild className="flex flex-col items-start justify-start gap-5 mt-20 mb-10">
        <h2 className="text-display-sub w-150 font-medium">
          {title}
        </h2>
        {description && (
          <p className="text-heading-h4 text-gray-400 w-1/2">
            {description}
          </p>
        )}
      </HeadlineChild>

      <CommonLayout className="h-fit! px-10 py-10 items-center justify-center">
        <div className="relative w-full max-w-[1598px]">
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage: "url(/images/shared/gridbg.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
            {partners.map((partner) =>
              partner.isEmpty ? (
                <div
                  key={partner.id}
                  className="h-[243px] rounded-[20px] border border-transparent p-[10px]"
                />
              ) : (
                <div
                  key={partner.id}
                  className="h-[243px] rounded-[1.25rem] border border-water-600/70 p-[30px] flex items-center justify-center overflow-hidden hover:border-water-600 transition-all duration-300 bg-[radial-gradient(86.71%_79.65%_at_9.6%_100.14%,_#132F3B_0%,_#071115_100%)]
                  hover:bg-[radial-gradient(86.71%_79.65%_at_9.6%_100.14%,_#194152_0%,_#071115_100%)] hover:scale-105"
                >
                  <Image
                    src={partner.image}
                    alt={`Partner ${partner.id}`}
                    width={280}
                    height={180}
                    className="max-h-full w-auto object-contain"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </CommonLayout>
    </>
  );
}
