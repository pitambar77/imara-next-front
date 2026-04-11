import React from "react";
import { IoClose } from "react-icons/io5";
import { slugify } from "../utils/slugify";
import CardButton from "./CardButton";
import Image from "next/image";

const TripQuickViewModal = ({ trip, isClosing, onClose }) => {
  if (!trip) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4 backdrop-blur-sm">
      <div
        className={`bg-white w-full max-w-[1100px] rounded-xl overflow-hidden relative transform transition-all duration-300 ${
          isClosing ? "animate-modal-close" : "animate-modal-open"
        }`}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-4 right-4 z-10 bg-white/90 hover:bg-[#d97129c4] hover:text-white duration-300 rounded-full p-1 shadow"
        >
          <IoClose size={26} />
        </button>

        {/* CONTENT */}
        <div className="flex flex-col md:flex-row">
          {/* IMAGE */}
          <div className="relative md:w-1/2 h-[260px] md:h-auto">
            {/* <img
              src={trip.image || trip.landingImage}
              alt={trip.title}
              className="w-full h-full object-cover"
            /> */}

            <Image
              src={trip.image || trip.landingImage}
              alt={trip.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* DETAILS */}
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">{trip.title}</h3>

            <p className="text-[#444] leading-relaxed mb-6">
              {trip.description}
            </p>

            <CardButton
              href={`/package/${slugify(trip.title)}`}
              className="w-fit"
            >
              VIEW TRIP
            </CardButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripQuickViewModal;
