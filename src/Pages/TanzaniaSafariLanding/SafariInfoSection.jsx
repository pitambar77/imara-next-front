"use client";

import React from "react";
import Image from "next/image";

const SafariInfoSection = ({
  overview,
  imagePosition = "right",
  bg = "#fcfcfc",
}) => {
  if (!overview) return null;

  return (
    <section
      id="overview"
      style={{ backgroundColor: bg }}
      className=" py-10 sm:py-12 md:py-16"
    >
      <div
        className={`
          grid grid-cols-1 lg:grid-cols-[62%_38%] 
          ${imagePosition === "left" ? "lg:grid-cols-[38%_62%]" : ""}
          gap-10 lg:gap-0
          max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0
        `}
      >
        {/* TEXT COLUMN */}
        <div
          className={`
            text-[#222] leading-relaxed
            ${imagePosition === "left" ? "order-2 lg:order-1" : ""}
          `}
        >
          {/* Subtitle */}
          {overview.subtitle && (
            <p className="uppercase text-sm font-semibold tracking-wider text-[#7a7a7a] mb-4">
              {overview.subtitle}
            </p>
          )}

          {/* Title */}
          <h3 className="text-2xl md:text-[30px] lg:text-[36px] leading-snug font-bold text-[#111] mb-6 md:mb-8">
            {overview.title}
          </h3>

          {/* Description blocks */}
          <div
            className="
              text-[15px] md:text-[16px] text-[#333] space-y-4 leading-[1.8]
              md:[column-count:2] md:[column-gap:3rem]
            "
          >
            <div
              className="rich-text text-[#444]"
              dangerouslySetInnerHTML={{
                __html: overview.description || "",
              }}
            />
          </div>
        </div>

        {/* IMAGE COLUMN */}
        <div
          className={`hidden lg:flex justify-center lg:justify-end ${
            imagePosition === "left" ? "order-1 lg:order-2" : ""
          }`}
        >
          {overview.image && (
            <div className="relative w-full max-w-[420px] h-[300px] md:h-[420px] lg:h-[560px]">
              <Image
                src={overview.image}
                alt={overview.title}
                fill
                sizes="(max-width:768px) 100vw, 420px"
                className="rounded-md object-cover shadow-sm"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SafariInfoSection;
