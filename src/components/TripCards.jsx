import React from "react";
import { FaStar, FaCalendarAlt, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

const TripCards = ({ trip, onQuickView }) => {
  if (trip.promo) {
    return (
      <div className="rounded-sm overflow-hidden bg-white shadow-md flex flex-col justify-center items-center text-center h-[480px] relative">
        <img src={trip.image} alt={trip.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/20">
          <h3 className="font-bold text-lg mb-2">Big Drop. Low Prices.</h3>
          <button className="bg-[#d87028] hover:bg-orange-700 text-white font-semibold text-sm px-6 py-2 rounded-full mt-2 shadow">
            BOOK NOW
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-sm overflow-hidden bg-white shadow-sm hover:shadow-lg transition duration-300 mb-4 h-[480px]">
      {/* Image */}
      <div className="relative">
        <img src={trip.image} alt={trip.title} className="w-full h-40 object-cover" />
        <button
          onClick={() => onQuickView(trip)}
          className="absolute bottom-3 left-3 bg-white text-xs font-semibold px-3 py-1 rounded shadow-sm hover:bg-gray-100 transition"
        >
          🔍 QUICK VIEW
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center text-yellow-500 mb-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar key={i} size={14} />
          ))}
          <span className="text-black ml-2 font-semibold">{trip.rating}</span>
        </div>

        <h3 className="text-xl mb-6 leading-tight">{trip.title}</h3>

        <div className="text-sm flex flex-wrap items-center gap-3 mb-3 text-[16px]">
          <span className="flex items-center gap-1">
            <FaCalendarAlt /> {trip.days}
          </span>
          <span className="flex items-center gap-1">
            <FaMapMarkerAlt /> {trip.places}
          </span>
          <span className="flex items-center gap-1">
            <FaGlobe /> <u>{trip.countries}</u>
          </span>
        </div>

        <p className="text-[16px] mb-8 line-clamp-3">{trip.description}</p>

        <div className="flex justify-between items-center">
          <div className="text-xs text-gray-600">
            {trip.standardPrice && (
              <h3 className="mb-2">
                Standard Price <br /> {trip.standardPrice}
              </h3>
            )}
            <h3 className="font-bold text-sm text-black">From {trip.discountedPrice}</h3>
          </div>

          <button className="bg-[#d87028] hover:bg-orange-700 text-white text-sm px-6 py-2 rounded-full">
            VIEW TRIP
          </button>
        </div>
      </div>
    </div>
  );
};

export default TripCards;
