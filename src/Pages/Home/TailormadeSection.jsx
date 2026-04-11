"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDropupCircle } from "react-icons/io";


const TailormadeSection = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-white py-8 md:py-16">
      <div className="px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 mx-auto text-center">

        <div className="relative rounded-md overflow-hidden w-full h-[300px] md:h-[400px] flex items-center justify-center">

          {/* Image */}
          <Image
            src="/tailormade.webp"
            alt="Our Promise to our Esteemed Clients"
            title="Our Promise to our Esteemed Clients"
            fill
            sizes="100vw"
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />

          {/* Content */}
          <div className="relative text-center text-white z-10 p-6 md:p-0">
            <h3 className="text-xl md:text-3xl font-bold mb-16">
              Our Promise to our Esteemed Clients<sup>®</sup>
            </h3>

            <Link
              href="/contact-us"
              className="px-6 py-2 cursor-pointer border-2 duration-200 border-white rounded-full text-white font-semibold text-sm hover:bg-white hover:text-black transition"
            >
              TELL ME MORE
            </Link>
          </div>

        </div>

        {/* Back To Top */}
        <div className="flex justify-center mt-12">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 cursor-pointer text-sm text-black font-medium hover:text-[#d87028] transition"
          >
            <IoIosArrowDropupCircle className="text-[#d87028] text-[40px]" />
            <span>Back To Top</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default TailormadeSection;