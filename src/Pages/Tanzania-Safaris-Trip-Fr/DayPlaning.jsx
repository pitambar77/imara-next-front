"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const days = [
  {
    name: "1 à 5 jours",
    value: "1 à 5 jours",
    img: "/imara_new_9.webp",
  },
  {
    name: "6 à 10 jours",
    value: "6 à 10 jours",
    img: "/Imara_new_10.webp",
  },
  {
    name: "11 à 15 jours",
    value: "11 à 15 jours",
    img: "/Imara_new_11.webp",
  },
  {
    name: "Pas encore sûr",
    value: "Pas encore sûr",
    img: "/Imara_12.webp",
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
          2.Combien de jours pour votre voyage en Tanzanie ?
        </h2>

        <p className="!font-avenir text-[#444] text-[17px] mb-6 md:mb-12">
          Qu’il s’agisse d’une courte escapade ou d’un long voyage — nous
          concevons votre safari pour maximiser votre expérience et votre
          confort.
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
