import React from "react";
import {
  FaStar,
  FaWallet,
  FaHourglassHalf,
  FaCalendarAlt,
  FaShieldAlt,
} from "react-icons/fa";
import Link from "next/link";

const BookWithConfidence = () => {
  return (
    <section id="more" className="w-full">
      {/* Thin top rating bar */}
      <div className="w-full bg-[#d76e28]">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-white text-xs md:text-sm font-semibold">
          <span className="inline-flex items-center gap-2">
            RATED 4.7 / 5
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" /><FaStar className="text-yellow-300" />
            <span className="opacity-90">| BASED ON 100 VERIFIED REVIEWS</span>
          </span>
        </div>
      </div>

      
      <div className="bg-[#fedec7]"> {/* soft peach background */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 md:py-14">
          {/* Heading centered */}
          <h2 className="text-center text-2xl md:text-3xl font-bold text-black mb-8 md:mb-16 capitalize">
            Book with confidence
          </h2>

          {/* Features row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 items-center ">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="flex-none w-14 h-14 rounded-full bg-black flex items-center justify-center">
                <FaWallet className="text-[#f3a85f] w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-[#444]">
                  Lock in your spot with a <span className="font-bold">$200 deposit</span>
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="flex-none w-14 h-14 rounded-full bg-black flex items-center justify-center">
                <FaHourglassHalf className="text-[#f3a85f] w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-[#444]">
                  <u className="font-bold">Pay monthly</u> or bi-weekly
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <div className="flex-none w-14 h-14 rounded-full bg-black flex items-center justify-center">
                <FaCalendarAlt className="text-[#f3a85f] w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-[#444]">
                  Amend your booking up to <span className="font-bold">60 days</span> pre-trip
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start gap-4">
              <div className="flex-none w-14 h-14 rounded-full bg-black flex items-center justify-center">
                <FaShieldAlt className="text-[#f3a85f] w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-[#444]">
                  Plans changed? Your payments are protected
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-16">
            <Link href={'tailor-made-form'}
              className="px-[21px] py-2.5 cursor-pointer rounded-full border-1 hover:border-[#d87028] text-black font-semibold bg-transparent hover:bg-[#d87028] hover:text-white transition"
              aria-label="Find out more"
            >
              FIND OUT MORE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookWithConfidence;
