"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MonthCircle from "./MonthCircle";

/* ================= MONTH → NUMBER MAP ================= */
const MONTH_INDEX = {
  Jan: 1,
  Feb: 2,
  Mar: 3,
  Apr: 4,
  May: 5,
  Jun: 6,
  Jul: 7,
  Aug: 8,
  Sept: 9,
  Oct: 10,
  Nov: 11,
  Dec: 12,
};

/* ================= SEASON LOGIC ================= */
const getSeasonType = (monthName) => {
  const m = MONTH_INDEX[monthName];
  if (!m) return "default";

  // Low Season: April–May
  if (m === 4 || m === 5) return "low";

  // Best Weather: June–October
  if (m >= 6 && m <= 10) return "best";

  // High Season: July–March
  return "high";
};


const BestTimeToVisitSection = ({
  title = "Best time to visit",
  staticMonths = [],
}) => {
  const [hoveredMonth, setHoveredMonth] = useState(null);

  /* Default hover month */
  useEffect(() => {
    if (staticMonths.length > 0) {
      setHoveredMonth(staticMonths[0]);
    }
  }, [staticMonths]);

  return (
    <section
      id="besttime"
      className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0 py-8 md:py-10 "
    >
      {/* TITLE */}
      <h2 className="text-xl md:text-3xl mb-10 capitalize text-center font-bold text-[#1a1a1a] ">
        {title?.toLowerCase()
                  .replace(/\b\w/g, (c) => c.toUpperCase())}
      </h2>

      {/* LEGEND */}
      <div className="flex justify-center text-[#444] gap-2 md:gap-6 mb-10 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-[#A5D6A7]"></span>
          High Season
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-[#F1F8C0]"></span>
          Low Season
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-[#E1D7F8]"></span>
          Best Weather
        </div>
      </div>

      {/* MONTH CIRCLES */}
      <div className=" grid grid-cols-6 md:grid-cols-6 xl:grid-cols-12 gap-4 place-items-center ">
        {staticMonths.map((month) => (
          <MonthCircle
            key={month.name}
            month={{
              ...month,
              seasonType: getSeasonType(month.name),
            }}
            isActive={hoveredMonth?.name === month.name}
            onHover={setHoveredMonth}
          />
        ))}
      </div>

      {/* MONTH DESCRIPTION */}
      <div className="mt-10 text-center">
        <AnimatePresence mode="wait">
          {hoveredMonth && (
            <motion.div
              key={hoveredMonth.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              {hoveredMonth.description?.map((text, i) => (
                <p key={i} className=" text-[#444]" >{text}</p>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BestTimeToVisitSection;
