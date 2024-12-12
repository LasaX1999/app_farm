// components/HoverLanguage.js
'use client'
import { useState } from 'react';
import Link from 'next/link';
import { FaUser } from 'react-icons/fa6';
import { GrLanguage } from "react-icons/gr";

const HoverLanguage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-10 h-10 cursor-pointer ">
        {/* Replace this with your icon */}
       <GrLanguage className='text-xl text-emerald-600 ml-2'/>
      </div>
      {isHovered && (
        <div className="absolute rounded-xl top-full left-1/2 text-sm transform -translate-x-1/2 bg-white border border-gray-200 shadow-lg p-2 flex flex-col">
          <Link href="/sign-in" className="m-1 hover:underline">English</Link>
          <Link href="/sign-in" className="m-1 hover:underline">සිංහල</Link>
          <Link href="/sign-up" className="m-1 hover:underline">தமிழ்</Link>
        </div>
      )}
    </div>
  );
};

export default HoverLanguage;
