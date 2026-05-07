"use client";

import { useState, useRef, useEffect } from "react";
// import { DateRange } from "react-date-range";
import { Calendar } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "../../components/calendar.css";
import { FaCalendarDays } from "react-icons/fa6";

export default function TravelDatePicker({ value, onChange }) {
  const [showPicker, setShowPicker] = useState(false);
  const [showDeparturePlaceholder, setShowDeparturePlaceholder] =
    useState(false);

  const pickerRef = useRef(null);

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

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

  const handleOpen = () => {
    setShowPicker(true);
    setShowDeparturePlaceholder(true);
  };

  const handleChange = (date) => {
    setSelectedDate(date);

    const formattedDate = format(date, "yyyy-MM-dd");

    onChange({
      startDate: formattedDate,
    });

    setShowPicker(false);
  };

  return (
    <div className="relative">
      {/* INPUT DISPLAY */}
      <div
        onClick={handleOpen}
        className="bg-[#f3eee7] border border-[#e5ded6] p-3 text-sm text-[#444]  rounded cursor-pointer bg-[#f3eee7] flex items-center gap-3  "
      >
        <FaCalendarDays className="text-sm text-[#ec9154]" />

        {format(selectedDate, "EEE dd MMM yyyy")}
      </div>

      {/* CALENDAR POPUP */}
      {showPicker && (
        <div
          ref={pickerRef}
          className={`absolute z-50 mt-2 shadow-lg bg-white rounded-xl  overflow-hidden `}
        >
          <button
            onClick={() => setShowPicker(false)}
            className="absolute top-2 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600"
          >
            ✕
          </button>

          <Calendar
            date={selectedDate}
            onChange={handleChange}
            minDate={new Date()}
          />
        </div>
      )}
    </div>
  );
}


