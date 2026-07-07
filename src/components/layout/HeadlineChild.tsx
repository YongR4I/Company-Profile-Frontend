import React from 'react';
import CommonLayout from './CommonLayout';

interface HeadlineChildProps {
  children: React.ReactNode;
  className?: string;
}

export default function HeadlineChild({ children, className }: HeadlineChildProps) {
  return (
    <CommonLayout
      id="headline"
      className={`${className || ''} h-fit! flexitems-center justify-between mt-50 mb-30 py-5`}
    >
      {children}
    </CommonLayout>
  );
}
