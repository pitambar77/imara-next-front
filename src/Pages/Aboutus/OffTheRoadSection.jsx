import React from "react";
import { FaClock, FaAward } from "react-icons/fa";
import Image from "next/image";

const OffTheRoadSection = () => {
  return (
    <section className="bg-[#fedec7] py-8 md:py-16  text-center relative">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0">
        {/* === Title Label === */}
        <div className="flex justify-center mb-8 md:mb-12  ">
          <div className=" w-56">
            <Image
              src="/offroad.png"
              alt="bannerimage"
              width={220}
              height={120}
              className="w-full"
            />
          </div>
        </div>

        {/* === Content Grid === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-6xl mx-auto mt-20">
          {/* === Left Column - 24/7 Support Teams === */}
          <div className="flex flex-col items-center text-center">
            <FaClock className="text-[#d76e28] text-5xl mb-6" />
            <h3 className="text-[20px] md:text-3xl font-extrabold text-[#111] mb-4">
              24/7 Assistance
            </h3>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-relaxed max-w-md">
              Your journey is supported at every hour. Whether you need
              itinerary help, quick updates, or reassurance before a climb or
              safari, our team stays available to guide you through every stage.
            </p>
          </div>

          {/* === Right Column - Welfare Officers === */}
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <FaAward className="text-[#d76e28] text-5xl mb-6" />
              {/* <span className="absolute top-[-8px] right-[-14px] text-[#e63946] text-xl">❤</span> */}
            </div>
            <h3 className="text-[20px] md:text-3xl font-extrabold text-[#111] mb-4">
              Trusted Reliability
            </h3>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-relaxed max-w-md mb-4">
              We operate with consistency and honest communication. You receive
              clear information, dependable service, and a team genuinely
              committed to making each step of your travel experience smooth,
              safe, and worry-free.
            </p>
            {/* <p className="italic text-[15px] text-[#333] leading-relaxed max-w-lg">
            “I’m here to provide the support travellers need – whether it’s handy
            tips, a friendly ear to listen, or guidance on navigating any
            challenges that arise”
          </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffTheRoadSection;
