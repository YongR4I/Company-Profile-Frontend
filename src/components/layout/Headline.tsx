import React from 'react';
import CommonLayout from './CommonLayout';



interface HeadlineProps {
  text?: string;
}

export default function Headline({ text }: HeadlineProps) {
  return (
    <CommonLayout
      id="headline"
      className="h-fit! flex flex-row items-center justify-between mt-30 mb-20 py-5"
    >
      <h2 className="text-display-sub w-150 font-medium">
        {text}
      </h2>
    </CommonLayout>
  );
}
