// "use client";
// import { useInView } from "react-intersection-observer";
// import React, { useEffect, useMemo, useState, useRef } from "react";
// import TripCard from "./TripCard";
// import TripQuickViewModal from "./TripQuickViewModal";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
// import PrimaryButton from "./PrimaryButton";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const TripsSection = ({
//   title,
//   subtitle,
//   trips = [],
//   destination,
//   layout = "grid",
//   bg = "bg-white",
//   btnlink = "",
//   btnname = "",
//   showArrows = true,
//   currentTripId = null,
// }) => {
//   // const [trips, setTrips] = useState([]);
//   const [selectedTrip, setSelectedTrip] = useState(null);
//   const [isClosing, setIsClosing] = useState(false);
//   // const [loading, setLoading] = useState(true);

//   const swiperNavPrevRef = useRef(null);
//   const swiperNavNextRef = useRef(null);

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     rootMargin: "200px",
//   });

//   const filteredTrips = useMemo(() => {
//     return trips.filter(
//       (trip) =>
//         trip.destination &&
//         trip.destination.trim().toLowerCase() === destination.toLowerCase() &&
//         trip._id !== currentTripId,
//     );
//   }, [trips, destination, currentTripId]);

//   /* ================= MODAL ================= */

//   const handleCloseModal = () => {
//     setIsClosing(true);

//     setTimeout(() => {
//       setSelectedTrip(null);
//       setIsClosing(false);
//     }, 300);
//   };

//   useEffect(() => {
//     document.body.style.overflow = selectedTrip ? "hidden" : "auto";
//     return () => (document.body.style.overflow = "auto");
//   }, [selectedTrip]);

//   return (
//     <section className={`w-full py-10 sm:py-12 md:py-16 ${bg}`}>
//       <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0  ">
//         {/* ================= HEADER ================= */}

//         {title && (
//           <h2 className="text-2xl md:text-3xl text-center font-bold w-full text-[#1a1a1a] capitalize mb-3">
//             {title}
//           </h2>
//         )}

//         {(subtitle || layout === "slider") && (
//           <div className="relative flex items-center justify-center mb-10">
//             {subtitle && (
//               <p className="text-center text-[#444] text-[18px] ">{subtitle}</p>
//             )}

//             {layout === "slider" && showArrows && (
//               <div className="hidden md:flex absolute right-0 gap-3">
//                 <button
//                   ref={swiperNavPrevRef}
//                   className="bg-white border border-gray-300 hover:border-[#d97129c4] hover:text-[#d97129c4] duration-300 rounded-full p-3 shadow-sm cursor-pointer"
//                 >
//                   <FaArrowLeftLong />
//                 </button>

//                 <button
//                   ref={swiperNavNextRef}
//                   className="bg-white border border-gray-300 hover:border-[#d97129c4] hover:text-[#d97129c4] duration-300 rounded-full p-3 shadow-sm cursor-pointer"
//                 >
//                   <FaArrowRight />
//                 </button>
//               </div>
//             )}
//           </div>
//         )}

//         {/* ================= GRID ================= */}
//         <div ref={ref}>
//           {layout === "grid" && inView && (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//               {filteredTrips.map((trip) => (
//                 <TripCard
//                   key={trip._id}
//                   trip={{
//                     id: trip._id,
//                     image: trip.landingImage || trip.image,
//                     title: trip.title,
//                     days: trip.accomoDay,
//                     country: "Tanzania",
//                     discountedPrice: trip.price,
//                     description: trip.description,
//                   }}
//                   onQuickView={() => setSelectedTrip(trip)}
//                 />
//               ))}
//             </div>
//           )}
//         </div>

//         {/* ================= SLIDER ================= */}

//         {layout === "slider" && (
//           <>
//             <Swiper
//               modules={[Navigation, Pagination]}
//               spaceBetween={24}
//               slidesPerView={1.1}
//               pagination={{ clickable: true, el: ".custom-pagination" }}
//               breakpoints={{
//                 640: { slidesPerView: 1 },
//                 768: { slidesPerView: 2 },
//                 1024: { slidesPerView: 3 },
//                 1280: { slidesPerView: 4 },
//               }}
//               onBeforeInit={(swiper) => {
//                 swiper.params.navigation.prevEl = swiperNavPrevRef.current;
//                 swiper.params.navigation.nextEl = swiperNavNextRef.current;
//                 swiper.params.pagination.el = ".custom-pagination";
//               }}
//               navigation={
//                 showArrows
//                   ? {
//                       prevEl: swiperNavPrevRef.current,
//                       nextEl: swiperNavNextRef.current,
//                     }
//                   : false
//               }
//               className="pb-12"
//             >
//               {filteredTrips.map((trip) => (
//                 <SwiperSlide key={trip._id}>
//                   <TripCard
//                     trip={{
//                       id: trip._id,
//                       image: trip.landingImage || trip.image,
//                       title: trip.title,
//                       days: trip.accomoDay,
//                       country: "Tanzania",
//                       discountedPrice: trip.price,
//                       description: trip.description,
//                     }}
//                     onQuickView={() => setSelectedTrip(trip)}
//                   />
//                 </SwiperSlide>
//               ))}
//             </Swiper>

//             {/* PAGINATION */}
//             <div
//               className="custom-pagination flex justify-center mt-6"
//               style={{
//                 position: "relative",
//                 bottom: "0px",
//                 textAlign: "center",
//               }}
//             ></div>

//             {/* PAGINATION STYLE */}
//             <style>
//               {`
//               .custom-pagination .swiper-pagination-bullet-active {
//                 background-color: #d97129 !important;
//                 width: 8px !important;
//                 height: 8px !important;
//                 transform: scale(1.3);
//                 transition: all 0.35s ease;
//               }
//             `}
//             </style>
//           </>
//         )}

