import React from 'react'

import { FaHandHoldingHeart, FaHandHolding } from "react-icons/fa";

const SafariExtrasSection = () => {
  const extras = [
    {
      id: 1,
      icon: <FaHandHolding className="text-[#d87028] text-4xl" />,
      number: "60",
      title: "Designed for Viewing",
      description:
        "Built so travellers get wide visibility, stable movement, and uninterrupted time to observe animals across open plains and woodland areas.",
    },
    {
      id: 2,
      icon: <FaHandHoldingHeart className="text-[#d87028] text-4xl" />,
      title: "Comfort for Long Drives",
      description:
        "Seats, spacing, and ventilation systems help reduce fatigue during full-day drives. You stay comfortable even as the terrain shifts from smooth stretches to rugged tracks across famous parks and hidden pockets of wilderness.",
    },
    {
      id: 3,
      icon: <FaHandHoldingHeart className="text-[#d87028] text-4xl" />,
      title: "Reliable on Tough Roads",
      description:
        "Vehicles maintain grip, balance, and control on uneven surfaces that are common in national parks. This reliability allows travellers to enjoy the scenery without worrying about the challenges of unpredictable road conditions.",
    },
  ];

  return (
    <section className="bg-[#fedec7] py-16 px-6 md:px-12 lg:px-20 text-center">
      {/* Heading */}
      <h2 className="text-[22px] md:text-3xl capitalize font-extrabold text-[#1a1a1a] mb-12">
        Tanzania Safari Vehicle Features
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {extras.map((item) => (
          <div key={item.id} className="flex flex-col items-center text-center">
            {/* Icon Circle */}
            <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-black mb-6">
              {item.id === 1 && (
                <span className="absolute text-[#d87028] text-[32px] mb-4 font-extrabold">
                  {item.number}
                </span>
              )}
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