"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const RelatedBlogCard = ({ title, subtitle, data }) => {
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);
  const [expandedCard, setExpandedCard] = useState(null);

  function formatDate(dateString) {
    const date = dateString ? new Date(dateString) : new Date();

    const day = String(date.getDate()).padStart(2, "0");
    const month = date
      .toLocaleString("en-US", { month: "short" })
      .toUpperCase();
    const year = date.getFullYear();

    return `${day} / ${month} / ${year}`;
  }

  return (
    <section
      id="highlight"
      className="w-full py-4 md:py-16 bg-gray-50 relative"
    >
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0">
        <div className="mb-10">
          <h3 className="text-2xl md:text-4xl text-center text-[#1a1a1a] capitalize mb-3">
            {title}
          </h3>

          <div className="relative flex items-center justify-center">
            <p className="text-[16px] md:text-[18px] text-[#444] text-center">
              {subtitle}
            </p>

            <div className="hidden md:flex items-center space-x-3 absolute right-0">
              <button
                ref={swiperNavPrevRef}
                className="cursor-pointer bg-white border border-gray-300 text-gray-800 rounded-full p-3 hover:bg-gray-100 shadow-sm transition"
              >
                <FaArrowLeftLong />
              </button>

              <button
                ref={swiperNavNextRef}
                className="cursor-pointer bg-white border border-gray-300 text-gray-800 rounded-full p-3 hover:bg-gray-100 shadow-sm transition"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1.1}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
            renderBullet: (index, className) =>
              `<span class="${className}" 
                style="
                  display:inline-block;
                  width:8px;
                  height:8px;
                  background-color:#c4c4c4;
                  border-radius:50%;
                  margin:0 6px;
                  transition:all 0.35s ease;
                "></span>`,
          }}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = swiperNavPrevRef.current;
            swiper.params.navigation.nextEl = swiperNavNextRef.current;
            swiper.params.pagination.el = ".custom-pagination";
          }}
          navigation={{
            prevEl: swiperNavPrevRef.current,
            nextEl: swiperNavNextRef.current,
          }}
          className="pb-12 custom-swiper"
        >
          {data.map((trip) => (
            <SwiperSlide key={trip.id}>
              <div className="rounded-md overflow-hidden bg-white shadow-md hover:shadow-lg transition flex flex-col h-full mb-4">
                {/* Image */}

                <div className="relative">
                  <Link href={trip.link}>
                    <Image
                      src={trip.image || "/fallback.jpg"}
                      alt={trip.title}
                      width={400}
                      height={220}
                      className="w-full h-[220px] object-cover"
                    />
                  </Link>

                  {/* 🔥 Category Badge (Bottom Left) */}
                  {trip.category &&(
                    <div className="absolute bottom-4 left-4">
                      <span className="text-[#d87028] bg-white text-sm md:text-base font-semibold px-5 py-2 rounded-md shadow-md">
                        {trip.category}
                      </span>
                    </div>
                  )}
                </div>

                {/* <Link href={trip.link}>
                  <Image
                    src={trip.image}
                    alt={trip.title}
                    width={400}
                    height={220}
                    className="w-full h-[220px] object-cover"
                  />
                </Link> */}

                {/* Content */}
                <div className="py-4 px-2 md:p-6  flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    {/* 🔹 Left Side (Image + Name) */}
                    <div className="flex items-center gap-3">
                      {/* Author Image */}
                      <div className="w-10 h-10 relative">
                        <Image
                          src={trip.authorImage || "/author-blog.webp"}
                          alt={trip.author || "auther image"}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>

                      {/* Author Name */}
                      <span className=" capitalize tracking-wide text-[#444] text-[16px] font-medium">
                        {trip.author || "Peter"}
                      </span>
                    </div>

                    {/* 🔹 Date */}
                    <div className="flex items-center gap-2 ">
                      <FaRegCalendarAlt className=" text-[16px] text-[#d87028]" />
                      <span className="uppercase tracking-wider text-xs md:text-sm font-medium text-[#444] text-[16px] mt-1 ">
                        {formatDate(trip.date)}
                      </span>
                    </div>
                  </div>

                  <Link href={trip.link}>
                    <h3 className="font-semibold text-lg hover:text-[#d97129] md:text-[24px] mb-4">
                      {trip.title}
                    </h3>
                  </Link>

                  <p className="text-[#444] text-[16px] leading-relaxed line-clamp-4 mb-4">
                    {trip.description}
                  </p>

                  {/* CTA */}
                  {/* {trip.link && (
                    <Link
                      href={trip.link}
                      className="font-semibold underline hover:text-[#d87028] mt-auto pb-1"
                    >
                      <p>Find out more →</p>
                    </Link>
                  )} */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots */}
        <div className="custom-pagination flex justify-center mt-6"></div>

        {/* Inline CSS */}
        <style>
          {`
            .custom-pagination .swiper-pagination-bullet-active {
              background-color: #4a5464 !important;
              width: 12px !important;
              height: 12px !important;
              transform: scale(1.3);
              transition: all 0.35s ease;
            }

            .trip-card {
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }

            .trip-image {
              height: 160px;
              width: 100%;
              object-fit: cover;
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default RelatedBlogCard;
