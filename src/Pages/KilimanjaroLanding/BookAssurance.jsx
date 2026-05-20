import Link from "next/link";
import React from "react";
import {
  FaStar,
  FaWallet,
  FaHourglassHalf,
  FaCalendarAlt,
  FaShieldAlt,
} from "react-icons/fa";

const BookAssurance = () => {
  return (
    <section id="more" className="w-full">
      {/* Thin top rating bar */}
      <div className="w-full bg-[#d76e28] overflow-hidden mt-8">
        <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-center text-white text-[11px] sm:text-xs md:text-sm font-semibold leading-relaxed">
            {/* Rating */}
            <div className="flex items-center gap-1 sm:gap-2 flex-wrap justify-center">
              <span>RATED 5 / 5</span>

              <div className="flex items-center gap-1 text-yellow-300">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>

            {/* Reviews */}
            <span className="opacity-90">BASED ON 100 VERIFIED REVIEWS</span>
          </div>
        </div>
      </div>

      <div className="bg-[#fedec7]">
        {" "}
        {/* soft peach background */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
          {/* Heading centered */}
          <h2 className="text-center text-2xl md:text-3xl font-bold text-black mb-16 capitalize">
            Trusted Booking Assurance
          </h2>

          {/* Features row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center ">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="flex-none w-14 h-14 rounded-full bg-black flex items-center justify-center">
                <FaWallet className="text-[#f3a85f] w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-black">
                  Protected bookings with clear confirmation steps
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="flex-none w-14 h-14 rounded-full bg-black flex items-center justify-center">
                <FaHourglassHalf className="text-[#f3a85f] w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-black">
                  Honest costs with no surprise additions
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <div className="flex-none w-14 h-14 rounded-full bg-black flex items-center justify-center">
                <FaCalendarAlt className="text-[#f3a85f] w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-black">
                  Experienced mountain crew guiding every moment
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start gap-4">
              <div className="flex-none w-14 h-14 rounded-full bg-black flex items-center justify-center">
                <FaShieldAlt className="text-[#f3a85f] w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-black">
                  Easy adjustments when travel plans shift
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-16">
            <Link
              href="/tailor-made-tours"
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

export default BookAssurance;
