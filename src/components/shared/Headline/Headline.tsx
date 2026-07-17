import React from 'react';
import CommonLayout from '@/components/layout/CommonLayout';
import TextReveal from '@/components/ui/TextReveal';

interface HeadlineProps {
  text?: string;
}

export default function Headline({ text }: HeadlineProps) {
  return (
    <CommonLayout
      id="headline"
      className="h-fit! flex flex-row items-center justify-between mt-16 mb-8 md:mt-30 md:mb-20 py-5"
    >
      <TextReveal
        variant="blur-in"
        as="h2"
        delay={500}
        direction="right"
        length={40}
        className="text-3xl sm:text-4xl md:text-display-sub w-full max-w-[600px] font-medium text-white"
      >
        {text}
      </TextReveal>
    </CommonLayout>
  );
}
