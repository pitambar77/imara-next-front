// import React, { useEffect, useMemo, useState } from "react";
// import TripCard from "../../components/TripCard";
// import { IoClose } from "react-icons/io5";
// import { FaStar, FaCalendarAlt, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
// import API from "../../api/axios.js";
// import { slugify } from "../../utils/slugify.js";
// import { Link, useNavigate } from "react-router-dom";
// import PrimaryButton from "../../components/PrimaryButton.jsx";
// import CardButton from "../../components/CardButton.jsx";

// const KilimanjaroTrekking = () => {
//   const [trips, setTrips] = useState([]);
//   const [selectedTrip, setSelectedTrip] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [isClosing, setIsClosing] = useState(false);

//   const navigate = useNavigate();

//   const handleCloseModal = () => {
//     setIsClosing(true);

//     setTimeout(() => {
//       setSelectedTrip(null);
//       setIsClosing(false);
//     }, 300); // match animation duration
//   };

//   useEffect(() => {
//     const fetchTrips = async () => {
//       try {
//         const res = await API.get("/packages");
//         setTrips(res.data || []);
//       } catch (err) {
//         console.error("Trip fetch error:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTrips();
//   }, []);

//   useEffect(() => {
//     if (selectedTrip) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [selectedTrip]);

//   // ✅ FILTER ONLY KILIMANJARO
//   const kilimanjaroTrips = useMemo(() => {
//     return trips.filter(
//       (trip) => trip.destination && trip.destination.toLowerCase() === "kili",
//     );
//   }, [trips]);

//   const openModal = (trip) => setSelectedTrip(trip);
//   const closeModal = () => setSelectedTrip(null);

//   if (loading) {
//     return <p className="text-center py-10">Loading trekking tours…</p>;
//   }

//   return (
//     <section className="w-full bg-[#fedec7] py-8 md:py-16 relative">
//       <div className="mx-auto px-4 md:px-10 lg:px-16 2xl:px-28">
//         {/* Title */}
//         <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
//           Kilimanjaro Climbing Packages For Every Climber
//         </h2>

//         {/* Empty State */}
//         {kilimanjaroTrips.length === 0 && (
//           <p className="text-center text-gray-600 ">
//             No Kilimanjaro trekking packages available
//           </p>
//         )}

//         {/* Trips Grid */}
//         <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 sm:gap-4 md:gap-6 ">
//           {kilimanjaroTrips.map((trip) => (
//             <TripCard
//               key={trip._id}
//               trip={{
//                 id: trip._id,
//                 image: trip.image,
//                 title: trip.title,
//                 days: `${trip.accomoDay}`,
//                 places: trip.itinerary?.length
//                   ? `${trip.itinerary.length} Routes`
//                   : "Multiple Routes",
//                 country: "Tanzania",
//                 discountedPrice: trip.price,
//                 description: trip.description,
//               }}
//               onQuickView={() => openModal(trip)}
//             />
//           ))}
//         </div>

//         {/* Explore Button */}
//         <div className="flex justify-center mt-10">
//           <PrimaryButton to={"/mount-kilimanjaro"}>
//             EXPLORE KILIMANJARO
//           </PrimaryButton>
//         </div>

//         {selectedTrip && (
//           <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4 backdrop-blur-sm">
//             <div
//               className={`bg-white w-full max-w-[1100px] rounded-xl overflow-hidden relative transform transition-all duration-300 ${
//                 isClosing ? "animate-modal-close" : "animate-modal-open"
//               }`}
//             >
//               {/* CLOSE BUTTON */}
//               <button
//                 onClick={handleCloseModal}
//                 className="absolute cursor-pointer top-4 right-4 z-10 bg-white/90 hover:bg-[#d97129c4] hover:text-white duration-300 rounded-full p-1 shadow"
//               >
//                 <IoClose size={26} />
//               </button>

//               <div className="flex flex-col md:flex-row">
//                 {/* LEFT IMAGE */}
//                 <div className="md:w-1/2 h-[240px] sm:h-[300px] md:h-auto">
//                   <img
//                     src={selectedTrip.image}
//                     alt={selectedTrip.title}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* RIGHT CONTENT */}
//                 <div className="md:w-1/2 p-5 md:p-7 flex flex-col justify-center">
//                   <h3 className="text-xl md:text-2xl font-bold mb-2">
//                     {selectedTrip.title}
//                   </h3>

//                   {/* Meta Info */}
//                   <div className="text-sm flex flex-wrap gap-4 mb-4 text-gray-600">
//                     <span className="flex items-center gap-1">
//                       <FaCalendarAlt /> {selectedTrip.accomoDay} Days
//                     </span>

//                     <span className="flex items-center gap-1">
//                       <FaMapMarkerAlt /> Kilimanjaro Routes
//                     </span>

//                     <span className="flex items-center gap-1">
//                       <FaGlobe /> Tanzania
//                     </span>
//                   </div>

