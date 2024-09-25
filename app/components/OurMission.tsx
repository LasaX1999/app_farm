import Link from 'next/link'
import React from 'react'

function OurMission() {
  return (
    <div className="bg-cover h-screen  bg-no-repeat" style={{ backgroundImage: `url('https://images.wegmans.com/is/image/wegmans/5722050-hp-mission-bg-2?wid=2000&hei=996')` }}>
      <div className=" via-transparent">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
        
          {/* <div className="flex justify-center">
            <a className="group inline-flex items-center bg-[#FFFFFF]/10 hover:bg-[#FFFFFF]/10 border border-[#FFFFFF]/10 p-1 ps-4 rounded-full shadow-md focus:outline-none focus:bg-[#FFFFFF]/10" href="../figma.html">
              <p className="me-2 text-[#FFFFFF] text-sm">
                Preline UI Figma is live.
              </p>
              <span className="group-hover:bg-[#FFFFFF]/10 py-1.5 px-2.5 flex justify-center items-center gap-x-2 rounded-full bg-[#FFFFFF]/10 font-semibold text-[#FFFFFF] text-sm">
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </span>
            </a>
          </div> */}
        
          <div className="max-w-3xl text-center font-play mx-auto">
            <h1 className="block font-medium text-[#FFFFFF] text-3xl text-center sm:text-3xl md:text-4xl lg:text-3xl">Our Mission</h1>
            <h1 className=" text-pretty font-medium text-[#FFFFFF]  text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Helping people live healthier, better lives through exceptional food.
            </h1>
          </div>
        
          {/* <div className="max-w-3xl text-center mx-auto">
            <p className="text-lg text-[#FFFFFF]/70">Preline is a large open-source project, crafted with Tailwind CSS framework by Hmlstream.</p>
          </div>
        
          <div className="text-center">
            <Link className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-[#FFFFFF] text-sm font-medium rounded-full focus:outline-none focus:shadow-blue-700/50 py-3 px-6" href="#">
              Get started
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </Link>
          </div> */}
          
        </div>
      </div>
    </div>
  )
}

export default OurMission
