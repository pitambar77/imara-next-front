import { CarTaxiFront, HandCoins, HandHeart } from "lucide-react";
import React from "react";

const SafariExtrasSection = () => {
  const extras = [
    {
      id: 1,
      icon: <CarTaxiFront size={40} className="text-[#d87028] text-4xl" />,
      title: "Pop-Up Roofs",
      description:
        "Enjoy clearer wildlife views from raised roof space, giving travelers better angles for photography, game viewing, and quiet moments across open plains and park tracks.",
    },
    {
      id: 2,
      icon: <HandHeart size={40} className="text-[#d87028]" />,
      title: "Strong Road Performance",
      description:
        "Safari vehicles handle rough tracks, muddy sections, and long park drives with better stability, helping guests travel safely through changing terrain and remote wildlife areas.",
    },
    {
      id: 3,
      icon: <HandCoins size={40} className="text-[#d87028] text-4xl" />,
      title: "Spacious Travel Comfort",
      description:
        "Wide seats, luggage space, charging points, and good window access make longer safari days easier, especially during early starts, full-day drives, and multi-park trips.",
    },
  ];

  return (
    <section className="bg-[#fedec7] py-10  sm:py-12 md:py-16 px-6 md:px-12 lg:px-20 text-center">
      {/* Heading */}
      <h2 className="text-[22px] md:text-3xl capitalize font-extrabold text-[#1a1a1a] mb-3">
        Tanzania Safari Vehicle Features
      </h2>
      <p className="mb-12 text-[18px] text-[#444]">
        Built for Comfortable and Reliable Safari Travel
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {extras.map((item) => (
          <div key={item.id} className="flex flex-col items-center text-center">
            {/* Icon Circle */}
            <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-black mb-6">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-[22px] font-extrabold text-[#1a1a1a] mb-3">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-[15px] font-semibold text-[#444] leading-relaxed max-w-[340px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SafariExtrasSection;
