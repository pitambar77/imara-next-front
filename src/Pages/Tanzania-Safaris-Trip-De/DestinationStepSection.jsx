"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const destinations = [
  {
    name: "Serengeti",
    value: "Serengeti",
    desc: "Heimat der Großen Tierwanderung und eines der bekanntesten Wildtiergebiete Afrikas.",
    img: "/serengeti_1.webp",
  },
  {
    name: "Ngorongoro",
    value: "Ngorongoro",
    desc: "Ein Naturwunder und einer der besten Orte in Afrika, um die Big Five an einem einzigen Tag zu sehen.",
    img: "/imara_2.webp",
  },
  {
    name: "Tarangire",
    value: "Tarangire",
    desc: "Berühmt für riesige Baobab-Bäume, große Elefantenherden und fantastische Tierbeobachtungen.",
    img: "/imara-tz-3.webp",
  },
  {
    name: "Arusha",
    value: "Arusha",
    desc: "Ideal für Wandersafaris, Kanufahrten und Ausblicke auf den Mount Meru.",
    img: "/imara_5.webp",
  },
  {
    name: "Lake Manyara",
    value: "Lake Manyara",
    desc: "Bekannt für baumkletternde Löwen, Flamingos und üppig grüne Landschaften.",
    img: "/imara_4.webp",
  },
  {
    name: "Sansibar",
    value: "Sansibar",
    desc: "Weiße Sandstrände, türkisblaues Wasser und der historische Charme von Stone Town.",
    img: "/zanzibar-sa-trip.webp ",
  },
  {
    name: "Mount Kilimandscharo",
    value: "Mount Kilimandscharo",
    desc: "Afrikas höchster Berg — ideal zum Trekking oder als beeindruckende Safari-Kulisse.",
    img: "/imara_6.webp",
  },
  {
    name: "Nicht sicher / Andere",
    value: "Nicht sicher / Andere",
    desc: "Teilen Sie uns Ihre Interessen mit, und wir erstellen die perfekte Safari-Route für Sie.",
    img: "/imara_8.webp",
  },
];

export default function DestinationStepSection({ safariData, setSafariData }) {
  const handleDestinationSelect = (value) => {
    const exists = safariData.destinations.includes(value);

    const updated = exists
      ? safariData.destinations.filter((item) => item !== value)
      : [...safariData.destinations, value];

    setSafariData((prev) => ({
      ...prev,
      destinations: updated,
    }));

    if (updated.length > 0) {
      setTimeout(() => {
        document.getElementById("days")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <section
      id="destinations"
      className="bg-[#fbf5ef91] py-12 md:py-20 px-4 md:px-6"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="!font-cormorant text-3xl md:text-4xl lg:text-5xl mb-4 capitalize">
          1. Welche Reiseziele möchten Sie erkunden?
        </h2>

        <p className="!font-avenir text-[#444] text-[17px] mb-6 md:mb-12">
          Wählen Sie die Orte aus, die Sie am meisten inspirieren — unsere
          Safari-Spezialisten gestalten die perfekte Reiseroute basierend auf
          Ihren Vorlieben, Reisedaten und Wildtierinteressen.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {destinations.map((item) => (
            <div
              key={item.value}
              onClick={() => handleDestinationSelect(item.value)}
              className={`group cursor-pointer rounded-sm overflow-hidden bg-white shadow-sm transition-all duration-300`}
            >
              <div className="relative h-[140px] md:h-[228px]">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  sizes="(max-width:768px) 50vw, (max-width:1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

                {safariData.destinations.includes(item.value) && (
                  <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-[#d87029] flex items-center justify-center shadow-lg">
                    <FaCheck className="text-white text-sm" />
                  </div>
                )}
              </div>

              <div
                className={`transition-all duration-300 px-4 py-4 ${
                  safariData.destinations.includes(item.value)
                    ? "bg-[#d87029]"
                    : "bg-white"
                }`}
              >
                <h2
                  className={`!font-cormorant text-[22px] font-medium text-center leading-tight mb-2 ${
                    safariData.destinations.includes(item.value)
                      ? "text-white"
                      : "text-[#111]"
                  }`}
                >
                  {item.name}
                </h2>

                <p
                  className={`!font-avenir leading-6 text-center hidden md:block ${
                    safariData.destinations.includes(item.value)
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
