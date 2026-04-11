
import Image from "next/image";
import React from "react";

const KilimanjaroRoute = ({ overview }) => {
  if (!overview || !overview.length) return null;

  return (
    <section className="bg-[#f8d8c3] py-8 md:py-16 px-4 md:px-10 lg:px-18 2xl:px-28">
      {overview.map((item, index) => (
        <div key={item._id || index}>
          {/* HEADING */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-[28px] md:text-3xl font-extrabold text-[#1a1a1a]">
              {item.title}
            </h2>

            {item.description?.map((block, i) => {
              if (block.type === "paragraph") {
                return (
                  <p
                    key={i}
                    className="text-[16px] text-[#444] leading-relaxed mt-4"
                  >
                    {block.content}
                  </p>
                );
              }

              if (block.type === "header") {
                return (
                  <h3
                    key={i}
                    className="text-lg font-semibold text-gray-800 mt-6"
                  >
                    {block.content}
                  </h3>
                );
              }

              if (block.type === "list") {
                return (
                  <ul
                    key={i}
                    className="list-disc list-inside text-gray-700 mt-4 space-y-1"
                  >
                    {block.content.map((li, idx) => (
                      <li key={idx}>{li}</li>
                    ))}
                  </ul>
                );
              }

              return null;
            })}
          </div>

          {/* IMAGE */}
          {item.image && (
            <div className="flex justify-center">
         <Image
  src={item.image}
  alt={item.title}
  width={1200}
  height={600}
  className="w-full max-w-4xl h-auto md:h-[600px] object-cover rounded-md"
/>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default KilimanjaroRoute;
