import React, { useEffect, useMemo, useState } from "react";
import TripCard from "../../components/TripCard";
import { IoClose } from "react-icons/io5";
import { FaStar, FaCalendarAlt, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import API from "../../api/axios";
import { slugify } from "../../utils/slugify.js";
import { Link, useNavigate } from "react-router-dom";
import TripQuickViewModal from "../../components/TripQuickViewModal.jsx";

const SafariTour = () => {
  const [trips, setTrips] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  const navigate = useNavigate();

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
        const res = await API.get("/packages"); // 🔁 confirm endpoint
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

  // ✅ FILTER ONLY TANZANIA
  const tanzaniaTrips = useMemo(() => {
    return trips.filter(
      (trip) =>
        trip.destination &&
        trip.destination.trim().toLowerCase() === "tanzania",
    );
  }, [trips]);

  const openModal = (trip) => setSelectedTrip(trip);
  const closeModal = () => setSelectedTrip(null);

  if (loading) {
    return <p className="text-center py-10">Loading tours…</p>;
  }

  return (
    <section className="w-full py-8 md:py-16 bg-white relative">
      <div className="px-4 md:px-10 lg:px-18 2xl:px-28 mx-auto">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl text-center mb-4 text-[#1a1a1a]">
          Top Tanzania Safari & Tours
        </h2>
        <p className="text-center mb-10 text-[#444]">
          Handpicked safari experiences across Tanzania
        </p>

        {tanzaniaTrips.length === 0 && (
          <p className="text-center text-[#444]">No Tanzania trips available</p>
        )}

        {/* Trips Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tanzaniaTrips.map((trip) => (
            <TripCard
              key={trip._id}
              trip={{
                id: trip._id,
                image: trip.landingImage,
                title: trip.title,
                days: trip.accomoDay,
                places: trip.itinerary?.length
                  ? `${trip.itinerary.length} Stops`
                  : "Multiple Places",
                country: "Tanzania",

                discountedPrice: trip.price,
                description: trip.description,
              }}
              onQuickView={() => openModal(trip)}
            />
          ))}
        </div>
      </div>

      {/* Quick View Modal */}

      <TripQuickViewModal
        trip={selectedTrip}
        isClosing={isClosing}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default SafariTour;
