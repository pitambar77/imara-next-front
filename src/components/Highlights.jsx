// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const Highlights = ({ title, trips, subtitle }) => {
//   const swiperNavPrevRef = useRef(null);
//   const swiperNavNextRef = useRef(null);

//   return (
//     <section id="beach" className="w-full py-8 md:py-16 bg-white relative">
//       <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0">
//         {/* Title + Navigation */}

//         {title && (
//           <h2 className="text-2xl md:text-3xl mb-3 text-center font-bold w-full text-[#1a1a1a] capitalize">
//             {title}
//           </h2>
//         )}

//         <div className="relative flex items-center justify-center mb-8 md:mb-12">
//           {subtitle && <p className="text-[18px] text-[#444] ">{subtitle}</p>}

//           {/* Navigation Arrows */}
//           <div className=" hidden md:block absolute right-0 flex items-center space-x-3">
//             <button
//               ref={swiperNavPrevRef}
//               className="swiper-button-prev-custom bg- cursor-pointer border border-gray-300 text-gray-800 rounded-full p-3 hover:bg-gray-100 shadow-sm transition"
//             >
//               <FaArrowLeftLong />
//             </button>
//             <button
//               ref={swiperNavNextRef}
//               className="swiper-button-next-custom bg-white cursor-pointer border border-gray-300 text-gray-800 rounded-full p-3 hover:bg-gray-100 shadow-sm transition"
//             >
//               <FaArrowRight />
//             </button>
//           </div>
//         </div>

//         {/* Swiper Slider */}
//         <Swiper
//           modules={[Navigation, Pagination]}
//           spaceBetween={24}
//           slidesPerView={1.1}
//           pagination={{
//             clickable: true,
//             el: ".custom-pagination",
//             renderBullet: (index, className) =>
//               `<span class="${className}"
//                 style="
//                   display:inline-block;
//                   width:8px;
//                   height:8px;
//                   background-color:#c4c4c4;
//                   border-radius:50%;
//                   margin:0 6px;
//                   transition:all 0.35s ease;
//                 "></span>`,
//           }}
//           breakpoints={{
//             640: { slidesPerView: 1.5 },
//             768: { slidesPerView: 2.5 },
//             1024: { slidesPerView: 4 },
//           }}
//           onBeforeInit={(swiper) => {
//             swiper.params.navigation.prevEl = swiperNavPrevRef.current;
//             swiper.params.navigation.nextEl = swiperNavNextRef.current;
//             swiper.params.pagination.el = ".custom-pagination";
//           }}
//           navigation={{
//             prevEl: swiperNavPrevRef.current,
//             nextEl: swiperNavNextRef.current,
//           }}
//           className="pb-12"
//         >
//           {trips?.map((trip) => (
//             <SwiperSlide key={trip.id} className=" h-auto">
//               <div className="rounded-sm overflow-hidden bg-white shadow-sm hover:shadow-lg transition duration-300 mb-4 flex flex-col">
//                 {/* Image */}
//                 <img
//                   src={trip.image}
//                   alt={trip.title}
//                   className="w-full h-[160px] object-cover"
//                 />

//                 {/* Content */}
//                 <div className="p-5 flex flex-col justify-between flex-1">
//                   <h3 className="text-xl mb-4 text-center leading-tight">
//                     {trip.title}
//                   </h3>

//                   {/* <p className="text-[16px] text-center text-[#444] mb-4">
//                     {trip.description}
//                   </p> */}
//                   <div
//                     className="
//     rich-text
//     text-[16px]
//     text-center
//     text-[#444]
//     mb-4
//   "
//                     dangerouslySetInnerHTML={{
//                       __html: trip.description || "",
//                     }}
//                   />
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Pagination Dots */}
//         <div className="custom-pagination flex justify-center mt-6"></div>

//         {/* Pagination Active Style */}
//         <style>
//           {`
//             .custom-pagination .swiper-pagination-bullet-active {
//               background-color: #4a5464 !important;
//               width: 12px !important;
//               height: 12px !important;
//               transform: scale(1.3);
//               transition: all 0.35s ease;
//             }
//           `}
//         </style>
//       </div>
//     </section>
//   );
// };

// export default Highlights;

