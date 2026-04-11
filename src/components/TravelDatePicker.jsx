"use client";

import { useState, useRef, useEffect } from "react";
// import { DateRange } from "react-date-range";
import { Calendar } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./calendar.css";
import { FaCalendarDays } from "react-icons/fa6";

export default function TravelDatePicker({ value, onChange }) {
  const [showPicker, setShowPicker] = useState(false);
  const [showDeparturePlaceholder, setShowDeparturePlaceholder] =
    useState(false);

  const pickerRef = useRef(null);

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  //   const [range, setRange] = useState([
  //     {
  //       startDate: today,
  //       endDate: tomorrow,
  //       key: "selection",
  //     },
  //   ]);

  const [selectedDate, setSelectedDate] = useState(today);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setShowPicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //   const nights =
  //     Math.round(
  //       (range[0].endDate - range[0].startDate) / (1000 * 60 * 60 * 24),
  //     ) || 0;

  //   const days = nights + 1;

  const handleOpen = () => {
    setShowPicker(true);
    setShowDeparturePlaceholder(true);
  };

  //   const handleChange = (item) => {
  //     setRange([item.selection]);

  //     if (item.selection.startDate && item.selection.endDate) {
  //       setShowDeparturePlaceholder(false);
  //     }
  //   };

  const handleChange = (date) => {
    setSelectedDate(date);

    const formattedDate = format(date, "yyyy-MM-dd");

    onChange({
      startDate: formattedDate,
    });

    setShowPicker(false);
  };
  //   const handleConfirm = () => {
  //     const formattedStart = format(range[0].startDate, "dd MMMM yyyy");
  //     const formattedEnd = format(range[0].endDate, "dd MMMM yyyy");

  //     const data = {
  //       startDate: formattedStart,
  //       endDate: formattedEnd,
  //       days: days,
  //     };

  //     onChange(data);
  //     setShowPicker(false);
  //   };



  return (
    <div className="relative">
      {/* INPUT DISPLAY */}
      <div
        onClick={handleOpen}
        className="border border-gray-100 p-3 text-sm text-gray-600  rounded cursor-pointer bg-white flex items-center gap-3 text-gray-700"
      >
        <FaCalendarDays className="text-sm text-gray-600" />

        {/* <span>
          {format(range[0].startDate, "EEE dd MMM yyyy")} -{" "}
          {showDeparturePlaceholder
            ? "Departure"
            : format(range[0].endDate, "EEE dd MMM yyyy")}
        </span> */}
        {format(selectedDate, "EEE dd MMM yyyy")}
      </div>

      {/* CALENDAR POPUP */}
      {showPicker && (
        <div
          ref={pickerRef}
          className="absolute z-50 mt-2 shadow-lg bg-white rounded-xl  overflow-hidden"
        >
          <button
            onClick={() => setShowPicker(false)}
            className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600"
          >
            ✕
          </button>
          {/* <DateRange
            editableDateInputs={true}
            onChange={handleChange}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={2}
            minDate={new Date()}
            direction="horizontal"
          /> */}

          <Calendar
            date={selectedDate}
            onChange={handleChange}
            minDate={new Date()}
          />

          {/* <div className="flex justify-between items-center px-4 py-3 border-t border-t-gray-200 bg-white">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowPicker(false)}
                className="text-gray-500 underline cursor-pointer hover:text-[#d97129]"
              >
                Cancel
              </button>

              <button
                onClick={handleConfirm}
                // onClick={() => setShowPicker(false)}
                className="bg-[#d97129] hover:bg-[#e58d4e] cursor-pointer rounded-full text-white px-6 py-2 font-semibold"
              >
                CONFIRM
              </button>
            </div>
          </div> */}
        </div>
      )}
    </div>
  );
}
