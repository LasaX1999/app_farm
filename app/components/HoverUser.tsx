// components/HoverMenu.js
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
      <div className="w-10 h-10 cursor-pointer">
        {/* Replace this with your icon */}
        <FaUser className='text-xl ml-2'/>
      </div>
      {isHovered && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 shadow-lg p-2 flex flex-col">
          <Link href="/sign-in" className="m-1 hover:underline">Sign In</Link>
          <Link href="/sign-up" className="m-1 hover:underline">Register</Link>
        </div>
      )}
    </div>
  );
};

export default HoverMenu;