import { MoveLeft, MoveRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const Highlights = ({ title, trips, subtitle }) => {
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  return (
    <section id="beach" className="w-full py-8 md:py-16 bg-white relative">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0">
        {/* Title + Navigation */}

        {title && (
          <h2 className="text-2xl md:text-3xl mb-3 text-center font-bold w-full text-[#1a1a1a] capitalize">
            {title}
          </h2>
        )}

        <div className="relative flex items-center justify-center mb-8 md:mb-12">
          {subtitle && <p className="text-[18px] text-[#444] ">{subtitle}</p>}

          {/* Navigation Arrows */}
          <div className=" hidden md:block absolute right-0 flex items-center space-x-3">
            <button
              ref={swiperNavPrevRef}
              className="swiper-button-prev-custom bg- cursor-pointer border border-gray-300 text-gray-800 rounded-full p-3 hover:bg-gray-100 shadow-sm transition"
            >
             <MoveLeft />
            </button>
            <button
              ref={swiperNavNextRef}
              className="swiper-button-next-custom bg-white cursor-pointer border border-gray-300 text-gray-800 rounded-full p-3 hover:bg-gray-100 shadow-sm transition"
            >
             <MoveRight />
            </button>
          </div>
        </div>

        {/* ================= CUSTOM SLIDER ================= */}

        <CustomHighlightsSlider
          trips={trips}
          prevRef={swiperNavPrevRef}
          nextRef={swiperNavNextRef}
        />

        {/* Pagination Dots */}
        <div className="custom-pagination flex justify-center mt-6"></div>

        {/* Pagination Active Style */}
        <style>
          {`
            .custom-pagination .swiper-pagination-bullet-active {
              background-color: #4a5464 !important;
              width: 12px !important;
              height: 12px !important;
              transform: scale(1.3);
              transition: all 0.35s ease;
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default Highlights;

const CustomHighlightsSlider = ({ trips, prevRef, nextRef }) => {
  const [current, setCurrent] = useState(0);
  const [transition, setTransition] = useState(true);

  const startX = useRef(0);
  const isDragging = useRef(false);

  const [slidesPerView, setSlidesPerView] = useState(4);

  // RESPONSIVE
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1.1);
      } else if (window.innerWidth < 768) {
        setSlidesPerView(1.5);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2.5);
      } else {
        setSlidesPerView(4);
      }
    };

    updateSlides();

    window.addEventListener("resize", updateSlides);

    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  // CLONE
  const cloneCount = Math.ceil(slidesPerView);

  const sliderData = [...trips, ...trips.slice(0, cloneCount)];

  // NEXT
  const nextSlide = () => {
    if (current >= trips.length) return;

    setCurrent((prev) => prev + 1);
    setTransition(true);
  };

  // PREV
  const prevSlide = () => {
    if (current === 0) {
      setTransition(false);

      setCurrent(trips.length - 1);

      setTimeout(() => {
        setTransition(true);
      }, 50);

      return;
    }

    setCurrent((prev) => prev - 1);
  };

  // AUTO SLIDE ONLY MOBILE/TABLET
  useEffect(() => {
    if (window.innerWidth >= 1024) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [current]);

  // RESET LOOP
  useEffect(() => {
    if (current >= trips.length) {
      const timeout = setTimeout(() => {
        setTransition(false);

        setCurrent(0);

        setTimeout(() => {
          setTransition(true);
        }, 50);
      }, 700);

      return () => clearTimeout(timeout);
    }
  }, [current, trips.length]);

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

  // BUTTONS
  useEffect(() => {
    if (prevRef?.current) {
      prevRef.current.onclick = prevSlide;
    }

    if (nextRef?.current) {
      nextRef.current.onclick = nextSlide;
    }
  });

  return (
    <>
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
          className={`flex ${
            transition ? "transition-transform duration-700 ease-in-out" : ""
          }`}
          style={{
            gap: "24px",
            transform: `translateX(calc(-${
              current * (100 / slidesPerView)
            }% - ${current * 24}px))`,
          }}
        >
          {sliderData.map((trip, index) => (
            <div
              key={index}
              className="flex-shrink-0 h-auto"
              style={{
                width: `calc(${100 / slidesPerView}% - ${
                  24 - 24 / slidesPerView
                }px)`,
              }}
            >
              <div className="rounded-sm overflow-hidden bg-white shadow-sm hover:shadow-lg transition duration-300 mb-4 flex flex-col">
                {/* IMAGE */}
                <img
                  src={trip.image}
                  alt={trip.title}
                  draggable={false}
                  className="w-full h-[160px] object-cover pointer-events-none"
                />

                {/* CONTENT */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <h3 className="text-xl mb-4 text-center leading-tight">
                    {trip.title}
                  </h3>

                  <div
                    className="
                      rich-text
                      text-[16px]
                      text-center
                      text-[#444]
                      mb-4
                    "
                    dangerouslySetInnerHTML={{
                      __html: trip.description || "",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center mt-6 gap-3">
        {trips?.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index);
              setTransition(true);
            }}
            className={`rounded-full transition-all duration-300 ${
              current % trips.length === index
                ? "bg-[#4a5464] w-3 h-3 scale-125"
                : "bg-[#c4c4c4] w-2 h-2"
            }`}
          />
        ))}
      </div>
    </>
  );
};
