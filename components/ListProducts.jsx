import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ListProducts({ data }) {

  return (
    <div>
      <div className="container p-10">
        <div className='grid grid-rows-2 grid-cols-3 gap-x-28 gap-y-10 w-full'>
          {
            data.map(p => (
              <div className='border border-gray-300 rounded-md p-10' key={p.id}>
                <Image src={`/images/products/${p.imageName}`} alt='image' width={300} height={300} className='ms-3'/>
                <h1 className='text-2xl'>{p.name}</h1>
                <hr className='my-3 border-gray-300'/>
                <p className='text-justify'>{p.details}</p>
                <hr className='my-3 border-gray-300'/>
                <div className='flex justify-between items-center'>
                  <span>$ {p.price}</span>
                  <Link href={`/products/${p.id}`} className='border rounded-md bg-green-500 py-1 px-10 text-black hover:bg-green-700 hover:text-white duration-100'>Details</Link>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
