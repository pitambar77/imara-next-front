

import React, { useState } from "react";
import { IoLocation } from "react-icons/io5";
  import { FaHome } from "react-icons/fa";


const FullItineraryModal = ({ days, mode, onClose }) => {
  const [activeTab, setActiveTab] = useState("itinerary");

  return (
 
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-2 sm:p-4">
  <div className="bg-[#f2f2f2] w-full max-w-6xl h-[95vh] sm:h-[90vh] rounded-lg relative flex flex-col overflow-hidden">

    {/* ================= STICKY HEADER ================= */}
    <div className="sticky top-0 bg-[#f2f2f2] z-20 p-4 sm:p-6">
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute cursor-pointer hover:text-[#d97129] duration-200 top-4 sm:top-6 right-4 sm:right-6 text-xl"
      >
        ✕
      </button>

      {/* Toggle */}
      <div className="flex justify-center">
        <div className="flex border rounded-full overflow-hidden text-sm sm:text-base">
          <button
            onClick={() => {
              setActiveTab("map");
              onClose();
            }}
            className={`px-4 sm:px-6 py-2 flex items-center cursor-pointer gap-1 ${
              activeTab === "map"
                ? "bg-[#d87028] text-white"
                : "bg-white text-[#444]"
            }`}
          >
            <IoLocation />
            <span className="hidden sm:inline">Map View</span>
          </button>

          <button
            onClick={() => setActiveTab("itinerary")}
            className={`px-4 sm:px-6 py-2 cursor-pointer ${
              activeTab === "itinerary"
                ? "bg-[#d87028] text-white"
                : "bg-white text-[#444]"
            }`}
          >
            {mode === "single" ? "Day Details" : "Full Itinerary"}
          </button>
        </div>
      </div>
    </div>

    {/* ================= SCROLLABLE CONTENT ================= */}
    <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
      <div className="space-y-6 sm:space-y-8">

        {days.map((day) => (
          <div
            key={day._id}
            className="bg-white rounded-lg shadow-sm flex flex-col sm:flex-row overflow-hidden"
          >
            {/* DAY STRIP */}
            <div className="bg-[#d87028] space-x-2 text-white sm:w-24 w-full flex sm:flex-col items-center justify-center py-3 sm:py-0">
              <span className="uppercase text-sm sm:text-2xl">Day</span>
              <span className="text-lg md:text-3xl font-bold">
                {day.day.replace(/day\s*/i, "")}
              </span>
            </div>

            {/* CONTENT */}
            <div className="p-4 sm:p-6 md:p-8 flex-1">
              <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">
                {day.title}
              </h2>

              {day.description?.map((d, i) => (
                <p
                  key={i}
                  className="text-[#444] leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base"
                >
                  {d.content}
                </p>
              ))}

              {day.startpoint && (
                <div className="mt-3 text-[#444] text-sm sm:text-base">
                  🍽 {day.startpoint}
                </div>
              )}

              {day.accommodationName && (
                <p className="mt-2 text-[#d87028] font-semibold flex items-center gap-2 text-sm sm:text-base">
                  <FaHome className="text-base sm:text-lg" />
                  {day.accommodationName}
                </p>
              )}
            </div>
          </div>
        ))}

      </div>
    </div>
  </div>
</div>

  );
};

export default FullItineraryModal;
