"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const budgets = [
  {
    name: "Budget-Safari",
    value: "Budget-Safari",
    desc: "Authentische Camps mit ausgezeichneter Führung und großartigem Zugang zu Wildtiergebieten.",
    img: "/Imara_13.webp",
  },

  {
    name: "Luxus-Safari",
    value: "Luxus-Safari",
    desc: "Premium-Lodges, exklusive Erlebnisse und nahtloser Service.",
    img: "/imara_15.webp",
  },
  {
    name: "Mittelklasse-Safari",
    value: "Mittelklasse-Safari",
    desc: "Komfortable Lodges und Tented Camps mit einem hervorragenden Preis-Leistungs-Verhältnis.",
    img: "/Imara_14.webp",
  },
  {
    name: "Noch nicht entschieden",
    value: "Noch nicht entschieden",
    desc: "Wir empfehlen Ihnen die besten Optionen passend zu Ihren Wünschen.",
    img: "/Imara_16.webp",
  },
];

export default function TravelStyle({ safariData, setSafariData }) {
  const handleTravelStyleSelect = (value) => {
    setSafariData((prev) => ({
      ...prev,
      travelStyle: value,
    }));

    setTimeout(() => {
      document.getElementById("travel-date")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 300);
  };

  return (
    <section
      id="travel-style"
      className="bg-[#fbf5ef91] py-12 md:py-20 px-4 md:px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="!font-cormorant text-3xl md:text-4xl lg:text-5xl mb-4 capitalize">
          3. Welchen Reisestil bevorzugen Sie?
        </h2>

        <p className="!font-avenir text-[#444] text-[17px] mb-6 md:mb-12">
          Wählen Sie Ihren bevorzugten Safari-Stil — wir passen Unterkünfte,
          Erlebnisse und Logistik entsprechend an.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {budgets.map((item) => (
            <div
              key={item.value}
              onClick={() => handleTravelStyleSelect(item.value)}
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

                {safariData.travelStyle === item.value && (
                  <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-[#d87029] flex items-center justify-center shadow-lg">
                    <FaCheck className="text-white text-lg" />
                  </div>
                )}
              </div>

              {/* Content Area */}
              <div
                className={`transition-all duration-300 px-4 py-4 ${
                  safariData.travelStyle === item.value
                    ? "bg-[#d87029]"
                    : "bg-white"
                }`}
              >
                <h2
                  className={`!font-cormorant text-[22px] font-medium text-center leading-tight mb-2 ${
                    safariData.travelStyle === item.value
                      ? "text-white"
                      : "text-[#111]"
                  }`}
                >
                  {item.name}
                </h2>

                <p
                  className={`!font-avenir leading-6 text-center hidden md:block ${
                    safariData.travelStyle === item.value
                      ? "text-white/90"
                      : "text-[#444]"
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
