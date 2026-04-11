"use client";

import React, { useEffect, useRef, useState } from "react";
import API from "../../api/axios";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const TripHighlights = ({ subtitle }) => {
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  const [highlights, setHighlights] = useState([]);
  const [highlightHeading, setHighlightHeading] = useState("");

  /* ================= FETCH DATA ================= */
  useEffect(() => {
    API.get("/destinationlanding") // ✅ confirm endpoint
      .then((res) => {
        const data = res.data?.[0]?.highlight || [];

        // ✅ SET HEADING (use first one)
        setHighlightHeading(data[0]?.heading || "");

        // 🔁 Flatten highlight → section[]
        const flatSections = data.flatMap((h) =>
          h.section.map((s) => ({
            id: s._id,
            image: s.image,
            title: s.title,
            description: s.description,
          })),
        );

        setHighlights(flatSections);
      })
      .catch(console.error);
  }, []);

  if (!highlights.length) return null;

  return (
    <section className="w-full py-8 md:py-16 bg-white relative">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0">
        {/* ================= TITLE + NAV ================= */}

        <h2 className="text-2xl md:text-3xl text-center mb-3 font-bold text-[#1a1a1a] w-full capitalize">
          {highlightHeading}
        </h2>

        <div className="relative flex items-center justify-center mb-8 md:mb-12">
          <p className="text-center text-[#444] text-[18px] ">{subtitle}</p>

          <div className="hidden md:block absolute right-0 flex items-center space-x-3">
            <button
              ref={swiperNavPrevRef}
              className="swiper-button-prev-custom cursor-pointer hover:border-[#d97129c4] hover:text-[#d97129c4] bg-white border border-gray-300 text-gray-800 rounded-full p-3 hover:bg-gray-100 shadow-sm transition"
            >
              <FaArrowLeftLong />
            </button>
            <button
              ref={swiperNavNextRef}
              className="swiper-button-next-custom cursor-pointer hover:border-[#d97129c4] hover:text-[#d97129c4] bg-white border border-gray-300 text-gray-800 rounded-full p-3 hover:bg-gray-100 shadow-sm transition"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* ================= SWIPER ================= */}
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
                ">
              </span>`,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
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
          {highlights.map((trip) => (
            <SwiperSlide key={trip.id}>
              <div className="trip-card rounded-sm overflow-hidden bg-white shadow-sm hover:shadow-lg transition duration-300 mb-4">
                <div className="relative h-[160px] w-full">
                  <Image
                    src={trip.image}
                    alt={trip.title}
                    fill
                    sizes="(max-width:768px) 100vw, 300px"
                    className="object-cover"
                  />
                </div>

                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-xl mb-4 leading-tight">{trip.title}</h3>

                    <p className="text-[15px] text-[#444] mb-4">
                      {trip.description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ================= PAGINATION ================= */}
        <div
          className="custom-pagination flex justify-center mt-6"
          style={{ position: "relative", bottom: "0px", textAlign: "center" }}
        ></div>

        {/* ================= INLINE CSS ================= */}
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
              height: 440px;
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
