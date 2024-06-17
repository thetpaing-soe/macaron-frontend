import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='mb-3'>
      <h1 className='text-center text-4xl mt-5 underline underline-offset-[16px] 
      decoration-red-300 decoration-1 tracking-wide'>Mangez Macarons</h1>
      <div className='flex space-x-5 justify-center items-center mt-3'>
        <Link href='/' className='text-gray-500'>Home</Link>
        <Link href='#' className='text-gray-500'>About</Link>
        <Link href='/products' className='text-gray-500'>Shop</Link>
        <Link href='#' className='text-gray-500'>Contact</Link>
      </div>
    </div>
  )
}
