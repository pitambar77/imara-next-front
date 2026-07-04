"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const destinations = [
  {
    name: "Serengeti",
    value: "Serengeti",
    desc: "Berceau de la Grande Migration et l’une des destinations animalières les plus emblématiques d’Afrique.",
    img: "/serengeti_new_1.webp",
  },
  {
    name: "Ngorongoro",
    value: "Ngorongoro",
    desc: "Une merveille naturelle et l’un des meilleurs endroits d’Afrique pour observer les Big Five en une seule journée.",
    img: "/nagarangaro-new-1.webp",
  },
  {
    name: "Tarangire",
    value: "Tarangire",
    desc: "Célèbre pour ses baobabs géants, ses grands troupeaux d’éléphants et ses excellentes observations animalières.",
    img: "/imara-tz-new-3.webp",
  },
  {
    name: "Arusha",
    value: "Arusha",
    desc: "Idéal pour les safaris à pied, les excursions en canoë et les vues sur le mont Meru.",
    img: "/imara_5.webp",
  },
  {
    name: "Lac Manyara",
    value: "Lac Manyara",
    desc: "Connu pour ses lions grimpeurs d’arbres, ses flamants roses et ses paysages verdoyants.",
    img: "/imara_4.webp",
  },
  {
    name: "Zanzibar",
    value: "Zanzibar",
    desc: "Plages de sable blanc, eaux turquoise et charme historique de Stone Town.",
    img: "/zanzibar-sa-trip.webp ",
  },
  {
    name: "Mont Kilimandjaro",
    value: "Mont Kilimandjaro",
    desc: "Le plus haut sommet d’Afrique — idéal pour le trekking ou comme décor spectaculaire pour votre safari.",
    img: "/imara_6.webp",
  },
  {
    name: "Pas sûr / Autres",
    value: "Pas sûr / Autres",
    desc: "Partagez vos envies avec nous et nous créerons l’itinéraire safari parfait pour vous.",
    img: "/imara_new_8.webp",
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
          1. Quelles destinations souhaitez-vous explorer ?
        </h2>

        <p className="!font-avenir text-[#444] text-[17px] mb-6 md:mb-12">
          Sélectionnez les lieux qui vous inspirent le plus — nos spécialistes
          safari concevront l’itinéraire idéal selon vos préférences, vos dates
          de voyage et vos centres d’intérêt pour la faune sauvage.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {destinations.map((item) => (
            // <div
            //   key={item.value}
            //   onClick={() => handleDestinationSelect(item.value)}
            //   className={`group cursor-pointer rounded-sm overflow-hidden bg-white shadow-sm transition-all duration-300`}
            // >
            //   <div className="relative h-[140px] md:h-[228px]">
            //     <Image
            //       src={item.img}
            //       alt={item.name}
            //       fill
            //       sizes="(max-width:768px) 50vw, (max-width:1024px) 33vw, 25vw"
            //       className="object-cover group-hover:scale-105 transition duration-500"
            //     />

            //     {safariData.destinations.includes(item.value) && (
            //       <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-[#d87029] flex items-center justify-center shadow-lg">
            //         <FaCheck className="text-white text-sm" />
            //       </div>
            //     )}
            //   </div>

            //   <div
            //     className={`transition-all duration-300 px-4 py-4 ${
            //       safariData.destinations.includes(item.value)
            //         ? "bg-[#d87029]"
            //         : "bg-white"
            //     }`}
            //   >
            //     <h2
            //       className={`!font-cormorant text-[22px] font-medium text-center leading-tight mb-2 ${
            //         safariData.destinations.includes(item.value)
            //           ? "text-white"
            //           : "text-[#111]"
            //       }`}
            //     >
            //       {item.name}
            //     </h2>

            //     <p
            //       className={`!font-avenir leading-6 text-center hidden md:block ${
            //         safariData.destinations.includes(item.value)
            //           ? "text-white/90"
            //           : "text-[#444]"
            //       }`}
            //     >
            //       {item.desc}
            //     </p>
            //   </div>
            // </div>
            <div
              key={item.value}
              onClick={() => handleDestinationSelect(item.value)}
              className={`group cursor-pointer rounded-sm overflow-hidden shadow-sm transition-all duration-300 flex flex-col h-full ${
                safariData.destinations.includes(item.value)
                  ? "bg-[#d87029]"
                  : "bg-white"
              }`}
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

              <div className="flex-1 px-4 py-4">
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
