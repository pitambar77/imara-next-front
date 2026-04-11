import React from "react";
import Image from "next/image";
const AllyshipCommitment = ({ data = [] }) => {
  if (!data.length) return null;

  // All items share the same heading → take first
  const sectionHeading = data[0]?.heading;

  return (
    <section className="bg-[#f8d8c3] py-8 md:py-16 ">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0">
        {/* TITLE */}
        <h2 className="text-center text-xl md:text-3xl capitalize font-extrabold text-[#1a1a1a] mb-10">
          {sectionHeading}
        </h2>

        {/* CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-md overflow-hidden shadow-md"
            >
              {/* IMAGE */}
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={240}
                  className="w-full h-60 object-cover"
                />
              )}

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                  {item.title}
                </h3>

                <p className="text-[15px] text-[#444] leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllyshipCommitment;
