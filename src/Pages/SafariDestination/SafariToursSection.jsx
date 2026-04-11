import React, { useEffect, useMemo, useState } from "react";
import TripCard from "../../components/TripCard";
import { IoClose } from "react-icons/io5";
import API from "../../api/axios";
import { Link, useNavigate } from "react-router-dom";
import { slugify } from "../../utils/slugify.js";

const SafariToursSection = () => {
  const [trips, setTrips] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

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

  // ✅ FILTER ONLY TANZANIA
  const tanzaniaTrips = useMemo(() => {
    return trips.filter(
      (trip) =>
        trip.destination && trip.destination.trim().toLowerCase() === "kili"
    );
  }, [trips]);

  const openModal = (trip) => setSelectedTrip(trip);
  const closeModal = () => setSelectedTrip(null);

  if (loading) {
    return <p className="text-center py-10">Loading tours…</p>;
  }

  return (
    <section className="w-full py-8 md:py-16 bg-white relative">
      <div className="px-4 md:px-10 lg:px-16 2xl:px-28 mx-auto">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl text-center text-[#1a1a1a] font-bold mb-4">
          Top Kilimanjaro Packages
        </h2>
        <p className="text-center text-[#444] mb-10">
          Handpicked Kilimanjaro Climbing Experiences
        </p>

        {/* Empty State */}
        {tanzaniaTrips.length === 0 && (
          <p className="text-center text-gray-500">
            No Kilimanjaro available
          </p>
        )}

        {/* Trips Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tanzaniaTrips.map((trip) => (
            <TripCard
              key={trip._id}
              trip={{
                id: trip._id,
                image: trip.image,
                title: trip.title,
                days: trip.accomoDay,
                places: trip.itinerary?.length
                  ? `${trip.itinerary.length} Stops`
                  : "Multiple Places",
                country: "Tanzania",
                rating: 4.8,
                discountedPrice: trip.price,
                description: trip.description,
              }}
              onQuickView={() => openModal(trip)}
            />
          ))}
        </div>
      </div>

      {selectedTrip && (
        <div className="fixed inset-0 bg-black/50  flex justify-center items-center z-50 px-3 sm:px-0 ">
          <div className="bg-white w-full sm:w-[90%] md:w-[700px] max-h-[90vh] rounded-md  shadow-lg relative flex flex-col">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 z-10 cursor-pointer text-gray-600 hover:text-black"
            >
              <IoClose size={28} />
            </button>

            {/* Image (responsive height) */}
            <div className="h-48 sm:h-56 md:h-64 rounded-t-md bg-black flex items-center justify-center">
              <img
                src={selectedTrip.image}
                alt={selectedTrip.title}
                className="w-full h-full rounded-t-md object-cover"
              />
            </div>

            {/* Scrollable Content */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                {selectedTrip.title}
              </h3>

              <p className="text-[#444] mb-4 text-sm sm:text-base">
                {selectedTrip.description}
              </p>

              <Link to={`/package/${slugify(selectedTrip.title)}`}
                onClick={() => {
                  closeModal();
                  navigate(
                    `/package/${slugify(selectedTrip.title)}`
                  );
                }}
                className="bg-[#d87028] text-white px-6 py-2 rounded-full w-full cursor-pointer sm:w-auto"
              >
                VIEW TRIP
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SafariToursSection;
