import React from 'react';
import CommonLayout from '@/components/layout/CommonLayout';

interface HeadlineChildProps {
  children: React.ReactNode;
  className?: string;
}

export default function HeadlineChild({ children, className }: HeadlineChildProps) {
  return (
    <CommonLayout
      id="headline"
      className={`${className || ''} h-fit! flex items-center justify-between py-5`}
    >
      {children}
    </CommonLayout>
  );
}
