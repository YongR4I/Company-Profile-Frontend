import HeadlineChild from '@/components/layout/HeadlineChild';
import React from 'react';

export default function PartnersHeadline() {
  return (
    <HeadlineChild className="flex flex-col items-start justify-start gap-5 mt-20 mb-10">
      <h2 className="text-display-sub w-150 font-medium">
        Partners in innovation
      </h2>
      <p className="text-heading-h4 text-gray-400 w-1/2">
        Our clients trust us to transform ideas into scalable digital solutions.
        Now it's your turn to build with confidence.
      </p>
    </HeadlineChild>
  );
}
