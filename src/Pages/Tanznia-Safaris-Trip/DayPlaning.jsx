"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const days = [
  {
    name: "1 – 5 Days",
    value: "1 – 5 Days",
    img: "/imara_9.webp",
  },
  {
    name: "6 – 10 Days",
    value: "6 – 10 Days",
    img: "/imara_10.webp",
  },
  {
    name: "11 – 15 Days",
    value: "11 – 15 Days",
    img: "/imara_11.webp",
  },
  {
    name: "Not sure yet",
    value: "Not sure yet",
    img: "/imara_12.webp",
  },
];

export default function DayPlaning({ safariData, setSafariData }) {
  const handleDaySelect = (value) => {
    setSafariData((prev) => ({
      ...prev,
      days: value,
    }));

    setTimeout(() => {
      document.getElementById("travel-style")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 300);
  };

  return (
    <section id="days" className="bg-[#fbf5ef91] px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="!font-cormorant text-3xl md:text-4xl lg:text-5xl mb-4 capitalize">
          2. How Many Days Are You Planning for your Tanzania trips?
        </h2>

        <p className="!font-avenir text-[#444] text-[17px] mb-6 md:mb-12">
          Whether it’s a short escape or a longer journey — we design your
          safari to maximize your experience and comfort.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {days.map((item) => (
            <div
              key={item.value}
              onClick={() => handleDaySelect(item.value)}
              className={`group cursor-pointer rounded-sm overflow-hidden bg-white shadow-sm transition-all duration-300
              `}
            >
              <div className="relative h-[140px] md:h-[228px]">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  sizes="(max-width:768px) 50vw, (max-width:1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

                {safariData.days === item.value && (
                  <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-[#d87029] flex items-center justify-center shadow-lg">
                    <FaCheck className="text-white text-lg" />
                  </div>
                )}
              </div>

              <div
                className={`transition-all duration-300 py-5 px-4 ${
                  safariData.days === item.value ? "bg-[#d87029]" : "bg-white"
                }`}
              >
                <h2
                  className={`!font-cormorant text-[22px] font-medium text-center leading-tight ${
                    safariData.days === item.value
                      ? "text-white"
                      : "text-[#111]"
                  }`}
                >
                  {item.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
