import React from "react";

const PositionsSection = ({ title, subtitle, positions }) => {
  return (
    <section className=" py-8 md:py-16 bg-white max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl capitalize font-bold text-[#1a1a1a] mb-4">{title}</h2>
        <p className="text-[#444] text-[16px] max-w-4xl mx-auto mt-2">{subtitle}</p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {positions.map((item, index) => (
          <div
            key={index}
            className="bg-[#f6d1b8] rounded-md py-12 text-center shadow-sm border border-[#f2c6a5]"
          >
            <h3 className="text-2xl font-bold mb-4 text-[#1a1a1a]">
              {item.position}
            </h3>

            <p className="text-[#444] mb-4">{item.location}</p>

            {/* <button className="text-[#111] font-semibold underline hover:text-black transition">
              {item.linkText}
            </button> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PositionsSection;
