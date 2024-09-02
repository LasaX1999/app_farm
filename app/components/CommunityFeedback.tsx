import Image from "next/image";
import React from "react";

const Community = () => {
  return (
    <div className="overflow-hidden mt-4 bg-gray-800">
      <div className="relative max-w-[85rem] px-4 py-10  sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="max-w-2xl w-3/4 lg:w-1/2 mb-6 sm:mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-semibold">
            Loved by business and individuals across the globe
          </h2>
        </div>
        {/* End Title */}

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card */}
          <div className="flex h-auto">
            <div className="flex flex-col bg-white rounded-xl">
              <div className="flex-auto p-4 md:p-6">
                <p className="text-base md:text-lg text-gray-800">
                  "We're hooked! I like the fact they try and work with local
                  businesses and they have some great food and groceries! Check
                  it out."
                </p>
              </div>

              <div className="p-4 bg-gray-100 rounded-b-xl md:px-7">
                <div className="flex items-center gap-x-3">
                  <div className="shrink-0">
                    <Image
                      width={46}
                      height={46}
                      className="rounded-full roun"
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM4fHxtZW4lMjBmYWNlJTIwaW5kaWFufGVufDB8fDB8fHww"
                      alt="Avatar"
                    />
                  </div>

                  <div className="grow">
                    <p className="text-sm sm:text-base font-semibold text-gray-800">
                      Nihal Alwis
                    </p>
                    {/* <p className="text-xs text-gray-500">
                      Product Manager | Capsule
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Card */}

          {/* Card */}
          <div className="flex h-auto">
            <div className="flex flex-col bg-white rounded-xl">
              <div className="flex-auto p-4 md:p-6">
                <p className="text-base md:text-lg text-gray-800">
                  " Nothing beats ethically sourced products! Love supporting
                  local businesses and families"
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
                    <p className="text-sm sm:text-base font-semibold text-gray-800">
                      Kumarai Jayakody
                    </p>
                    {/* <p className="text-xs text-gray-500">
                      Senior Director of Operations | Fitbit
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Card */}

          {/* Card */}
          <div className="flex h-auto">
            <div className="flex flex-col bg-white rounded-xl">
              <div className="flex-auto p-4 md:p-6">
                <p className="text-base md:text-lg text-gray-800">
                  "Love shopping here!!! Great products and always friendly and
                  helpful!!! Great food!."
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
                    <p className="text-sm sm:text-base font-semibold text-gray-800">
                      Abisheka Peries
                    </p>
                    {/* <p className="text-xs text-gray-500">
                      Entrepreneur | Happy customer
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Card */}
        </div>
        {/* End Grid */}

        {/* Grid */}
        <div className="mt-20 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
          {/* Stats */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-white">
              Accuracy rate
            </h4>
            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">
              99.95%
            </p>
            <p className="mt-1 text-gray-400">in fulfilling orders</p>
          </div>
          {/* End Stats */}

          {/* Stats */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-white">
              Startup businesses
            </h4>
            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">
              2,000+
            </p>
            <p className="mt-1 text-gray-400">partner with Preline</p>
          </div>
          {/* End Stats */}

          {/* Stats */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-white">
              Happy customers
            </h4>
            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">
              85%
            </p>
            <p className="mt-1 text-gray-400">this year alone</p>
          </div>
          {/* End Stats */}
        </div>
        {/* End Grid */}

        {/* SVG Element */}
        <div
          className="absolute bottom-0 end-0 transform lg:translate-x-32"
          aria-hidden="true"
        >
          <svg
            className="w-40 h-auto sm:w-72"
            width="1115"
            height="636"
            viewBox="0 0 1115 636"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.990203 279.321C-1.11035 287.334 3.68307 295.534 11.6966 297.634L142.285 331.865C150.298 333.965 158.497 329.172 160.598 321.158C162.699 313.145 157.905 304.946 149.892 302.845L33.8132 272.418L64.2403 156.339C66.3409 148.326 61.5475 140.127 53.5339 138.026C45.5204 135.926 37.3213 140.719 35.2207 148.733L0.990203 279.321ZM424.31 252.289C431.581 256.26 440.694 253.585 444.664 246.314C448.635 239.044 445.961 229.931 438.69 225.96L424.31 252.289ZM23.0706 296.074C72.7581 267.025 123.056 230.059 187.043 212.864C249.583 196.057 325.63 198.393 424.31 252.289L438.69 225.96C334.256 169.356 252.048 165.933 184.457 184.312C115.224 203.158 62.0564 242.281 10.7964 273.874L23.0706 296.074ZM423.481 247.283C531.055 308.185 626.104 334.271 706.048 344.272C787.258 354.366 854.901 347.267 910.881 329.727C967.575 311.98 1014.17 284.425 1058.67 256.198C1068.33 249.955 1077.81 243.758 1087.1 237.62C1096.86 231.214 1106.5 225.119 1115.99 219.386L1103.51 197.183C1094.03 202.915 1084.44 208.961 1074.62 215.308C1065.27 221.392 1055.71 227.567 1046.02 233.816C1002.29 261.975 956.216 289.363 900.883 306.703C846.866 323.738 782.631 330.646 703.426 320.647C625.175 310.735 533.639 285.187 429.543 225.673L423.481 247.283Z"
              fill="url(#paint0_linear_1164_40)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1164_40"
                x1="1068.75"
                y1="29.7933"
                x2="122.827"
                y2="388.016"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1E40AF" />
                <stop offset="1" stopColor="#1E3A8A" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        {/* End SVG Element */}
      </div>
    </div>
  );
};

export default Community;
