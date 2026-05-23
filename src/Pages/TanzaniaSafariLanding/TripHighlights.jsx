// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import API from "../../api/axios";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { MoveLeft, MoveRight } from "lucide-react";

// const TripHighlights = ({ subtitle }) => {
//   const swiperNavPrevRef = useRef(null);
//   const swiperNavNextRef = useRef(null);

//   const [highlights, setHighlights] = useState([]);
//   const [highlightHeading, setHighlightHeading] = useState("");

//   /* ================= FETCH DATA ================= */
//   useEffect(() => {
//     API.get("/destinationlanding") // ✅ confirm endpoint
//       .then((res) => {
//         const data = res.data?.[0]?.highlight || [];

//         // ✅ SET HEADING (use first one)
//         setHighlightHeading(data[0]?.heading || "");

//         // 🔁 Flatten highlight → section[]
//         const flatSections = data.flatMap((h) =>
//           h.section.map((s) => ({
//             id: s._id,
//             image: s.image,
//             title: s.title,
//             description: s.description,
//           })),
//         );

//         setHighlights(flatSections);
//       })
//       .catch(console.error);
//   }, []);

//   if (!highlights.length) return null;

//   return (
//     <section className="w-full py-10 sm:py-12 md:py-16 bg-white relative">
//       <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0">
//         {/* ================= TITLE + NAV ================= */}

//         <h2 className="text-2xl md:text-3xl text-center mb-3 font-bold text-[#1a1a1a] w-full capitalize">
//           {highlightHeading}
//         </h2>

//         <div className="relative flex items-center justify-center mb-8 md:mb-12">
//           <p className="text-center text-[#444] text-[18px]  ">{subtitle}</p>

//           <div className="hidden md:block absolute right-0 flex items-center space-x-3">
//             <button
//               ref={swiperNavPrevRef}
//               className="swiper-button-prev-custom cursor-pointer hover:border-[#d97129c4] hover:text-[#d97129c4] bg-white border border-gray-300 text-gray-800 rounded-full p-3 hover:bg-gray-100 shadow-sm transition"
//             >
//              <MoveLeft />
//             </button>
//             <button
//               ref={swiperNavNextRef}
//               className="swiper-button-next-custom cursor-pointer hover:border-[#d97129c4] hover:text-[#d97129c4] bg-white border border-gray-300 text-gray-800 rounded-full p-3 hover:bg-gray-100 shadow-sm transition"
//             >
//              <MoveRight />
//             </button>
//           </div>
//         </div>

//         {/* ================= SWIPER ================= */}
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
//                 ">
//               </span>`,
//           }}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             768: { slidesPerView: 2.5 },
//             1024: { slidesPerView: 3 },
//             1280: { slidesPerView: 4 },
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
//           className="pb-12 custom-swiper"
//         >
//           {highlights.map((trip) => (
//             <SwiperSlide key={trip.id}>
//               <div className="trip-card rounded-sm overflow-hidden bg-white shadow-sm hover:shadow-lg transition duration-300 mb-4">
//                 <div className="relative h-[160px] w-full">
//                   <Image
//                     src={trip.image}
//                     alt={trip.title}
//                     fill
//                     sizes="(max-width:768px) 100vw, 300px"
//                     className="object-cover"
//                   />
//                 </div>

//                 <div className="p-5 flex flex-col justify-between flex-1">
//                   <div>
//                     <h3 className="text-xl mb-4 leading-tight">{trip.title}</h3>

//                     {/* <p className="text-[15px] text-[#444] mb-4">
//                       {trip.description}
//                     </p> */}
//                     <div
//                       className="rich-text text-[15px] text-[#444] mb-4"
//                       dangerouslySetInnerHTML={{
//                         __html: trip.description || "",
//                       }}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* ================= PAGINATION ================= */}
//         <div
//           className="custom-pagination flex justify-center mt-6"
//           style={{ position: "relative", bottom: "0px", textAlign: "center" }}
//         ></div>

//         {/* ================= INLINE CSS ================= */}
//         <style>
//           {`
//             .custom-pagination .swiper-pagination-bullet-active {
//               background-color: #4a5464 !important;
//               width: 12px !important;
//               height: 12px !important;
//               transform: scale(1.3);
//               transition: all 0.35s ease;
//             }

