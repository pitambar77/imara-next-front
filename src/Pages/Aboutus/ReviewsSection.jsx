"use client";

import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,

      name: "Colt B",
      trip: "Ashburn, Virginia",
      text: "I could happily go for a trip like this every year. Even going back again to the Serengeti national park is enticing to us, but we should probably try some of the other options for next year. Huge props to them for providing us more than we expected from a safari tour.",
      img: "/colt-b.jpg",
    },
    {
      id: 2,
      name: "Braylee F",
      trip: "Vancouver, Canada",
      text: "The safari literally couldn't have been much better. My partner and I just recently got engaged and we wanted to do a little celebration vacation. I've always wanted to do some safari or more adventurous so we reached out to them and it was settled swiftly.",
      img: "/braylee-f.jpg",
    },
    {
      id: 3,
      name: "Blanca Opati",
      trip: "Nairobi, Kenya",
      text: "Imara Kileleni was able to facilitate a wonderful day trip to Tarangire National Park and also a wonderful Day trip to Mt. Kilimanjaro via Shira route We had a wonderful time to step out from work. It’s was well arranged with every nitty gritty taken care of .",
      img: "/opati-blanca.jpg",
    },
  ];

  return (
    <section className="bg-white py-12 md:py-16 max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0">
      {/* Top Orange Bar */}
      <div className="bg-[#d87028] text-white font-semibold text-center py-3 rounded-md mb-16">
        RATED 5★ BY OVER 100 TRAVELLERS{" "}
        <span className="inline-flex items-center gap-1">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </span>{" "}
        <span className="text-white/90 font-normal">5.0/5 (100 REVIEWS)</span>
      </div>

      {/* Section Title */}
      <h2 className="text-[24px] md:text-3xl capitalize font-extrabold text-[#111] text-center mb-16 md:mb-24">
        Real Stories From Our Travellers
      </h2>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            // className="bg-white rounded-md shadow-md hover:shadow-lg transition duration-300 text-center p-8 flex flex-col items-center"
            className="bg-white rounded-md shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-500 text-center pt-16 sm:pt-18 pb-6 sm:pb-8 px-5 sm:px-8 flex flex-col items-center relative overflow-visible"
          >
            {/* Profile */}
            <div className="absolute -top-10 sm:-top-12 w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src={review.img}
                alt={review.name}
                fill
                className="object-cover"
              />
            </div>
            {/* Stars */}
            <div className="flex justify-center mb-5 text-[#d87029] text-xl">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            {/* Quote */}
            <p className="text-[16px] text-[#444] italic leading-relaxed mb-6">
              “{review.text}”
            </p>

            {/* Divider */}
            <div className="w-8 h-1 bg-[#d87028] mb-4"></div>

            {/* Name and Trip */}
            <h3 className=" text-xl italic text-[#333] mb-1">{review.name}</h3>
            <p className="text-[#333] font-semibold underline text-[15px]">
              {review.trip}
            </p>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className=" mt-8 md:mt-14 text-center">
        <Link
          href="https://www.tripadvisor.com/Attraction_Review-g317084-d34222480-Reviews-Imara_Kileleni_Safaris-Moshi_Kilimanjaro_Region.html"
          target="_blank"
          className="border hover:border-[#d87028] hover:bg-[#d87028] hover:text-white border-[#111] text-[#111] font-semibold px-8 py-3 cursor-pointer rounded-full transition"
        >
          VIEW ALL REVIEWS
        </Link>
      </div>
    </section>
  );
};

export default ReviewsSection;
