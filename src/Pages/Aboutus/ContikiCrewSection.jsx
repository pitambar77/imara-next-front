import React from "react";

const ContikiCrewSection = () => {
  return (
    <section className="bg-[#d87028] py-8 md:py-16 text-white">
      <div className=" max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0">
        <div className=" flex flex-col md:flex-row items-center justify-between gap-2 md:gap-10">
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://cheetahsafaris.com/wp-content/uploads/2022/10/best-time-to-visit-tanzania-for-safari-tourist-guide-cheetah-safaris-2.jpg" // replace with your image
              alt="Contiki Crew"
              className="rounded-md w-full h-auto md:h-[400px] object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 text-center px-4 xl:px-16  text-black">
            <h2 className="text-[24px] md:text-[28px] font-extrabold mb-4">
              Plan Your Tanzania Adventure with Confidence
            </h2>
            <p className="text-[17px] leading-relaxed font-medium text-[#222] ">
              Travel solo, with friends, or alongside family, our team supports
              you from the first message to the final farewell. Every itinerary
              is crafted with care, clarity, and the goal of giving you a
              meaningful experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContikiCrewSection;
