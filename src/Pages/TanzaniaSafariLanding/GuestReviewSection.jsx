import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const GuestReviewSection = () => {
  return (
    <section className=" py-8 md:py-16 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 mx-auto">
      <div className="relative">
        {/* 🔶 Orange Background (Half Height Behind the Card) */}
        <div className="absolute top-0 left-0 w-full h-4/5 bg-[#d87028] z-0 rounded-md"></div>

        {/* ✅ Main Content */}
        <div className="relative z-10">
          {/* Header */}
          <h2 className="text-center text-2xl md:text-3xl font-bold text-white py-10 capitalize">
            5 million happy guests and counting
          </h2>

          {/* Rating Section */}
          <div className="bg-white max-w-6xl mx-auto rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x border border-gray-200">
            {/* ⭐ Overall Rating */}
            <div className="p-8 flex flex-col items-start justify-center">
              <h3 className="font-bold text-xl mb-4 text-[#222]">
                Overall Rating
              </h3>
              <div className="text-5xl font-bold text-[#222] mb-1">4.6</div>
              <p className="text-gray-600 font-semibold mb-4">out of 5</p>

              <div className="flex items-center space-x-1 text-[#f5b400] text-xl mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
                <span className="text-black text-[16px] font-semibold ml-2">
                  4.6
                </span>
              </div>

              <div className="mt-4 flex items-center space-x-2">
                <p className="text-gray-700 font-medium text-sm">
                  Based on 148,803 independent reviews
                </p>

                <img
                  src="https://www.cover4caravans.co.uk/wp-content/uploads/2015/05/feefo-logo.png"
                  alt="Feefo"
                  className="h-10"
                />
              </div>
            </div>

            {/* ⭐ Trip Rating */}
            <div className="p-8 flex flex-col ">
              <h3 className="font-bold text-xl mb-2 text-[#222]">
                Trip Rating
              </h3>
              <p className="text-gray-700 text-sm font-medium mb-6">
                Trip rating is the overall quality of the itinerary and trip
              </p>

              <div className="grid grid-cols-2 gap-1">
                {/* Left Box */}
                <div className="flex  mb-4">
                  <div className="bg-gray-50 px-6 py-8 rounded-md text-center">
                    <div className="text-4xl font-bold text-[#222]">4.6</div>
                    <p className="text-gray-600 font-semibold text-sm">
                      out of 5
                    </p>
                    <div className="flex justify-center text-[#f5b400] mt-1">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfAlt />
                    </div>
                  </div>
                </div>

                {/* Rating Bars */}
                <div>
                  {[
                    { stars: 5, percent: 80, count: "103,378" },
                    { stars: 4, percent: 25, count: "38,020" },
                    { stars: 3, percent: 8, count: "8,388" },
                    { stars: 2, percent: 4, count: "2,771" },
                    { stars: 1, percent: 2, count: "1,225" },
                  ].map((r, i) => (
                    <div
                      key={i}
                      className="flex items-center text-sm mb-2 whitespace-nowrap"
                    >
                      <span className="w-6 font-semibold mt-1">{r.stars}</span>
                      <span>
                        <FaStar className="text-[#f5b400] text-[10px] mr-2 " />
                      </span>
                      <div className="w-[12rem] bg-gray-200 h-3 rounded-full overflow-hidden">
                        <div
                          className="bg-[#f5b400] h-3"
                          style={{ width: `${r.percent}%` }}
                        ></div>
                      </div>
                      <span className="ml-3 font-semibold text-gray-700">
                        {r.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ⭐ Customer Experience */}
            <div className="p-8 flex flex-col justify-center">
              <h3 className="font-bold text-xl mb-2 text-[#222]">
                Customer Experience
              </h3>
              <p className="text-gray-700 text-sm font-medium mb-6">
                Customer experience is the standard of service you receive
              </p>

              <div className="grid grid-cols-2 ">
                {/* Left Box */}
                <div className="flex items-center">
                  <div className="bg-gray-50 px-6 py-8 rounded-md text-center">
                    <div className="text-4xl font-bold text-[#222]">4.6</div>
                    <p className="text-gray-600 font-semibold text-sm">
                      out of 5
                    </p>
                    <div className="flex justify-center text-[#f5b400] mt-1">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfAlt />
                    </div>
                  </div>
                </div>

                {/* Rating Bars */}
                <div>
                  {[
                    { stars: 5, percent: 80, count: "110,161" },
                    { stars: 4, percent: 25, count: "27,807" },
                    { stars: 3, percent: 8, count: "6,875" },
                    { stars: 2, percent: 4, count: "2,656" },
                    { stars: 1, percent: 2, count: "1,282" },
                  ].map((r, i) => (
                    <div
                      key={i}
                      className="flex items-center text-sm mb-2 whitespace-nowrap"
                    >
                      <span className="w-6 mt-1 font-semibold">{r.stars}</span>
                      <span>
                        <FaStar className="text-[#f5b400] text-[10px] mr-2 " />
                      </span>
                      <div className="w-[12rem] bg-gray-200 h-3 rounded-full overflow-hidden">
                        <div
                          className="bg-[#f5b400] h-3"
                          style={{ width: `${r.percent}%` }}
                        ></div>
                      </div>
                      <span className="ml-3 font-semibold text-gray-700">
                        {r.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestReviewSection;
