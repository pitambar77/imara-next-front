"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import atta from "../../assets/atta.webp";
import safaribooking from "../../assets/safaribooking.webp";
import Tato from "../../assets/Tato.webp";
import trip from "../../assets/trip.webp";
import kpap from "../../assets/kpap.webp";

const brands = [
  { id: 1, name: "ATTA", img: atta, link: "" },
  { id: 2, name: "SafariBookings", img: safaribooking, link: "" },
  { id: 3, name: "TATO", img: Tato, link: "" },
  {
    id: 4,
    name: "Tripadvisor",
    img: trip,
    link: "https://www.tripadvisor.com/Attraction_Review-g317084-d34222480-Reviews-Imara_Kileleni_Safaris-Moshi_Kilimanjaro_Region.html",
  },
  { id: 5, name: "KPAP", img: kpap, link: "" },
];

const Featured = () => {
  return (
    <section className="w-full bg-white py-8">
      <div className="px-4 md:px-10 lg:px-16 xl:px-28 mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold mb-16 capitalize">
          As Featured In
        </h2>

        {/* MOBILE / TABLET SLIDER */}
        <div className="block lg:hidden">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop
            spaceBetween={20}
            slidesPerView={2}
            breakpoints={{
              480: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
            }}
          >
            {brands.map((brand) => (
              <SwiperSlide
                key={brand.id}
                className="flex items-center justify-center"
              >
                {brand.link ? (
                  <a
                    href={brand.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={brand.img}
                      alt={brand.name}
                      title={brand.name}
                      width={160}
                      height={80}
                      className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition"
                    />
                  </a>
                ) : (
                  <Image
                    src={brand.img}
                    alt={brand.name}
                    title={brand.name}
                    width={160}
                    height={80}
                    className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition"
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* DESKTOP LOGOS */}
        <div className="hidden lg:flex flex-wrap justify-center items-center gap-10">
          {brands.map((brand) =>
            brand.link ? (
              <a
                key={brand.id}
                href={brand.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={brand.img}
                  alt={brand.name}
                  width={220}
                  height={100}
                  className="h-20 xl:h-24 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </a>
            ) : (
              <Image
                key={brand.id}
                src={brand.img}
                alt={brand.name}
                width={220}
                height={100}
                className="h-20 xl:h-24 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Featured;
