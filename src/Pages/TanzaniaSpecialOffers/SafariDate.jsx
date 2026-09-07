"use client";

import { useState } from "react";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function SafariDate({ selected, onSelect }) {
  const today = new Date();

  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth(); // Jan = 0, Dec = 11

  const [year, setYear] = useState(currentYear);

  const handlePreviousYear = () => {
    // Don't allow going before the current year
    if (year > currentYear) {
      setYear((prevYear) => prevYear - 1);
    }
  };

  const handleNextYear = () => {
    setYear((prevYear) => prevYear + 1);
  };

  // Check whether a month is in the past
  const isPastMonth = (monthIndex) => {
    if (year < currentYear) {
      return true;
    }

    if (year === currentYear && monthIndex < currentMonth) {
      return true;
    }

    return false;
  };

  const handleMonthSelect = (month, monthIndex) => {
    if (isPastMonth(monthIndex)) {
      return;
    }

    onSelect({
      month,
      year,
    });
  };

  return (
    <section className="w-full bg-[#f7f7f7] py-[55px] sm:py-[60px] lg:py-[70px]">
      <div className="mx-auto w-full max-w-[1140px] px-[30px] sm:px-[40px] lg:px-0">
        {/* Heading */}
        <h2 className="!font-cormorant m-0 mb-4 text-3xl font-medium leading-tight text-[#29283b] md:text-4xl lg:text-5xl">
          5. When Are You Planning For The Safari?
        </h2>

        {/* Description */}
        <p className="!font-avenir m-0 mb-6 max-w-[850px] text-[17px] leading-[1.6] text-[#444] md:mb-10">
          Give us an idea on when you are planning to visit Tanzania.
          Approximate dates are perfectly fine.
        </p>

        {/* Calendar */}
        <div className="w-[245px] bg-white p-[16px] shadow-[0_10px_20px_rgba(0,0,0,0.10)]">
          {/* Calendar Header */}
          <div className="mb-[15px] flex items-center justify-between border-b border-[#eeeeee] pb-[12px]">
            {/* Previous Year */}
            <button
              type="button"
              onClick={handlePreviousYear}
              disabled={year === currentYear}
              aria-label="Previous year"
              className={`flex h-[22px] w-[22px] items-center justify-center text-[17px] transition-colors ${
                year === currentYear
                  ? "cursor-not-allowed text-[#d5d5d5]"
                  : "cursor-pointer text-[#777] hover:text-[#d87028]"
              }`}
            >
              «
            </button>

            {/* Current Year */}
            <span className="!font-avenir text-[17px] font-semibold text-[#333]">
              {year}
            </span>

            {/* Next Year */}
            <button
              type="button"
              onClick={handleNextYear}
              aria-label="Next year"
              className="flex h-[22px] w-[22px] cursor-pointer items-center justify-center text-[17px] text-[#777] transition-colors hover:text-[#d87028]"
            >
              »
            </button>
          </div>

       
          {/* Months */}
          <div className="grid grid-cols-4 gap-[5px]">
            {months.map((month, index) => {
              const past = isPastMonth(index);

              const isCurrentMonth =
                year === currentYear && index === currentMonth;

              const isSelected =
                selected?.month === month && selected?.year === year;

              return (
                <button
                  key={month}
                  type="button"
                  disabled={past}
                  onClick={() => handleMonthSelect(month, index)}
                  aria-pressed={isSelected}
                  className={`!font-avenir flex h-[40px] items-center justify-center text-[17px] font-medium transition-colors duration-200 ${
                    past
                      ? "cursor-not-allowed  text-[#d5d5d5]"
                      : isSelected
                        ? "cursor-pointer bg-[#d87028] text-white"
                        : isCurrentMonth
                          ? "cursor-pointer bg-[#fff3cf] text-[#d87028] font-semibold"
                          : "cursor-pointer text-[#6f6e75] hover:bg-[#f4f4f4] hover:text-[#222]"
                  }`}
                >
                  {month}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
