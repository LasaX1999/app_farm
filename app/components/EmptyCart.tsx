import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function EmptyCart() {
  return (
    <main>
        <div className=' font-lato flex flex-col justify-cente items-center gap-4'>

            <div className="image">
                <Image width={300} height={300} className=' ml-6'  alt={'cart empty'} src={'/shopping.png'}/>
            </div>

            <div>
                <h1 className=' text-3xl'>Your Cart Is Empty</h1>
            </div>
            <div>
                <h3 className=' text-gray-600 text-xl'>Looks like you have not added anything to your cart.
                    Go ahead & explore categories.
                </h3>
            </div>
            <div className='pt-2 transition-all duration-300 hover:scale-110 hover:bg-color-900 '>
                <Link href={'/category'} className='bg-blue-800 rounded-md  text-white px-6 py-3'>Shop Now</Link>
            </div>
        </div>

    </main>
  )
}

export default EmptyCart