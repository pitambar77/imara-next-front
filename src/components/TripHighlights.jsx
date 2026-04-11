"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TripHighlights = ({ title, data }) => {
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);
  const [expandedCard, setExpandedCard] = useState(null);

  return (
    <section id="highlight" className="w-full py-4 md:py-16 bg-white relative">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0">
        {/* Title + Navigation */}
        <div className="relative flex items-center justify-center mb-10">
          <h2 className="text-2xl md:text-3xl text-center font-bold w-full text-[#1a1a1a] capitalize">
            {title}
          </h2>

          <div className=" hidden md:block absolute right-0 flex items-center space-x-3">
            <button
              ref={swiperNavPrevRef}
              className="swiper-button-prev- cursor-pointer bg-white border border-gray-300 text-gray-800 rounded-full p-3 hover:bg-gray-100 shadow-sm transition"
            >
              <FaArrowLeftLong />
            </button>

            <button
              ref={swiperNavNextRef}
              className="swiper-button-next-custom cursor-pointer bg-white border border-gray-300 text-gray-800 rounded-full p-3 hover:bg-gray-100 shadow-sm transition"
            >
              <FaArrowRight />
            </button>
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
            1280: { slidesPerView: 4 },
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
              <Link href={trip.link} className="block h-full cursor-pointer">
                <div
                  onClick={() =>
                    setExpandedCard(expandedCard === trip.id ? null : trip.id)
                  }
                  className="trip-card rounded-sm overflow-hidden bg-white shadow-sm hover:shadow-lg transition duration-300 mb-4"
                >
                  <div className="relative">
                    <Image
                      src={trip.image}
                      alt={trip.title}
                      width={400}
                      height={160}
                      className="trip-image"
                    />
                  </div>

                  <div className="p-5 flex flex-col justify-between flex-1 pb-4">
                    <div>
                      <h3 className="text-xl mb-4 leading-tight">
                        {trip.title}
                      </h3>

                      <p
                        className={`text-[15px] text-[#444] leading-relaxed ${
                          expandedCard === trip.id ? "" : "line-clamp-6"
                        }`}
                      >
                        {trip.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
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

export default TripHighlights;
