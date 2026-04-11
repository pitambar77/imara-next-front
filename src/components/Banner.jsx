"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Banner = ({ image, title, buttonText, onButtonClick }) => {
  return (
    <section className="relative w-full h-[350px] md:h-[500px] 2xl:h-[650px]">

      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        sizes="100vw"
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-2xl md:text-5xl font-extrabold mb-6 tracking-wide drop-shadow-lg">
          {title}
        </h1>

        {buttonText && (
          <Link
            href={onButtonClick}
            className="inline-flex items-center justify-center bg-[#d87028] text-white px-[21px] py-2.5 rounded-full font-semibold hover:bg-[#eb8034de] transition"
          >
            {buttonText}
          </Link>
        )}
      </div>
    </section>
  );
};

export default Banner;