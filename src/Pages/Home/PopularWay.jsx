import React from "react";
import Link from "next/link";
import besttime from "../../assets/best-time.webp";
import cost from "../../assets/cost.webp";
import food from "../../assets/food.webp";
import safety from "../../assets/safety.webp";
import packing from "../../assets/packing.webp";
import visa from "../../assets/visa.webp";
import PrimaryButton from "../../components/PrimaryButton";
import Image from "next/image";

const destinations = [
  {
    id: 1,
    name: "Best time to visit",
    link: "/travel-guide/when-is-the-best-time-to-visit-tanzania",
    image: besttime,
  },
  {
    id: 2,
    name: "What to pack",
    link: "/travel-guide/what-to-pack-for-a-tanzania-safari",
    image: packing,
  },
  {
    id: 3,
    name: "Tanzania food",
    link: "/travel-guide/what-to-eat-on-a-tanzania-safari",
    image: food,
  },
  {
    id: 4,
    name: "Tanzania visa",
    link: "/travel-guide/what-are-the-requirements-for-a-tanzania-visa",
    image: visa,
  },
  {
    id: 5,
    name: "Tanzania cost",
    link: "/travel-guide/how-much-does-it-cost-to-visit-tanzania",
    image: cost,
  },
  {
    id: 6,
    name: "Travel safety",
    link: "/travel-guide/how-safe-is-a-safari-in-tanzania",
    image: safety,
  },
];

const PopularWay = () => {
  return (
    <section className="w-full py-8 md:py-16 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center capitalize mb-3">
          Ultimate Guide to Tanzania Travel
        </h2>
        <p className="text-center text-[#444] text-[18px] mb-12 ">
          Lorem Ipsum is simply dummy text of the printing
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <Link
              key={dest.id}
              href={dest.link}
              // onClick={() => navigate(dest.link)}
              className="relative w-full h-56 rounded-md overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                sizes="(max-width:768px) 100vw, 33vw"
              />
              {/* 🔥 SHADOW OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10 pointer-events-none" />

              {/* Text */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-white font-semibold px-4 py-2 text-sm md:text-2xl capitalize text-center drop-shadow-lg ">
                  {dest.name}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="flex justify-center mt-12">
          <PrimaryButton href={"/tanzania-travel-guide"}>
            View All Travel Guide
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default PopularWay;
