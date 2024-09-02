import Image from "next/image";
import React from "react";

const Community = () => {
  return (
    <div className="overflow-hidden bg-gray-800">
      <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
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
                <p className="text-base italic md:text-lg text-gray-800">
                  "With Preline, we're able to easily track our performance in
                  full detail. It's become an essential tool for us to grow and
                  engage with our audience."
                </p>
              </div>

              <div className="p-4 bg-gray-100 rounded-b-xl md:px-7">
                <div className="flex items-center gap-x-3">
                  <div className="shrink-0">
                    <Image width={0} height={0}
                      className="size-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full"
                      src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                      alt="Avatar"
                    />
                  </div>

                  <div className="grow">
                    <p className="text-sm sm:text-base font-semibold text-gray-800">
                      Josh Tyson
                    </p>
                    <p className="text-xs text-gray-500">
                      Product Manager | Capsule
                    </p>
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
                <p className="text-base italic md:text-lg text-gray-800">
                  "In September, I will be using this theme for 2 years. I went
                  through multiple updates and changes and I'm very glad to see
                  the consistency and effort made by the team."
                </p>
              </div>

              <div className="p-4 bg-gray-100 rounded-b-xl md:px-7">
                <div className="flex items-center gap-x-3">
                  <div className="shrink-0">
                    <Image width={0} height={0} 
                      className="size-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full"
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                      alt="Avatar"
                    />
                  </div>

                  <div className="grow">
                    <p className="text-sm sm:text-base font-semibold text-gray-800">
                      Luisa
                    </p>
                    <p className="text-xs text-gray-500">
                      Senior Director of Operations | Fitbit
                    </p>
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
                <p className="text-base italic md:text-lg text-gray-800">
                  "Refreshing and thought-provoking design that changes my view
                  about how I design websites. Great typography, modern clean
                  white design, nice tones of color."
                </p>
              </div>

              <div className="p-4 bg-gray-100 rounded-b-xl md:px-7">
                <div className="flex items-center gap-x-3">
                  <div className="shrink-0">
                    <Image width={0} height={0}
                      className="size-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full"
                      src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
                      alt="Avatar"
                    />
                  </div>

                  <div className="grow">
                    <p className="text-sm sm:text-base font-semibold text-gray-800">
                      Alisa Williams
                    </p>
                    <p className="text-xs text-gray-500">
                      Entrepreneur | Happy customer
                    </p>
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
              d="M0.990203 279.321C-1.11035 287.334 3.68307 295.534 11.6966 297.634L142.285 331.865C150.298 333.965 158.497 329.172 160.598 321.158C162.699 313.145 157.905 304.946 149.892 302.845L33.8132 272.418L64.2403 156.339C66.3409 148.326 61.5475 140.127 53.5339 138.026C45.5204 135.926 37.3213 140.719 35.2207 148.733L0.990203 279.321ZM424.31 252.289C431.581 256.26 440.694 253.585 444.664 246.314C448.635 239.044 445.961 229.931 438.69 225.96L424.31 252.289ZM23.0706 296.074C72.7581 267.025 123.056 230.059 187.043 212.864C249.583 196.057 325.63 198.393 424.31 252.289L438.69 225.96C333.77 168.656 249.817 164.929 181.457 182.241C116.217 198.805 61.6915 237.245 10.0298 268.926L23.0706 296.074Z"
              fill="url(#grad1)"
            />
            <path
              d="M421.267 261.164C429.28 263.264 437.48 258.471 439.581 250.457C441.681 242.444 436.888 234.245 428.875 232.144L421.267 261.164ZM669.716 631.462C663.295 628.731 655.715 631.61 652.984 638.031C650.253 644.453 653.132 652.033 659.553 654.764L669.716 631.462ZM428.875 232.144C396.052 224.092 363.664 219.313 337.491 220.818C311.423 222.32 291.492 230.1 283.889 246.882C275.772 264.543 281.902 281.852 292.661 294.7C303.477 307.617 319.763 316.535 338.741 322.57C377.929 334.64 431.219 331.919 491.468 335.032C552.373 338.178 617.02 347.527 669.716 631.462L659.553 654.764C605.649 352.833 541.149 344.096 480.032 340.999C420.046 337.928 364.318 340.6 320.259 326.43C277.07 312.524 251.08 282.205 266.495 247.087C282.197 211.217 317.206 199.839 347.619 198.213C378.09 196.582 413.505 201.212 447.483 209.355L428.875 232.144Z"
              fill="url(#grad2)"
            />
            <defs>
              <linearGradient
                id="grad1"
                x1="237.685"
                y1="-23.8006"
                x2="-224.816"
                y2="273.193"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#007AB8" />
                <stop offset="1" stopColor="#3BBDF8" />
              </linearGradient>
              <linearGradient
                id="grad2"
                x1="451.029"
                y1="248.491"
                x2="481.748"
                y2="727.764"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#007AB8" />
                <stop offset="1" stopColor="#3BBDF8" />
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