//                   {/* Description */}
//                   <p className="text-gray-700 mb-6 leading-relaxed">
//                     {selectedTrip.description}
//                   </p>

//                   {/* Footer */}
//                   <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
//                     <p className="font-bold text-lg">
//                       <span className="text-[#d87028]">
//                         {selectedTrip.price}
//                       </span>
//                     </p>

//                     <CardButton
//                       to={`/package/${slugify(selectedTrip.title)}`}
//                       className="w-fit"
//                     >
//                       VIEW TRIP
//                     </CardButton>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default KilimanjaroTrekking;

import React, { useEffect, useMemo, useState, useRef } from "react";
import TripCard from "../../components/TripCard";
import { IoClose } from "react-icons/io5";
import { FaStar, FaCalendarAlt, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import API from "../../api/axios.js";
import { slugify } from "../../utils/slugify.js";
import { Link, useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/PrimaryButton.jsx";
import CardButton from "../../components/CardButton.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const KilimanjaroTrekking = () => {
  const [trips, setTrips] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  const navigate = useNavigate();

  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  const handleCloseModal = () => {
    setIsClosing(true);

    setTimeout(() => {
      setSelectedTrip(null);
      setIsClosing(false);
    }, 300); // match animation duration
  };

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const res = await API.get("/packages");
        setTrips(res.data || []);
      } catch (err) {
        console.error("Trip fetch error:", err);
      } finally {
        setLoading(false);
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

  // ✅ FILTER ONLY KILIMANJARO
  const kilimanjaroTrips = useMemo(() => {
    return trips.filter(
      (trip) => trip.destination && trip.destination.toLowerCase() === "kili",
    );
  }, [trips]);

  const openModal = (trip) => setSelectedTrip(trip);
  const closeModal = () => setSelectedTrip(null);

  if (loading) {
    return <p className="text-center py-10">Loading trekking tours…</p>;
  }

  return (
    <section className="w-full bg-[#fedec7] py-8 md:py-16 relative">
      <div className="mx-auto px-4 md:px-10 lg:px-18 2xl:px-28">
        <div className="relative flex items-center justify-center mb-10">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-center ">
            Kilimanjaro Climbing Packages For Every Climber
          </h2>

          {/* Empty State */}
          {kilimanjaroTrips.length === 0 && (
            <p className="text-center text-gray-600 ">
              No Kilimanjaro trekking packages available
            </p>
          )}

          {/* Trips Grid */}

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
        </div>

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
          {kilimanjaroTrips.map((trip) => (
            <SwiperSlide key={trip._id}>
              <TripCard
                trip={{
                  id: trip._id,
                  image: trip.image,
                  title: trip.title,
                  days: `${trip.accomoDay}`,
                  places: trip.itinerary?.length
                    ? `${trip.itinerary.length} Routes`
                    : "Multiple Routes",
                  country: "Tanzania",
                  discountedPrice: trip.price,
                  description: trip.description,
                }}
                onQuickView={() => openModal(trip)}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-pagination flex justify-center mt-6"></div>

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

        {/* Explore Button */}
        <div className="flex justify-center">
          <PrimaryButton to={"/mount-kilimanjaro"}>
            EXPLORE KILIMANJARO
          </PrimaryButton>
        </div>

        {selectedTrip && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4 backdrop-blur-sm">
            <div
              className={`bg-white w-full max-w-[1100px] rounded-xl overflow-hidden relative transform transition-all duration-300 ${
                isClosing ? "animate-modal-close" : "animate-modal-open"
              }`}
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={handleCloseModal}
                className="absolute cursor-pointer top-4 right-4 z-10 bg-white/90 hover:bg-[#d97129c4] hover:text-white duration-300 rounded-full p-1 shadow"
              >
                <IoClose size={26} />
              </button>

              <div className="flex flex-col md:flex-row">
                {/* LEFT IMAGE */}
                <div className="md:w-1/2 h-[240px] sm:h-[300px] md:h-auto">
                  <img
                    src={selectedTrip.image}
                    alt={selectedTrip.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* RIGHT CONTENT */}
                <div className="md:w-1/2 p-5 md:p-7 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    {selectedTrip.title}
                  </h3>

                  {/* Meta Info */}
                  <div className="text-sm flex flex-wrap gap-4 mb-4 text-gray-600">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt /> {selectedTrip.accomoDay} Days
                    </span>

                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt /> Kilimanjaro Routes
                    </span>

                    <span className="flex items-center gap-1">
                      <FaGlobe /> Tanzania
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {selectedTrip.description}
                  </p>

                  {/* Footer */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                    <p className="font-bold text-lg">
                      <span className="text-[#d87028]">
                        {selectedTrip.price}
                      </span>
                    </p>

                    <CardButton
                      to={`/package/${slugify(selectedTrip.title)}`}
                      className="w-fit"
                    >
                      VIEW TRIP
                    </CardButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default KilimanjaroTrekking;
