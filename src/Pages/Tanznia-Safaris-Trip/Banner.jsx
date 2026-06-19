"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import imaralogo from "@/assets/imaralogo.png";

const Banner = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToForm = () => {
    const section = document.getElementById("destinations");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="relative h-[95vh] md:h-screen w-full overflow-hidden">
      {/* Desktop Banner */}
      <Image
        src="/tanzania-safari-tour.webp"
        alt="Tanzania Safari"
        fill
        priority
        className="hidden md:block object-cover"
      />

      {/* Mobile Banner */}
      <Image
        src="/tanzania-safari-tour.webp"
        alt="Tanzania Safari"
        fill
        priority
        className="block md:hidden object-cover object-left"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/50" />

      {/* Navbar */}
      {/* Fixed Logo Only */}
      <div className="absolute top-6 left-4 sm:left-6 md:left-10 xl:left-20 z-20">
        <Link href="/" aria-label="Go to homepage">
          <Image
            src={imaralogo}
            alt="Imara Kileleni Safaris"
            width={180}
            height={60}
            priority
            className="h-10 sm:h-11 md:h-12 lg:h-14 w-auto"
          />
        </Link>
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-[26px] md:text-5xl lg:text-7xl font-normal tracking-wide mb-2 md:mb-4 !font-cormorant">
          Safari In Tanzania
        </h1>

        <p className="max-w-4xl text-sm md:text-xl mb-4 md:mb-6 !font-avenir">
          Private, tailor-made Tanzania safari packages with expert guides,
          seamless planning, and unforgettable wildlife experiences.
        </p>

        <div className="mt-4 w-full md:w-auto px-4 md:px-0">
          <button
            type="button"
            onClick={handleScrollToForm}
            className="w-full md:w-auto px-6 py-3 md:py-2.5 bg-[#d87028] border border-[#e78e4b] text-white uppercase tracking-[2.4px] text-[12px] rounded-sm hover:bg-[#eb8034] transition duration-300 cursor-pointer whitespace-nowrap !font-avenir"
          >
            Plan My Tanzania Safari
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
