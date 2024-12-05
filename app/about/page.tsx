import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewFooter from "../components/NewFooter";
import CilentSection from "../components/CilentSection";
import FAQ from "../components/F&Q";
import Image from "next/image";
import { InfiniteSliderHoverSpeed } from "../components/InfiniteSliderHoverSpeed";
import { InfiniteSlider } from "../components/framerMotion/Infinite";
import { BackgroundLines } from "../components/background-lines";
import { AnimatedTooltipPreview } from "../components/Developers";
import { UserFeedback } from "../components/UserFeedback";

function page() {

  return (
    <main>
      <Header />
      <div className="relative my-12 flex w-full flex-col items-center sm:mt-24">
     
  <a
    target="_blank"
    rel="noreferrer"
    href="/"
    className="mx-auto flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-500 px-8 py-3 text-white shadow-lg transition-all hover:bg-blue-600 hover:shadow-xl"
  >
    <p className="text-base font-semibold">Farm To Market</p>

  </a>

  <BackgroundLines className="flex items-center text-black justify-center w-full flex-col px-4">
   
  <h1 className="mt-2 max-w-lg bg-gradient-to-br from-teal-400 via-indigo-500 to-purple-600 bg-clip-text text-center text-4xl font-extrabold text-transparent sm:max-w-3xl sm:text-6xl">
    Farmers Market Direct is your source for all-natural food.
  </h1>
  <AnimatedTooltipPreview/>
  <span className="mt-8 max-w-2xl text-balance font-oswald text-center text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700 sm:leading-relaxed mx-auto px-4">
  Farm Market Direct, opened in 2024 by Mr. Manoj Lasantha, came to fruition because we love the homegrown, homemade products found at the Farmers Market. Our platform connects these farmers and artisans to you, the consumer, 24/7. So, if you can’t make it to the Farmers Market, don't worry—you can still get high-quality, locally sourced products anytime.
</span>

    </BackgroundLines>

</div>

{/* <InfiniteSlider durationOnHover={75} gap={24}>
      <Image
        src='https://images.unsplash.com/photo-1702157896487-6dd66ce3c2c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhcm0lMjBwcm9kdWN0fGVufDB8MHwwfHx8Mg%3D%3D'
        alt='Dean blunt - Black Metal 2'
        fill
        className='aspect-square w-[120px] rounded-[4px]'
      />
      <Image
        src='https://images.unsplash.com/photo-1649779117064-107e63b88758?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFybSUyMHByb2R1Y3R8ZW58MHwwfDB8fHwy'
        alt='Jungle Jack - JUNGLE DES ILLUSIONS VOL 2'
        fill
        className='aspect-square w-[120px] rounded-[4px]'
      />
      <Image
        src='https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc1fHxmYXJtJTIwcHJvZHVjdHxlbnwwfDB8MHx8fDI%3D'
        alt='Yung Lean - Stardust'
        fill
        className='aspect-square w-[120px] rounded-[4px]'
      />
      <Image
        src='https://images.unsplash.com/photo-1448907503123-67254d59ca4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGZhcm0lMjBtZWF0fGVufDB8MHwwfHx8Mg%3D%3D'
        alt='Lana Del Rey - Ultraviolence'
        fill
        className='aspect-square w-[120px] rounded-[4px]'
      />
      <Image
        src='https://images.unsplash.com/photo-1456295198429-05d2315cfebb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZhcm0lMjBmcnVpdHxlbnwwfDB8MHx8fDI%3D'
        alt='A$AP Rocky - Tailor Swif'
        fill
        className='aspect-square w-[120px] rounded-[4px]'
      />
      <Image
        src='https://images.unsplash.com/photo-1525904097878-94fb15835963?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGZhcm0lMjBwcm9kdWN0fGVufDB8MHwwfHx8Mg%3D%3D'
        alt='Midnight Miami (feat Konvy) - Nino Paid, Konvy'
        fill
        className='aspect-square w-[120px] rounded-[4px]'
      />
    </InfiniteSlider> */}
 {/* Food Image Marquees */}
 <div className=" flex items-center justify-center">
      <div className="w-full overflow-hidden">
        <div className="flex  space-x-8">
          {/* Repeat this block for each image */}
          <div className="relative h-60 w-72  ">
            <Image
              src="https://images.unsplash.com/photo-1702157896487-6dd66ce3c2c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhcm0lMjBwcm9kdWN0fGVufDB8MHwwfHx8Mg%3D%3D"
              alt="Image 1"
              fill
              className="object-cover rounded-md "
            />
          </div>
          {/* <div className="relative h-60 w-72">
            <Image
              src="https://images.unsplash.com/photo-1525904097878-94fb15835963?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGZhcm0lMjBwcm9kdWN0fGVufDB8MHwwfHx8Mg%3D%3D"
              alt="Image 2"
              fill
              className="object-cover rounded-md"
            />
          </div> */}
          {/* <div className="relative h-60 w-72 ">
            <Image
              src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGZhcm0lMjBwcm9kdWN0fGVufDB8MHwwfHx8Mg%3D%3D"
              alt="Image 3"
              fill
              className="object-cover rounded-md"
            />
          </div> */}

          <div className="relative h-60 w-72 ">
            <Image
              src="https://images.unsplash.com/photo-1649779117064-107e63b88758?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFybSUyMHByb2R1Y3R8ZW58MHwwfDB8fHwy"
              alt="Image 4"
              fill
              className="object-cover rounded-md"
            />
          </div>

          <div className="relative h-60 w-72 ">
            <Image
              src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc1fHxmYXJtJTIwcHJvZHVjdHxlbnwwfDB8MHx8fDI%3D"
              alt="Image 5"
              fill
              className="object-cover rounded-md"
            />
          </div>

          <div className="relative h-60 w-72 ">
            <Image
              src="https://images.unsplash.com/photo-1448907503123-67254d59ca4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGZhcm0lMjBtZWF0fGVufDB8MHwwfHx8Mg%3D%3D"
              alt="Image 6"
              fill
              className="object-cover rounded-md"
            />
          </div>

          <div className="relative h-60 w-72 ">
            <Image
              src="https://images.unsplash.com/photo-1456295198429-05d2315cfebb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZhcm0lMjBmcnVpdHxlbnwwfDB8MHx8fDI%3D"
              alt="Image 7"
              fill
              className="object-cover rounded-md"
            />
          </div>
          {/* Add more images as needed */}
        </div>
      </div>
    </div>

      
        {/* <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-0 sm:gap-x-4">
          <a
            href="https://example.com/new-feature"
            className="flex flex-row items-center justify-center gap-x-2 rounded-lg text-white px-10 py-3 bg-teal-500"
          >
            <svg
              className="h-[30px] text-white"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              stroke-width="3"
              fill="none"
            >
              <path d="M14,39.87,24.59,50.51s33-14,31.23-42.29C55.82,8.22,29.64,4.28,14,39.87Z"></path>
              <path d="M44.69,9.09a12.3,12.3,0,0,0,3.48,6.73,12.31,12.31,0,0,0,7,3.52"></path>
              <circle cx="39.46" cy="24.56" r="6.2"></circle>
              <path d="M14.89,37.82l-5.3.68a.27.27,0,0,1-.28-.37l3.93-9a2.65,2.65,0,0,1,1.88-1.53l6.59-1.38"></path>
              <path d="M26.55,49.4l-.69,5.3a.27.27,0,0,0,.37.28l9-3.92a2.69,2.69,0,0,0,1.53-1.89l1.38-6.59"></path>
              <path d="M22.21,48.13c-2.37,7.41-14.1,7.78-14.1,7.78S8,44.51,15.76,41.67"></path>
            </svg>
            Get the Latest Update
          </a>
          <a
            href="#demo"
            className="flex flex-row items-center justify-center gap-x-2 rounded-lg border border-teal-500 px-10 py-3 text-teal-500"
          >
            Learn More →
          </a>
        </div> */}

        
     
      {/* <CilentSection/> */}
      {/* <InfiniteSliderHoverSpeed/> */}

      <FAQ/>
      <UserFeedback/>
     
      <NewFooter/>
    </main>
  );
}

export default page;
