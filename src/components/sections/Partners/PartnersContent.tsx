import CommonLayout from '@/components/layout/CommonLayout'
import Image from 'next/image'
import React from 'react'

const partners = [
  { id: 1, image: '/images/partners/partner-1.png', isEmpty: false },
  { id: 2, image: '/images/partners/partner-2.png', isEmpty: false },
  { id: 'empty-1', image: '', isEmpty: true },
  { id: 3, image: '/images/partners/partner-3.png', isEmpty: false },
  { id: 4, image: '/images/partners/partner-4.png', isEmpty: false },
  { id: 'empty-2', image: '', isEmpty: true },
  { id: 5, image: '/images/partners/partner-5.png', isEmpty: false },
  { id: 6, image: '/images/partners/partner-6.png', isEmpty: false },
  { id: 'empty-3', image: '', isEmpty: true },
  { id: 7, image: '/images/partners/partner-7.png', isEmpty: false },
  { id: 8, image: '/images/partners/partner-8.png', isEmpty: false },
  { id: 'empty-4', image: '', isEmpty: true },
]

export default function PartnersContent() {
  return (
    <CommonLayout className="h-fit! px-10 py-10 items-center justify-center">
      <div className="relative w-full max-w-[1598px]">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: 'url(/images/gridbg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
          {partners.map((partner) =>
            partner.isEmpty ? (
              <div
                key={partner.id }
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
  )
}
