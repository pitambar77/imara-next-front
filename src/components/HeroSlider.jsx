"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import PrimaryButton from "./PrimaryButton";

const slides = [
  {
    id: 1,
    image: "/tanzania.webp",
    title: "Tanzania Safaris",
    description:
      "Wild spaces invite travellers into Tanzania’s raw beauty with genuine discovery.",
  },
  {
    id: 2,
    image: "/kilimanjaro.webp",
    title: "Kilimanjaro Climbs",
    description:
      "Guided ascents built on steady expertise, safe pacing, and real mountain insight.",
  },
  {
    id: 3,
    image: "/zanzibar.webp",
    title: "Zanzibar Escapes",
    description:
      "Easy coastal days shaped by warm waters, island culture, and quiet rest.",
  },
];

const HeroSlider = () => {
  return (
    <section className="relative w-full ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="h-full custom-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-[350px] md:h-[500px] 2xl:h-[650px]   "
              // style={{ backgroundImage: `url(${slide.image})` }} h-[350px] md:h-[60vh] lg:h-[70vh]
            >
              <Image
                src={slide.image}
                alt={slide.title}
                title={slide.title}
                priority={index === 0}
                fetchPriority="high"
                loading={index === 0 ? "eager" : "lazy"}
                quality={80}
                fill
                sizes="100vw"
                className="absolute inset-0 object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white ">
                {/* <h1 className="text-2xl md:text-5xl mb-4 font-bold uppercase">
                  {slide.title}
                </h1> */}

                {index === 0 ? (
                  <h1 className="text-2xl md:text-5xl mb-4 font-bold uppercase">
                    {slide.title}
                  </h1>
                ) : (
                  <h2 className="text-2xl md:text-5xl mb-4 font-bold uppercase">
                    {slide.title}
                  </h2>
                )}
                <p className="text-lg md:text-xl mb-4 md:mb-6 max-w-2xl">
                  {slide.description}
                </p>

                <PrimaryButton href="/tailor-made-form">
                  Plan A Trip
                </PrimaryButton>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev !hidden md:!flex !bg-white !text-gray-800 !rounded-full !p-3 !shadow-md hover:!bg-gray-100 transition">
        <FaArrowLeftLong />
      </div>

      <div className="swiper-button-next !hidden md:!flex !bg-white !text-gray-800 !rounded-full !p-3 !shadow-md hover:!bg-gray-100 transition">
        <FaArrowRight />
      </div>
    </section>
  );
};

export default HeroSlider;
