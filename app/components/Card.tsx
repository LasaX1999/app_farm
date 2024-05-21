'use client'
import Image from 'next/image'
import React from 'react'
import image1 from '@/public/farm-bg.jpg'


function Card() {
  return (
    <div className='relative shadow-md max-w-sm cursor-pointer'>
        <div className='relative  overflow-hidden aspect-ratio-1 hover:scale-105 transition-transform duration-300'>

            <Image src={image1} className=' object-cover' alt={'pics'}/>

        </div>

        <div className='p-4 space-y-2'>
            <h1 className='text-2xl '>Vegitable Item 1</h1>
            <p className='text-xl text-gray-600'>Description of the Vegitable</p>
            <br />
          
        </div>

        <div className=' absolute bottom-0 right-0 p-2 shadow-sm'>
            <span className='text-orange-600 text-lg font-semibold'>Rs.1200</span>

        </div>
    </div>



  )
}

export default Card