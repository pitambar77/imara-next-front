import React, { useState } from "react";
import TripCard from "./TripCard";
import { IoClose } from "react-icons/io5";
import { FaStar, FaCalendarAlt, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

const TripSection = ({ title, trips, buttonLabel }) => {
  const [selectedTrip, setSelectedTrip] = useState(null);

  return (
    <section className="w-full bg-[#fedec7] py-16">
      <div className="mx-auto px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28">

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          {title}
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trips.map((trip) => (
            <TripCard key={trip.id} trip={trip} onQuickView={setSelectedTrip} />
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <button className="bg-[#d87028] border border-black hover:bg-orange-700 text-white font-semibold text-base px-8 py-3 rounded-full transition shadow">
            {buttonLabel}
          </button>
        </div>

        {/* Quick View Modal */}
        {selectedTrip && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white w-[90%] md:w-[700px] rounded-xl shadow-lg overflow-hidden relative">
              <button
                onClick={() => setSelectedTrip(null)}
                className="absolute top-3 right-3 text-gray-600 hover:text-black"
              >
                <IoClose size={28} />
              </button>

              <img
                src={selectedTrip.image}
                alt={selectedTrip.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6 text-gray-800">
                <h3 className="text-2xl font-bold mb-2">{selectedTrip.title}</h3>

                <div className="flex items-center text-yellow-500 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} size={16} />
                  ))}
                  <span className="text-black ml-2 font-semibold">
                    {selectedTrip.rating}
                  </span>
                </div>

                <div className="text-sm flex flex-wrap items-center gap-4 mb-3 text-gray-600">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt /> {selectedTrip.days}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt /> {selectedTrip.places}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaGlobe /> {selectedTrip.countries}
                  </span>
                </div>

                <p className="text-gray-700 mb-4">{selectedTrip.description}</p>

                <div className="text-sm mb-4 flex justify-between items-center">
                  <div>
                    {selectedTrip.standardPrice && (
                      <p>Standard Price <br /> {selectedTrip.standardPrice}</p>
                    )}
                    <p className="font-bold text-black">
                      From{" "}
                      <span className="text-[#d87028]">
                        {selectedTrip.discountedPrice}
                      </span>
                    </p>
                  </div>

                  <button className="bg-[#d87028] hover:bg-orange-700 text-white font-semibold px-6 py-2 rounded-full">
                    VIEW TRIP
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default TripSection;
