import CommonLayout from '@/components/layout/CommonLayout'
import React from 'react'

export default function AboutHeadline() {
  return (
    <CommonLayout id="about-headline" className='h-fit! flex flex-row items-center justify-between mt-50 mb-30 py-5'>
      <h2 className='text-display-sub w-160 font-medium'>Technology That Grows With Your Business</h2>
      <p className='text-heading-h4 w-120'>We create custom software, web platforms, and mobile applications that simplify workflows, improve business impact.</p>
    </CommonLayout>
  )
}
