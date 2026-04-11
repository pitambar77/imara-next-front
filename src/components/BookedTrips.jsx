//corected work

import React, { useState, useRef, useEffect, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaCalendarAlt, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import { MdOutlineSavedSearch } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import API from "../api/axios.js";
import { slugify } from "../utils/slugify.js";
import { useNavigate, Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PrimaryButton from "./PrimaryButton.jsx";
import TripQuickViewModal from "./TripQuickViewModal.jsx";
import CardButton from "./CardButton.jsx";

const BookedTrips = () => {
  const [trips, setTrips] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);
  const navigate = useNavigate();

  const handleCloseModal = () => {
    setIsClosing(true);

    setTimeout(() => {
      setSelectedTrip(null);
      setIsClosing(false);
    }, 300); // match animation duration
  };

  /* ================= FETCH PACKAGES ================= */
  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const res = await API.get("/packages");
        setTrips(res.data || []);
      } catch (err) {
        console.error("Failed to fetch packages", err);
      }
    };
    fetchTrips();
  }, []);

  useEffect(() => {
    if (selectedTrip) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedTrip]);

  /* ================= FILTER TANZANIA ================= */
  const tanzaniaTrips = useMemo(() => {
    return trips.filter(
      (trip) =>
        trip.destination && trip.destination.toLowerCase() === "tanzania",
    );
  }, [trips]);

  if (!tanzaniaTrips.length) return null;

  return (
    <section className="w-full py-16 bg-white relative">
      <div className="px-4  md:px-10 lg:px-16 xl:px-18 2xl:px-28 mx-auto">
        {/* ================= HEADER ================= */}
        <div className="relative flex items-center justify-center mb-10">
          <h2 className="text-2xl md:text-3xl text-center font-bold w-full text-[#1a1a1a] capitalize">
            Explore Our Signature Tanzania Safari
          </h2>

          <div className="hidden md:flex absolute right-0 gap-3 ">
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
        </div>

        {/* ================= SWIPER ================= */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1.1}
          pagination={{ clickable: true, el: ".custom-pagination" }}
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
          className="pb-12"
        >
          {tanzaniaTrips.map((trip) => (
            <SwiperSlide key={trip._id}>
              <div className="h-[460px] mb-4 bg-white shadow-sm hover:shadow-lg transition flex flex-col rounded-sm overflow-hidden">
                {/* IMAGE */}
                <div className="relative">
                  <Link to={`/package/${slugify(trip.title)}`}>
                    <img
                      src={trip.landingImage}
                      alt={trip.title}
                      className="w-full h-40 object-cover "
                    />
                  </Link>
                  <button
                    onClick={() => setSelectedTrip(trip)}
                    className="absolute bottom-3 left-3 bg-white text-xs px-2 py-1 rounded shadow-sm"
                  >
                    <span className="flex items-center cursor-pointer font-semibold text-[#444] gap-1">
                      <MdOutlineSavedSearch className="text-lg" />
                      QUICK VIEW
                    </span>
                  </button>
                </div>

                {/* CONTENT */}
                <div className="p-5 flex flex-col flex-1">
                  <Link to={`/package/${slugify(trip.title)}`}>
                    <h3 className="text-xl leading-tight">{trip.title}</h3>
                  </Link>
                  <div className="text-sm flex flex-wrap text-[#444] gap-3 mt-6 mb-3">
                    <span className="flex items-center  gap-1">
                      <FaCalendarAlt className=" text-[#d86e28]" /> {trip.accomoDay}
                    </span>
                    {/* <span className="flex items-center gap-1">
                      <FaMapMarkerAlt /> {trip.itinerary?.length || 0} Stops
                    </span> */}
                    <span className="flex items-center  gap-1">
                      <FaGlobe className=" text-[#d86e28]" /> Tanzania
                    </span>
                  </div>

                  {/* ✅ CLAMPED DESCRIPTION */}
                  <p className="text-[16px] text-[#444] line-clamp-3 mb-4">
                    {trip.description}
                  </p>

                  {/* Spacer pushes footer down */}
                  <div className="flex-grow" />

                  {/* FOOTER */}
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-sm text-[#444]">
                      {trip.price}
                    </h3>

                    <CardButton to={`/package/${slugify(trip.title)}`}>
                      View Trip
                    </CardButton>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✅ Pagination Dots */}
        <div
          className="custom-pagination flex justify-center mt-6"
          style={{
            position: "relative",
            bottom: "0px",
            textAlign: "center",
          }}
        ></div>

        {/* ✅ Inline CSS for active dot + animation */}
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

        {/* <div className="custom-pagination flex justify-center mt-6" /> */}

        <div className="flex justify-center mt-10">
          <PrimaryButton to={"/tanzania-safaris"}>VIEW ALL TRIPS</PrimaryButton>
        </div>
      </div>

      {/* ================= QUICK VIEW MODAL ================= */}

      <TripQuickViewModal
        trip={selectedTrip}
        isClosing={isClosing}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default BookedTrips;
