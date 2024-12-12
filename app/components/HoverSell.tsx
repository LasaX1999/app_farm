// components/HoverMenu.js
'use client'
import { useState } from 'react';
import Link from 'next/link';
import { FaUser } from 'react-icons/fa6';

const HoverMenu = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='mb-[23px]'>
      <div className="lg:text-xl  text-[18px] cursor-pointer mr-4 relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Sell</div>
      </div>
      {isHovered && (
        <div className="absolute rounded-lg top-full left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 shadow-lg p-2 flex flex-col">
          <Link href="/admin" className="m-1 hover:underline">Sell</Link>
          <Link href="/request_admin" className="m-1 hover:underline">Request </Link>
           <Link href="#" className="m-1 hover:underline">Sell Guide</Link>
        </div>
      )}
    </div>
  );
};

export default HoverMenu;
