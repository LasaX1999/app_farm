import Image from "next/image";
import React from "react";

const Community = () => {
  return (
    <div className="overflow-hidden mt-4 bg-slate-50 text-black">
      <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="max-w-2xl w-3/4 lg:w-1/2 mb-6 sm:mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl">
            Loved by business and individuals across the globe
          </h2>
        </div>
        {/* End Title */}

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card */}
          <div className="flex h-auto">
            <div className="flex flex-col bg-white rounded-xl border-gray-300 border-[1px] shadow-lg shadow-gray-400 cursor-pointer transition-all hover:scale-105 duration-300">
              <div className="flex-auto p-4 md:p-6">
                <p className="text-base font-roboto md:text-lg text-gray-800">
                  &quot;We&apos;re hooked! I like the fact they try and work with local businesses and they have some great foods.&quot;
                </p>
              </div>

              <div className="p-4 bg-gray-100 rounded-b-xl md:px-7 transition-all hover:scale-105 duration-300">
                <div className="flex items-center gap-x-3">
                  <div className="shrink-0">
                    <Image
                      width={46}
                      height={46}
                      className="rounded-full"
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM4fHxtZW4lMjBmYWNlJTIwaW5kaWFufGVufDB8fDB8fHww"
                      alt="Avatar"
                    />
                  </div>

                  <div className="grow">
                    <p className="text-sm sm:text-base text-gray-800">Nihal Alwis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Card */}

          {/* Card */}
          <div className="flex h-auto">
            <div className="flex flex-col bg-white rounded-xl border-gray-300 border-[1px] shadow-lg shadow-gray-400 cursor-pointer transition-all hover:scale-105 duration-300">
              <div className="flex-auto p-4 md:p-6">
                <p className="text-base font-roboto md:text-lg text-gray-800">
                  &quot;Nothing beats ethically sourced products! Love supporting local businesses and families.&quot;
                </p>
              </div>

              <div className="p-4 bg-gray-100 rounded-b-xl md:px-7">
                <div className="flex items-center gap-x-3">
                  <div className="shrink-0">
                    <Image
                      width={46}
                      height={46}
                      className="rounded-full"
                      src="https://plus.unsplash.com/premium_photo-1723568666044-1b066e26b1fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGdpcmwlMjBmYWNlJTIwaW5kaWFufGVufDB8fDB8fHww"
                      alt="Avatar"
                    />
                  </div>

                  <div className="grow">
                    <p className="text-sm sm:text-base text-gray-800">Kumarai Jayakody</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Card */}

          {/* Card */}
          <div className="flex h-auto">
            <div className="flex flex-col bg-white border-gray-300 border-[1px] shadow-lg shadow-gray-400 rounded-xl cursor-pointer transition-all hover:scale-105 duration-300">
              <div className="flex-auto p-4 md:p-6">
                <p className="text-base font-roboto md:text-lg text-gray-800">
                  &quot;Love shopping here!!! Great products and always friendly and helpful!!! Great food.&quot;
                </p>
              </div>

              <div className="p-4 bg-gray-100 rounded-b-xl md:px-7">
                <div className="flex items-center gap-x-3">
                  <div className="shrink-0">
                    <Image
                      width={46}
                      height={46}
                      className="rounded-full"
                      src="https://images.unsplash.com/photo-1652278623788-1a876f493b31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGdpcmwlMjBmYWNlJTIwaW5kaWFufGVufDB8fDB8fHww"
                      alt="Avatar"
                    />
                  </div>

                  <div className="grow">
                    <p className="text-sm sm:text-base text-gray-800">Abisheka Peries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Card */}
        </div>
        {/* End Grid */}

        {/* Stats Section */}
        <div className="mt-20 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
          {/* Stats */}
          <div>
            <h4 className="text-lg sm:text-xl">Accuracy rate</h4>
            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">99.95%</p>
            <p className="mt-1 text-gray-900">in fulfilling orders</p>
          </div>

          <div>
            <h4 className="text-lg sm:text-xl">Open local shops</h4>
            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">200+</p>
            <p className="mt-1 text-gray-900">partner with Preline</p>
          </div>

          <div>
            <h4 className="text-lg sm:text-xl">Happy customers</h4>
            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">85%</p>
            <p className="mt-1 text-gray-900">this year alone</p>
          </div>
        </div>
        {/* End Stats Section */}
      </div>
    </div>
  );
};

export default Community;
