import React, { useState } from "react";
import FullItineraryModal from "./FullItineraryModal";
import { IoLocation } from "react-icons/io5";
import { FaHome } from "react-icons/fa";

const MapItinerarySection = ({ itinerary = [] }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);

  const [modalMode, setModalMode] = useState("full"); // "single" | "full"
  const [selectedIndex, setSelectedIndex] = useState(null);

  if (!itinerary.length) return null;

  const days = itinerary.flatMap((it) => it.section);
  const mapIframe = itinerary[0]?.map;

  return (
    <section id="itina" className="bg-white py-8 md:py-16 ">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0">
        <h2 className="text-3xl font-extrabold text-center mb-10">
          Map & Itinerary
        </h2>

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div className="flex border border-gray-400 rounded-full overflow-hidden shadow-sm">
            <button className="px-6 py-2 bg-[#d87028] text-white cursor-pointer">
              <span className="flex items-center gap-1">
                <IoLocation />
                <span>Map View</span>
              </span>
            </button>

            <button
              onClick={() => {
                setModalMode("full");
                setModalOpen(true);
              }}
              className="px-6 py- cursor-pointer bg-white text-[#444]"
            >
              ☰ View Full Itinerary
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#fedec647] ">
          {/* ================= MAP (STICKY) ================= */}
          <div className="relative">
            <div className="sticky top-24 h-[300px] md:h-[500px] overflow-hidden rounded-sm shadow-sm">
              {mapIframe ? (
                <div
                  className="w-full h-full"
                  dangerouslySetInnerHTML={{ __html: mapIframe }}
                />
              ) : (
                <p className="text-center mt-20 text-gray-500">
                  Map not available
                </p>
              )}
            </div>
          </div>

          {/* ================= ITINERARY (SCROLL ONLY HERE) ================= */}
          <div className="h-[500px] overflow-y-auto mt-4 md:mt-0 p-1 md:p-8">
            <div className=" space-y-3 md:space-y-6">
              {days.map((day, index) => {
                const isActive = index === activeIndex;

                return (
                  <div
                    key={day._id}
                    onClick={() => {
                      setActiveIndex(index);
                      setSelectedIndex(index);
                      setModalMode("single");
                      setModalOpen(true);
                    }}
                    className="flex cursor-pointer bg-white rounded-sm shadow-sm transition group"
                  >
                    <div
                      className={`
          w-20 flex flex-col items-center justify-center rounded-l-sm
          transition-colors duration-200
          ${
            isActive
              ? "bg-[#d87028] text-white"
              : " border-r border-gray-300 text-[#444] group-hover:bg-[#d87028] group-hover:text-white"
          }
        `}
                    >
                      <span className="text-sm uppercase">Day</span>
                      <span className="text-xl font-bold">
                        {day.day.replace(/day\s*/i, "")}
                      </span>
                    </div>

                    <div className=" p-4 md:p-6 flex-1">
                      <h3 className=" text-sm md:text-xl font-semibold text-[#333] mb-2">
                        {day.title}
                      </h3>

                      {/* {day.accommodationName?.trim() && (
                      <p className="text-[#d87028] font-semibold flex items-center gap-2">
                      <FaHome />
                        

                        {day.accommodationName}
                      </p>
                    )} */}
                      {day.accommodationName?.trim() && (
                        <p className="text-[#d87028] text-sm md:text-lg font-semibold flex items-center gap-2">
                          <FaHome className=" text-sm md:text-lg relative -top-[2px]" />
                          {day.accommodationName}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* {modalOpen && (
        <FullItineraryModal days={days} onClose={() => setModalOpen(false)} />
      )} */}
        {modalOpen && (
          <FullItineraryModal
            days={modalMode === "single" ? [days[selectedIndex]] : days}
            mode={modalMode}
            onClose={() => setModalOpen(false)}
          />
        )}
      </div>
    </section>
  );
};

export default MapItinerarySection;
