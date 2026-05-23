// "use client";

// import React from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";

// import "swiper/css";

// import atta from "../../assets/atta.webp";
// import safaribooking from "../../assets/safaribooking.webp";
// import Tato from "../../assets/Tato.webp";
// import trip from "../../assets/trip.webp";
// import kpap from "../../assets/kpap.webp";

// const brands = [
//   { id: 1, name: "ATTA", img: atta, link: "" },
//   { id: 2, name: "SafariBookings", img: safaribooking, link: "" },
//   { id: 3, name: "TATO", img: Tato, link: "" },
//   {
//     id: 4,
//     name: "Tripadvisor",
//     img: trip,
//     link: "https://www.tripadvisor.com/Attraction_Review-g317084-d34222480-Reviews-Imara_Kileleni_Safaris-Moshi_Kilimanjaro_Region.html",
//   },
//   { id: 5, name: "KPAP", img: kpap, link: "" },
// ];

// const Featured = () => {
//   return (
//     <section className="w-full bg-white py-10">
//       <div className="px-4 md:px-10 lg:px-16 xl:px-28 mx-auto text-center max-w-full overflow-hidden">
//         {/* Title */}
//         <h2 className="text-2xl md:text-3xl font-bold mb-16 capitalize">
//           As Featured In
//         </h2>

//         {/* MOBILE / TABLET SLIDER */}
//         <div className="block lg:hidden !overflow-hidden">
//           <Swiper
//             modules={[Autoplay]}
//             autoplay={{ delay: 2500, disableOnInteraction: false }}
//             loop
//             spaceBetween={20}
//             slidesPerView={2}
//             breakpoints={{
//               480: { slidesPerView: 2 },
//               640: { slidesPerView: 3 },
//             }}
//           >
//             {brands.map((brand) => (
//               <SwiperSlide
//                 key={brand.id}
//                 className="flex items-center justify-center"
//               >
//                 {brand.link ? (
//                   <a
//                     href={brand.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <Image
//                       src={brand.img}
//                       alt={brand.name}
//                       title={brand.name}
//                       width={160}
//                       height={80}
//                       className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition"
//                     />
//                   </a>
//                 ) : (
//                   <Image
//                     src={brand.img}
//                     alt={brand.name}
//                     title={brand.name}
//                     width={160}
//                     height={80}
//                     className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition"
//                   />
//                 )}
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         {/* DESKTOP LOGOS */}
//         <div className="hidden lg:flex flex-wrap justify-center items-center gap-10">
//           {brands.map((brand) =>
//             brand.link ? (
//               <a
//                 key={brand.id}
//                 href={brand.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Image
//                   src={brand.img}
//                   alt={brand.name}
//                   width={220}
//                   height={100}
//                   className="h-20 xl:h-24 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
//                 />
//               </a>
//             ) : (
//               <Image
//                 key={brand.id}
//                 src={brand.img}
//                 alt={brand.name}
//                 width={220}
//                 height={100}
//                 className="h-20 xl:h-24 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
//               />
//             ),
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Featured;

"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
    <section className="w-full bg-white py-10">
      <div className="px-4 md:px-10 lg:px-16 xl:px-28 mx-auto text-center max-w-full overflow-hidden">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold mb-16 capitalize">
          As Featured In
        </h2>

        {/* MOBILE / TABLET CUSTOM SLIDER */}
        <div className="block lg:hidden overflow-hidden">
          <CustomBrandSlider brands={brands} />
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

const CustomBrandSlider = ({ brands }) => {
  const [current, setCurrent] = useState(0);
  const [transition, setTransition] = useState(true);

  const startX = useRef(0);
  const isDragging = useRef(false);

  const [slidesPerView, setSlidesPerView] = useState(2);

  // RESPONSIVE
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    updateSlides();

    window.addEventListener("resize", updateSlides);

    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  // CLONE
  const cloneCount = Math.ceil(slidesPerView);
  const sliderData = [...brands, ...brands.slice(0, cloneCount)];

  // NEXT
  const nextSlide = () => {
    if (current >= brands.length) return;

    setCurrent((prev) => prev + 1);
    setTransition(true);
  };

  // PREV
  const prevSlide = () => {
    if (current === 0) {
      setTransition(false);
      setCurrent(brands.length - 1);

      setTimeout(() => {
        setTransition(true);
      }, 50);

      return;
    }

    setCurrent((prev) => prev - 1);
  };

  // AUTO SLIDE MOBILE/TABLET ONLY
  useEffect(() => {
    if (window.innerWidth >= 1024) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 2500);

    return () => clearInterval(interval);
  }, [current]);

  // RESET LOOP
  useEffect(() => {
    if (current >= brands.length) {
      const timeout = setTimeout(() => {
        setTransition(false);
        setCurrent(0);

        setTimeout(() => {
          setTransition(true);
        }, 50);
      }, 700);

      return () => clearTimeout(timeout);
    }
  }, [current, brands.length]);

  // SWIPE START
  const handleStart = (clientX) => {
    startX.current = clientX;
    isDragging.current = true;
  };

  // SWIPE END
  const handleEnd = (clientX) => {
    if (!isDragging.current) return;

    const distance = startX.current - clientX;

    if (Math.abs(distance) < 10) {
      isDragging.current = false;
      return;
    }

    if (distance > 50) {
      nextSlide();
    }

    if (distance < -50) {
      prevSlide();
    }

    isDragging.current = false;
  };

  return (
    <div
      className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseUp={(e) => handleEnd(e.clientX)}
      onMouseLeave={(e) => {
        if (isDragging.current) {
          handleEnd(e.clientX);
        }
      }}
    >
      {/* TRACK */}
      <div
        className={`flex items-center ${
          transition ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{
          gap: "20px",
          transform: `translateX(calc(-${
            current * (100 / slidesPerView)
          }% - ${current * 20}px))`,
        }}
      >
        {sliderData.map((brand, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center"
            style={{
              width: `calc(${100 / slidesPerView}% - ${
                20 - 20 / slidesPerView
              }px)`,
            }}
          >
            {brand.link ? (
              <a href={brand.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={brand.img}
                  alt={brand.name}
                  title={brand.name}
                  width={160}
                  height={80}
                  draggable={false}
                  className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition pointer-events-none"
                />
              </a>
            ) : (
              <Image
                src={brand.img}
                alt={brand.name}
                title={brand.name}
                width={160}
                height={80}
                draggable={false}
                className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition pointer-events-none"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
