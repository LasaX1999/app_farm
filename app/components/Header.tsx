import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { HiShoppingCart } from "react-icons/hi2";
import HoverMenu from "./HoverUser";

function Header() {
  return (
    <div className="p-3 border-b-2 border-[#F5F3FF]">

      <div className="max-w-7xl mx-auto flex justify-between  items-center">

        <div className="flex items-center">
          <h1 className="ml-2 text-2xl lg:text-3xl">
            🥬FARM TO <span className="text-[#86D72F]">MARKET</span>
          </h1>
        </div>

        <div className="flex items-center relative ">
          <Link href={'/shop'} className="text-xl mr-6 relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Shop </Link>
          <Link href={'/admin'} className="text-xl mr-6 relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Sell </Link>
          <Link href={'/about'} className="text-xl mr-6 relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">About Us </Link>
         <Link href={'/cart'}> <HiShoppingCart className="text-3xl cursor-pointer hover:scale-110" /></Link>
          <div className="ml-2 bg-green-500 rounded-full w-5 h-5 flex items-center justify-center text-white text-sm font-semibold">1</div>
          <div className="ml-4">
          <UserButton afterSignOutUrl="/" />
          
          </div>

          <div className="flex items-center justify-center mt-5 ">
          <HoverMenu />
          </div>
     
        </div>

   





      </div>
    </div>
  );
}

export default Header;
