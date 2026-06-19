"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const destinations = [
  {
    name: "Serengeti",
    value: "Serengeti",
    desc: "Home of the Great Migration and one of Africa’s most iconic wildlife destinations.",
    img: "/serengeti_1.webp",
  },
  {
    name: "Ngorongoro",
    value: "Ngorongoro",
    desc: "A natural wonder and one of the best places in Africa to see the Big Five in a single day.",
    img: "/imara_2.webp",
  },
  {
    name: "Tarangire",
    value: "Tarangire",
    desc: "Famous for giant baobab trees, large elephant herds, and incredible game viewing.",
    img: "/imara-tz-3.webp",
  },
  {
    name: "Arusha",
    value: "Arusha",
    desc: "Perfect for walking safaris, canoeing, and views of Mount Meru.",
    img: "/imara_5.webp",
  },
  {
    name: "Lake Manyara",
    value: "Lake Manyara",
    desc: "Known for tree-climbing lions, flamingos, and lush green landscapes.",
    img: "/imara_4.webp",
  },
  {
    name: "Zanzibar",
    value: "Zanzibar",
    desc: "White sand beaches, turquoise waters, and the historic charm of Stone Town.",
    img: "/imara_7.webp ",
  },
  {
    name: "Mount Kilimanjaro",
    value: "Mount Kilimanjaro",
    desc: "Africa’s highest peak — ideal for trekking or as a stunning safari backdrop.",
    img: "/imara_6.webp",
  },
  {
    name: "Not Sure / Others",
    value: "Not Sure / Others",
    desc: "Share your interests and we’ll create the perfect safari route for you.",
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
          1. Which destinations would you like to explore?
        </h2>

        <p className="!font-avenir text-[#444] text-[17px] mb-6 md:mb-12">
          Select the places that inspire you most — our safari specialists will
          design the perfect itinerary based on your preferences, travel dates,
          and wildlife interests.
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
                  className={`!font-avenir leading-6 text-center ${
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
