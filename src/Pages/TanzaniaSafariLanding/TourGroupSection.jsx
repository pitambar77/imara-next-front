"use client";

import React, { useEffect, useState } from "react";
import API from "../../api/axios";

import {
  FaWallet,
  FaHourglassHalf,
  FaCalendarAlt,
  FaShieldAlt,
} from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";

const TourGroupSection = () => {
  const [tourGroups, setTourGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const res = await API.get("/travelgroup");
        setTourGroups(res.data || []);
      } catch (err) {
        console.error("Tour group fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGroups();
  }, []);

  if (loading) {
    return (
      <section className="bg-[#fedec8] py-20 text-center">
        Loading tour groups…
      </section>
    );
  }

  return (
    <section className="bg-[#fedec8] py-8 md:py-16 ">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0">
        {/* Header */}
        <h2 className="text-center capitalize text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-3">
          Tours by group type
        </h2>

        <p className="text-center text-[#444] text-[18px] mb-12">
          Lorem Ipsum is simply dummy text of the printing
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourGroups.map((item) => (
            <div key={item._id} className="flex flex-col">
              {/* Image */}
              <Link
                href={`/travelgroup/${item.slug}`}
                className="relative rounded-md overflow-hidden group cursor-pointer h-56"
              >
                <div className="relative w-full h-56">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width:768px) 100vw, 400px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all"></div>

                <h3 className="absolute uppercase inset-0 flex justify-center items-center text-white text-[22px] md:text-[28px] font-bold text-center px-8">
                  {item.title.replace(/^tanzania\s+/i, "")}
                </h3>
              </Link>

              {/* Description */}
              <p className="text-[#444] text-[16px] mt-3 leading-relaxed">
                {item.overviewinfo?.[0]?.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* BOOK WITH CONFIDENCE */}
        <div className="bg-[#fedec7]">
          <div className="max-w-7xl mx-auto px-6 md:px-10 mt-12 md:mt-24">
            <h2 className="text-center text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-8 md:mb-16 capitalize">
              Book with confidence
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center text-[#444]">
              <Feature
                icon={<FaWallet />}
                text="Save your seat instantly with a small deposit"
              />
              <Feature
                icon={<FaHourglassHalf />}
                text="Choose payment timings that match your schedule"
              />
              <Feature
                icon={<FaCalendarAlt />}
                text="Make itinerary changes without stress before departure"
              />
              <Feature
                icon={<FaShieldAlt />}
                text="Your booking funds are always fully safeguarded"
              />
            </div>

            <div className="flex justify-center mt-16">
              <button className="px-8 py-3 cursor-pointer rounded-full border-2 border-black text-black font-semibold hover:bg-black hover:text-white transition">
                FIND OUT MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Feature = ({ icon, text }) => (
  <div className="flex items-start gap-4">
    <div className="flex-none w-14 h-14 rounded-full bg-black flex items-center justify-center text-[#f3a85f]">
      {icon}
    </div>
    <p className="font-semibold text-black">{text}</p>
  </div>
);

export default TourGroupSection;