//             .trip-card {
//               height:auto;
//               display: flex;
//               flex-direction: column;
//               justify-content: space-between;
//             }

//             .trip-image {
//               height: 160px;
//               width: 100%;
//               object-fit: cover;
//             }
//           `}
//         </style>
//       </div>
//     </section>
//   );
// };

// export default TripHighlights;

"use client";

import React, { useEffect, useRef, useState } from "react";
import API from "../../api/axios";
import Image from "next/image";
import { MoveLeft, MoveRight } from "lucide-react";

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
    <section className="w-full py-10 sm:py-12 md:py-16 bg-white relative">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0">
        {/* ================= TITLE + NAV ================= */}

        <h2 className="text-2xl md:text-3xl text-center mb-3 font-bold text-[#1a1a1a] w-full capitalize">
          {highlightHeading}
        </h2>

        <div className="relative flex items-center justify-center mb-8 md:mb-12">
          <p className="text-center text-[#444] text-[18px]  ">{subtitle}</p>

          <div className="hidden md:block absolute right-0 flex items-center space-x-3">
            <button
              ref={swiperNavPrevRef}
              className="swiper-button-prev-custom cursor-pointer hover:border-[#d97129c4] hover:text-[#d97129c4] bg-white border border-gray-300 text-gray-800 rounded-full p-3 hover:bg-gray-100 shadow-sm transition"
            >
              <MoveLeft />
            </button>
            <button
              ref={swiperNavNextRef}
              className="swiper-button-next-custom cursor-pointer hover:border-[#d97129c4] hover:text-[#d97129c4] bg-white border border-gray-300 text-gray-800 rounded-full p-3 hover:bg-gray-100 shadow-sm transition"
            >
              <MoveRight />
            </button>
          </div>
        </div>

        {/* ================= CUSTOM SLIDER ================= */}

        <CustomHighlightSlider
          highlights={highlights}
          prevRef={swiperNavPrevRef}
          nextRef={swiperNavNextRef}
        />

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
              height:auto;
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

const CustomHighlightSlider = ({ highlights, prevRef, nextRef }) => {
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
        setSlidesPerView(2);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2.5);
      } else if (window.innerWidth < 1280) {
        setSlidesPerView(3);
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
  const sliderData = [...highlights, ...highlights.slice(0, cloneCount)];

  // NEXT
  const nextSlide = () => {
    if (current >= highlights.length) return;

    setCurrent((prev) => prev + 1);
    setTransition(true);
  };

  // PREV
  const prevSlide = () => {
    if (current === 0) {
      setTransition(false);
      setCurrent(highlights.length - 1);

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
    if (current >= highlights.length) {
      const timeout = setTimeout(() => {
        setTransition(false);
        setCurrent(0);

        setTimeout(() => {
          setTransition(true);
        }, 50);
      }, 700);

      return () => clearTimeout(timeout);
    }
  }, [current, highlights.length]);

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
              className="flex-shrink-0"
              style={{
                width: `calc(${100 / slidesPerView}% - ${
                  24 - 24 / slidesPerView
                }px)`,
              }}
            >
              <div className="trip-card rounded-sm overflow-hidden bg-white shadow-sm hover:shadow-lg transition duration-300 mb-4">
                {/* IMAGE */}
                <div className="relative h-[160px] w-full">
                  <Image
                    src={trip.image}
                    alt={trip.title}
                    fill
                    draggable={false}
                    sizes="(max-width:768px) 100vw, 300px"
                    className="object-cover pointer-events-none"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-xl mb-4 leading-tight">{trip.title}</h3>

                    <div
                      className="rich-text text-[15px] text-[#444] mb-4"
                      dangerouslySetInnerHTML={{
                        __html: trip.description || "",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center mt-6 gap-3">
        {highlights.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index);
              setTransition(true);
            }}
            className={`rounded-full transition-all duration-300 ${
              current % highlights.length === index
                ? "bg-[#4a5464] w-3 h-3 scale-125"
                : "bg-[#c4c4c4] w-2 h-2"
            }`}
          />
        ))}
      </div>

      {/* EXTRA CSS */}
      <style jsx>{`
        .trip-card {
          height: auto;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
      `}</style>
    </>
  );
};
