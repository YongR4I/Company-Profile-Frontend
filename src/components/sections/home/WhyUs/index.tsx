import CommonLayout from '@/components/layout/CommonLayout';
import React from 'react';

const whyCards = [
  {
    number: '1',
    title: 'Start with a Free Consultation',
    description:
      'Share your ideas with our team and discover the right digital solution for your business.',
  },
  {
    number: '2',
    title: "Let's Solve It Together",
    description:
      "Tell us your challenges, and we'll help you find the best technology solution.",
  },
  {
    number: '3',
    title: 'Your Project, Protected',
    description:
      'Build with confidence knowing your ideas and project remain strictly confidential.',
  },
  {
    number: '4',
    title: 'Get a Fast Response',
    description:
      'Reach out anytime and receive quick replies, clear communication, and timely updates.',
  },
];

function WhyCard({
  number,
  title,
  description,
  className,
}: {
  number: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full max-w-[430px] rounded-[20px] border border-[rgba(86,195,240,0.5)] bg-[radial-gradient(81.27%_109.27%_at_52.87%_100%,_rgba(145,216,245,0.9)_0%,_rgba(73,166,204,0.9)_41.09%,_rgba(73,166,204,0)_100%)] p-[25px] px-[20px] flex flex-col gap-[10px] ${className}`}
    >
      <div className="flex items-start justify-between">
        <h3 className="text-heading-h4 text-white font-semibold max-w-3/5">
          {title}
        </h3>
        <span className="text-display-hero text-transparent bg-clip-text bg-linear-to-t from-transparent to-white font-bold leading-none">
          {number}
        </span>
      </div>
      <p className="text-heading-h5 font-normal leading-tight tracking-tight text-ice-200 max-w-4/5">
        {description}
      </p>
    </div>
  );
}

export default function WhyUs() {
  return (
    <CommonLayout
      id="whyus-section"
      className="w-full justify-center overflow-hidden"
    >
        <div className="relative w-full z-1">
            {/* Desktop: Left and Right sections */}
            <div className="hidden md:flex flex-row items-center justify-between gap-[180px]">
            {/* Left Section */}
            <div className="flex flex-col gap-40">
                <WhyCard {...whyCards[1]} className="translate-x-[10vw]" />
                <WhyCard {...whyCards[0]} />
            </div>
            {/* Right Section */}
            <div className="flex flex-col gap-40">
                <WhyCard {...whyCards[2]} className="translate-x-[-10vw]" />
                <WhyCard {...whyCards[3]} />
            </div>
            </div>

        {/* Mobile: Single column */}
        <div className="flex md:hidden flex-col gap-[30px]">
          {whyCards.map((card) => (
            <WhyCard key={card.number} {...card} />
          ))}
        </div>

        <div className="absolute bottom-0 left-0 w-full z-3 h-[90px] pointer-events-none bg-gradient-to-b from-transparent to-[#040A0C] to-80%" />

        {/* Grid background */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: 'url(/images/gridbg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Circle light gradient */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[100rem] h-[100rem] z-0 pointer-events-none"
          style={{
            borderRadius: '99rem',
            background: 'radial-gradient(41.31% 41.31% at 50% 50%, #49A6CC 0%, rgba(73, 166, 204, 0.00) 100%)',
          }}
        />
      </div>
    </CommonLayout>
  );
}
