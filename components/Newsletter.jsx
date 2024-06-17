import React from 'react'
import PerfectBanner from './PerfectBanner'

export default function Newsletter() {
  return (
    <div className='container mt-5 px-14 mb-10'>
      <div className='flex w-full space-x-14 text-justify'>
        <div className='w-1/3'>
          <p>
            Welcome to Macaron Magic - the home of great-tasting,
            luxurious macarons, made by hand here in our workshop in the
            Peak District.
          </p>
        </div>
        <div className='w-1/3'>
          <p>
            We have carefully chosen a select range of flavors for your
            delight, ready for you to enjoy - just imagine...biting into
            each one, where it
            practically melts in your mouth...yum!
          </p>
        </div>
        <div className='w-1/3'>
          <p>
            To start, browse over to our shop where you will see the full
            range available - we'll be adding more over time. If you have
            any questions, please do let us know - our contact details are
            at the bottom of this page.
          </p>
        </div>
      </div>
      <div className='flex space-x-14 w-full mt-5 mb-20'>
        <div className="flex space-x-5 w-1/2 items-center">
          <span>Name:</span>
          <input type="text" className='w-full outline-none border border-gray-300 rounded-md py-2 px-3 
          focus:border-blue-500 focus:ring-1 focus:ring-blue-500 duration-100' />
        </div>
        <div className="flex space-x-5 w-1/2 items-center">
          <span>Email:</span>
          <input type="text" className='w-full outline-none border border-gray-300 rounded-md py-2 px-3 
          focus:border-blue-500 focus:ring-1 focus:ring-blue-500 duration-100' />
        </div>
      </div>
      <PerfectBanner />
    </div>
  )
}
