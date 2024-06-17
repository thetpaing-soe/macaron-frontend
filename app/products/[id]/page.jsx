import React from 'react'

export default function ProductDetails({params}) {

  return (
    <div>
      <h1 className='my-3 text-center text-3xl text-blue-500'>{params.id}</h1>
    </div>
  )
}
