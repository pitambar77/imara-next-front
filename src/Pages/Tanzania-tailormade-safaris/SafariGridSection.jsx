"use client";

import React, { useState } from "react";
import CardButton from "@/components/CardButton";
import PrimaryButton from "@/components/PrimaryButton";
import Image from "next/image";
import { MdOutlineSavedSearch } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";

const trips = [
  {
    id: 1,
    title: "Best of Tanzania Safari and Beach Escape",
    value: "Best_of_Tanzania_Safari_and_Beach_Escape",
    days: "10 Days 9 Nights",
    price: "$3,800",
    places: "7 Places",
    countries: "1 Country",
    rating: 4.8,
    img: "https://media.istockphoto.com/id/2244811741/photo/masai-giraffe-walks-across-a-dirt-road-in-front-of-a-safari-vehicle-on-the-savannah-plains-of.jpg?s=612x612&w=0&k=20&c=FKGtQLi8vV0-C_wJWMKB4Vd55s_eEQb5v7gt449mgZY=",
    img1: "https://media.istockphoto.com/id/880400564/photo/leopard-rests-in-a-tree-at-sunset.jpg?s=612x612&w=0&k=20&c=jnE07FW8UvgNvjgKF08hOksJBcpXkLOCpB0Z6oJ7uEY=",
    tag: "Beach Holiday, Wildlife Adventure",
    itinerary: [
      { day: "Day 1", place: "Arusha" },
      { day: "Day 2", place: "Tarangire" },
      { day: "Day 3", place: "Ngorongoro" },
      { day: "Day 4", place: "Serengeti" },
      { day: "Day 5", place: "Serengeti" },
      { day: "Day 6", place: "Zanzibar" },
      { day: "Day 7", place: "Arusha" },
      { day: "Day 8", place: "Tarangire" },
      { day: "Day 9", place: "Ngorongoro" },
      { day: "Day 10", place: "Serengeti" },
      { day: "Day 11", place: "Serengeti" },
      { day: "Day 12", place: "Zanzibar" },
    ],
  },
  {
    id: 2,
    title: "Great Migration & Big Cats Safaris",
    value: "Great_Migration",
    days: "7 Days 6 Nights",
    price: "$3,200",
    img: "https://media.istockphoto.com/id/880400564/photo/leopard-rests-in-a-tree-at-sunset.jpg?s=612x612&w=0&k=20&c=jnE07FW8UvgNvjgKF08hOksJBcpXkLOCpB0Z6oJ7uEY=",
    tag: "Wildlife Adventure",
  },
  {
    id: 3,
    title: "Best of Tanzania Safari and Beach Escape",
    days: "10 Days 9 Nights",
    price: "$3,800",
    img: "https://media.istockphoto.com/id/921714004/photo/three-giraffes-under-acacia-tree.jpg?s=612x612&w=0&k=20&c=qBWHfq_x7CwQkVcMvgzudc3ODq1WAVbsedyre99Bj0w=",
    tag: "Beach Holiday, Wildlife Adventure",
  },
  {
    id: 4,
    title: "Tanzania Big Five & Cultural Experience Safaris",
    days: "6 Days 5 Nights",
    price: "$2,900",
    img: "https://media.istockphoto.com/id/472058123/photo/elephant-family-at-dawn-africa.jpg?s=612x612&w=0&k=20&c=grXHX9Bx8iHRc15GA9g-kwSP3l6vRnGDRNtxIrtcdzE=",
    tag: "Wildlife Adventure",
  },
  {
    id: 5,
    title: "Ultimate Wildebeest Migration & Big Five Safaris",
    days: "8 Days 7 Nights",
    price: "$3,800",
    img: "https://media.istockphoto.com/id/1370705436/photo/female-traveler-contemplating-safari-trip-across-the-scenic-african-savannah.jpg?s=612x612&w=0&k=20&c=KWSF4DJvngcOJUKIzhOfge-mnO5cdF04D7f8joM4I9k=",
    tag: "Wildlife Adventure",
  },
  {
    id: 6,
    title: "Tanzania Big Five & Cultural Experience Safaris",
    days: "6 Days 5 Nights",
    price: "$2,900",
    img: "https://media.istockphoto.com/id/2244811741/photo/masai-giraffe-walks-across-a-dirt-road-in-front-of-a-safari-vehicle-on-the-savannah-plains-of.jpg?s=612x612&w=0&k=20&c=FKGtQLi8vV0-C_wJWMKB4Vd55s_eEQb5v7gt449mgZY=",
    tag: "Wildlife Adventure",
  },
  {
    id: 7,
    title: "Best of Tanzania Safari and Beach Escape",
    days: "10 Days 9 Nights",
    price: "$3,800",
    img: "https://media.istockphoto.com/id/1370705436/photo/female-traveler-contemplating-safari-trip-across-the-scenic-african-savannah.jpg?s=612x612&w=0&k=20&c=KWSF4DJvngcOJUKIzhOfge-mnO5cdF04D7f8joM4I9k=",
    tag: "Beach Holiday, Wildlife Adventure",
  },
  {
    id: 8,
    title: "Great Migration & Big Cats Safaris",
    days: "7 Days 6 Nights",
    price: "$3,200",
    img: "https://media.istockphoto.com/id/2244811741/photo/masai-giraffe-walks-across-a-dirt-road-in-front-of-a-safari-vehicle-on-the-savannah-plains-of.jpg?s=612x612&w=0&k=20&c=FKGtQLi8vV0-C_wJWMKB4Vd55s_eEQb5v7gt449mgZY=",
    tag: "Wildlife Adventure",
  },
  {
    id: 9,
    title: "Best of Tanzania Safari and Beach Escape",
    days: "10 Days 9 Nights",
    price: "$3,800",
    img: "https://media.istockphoto.com/id/1370705436/photo/female-traveler-contemplating-safari-trip-across-the-scenic-african-savannah.jpg?s=612x612&w=0&k=20&c=KWSF4DJvngcOJUKIzhOfge-mnO5cdF04D7f8joM4I9k=",
    tag: "Beach Holiday, Wildlife Adventure",
  },
];

