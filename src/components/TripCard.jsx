"use client";

import React from "react";
import { FaCalendarAlt, FaGlobe } from "react-icons/fa";
import Link from "next/link";
import { slugify } from "../utils/slugify.js";
import { MdOutlineSavedSearch } from "react-icons/md";
import Image from "next/image";

import CardButton from "./CardButton.jsx";

const TripCard = ({ trip, onQuickView }) => {
  if (trip.promo) {
    return (
      <div className="rounded-sm overflow-hidden bg-white shadow-md flex flex-col justify-center items-center text-center h-[480px] relative">
        {/* <img
          src={trip.image}
          alt={trip.title}
          title={trip.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        /> */}
        <Image
          src={trip.image}
          alt={trip.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/20">
          <h3 className="font-bold text-lg mb-2">Big Drop. Low Prices.</h3>
          <button className="bg-[#d87028] hover:bg-orange-700 cursor-pointer text-white font-semibold text-sm px-6 py-2 rounded-full mt-2 shadow">
            BOOK NOW
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-sm overflow-hidden bg-white shadow-sm hover:shadow-lg transition duration-300 mb-4 h-[480px] flex flex-col">
      {/* Image */}
      <div className="relative h-48 md:h-42">
        <Link href={`/package/${slugify(trip.title)}`}>
          {/* <img
            src={trip.image}
            alt={trip.title}
            title={trip.title}
            className="w-full h-48 md:h-42 object-cover"
          /> */}

          <Image
            src={trip.image}
            alt={trip.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </Link>

        <button
          onClick={() => onQuickView(trip)}
          className="absolute bottom-3 left-3 cursor-pointer bg-white text-xs font-semibold px-3 py-1 rounded shadow-sm hover:bg-gray-100 transition"
        >
          <span className="flex items-center cursor-pointer font-semibold gap-1">
            <MdOutlineSavedSearch className="text-lg" />
            QUICK VIEW
          </span>
        </button>
      </div>

      <div className="p-5 flex flex-col flex-1">
        {/* Rating */}

        <Link href={`/package/${slugify(trip.title)}`}>
          <h3 className="text-xl leading-tight">{trip.title}</h3>
        </Link>

        {/* Trip Info */}
        <div className="text-sm flex flex-wrap items-center gap-2 mt-6 mb-3 text-[15px] text-[#444]">
          <span className="flex items-center gap-1 ">
            <FaCalendarAlt className=" text-[#d97129]" />{" "}
            <p className=" mt-1">{trip.days}</p>
          </span>
          {/* <span className="flex items-center gap-1">
            <FaMapMarkerAlt />
            <p className=" mt-1"> {trip.places}</p>
          </span> */}
          <span className="flex items-center gap-1">
            <FaGlobe className=" text-[#d97129]" />{" "}
            <p className=" mt-1">{trip.country}</p>
          </span>
        </div>

        {/* Description */}
        <p className="text-[#444] line-clamp-3">{trip.description}</p>

        {/* Price & Button */}
        <div className="flex justify-between items-center mt-auto pb-2">
          <div className="text-xs text-[#444]">
            {trip.standardPrice && (
              <h3 className="mb-2">
                Standard Price <br /> {trip.standardPrice}
              </h3>
            )}
            <h3 className="text-sm text-[#444]">{trip.discountedPrice}</h3>
          </div>

          <CardButton href={`/package/${slugify(trip.title)}`}>
            View Trip
          </CardButton>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
