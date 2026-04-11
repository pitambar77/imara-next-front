import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const ReviewBanner = () => {
  return (
    <section className="bg-[#fee3cc] py-6 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-4 text-[#111]">
        {/* Left - Rating & Stars */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
          <div className=" flex space-x-3 md:space-x-6">
            <h2 className="text-[42px] sm:text-[48px] md:text-[64px] font-extrabold leading-none">
              4.9
            </h2>

            <div className="flex items-center gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
          </div>

          <p className="text-[14px] sm:text-[16px] font-semibold text-[#222] max-w-xs">
            Based on 309 Independent Reviews
          </p>
        </div>

        {/* Right - Read Reviews */}
        <div className="mt-2 md:mt-0">
          <a
            href="#"
            className="text-[14px] sm:text-[16px] font-semibold underline text-[#222] hover:text-[#d87028] transition"
          >
            Read reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewBanner;
