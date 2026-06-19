"use client";

import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function WhenToTravel({ safariData, setSafariData }) {
  const [mounted, setMounted] = useState(false);

  const [date, setDate] = useState(
    safariData.travelDate ? new Date(safariData.travelDate) : new Date(),
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDateSelect = (selectedDate) => {
    setDate(selectedDate);

    setSafariData((prev) => ({
      ...prev,
      travelDate: selectedDate,
    }));

    setTimeout(() => {
      document.getElementById("contact-form")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 300);
  };

  if (!mounted) return null;

  return (
    <section id="travel-date" className="bg-[#fbf5ef91] px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="!font-cormorant text-3xl md:text-4xl lg:text-5xl mb-4">
          4. When Would You Like To Travel?
        </h2>

        <p className="!font-avenir text-[#444] text-lg mb-10">
          Select your preferred dates — we’ll guide you based on wildlife
          seasons, weather, and best travel conditions.
        </p>

        <div className="flex justify-center">
          <Calendar
            onChange={handleDateSelect}
            value={date}
            minDate={new Date()}
            prevLabel="‹"
            nextLabel="›"
            prev2Label={null}
            next2Label={null}
          />
        </div>
      </div>
    </section>
  );
}
