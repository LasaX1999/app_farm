import Image from 'next/image'
import React from 'react'

function BeliveSection() {
  return (
   
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  
  <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 className="text-3xl font-play font-medium md:text-6xl md:leading-tight">We Believe In</h2>
  </div>



  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
 
    <a className="group  rounded-xl p-5 transition" href="#">
      <div className="aspect-w-16 aspect-h-10">
        <Image width={500} height={500} className="w-full transition-all duration-300 hover:scale-105 object-cover rounded-xl" src="https://images.wegmans.com/is/image/wegmans/6523694-hp-tiles-webelieve-sustainability-2?wid=1000&hei=1000" alt="Blog Image"/>
      </div>
      
    </a>
  

  
    <a className="group  rounded-xl p-5 transition" href="#">
      <div className="aspect-w-16 aspect-h-10">
        <Image width={500} height={500} className="w-full transition-all duration-300 hover:scale-105 object-cover rounded-xl" src="https://images.wegmans.com/is/image/wegmans/6523694-hp-tiles-webelieve-communitygiving-2?wid=1000&hei=1000" alt="Blog Image"/>
      </div>
      
    </a>

    <a className="group  rounded-xl p-5 transition" href="#">
      <div className="aspect-w-16 aspect-h-10">
        <Image width={500} height={500} className="w-full transition-all duration-300 hover:scale-105 object-cover rounded-xl" src="https://images.wegmans.com/is/image/wegmans/6523694-hp-tiles-webelieve-feelyourbest-2?wid=1000&hei=1000" alt={'image 3'}/>
      </div>
      
    </a>


    

  </div>

</div>

  )
}

export default BeliveSection