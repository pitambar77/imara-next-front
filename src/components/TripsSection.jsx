"use client";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useMemo, useState, useRef } from "react";
import TripCard from "./TripCard";
import TripQuickViewModal from "./TripQuickViewModal";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import PrimaryButton from "./PrimaryButton";

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

  /* ================= FETCH ================= */

  // useEffect(() => {
  //   const fetchTrips = async () => {
  //     try {
  //       const res = await API.get("/packages");
  //       setTrips(res.data || []);
  //     } catch (err) {
  //       console.error("Trip fetch error:", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchTrips();
  // }, []);

  /* ================= FILTER ================= */

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

  // if (loading) {
  //   return (
  //     <div className="grid grid-cols-4 gap-6 py-10">
  //       {[...Array(4)].map((_, i) => (
  //         <div
  //           key={i}
  //           className="h-[320px] bg-gray-200 animate-pulse rounded-lg"
  //         ></div>
  //       ))}
  //     </div>
  //   );
  // }

  return (
    <section className={`w-full py-8 sm:py-12 md:py-16 ${bg}`}>
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
            <div ref={ref}>
              {layout === "slider" && inView && showArrows && (
                <div className="hidden md:flex absolute right-0 gap-3">
                  <button
                    ref={swiperNavPrevRef}
                    className="bg-white border border-gray-300 hover:border-[#d97129c4] hover:text-[#d97129c4] duration-300 rounded-full p-3 shadow-sm cursor-pointer"
                  >
                    <FaArrowLeftLong />
                  </button>

                  <button
                    ref={swiperNavNextRef}
                    className="bg-white border border-gray-300 hover:border-[#d97129c4] hover:text-[#d97129c4] duration-300 rounded-full p-3 shadow-sm cursor-pointer"
                  >
                    <FaArrowRight />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================= GRID ================= */}

        {layout === "grid" && (
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

        {/* ================= SLIDER ================= */}

        {layout === "slider" && (
          <>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={24}
              slidesPerView={1.1}
              pagination={{ clickable: true, el: ".custom-pagination" }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = swiperNavPrevRef.current;
                swiper.params.navigation.nextEl = swiperNavNextRef.current;
                swiper.params.pagination.el = ".custom-pagination";
              }}
              navigation={
                showArrows
                  ? {
                      prevEl: swiperNavPrevRef.current,
                      nextEl: swiperNavNextRef.current,
                    }
                  : false
              }
              className="pb-12"
            >
              {filteredTrips.map((trip) => (
                <SwiperSlide key={trip._id}>
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
                </SwiperSlide>
              ))}
            </Swiper>

            {/* PAGINATION */}
            <div
              className="custom-pagination flex justify-center mt-6"
              style={{
                position: "relative",
                bottom: "0px",
                textAlign: "center",
              }}
            ></div>

            {/* PAGINATION STYLE */}
            <style>
              {`
              .custom-pagination .swiper-pagination-bullet-active {
                background-color: #d97129 !important;
                width: 8px !important;
                height: 8px !important;
                transform: scale(1.3);
                transition: all 0.35s ease;
              }
            `}
            </style>
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
