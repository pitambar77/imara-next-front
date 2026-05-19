"use client";

import React from "react";
import { IoClose } from "react-icons/io5";
import { slugify } from "../utils/slugify";
import CardButton from "./CardButton";
import Image from "next/image";

const TripQuickViewModal = ({ trip, isClosing, onClose }) => {
  if (!trip) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4 py-6">
      <div
        className={`
          relative
          bg-white
          w-full
          max-w-[1100px]
          rounded-md
          overflow-hidden
          shadow-2xl
          transform
          transition-all
          duration-300
          max-h-[95vh]
          overflow-y-auto
          ${isClosing ? "animate-modal-close" : "animate-modal-open"}
        `}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="
            absolute
            top-3
            right-3
            md:top-2
            md:right-2
            z-20
            bg-white/90
            hover:bg-[#d97129]
            hover:text-white
            duration-300
            rounded-full
            p-1
            shadow-sm
            cursor-pointer
          "
        >
          <IoClose size={22} />
        </button>

        {/* Content */}
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="relative w-full md:w-1/2 h-[240px] sm:h-[320px] md:h-auto min-h-[240px]">
            <Image
              src={trip.image || trip.landingImage}
              alt={trip.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Details Section */}
          <div className="w-full md:w-1/2 p-5 sm:p-6 md:p-8  flex flex-col justify-center">
            {/* Title */}
            <h3 className=" text-xl sm:text-2xl text-[#111] mb-4 leading-snug">
              {trip.title}
            </h3>

            {/* Description */}
            <p className="text-[#444] text-[15px] sm:text-base leading-relaxed mb-6">
              {trip.description}
            </p>

            {/* Button */}
            <CardButton
              href={`/package/${slugify(trip.title)}`}
              className="w-full sm:w-fit flex items-center justify-center text-center"
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
