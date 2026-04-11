import React from "react";
import Image from "next/image";

const WhyVisitSection = ({ title, subtitle, cards }) => {
  return (
    <section className="bg-white py-8 md:py-16 max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0">
      {title && (
        <h2 className="text-[24px] md:text-3xl capitalize font-bold text-center text-[#111] mb-3">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="text-[18px] text-[#444] mb-8 md:mb-12 text-center ">
          {subtitle}
        </p>
      )}

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards?.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            {/* Image */}
            <Image
              src={card.image}
              alt={card.title}
              width={500}
              height={240}
              className="w-full h-60 object-cover"
            />

            {/* Content */}
            <div className="p-6 text-center">
              <h3 className="text-[20px] md:text-[24px] text-[#1a1a1a] mb-3">
                {card.title}
              </h3>
              <p className="text-[16px] text-[#444] leading-relaxed">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyVisitSection;