export default function SafariGridSection({ setSelected }) {
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [activeImage, setActiveImage] = useState("");

  return (
    <section className="bg-[#fff] py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className=" !font-cormorant text-3xl md:text-4xl lg:text-5xl  text-center mb-4 capitalize">
          Build Your Dream Safari
        </h2>

        <p className=" !font-avenir text-center text-[#444] text-[18px] mb-8 md:mb-12 max-w-2xl mx-auto">
          Most of our guests are planning a once-in-a-lifetime trip and prefer
          doing it properly. If that sounds like you, you're in the right place.
        </p>

        {/* Grid */}
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {trips.map((trip) => (
            <div key={trip.id} className="group">
              {/* Image */}
              <div className="relative h-[240px] rounded-md overflow-hidden">
                <Image
                  src={trip.img}
                  alt={trip.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

                <button
                  onClick={() => {
                    setSelectedTrip(trip);
                    setActiveImage(trip.img);
                  }}
                  className="absolute top-3 left-3 cursor-pointer bg-white text-xs font-semibold px-3 py-1 rounded shadow-sm hover:bg-gray-100 transition"
                >
                  <span className=" !font-avenir flex items-center cursor-pointer font-semibold gap-1">
                    <MdOutlineSavedSearch className="text-lg" />
                    QUICK VIEW
                  </span>
                </button>

                {/* Tag */}
                <span className=" !font-avenir absolute bottom-3 left-3  bg-[#000] text-sm text-white  px-3 py-1 rounded ">
                  {trip.tag}
                </span>
              </div>

              {/* Content */}
              <div className="my-6">
                <h3 className=" !font-cormorant text-xl md:text-2xl font-semibold leading-tight my-4">
                  {trip.title}
                </h3>

                <p className=" text-[#444] !font-avenir ">{trip.days}</p>
                <p className=" text-[#444]  mb-2 !font-avenir ">
                  Availability : All Year Round
                </p>

                <div className="flex items-center justify-between mt-2">
                  <span className=" text-[#555] !font-avenir ">
                    From{" "}
                    <span className="text-[#d87029] font-semibold !font-avenir">
                      {trip.price}
                    </span>
                  </span>

                  {/* <button className="bg-[#d87029] text-white text-xs px-4 py-1 rounded-full">
                    View Trip
                  </button> */}
                  <button
                    onClick={() => {
                      setSelected([trip.value]);

                      const section = document.getElementById("step-2");
                      section?.scrollIntoView({ behavior: "smooth" });
                    }}
                    href={"/"}
                    className=" !font-avenir bg-[#d87028] text-white text-sm px-5 py-2 rounded-full font-semibold hover:bg-[#eb8034de] transition cursor-pointer"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className=" mt-8 md:mt-16">
          <PrimaryButton
            href={"/"}
            className=" !font-avenir text-sm md:text-base md:py-3.5"
          >
            Continue to Plan My Safari →
          </PrimaryButton>
        </div>
      </div>

      {/* Modal */}
      {selectedTrip && (
        <div className="fixed inset-0 z-[999] bg-black/70 p-2 md:p-6">
          <div className="bg-white max-w-6xl mx-auto h-[90vh] rounded-md overflow-hidden relative">
            {/* Close */}
            <button
              onClick={() => setSelectedTrip(null)}
              className="absolute top-3 right-4 z-50 text-4xl cursor-pointer"
            >
              ×
            </button>

            <div className="grid md:grid-cols-[60%_40%] h-[90vh] p-8">
              {/* LEFT */}
              <div className="relative h-[300px] md:h-full bg-[#eee] ">
                <Image
                  src={activeImage || selectedTrip.img}
                  alt={selectedTrip.title}
                  fill
                  className="object-cover transition duration-300"
                />

                {/* Small thumbs */}
                <div className="absolute bottom-0 left-0 w-full bg-white/90 p-4 flex gap-4 overflow-x-auto">
                  <button
                    onClick={() => setActiveImage(selectedTrip.img)}
                    className={`w-[120px] h-[80px] cursor-pointer rounded overflow-hidden flex-shrink-0 border-2 ${
                      activeImage === selectedTrip.img
                        ? "border-[#d87029]"
                        : "border-transparent"
                    }`}
                  >
                    <Image
                      src={selectedTrip.img}
                      alt=""
                      width={120}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </button>

                  <button
                    onClick={() => setActiveImage(selectedTrip.img1)}
                    className={`w-[120px] h-[80px] cursor-pointer rounded overflow-hidden flex-shrink-0 border-2 ${
                      activeImage === selectedTrip.img1
                        ? "border-[#d87029]"
                        : "border-transparent"
                    }`}
                  >
                    <Image
                      src={selectedTrip.img1}
                      alt=""
                      width={120}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </button>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex flex-col h-full overflow-hidden">
                {/* Top */}
                <div className="p-6 ">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[#d87029] text-xl">★★★★★</span>
                    <span className=" !font-avenir font-semibold text-2xl">
                      {selectedTrip.rating}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex gap-2 mb-4">
                    <span className="bg-[#d87029] text-white text-xs px-3 py-1 rounded font-semibold">
                      POPULAR
                    </span>

                    <span className="bg-[#f3a876] text-black text-xs px-3 py-1 rounded font-semibold">
                      {selectedTrip.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-semibold !font-cormorant leading-tight mb-2">
                    {selectedTrip.title}
                  </h2>

                  <p className="  text-[#444] !font-avenir mb-4">Standard</p>

                  
                  <div className="font-avenir flex flex-wrap gap-5">
                    <span className="flex items-center gap-2">
                      <FaRegCalendarAlt className="text-[#d87029]" />
                      {selectedTrip.days}
                    </span>

                    <span className="flex items-center gap-2">
                      <FaLocationDot className="text-[#d87029]" />
                      {selectedTrip.places}
                    </span>

                    <span className="flex items-center gap-2">
                      <BiWorld className="text-[#d87029]" />
                      {selectedTrip.countries}
                    </span>
                  </div>
                </div>

                {/* ITINERARY */}
                <div className="flex-1 overflow-y-auto p-6 min-h-0">
                  <div className="relative pl-8">
                    {/* Line */}
                    <div className="absolute left-[10px] top-0 bottom-0 w-[2px] bg-[#e49866]"></div>

                    {selectedTrip.itinerary.map((item, index) => (
                      <div key={index} className="relative mb-8">
                        {/* Dot */}
                        <div
                          className={`absolute -left-[30px] w-3 h-3 rounded-full border-4 border-[#d87029] bg-white ${
                            index !== 0 &&
                            index !== selectedTrip.itinerary.length - 1
                              ? "w-3 h-3 left-[-26px] border-0 bg-black top-3"
                              : ""
                          }`}
                        ></div>

                        <h4 className=" !font-avenir font-semibold">
                          {item.day}: {item.place}
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom */}
                <div className="  border-t border-t-[#f8dcca] p-6 flex items-center justify-between">
                  <div>
                    <p className=" !font-avenir text-lg font-bold">
                      From {selectedTrip.price}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setSelected([selectedTrip.value]);
                      setSelectedTrip(null); // close modal

                      const section = document.getElementById("step-2");
                      section?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="bg-[#d87028] text-white px-[21px] py-2.5 rounded-full font-semibold hover:bg-[#eb8034de] transition cursor-pointer"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
