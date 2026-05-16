"use client";

import React, { useEffect, useMemo, useState } from "react";
import API from "../../api/axios";
import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../utils/slugify.js";
import PrimaryButton from "../../components/PrimaryButton.jsx";
import CardButton from "../../components/CardButton.jsx";

const TanzaniaTabsSection = ({ taboverview }) => {
  const [destinations, setDestinations] = useState([]);
  const [activeTab, setActiveTab] = useState("Northern");
  const [loading, setLoading] = useState(true);

  const overview = taboverview?.[0];

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const res = await API.get("/destinationdetails");
        setDestinations(res.data || []);
      } catch (error) {
        console.error("Destination fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  // 🔐 SAFE FILTER
  const filteredDestinations = useMemo(() => {
    return destinations.filter(
      (item) =>
        item.destination?.trim().toLowerCase() === activeTab.toLowerCase(),
    );
  }, [destinations, activeTab]);

  if (loading) {
    return <p className="text-center py-10">Loading destinations…</p>;
  }

  return (
    <section className="bg-white py-8 md:py-16 max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0">
      {/* Title + Description */}
      <div className="text-center mb-8 md:mb-16 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-[32px] lg:text-[36px] font-bold text-[#1a1a1a] mb-3 capitalize">
          {overview?.title
            ?.toLowerCase()
            .replace(/\b\w/g, (c) => c.toUpperCase())}
        </h2>

        <p className="text-[16px] md:text-[18px] text-[#444] mb-6 md:mb-10">
          {overview?.subtitle}
        </p>

        <div
          className="
          
    rich-text
    text-[15px]
    md:text-[17px]
    text-[#444]
    leading-[1.8]
    space-y-6
    px-2
    md:px-10
  "
          dangerouslySetInnerHTML={{
            __html: overview?.description || "",
          }}
        />
      </div>

      <div className="flex justify-center mb-10 space-x-1.5 md:space-x-3 ">
        <button
          onClick={() => setActiveTab("Northern")}
          className={` px-3 md:px-5  py-1.5 md:py-2.5 rounded-full text-sm md:text-[17px] cursor-pointer font-semibold border ${
            activeTab === "Northern"
              ? "bg-[#d87028] text-white border-[#d87028] active"
              : "border-black text-black"
          }`}
        >
          Northern Tanzania
        </button>
        <button
          onClick={() => setActiveTab("Southern")}
          className={`px-3 md:px-5 py-1.5 md:py-2.5 rounded-full text-sm md:text-[17px] cursor-pointer font-semibold border ${
            activeTab === "Southern"
              ? "bg-[#d87028] text-white border-[#d87028] active"
              : "border-black text-black"
          }`}
        >
          Southern Tanzania
        </button>
      </div>
      {/* Empty state */}
      {filteredDestinations.length === 0 && (
        <p className="text-center text-gray-500">No destinations found</p>
      )}
      {/* Cards section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredDestinations.map((trip) => (
          <div
            key={trip._id}
            className="bg-white rounded-sm shadow-md overflow-hidden hover:shadow-xl transition duration-300 h-[400px] flex flex-col"
          >
            <div className="relative w-full h-44">
              <Image
                src={trip.landingImage}
                alt={trip.title}
                fill
                sizes="(max-width:768px) 100vw, 300px"
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5 flex flex-col flex-1">
              {/* Title */}
              <h3 className="font-semibold text-lg md:text-xl mb-3 leading-tight capitalize">
                {trip.title
                  ?.toLowerCase()
                  .replace(/\b\w/g, (c) => c.toUpperCase())}
              </h3>

              {/* Description (CLAMP WORKS) */}
              {/* <p className="text-[14px] md:text-[15px] text-[#444] line-clamp-3">
                {trip.overviewinfo?.[0]?.description?.[0]?.content}
              </p> */}

              <div
                className="
    rich-text
    text-[14px]
    md:text-[15px]
    line-clamp-3
  "
                dangerouslySetInnerHTML={{
                  __html: trip.overviewinfo?.[0]?.description || "",
                }}
              />

              {/* SPACER → pushes button down */}
              <div className="flex-grow" />

              {/* Button (FIXED BOTTOM) */}
              <div className="flex justify-end pt-4">
                <CardButton
                  href={`/tanzania-destinations/${slugify(trip.title)}`}
                >
                  View Destinations
                </CardButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TanzaniaTabsSection;