//         {btnname && btnlink && (
//           <div className="flex justify-center mt-4">
//             <PrimaryButton href={btnlink}>{btnname}</PrimaryButton>
//           </div>
//         )}
//       </div>

//       {/* ================= MODAL ================= */}

//       <TripQuickViewModal
//         trip={selectedTrip}
//         isClosing={isClosing}
//         onClose={handleCloseModal}
//       />
//     </section>
//   );
// };

// export default TripsSection;

"use client";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useMemo, useState, useRef } from "react";
import TripCard from "./TripCard";
import TripQuickViewModal from "./TripQuickViewModal";
import PrimaryButton from "./PrimaryButton";
import { MoveLeft, MoveRight } from "lucide-react";

const TripsSection = ({
  title,
  subtitle,
  trips = [],
  destination,
  layout = "grid",
  bg = "bg-white",
  btnlink = "",
  btnname = "",
  showArrows = true,
  currentTripId = null,
}) => {
  // const [trips, setTrips] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  // const [loading, setLoading] = useState(true);

  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px",
  });

  const filteredTrips = useMemo(() => {
    return trips.filter(
      (trip) =>
        trip.destination &&
        trip.destination.trim().toLowerCase() === destination.toLowerCase() &&
        trip._id !== currentTripId,
    );
  }, [trips, destination, currentTripId]);

  /* ================= MODAL ================= */

  const handleCloseModal = () => {
    setIsClosing(true);

    setTimeout(() => {
      setSelectedTrip(null);
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    document.body.style.overflow = selectedTrip ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [selectedTrip]);

  return (
    <section className={`w-full py-10 sm:py-12 md:py-16 ${bg}`}>
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0  ">
        {/* ================= HEADER ================= */}

        {title && (
          <h2 className="text-2xl md:text-3xl text-center font-bold w-full text-[#1a1a1a] capitalize mb-3">
            {title}
          </h2>
        )}

        {(subtitle || layout === "slider") && (
          <div className="relative flex items-center justify-center mb-10">
            {subtitle && (
              <p className="text-center text-[#444] text-[18px] ">{subtitle}</p>
            )}

            {layout === "slider" && showArrows && (
              <div className="hidden md:flex absolute right-0 gap-3">
                <button
                  ref={swiperNavPrevRef}
                  className="bg-white border border-gray-300 hover:border-[#d97129c4] hover:text-[#d97129c4] duration-300 rounded-full p-3 shadow-sm cursor-pointer"
                >
                  <MoveLeft size={18} />
                </button>

                <button
                  ref={swiperNavNextRef}
                  className="bg-white border border-gray-300 hover:border-[#d97129c4] hover:text-[#d97129c4] duration-300 rounded-full p-3 shadow-sm cursor-pointer"
                >
                  <MoveRight size={18}/>
                </button>
              </div>
            )}
          </div>
        )}

        {/* ================= GRID ================= */}
        <div ref={ref}>
          {layout === "grid" && inView && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTrips.map((trip) => (
                <TripCard
                  key={trip._id}
                  trip={{
                    id: trip._id,
                    image: trip.landingImage || trip.image,
                    title: trip.title,
                    days: trip.accomoDay,
                    country: "Tanzania",
                    discountedPrice: trip.price,
                    description: trip.description,
                  }}
                  onQuickView={() => setSelectedTrip(trip)}
                />
              ))}
            </div>
          )}
        </div>

        {/* ================= SLIDER ================= */}

        {layout === "slider" && (
          <>
            <CustomTripSlider
              trips={filteredTrips}
              setSelectedTrip={setSelectedTrip}
              showArrows={showArrows}
              prevRef={swiperNavPrevRef}
              nextRef={swiperNavNextRef}
            />
          </>
        )}

        {btnname && btnlink && (
          <div className="flex justify-center mt-4">
            <PrimaryButton href={btnlink}>{btnname}</PrimaryButton>
          </div>
        )}
      </div>

      {/* ================= MODAL ================= */}

      <TripQuickViewModal
        trip={selectedTrip}
        isClosing={isClosing}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default TripsSection;

const CustomTripSlider = ({
  trips,
  setSelectedTrip,
  showArrows,
  prevRef,
  nextRef,
}) => {
  const [current, setCurrent] = useState(0);
  const [transition, setTransition] = useState(true);

  const startX = useRef(0);
  const isDragging = useRef(false);

  // RESPONSIVE SLIDES
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1.1);
      } else if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
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

  // CLONE FIRST ITEMS
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

  // AUTO SLIDE
  // AUTO SLIDE ONLY MOBILE
  useEffect(() => {
    // only mobile/tablet
    if (window.innerWidth >= 1024) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  // RESET LOOP
  useEffect(() => {
    if (current === trips.length) {
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

    if (distance > 50) {
      nextSlide();
    }

    if (distance < -50) {
      prevSlide();
    }

    isDragging.current = false;
  };

  // BUTTON REFS
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
        className="overflow-hidden cursor-grab active:cursor-grabbing"
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
              <TripCard
                trip={{
                  id: trip._id,
                  image: trip.landingImage || trip.image,
                  title: trip.title,
                  days: trip.accomoDay,
                  country: "Tanzania",
                  discountedPrice: trip.price,
                  description: trip.description,
                }}
                onQuickView={() => setSelectedTrip(trip)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* DOTS */}
      <div className="flex justify-center mt-6 gap-3">
        {trips.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index);
              setTransition(true);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              current % trips.length === index
                ? "bg-[#d97129] scale-125"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </>
  );
};
