import React from 'react'
import newsletter from '../public/images/newsletter.jpg'
import perfect from '../public/images/perfect.jpg'
import Image from 'next/image'

export default function PerfectBanner() {
  return (
    <div>
      <div className='flex w-full space-x-14 mb-10'>
        <Image src={newsletter} width={500} height={500} alt='image' className='w-1/2 rounded-md' />
        <p className='leading-tight w-1/2 px-[70px] text-justify font-thin font-sans text-2xl'>
          Share the love and give every guest a little explosion of
          sweetness with our show-stopping macaron towers. Perfect for
          weddings, anniversaries and parties. You could even add a
          touch of luxury to party bags and wedding favors with these
          perfect bite-sized treats.
        </p>
      </div>
      <div className='flex w-full space-x-14'>
        <p className='leading-tight w-1/2 px-[70px] text-justify font-thin font-sans text-2xl'>
          Share the love and give every guest a little explosion of
          sweetness with our show-stopping macaron towers. Perfect for
          weddings, anniversaries and parties. You could even add a
          touch of luxury to party bags and wedding favors with these
          perfect bite-sized treats.
        </p>
        <Image src={perfect} width={413} height={513} alt='image' className='w-1/2 rounded' />
      </div>
    </div>
  )
}
