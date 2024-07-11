import Link  from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa6'

function Footer() {
  return (
    <main className='w-full h-auto bg-gray-900 text-white  '>
        <div className="footerContent px-10 py-6">
            <div className='flex justify-center items-center gap-28'>
                <div className='flex flex-col gap-4 justify-center '>
                    <h1 className=' text-blue-500 text-xl'>Take Action</h1>
                    <Link className='hover:scale-105 transition-all duration-300' href={"/shop"}>Shop</Link>
                    <Link className='hover:scale-105 transition-all duration-300' href={'/contact'}>Contact Us</Link>
                </div>

                <div className='flex flex-col gap-4 justify-center '>
                    <h1 className=' text-blue-500 text-xl'>The Rules..!</h1>
                    <Link className='hover:scale-105 transition-all duration-300' href={"/shop"}>Export Rules</Link>
                    <Link className='hover:scale-105 transition-all duration-300' href={"/shop"}>Ordering Policies</Link>
                    
                </div>

                <div className='flex flex-col gap-4 justify-center '>
                    <h1 className=' text-blue-500 text-xl'>Learn More</h1>
                    <Link className='hover:scale-105 transition-all duration-300' href={"/shop"} >Abous Us</Link>
                    <Link className='hover:scale-105 transition-all duration-300'  href={'/contact'}>Delivery Option</Link>
                </div>

                <div className='flex flex-col gap-4 justify-center '>
                    <h1 className=' text-blue-500 text-xl'>Connect With Us</h1>
                    <Link  href={"/shop"}><FaFacebook className='hover:scale-110 transition-all duration-300'/></Link>
                    <Link  href={'/contact'}><FaInstagram className='hover:scale-110 transition-all duration-300'/></Link>
                </div>

                

                
            </div>

            <div className='flex flex-col justify-center items-center gap-3 py-6'>
                <h1 className='text-3xl'>Farmers Market Direct</h1>
                <p>Colombo No 3 , Mount Lavina</p>
                <button className='bg-green-500 px-4 py-2 rounded-md hover:scale-110 transition-all duration-300'>Powered By Stripe</button>
            </div>
        </div>
    </main>
  )
}

export default Footer