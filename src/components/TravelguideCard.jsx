import React from "react";
import Link from "next/link";
import Image from "next/image";

const TravelguideCard = ({
  title,
  subtitle,
  subtitle1,
  subtitle2,
  items,
  description,
}) => {
  return (
    <section className=" py-8 md:py-16 max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0 bg-white">
      {/* Title */}
      {title && (
        <h2 className="text-center text-2xl md:text-3xl capitalize font-bold mb-4">
          {title}
        </h2>
      )}

      {subtitle && (
        <h2 className="text-center text-2xl md:text-3xl capitalize font-bold mb-4">
          {subtitle}
        </h2>
      )}

      {/* Subtitle 1 */}
      {subtitle1 && (
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-6 leading-relaxed">
          {subtitle1}
        </p>
      )}

      {/* Subtitle 2 */}
      {subtitle2 && (
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed">
          {subtitle2}
        </p>
      )}

      {/* GRID */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {items?.map((item) => (
          <div
            key={item.id}
            className="rounded-md overflow-hidden bg-white shadow-md hover:shadow-lg transition flex flex-col"
          >
            {/* Image */}
            <Link href={`${item.link}`}>
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={220}
                className="w-full h-[220px] object-cover"
              />
            </Link>
            {/* Content */}
            <div className=" py-4 px-2 md:p-6 text-center flex flex-col flex-1">
              <Link href={`${item.link}`}>
                <h3 className="font-semibold text-lg md:text-[24px] mb-4">
                  {item.title}
                </h3>
              </Link>
              <p className="text-[#444] text-[16px] leading-relaxed line-clamp-4 mb-4">
                {item.description}
              </p>

              {/* Button stays at bottom always
              {item.link && (
                <button className="font-semibold underline mt-auto pb-1">
                  {item.link}
                </button>
              )} */}

              {/* ✅ REAL NAVIGATION */}
              {item.link && (
                <Link
                  href={item.link}
                  className="font-semibold underline hover:text-[#d87028] mt-auto pb-1"
                >
                  <p>Find out more →</p>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TravelguideCard;
