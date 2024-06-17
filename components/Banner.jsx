import React from 'react'
import './Banner.css'
import Link from 'next/link'

export default function Banner() {
  return (
    <div id='banner'>
      <div className='text-center'>
        <h1 className='mb-10 text-white font-extrabold text-7xl'>LUXERY MACARONS <br />MADE BY HAND</h1>
        <Link href='/products' className='rounded-md px-10 py-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black duration-100'>Shop Now</Link>
      </div>
    </div>
  )
}
