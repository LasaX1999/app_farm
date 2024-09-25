import React from 'react'
import { FaApple, FaShop } from "react-icons/fa6";
import { FaProcedures } from "react-icons/fa";
import { GiFruitTree } from "react-icons/gi";
import { CiDeliveryTruck } from "react-icons/ci";

function SellGuide() {
  return (
    <div className="mt-16 mb-16 flex flex-col justify-center items-center gap-12 text-center">

    <h1 className="lg:text-6xl text-4xl  text-black">Selling with Us - 3 Easy Steps</h1>
  
    <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center justify-center w-full max-w-6xl px-4 lg:px-0">
      
      <div className="flex flex-col items-center">
        <div className="relative">
          <FaShop className="text-[120px] text-[#FF7A45] transition-all transform hover:scale-110 duration-300"/>
          {/* <div className="absolute inset-0 border-4 border-[#FF7A45] rounded-full animate-pulse"></div> */}
        </div>
        <h2 className="mt-6 text-3xl font-medium text-gray-700">1. Open Your Shop</h2>
        <p className="mt-4 text-lg text-gray-500">Add your shop name, a description, and contact details.</p>
      </div>
  
      <div className="flex flex-col items-center">
        <div className="relative">
          <GiFruitTree className="text-[120px] text-[#FF7A45] transition-all transform hover:scale-110 duration-300"/>
          {/* <div className="absolute inset-0 border-4 border-[#FF7A45] rounded-full animate-pulse"></div> */}
        </div>
        <h2 className="mt-6 text-3xl font-medium text-gray-700">2. Add Your Products</h2>
        <p className="mt-4 text-lg text-gray-500">Create products, set stock levels, and open an order cycle.</p>
      </div>
  
      <div className="flex flex-col items-center">
        <div className="relative">
          <CiDeliveryTruck className="text-[130px] text-[#FF7A45] transition-all transform hover:scale-110 duration-300"/>
          {/* <div className="absolute hover:scale-110 border-4 border-[#FF7A45] rounded-full animate-pulse"></div> */}
        </div>
        <h2 className="mt-6 text-3xl font-medium text-gray-700">3. Plan Your Deliveries</h2>
        <p className="mt-4 text-lg text-gray-500">Set up payment methods, and add your collection and delivery options.</p>
      </div>
  
    </div>
  
  </div>
  

  )
}

export default SellGuide