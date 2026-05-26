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
    title: "Great Migration, Wildlife Adventure, Zanzibar Escape",
    value: "Great Migration, Wildlife Adventure, Zanzibar Escape",
    tag: "POPULAR",
    days: "16 Days 15 Nights",
    price: "$4,900 p.p",
    places: "7 Places",
    countries: "1 Country",
    motitle:
      "Witness the Great Migration & Unwind on Zanzibar’s White-Sand Beaches",
    motag: "Standard",
    rating: 5,
    img: "/great-migration-1.webp",
    img1: "/zanzibar-white-sand.webp",

    itinerary: [
      { day: "Day 1", place: "Arusha" },
      { day: "Day 2", place: "Arusha National Park" },
      { day: "Day 3", place: "Tarangire" },
      { day: "Day 4", place: "Lake Manyara" },
      { day: "Day 5", place: "Serengeti" },
      { day: "Day 6", place: "Serengeti" },
      { day: "Day 7", place: "Serengeti" },
      { day: "Day 8", place: "Serengeti" },
      { day: "Day 9", place: "Ngorongoro Highlands" },
      { day: "Day 10", place: "Ngorongoro " },
      { day: "Day 11", place: "Zanzibar" },
      { day: "Day 12", place: "Zanzibar" },
      { day: "Day 13", place: "Zanzibar" },
      { day: "Day 14", place: "Zanzibar" },
      { day: "Day 15", place: "Zanzibar" },
      { day: "Day 16", place: "Zanzibar" },
    ],
  },
  {
    id: 2,
    title: "Big Five Safari, Cultural Encounters, Scenic Tanzania Adventure",
    value: "Big Five Safari, Cultural Encounters, Scenic Tanzania Adventure",
    tag: "POPULAR",
    days: "11 Days 10 Nights",
    price: "$3,200  p.p",
    places: "6 Places",
    countries: "1 Country",
    motitle:
      "Experience the Wild Heart of Tanzania & Timeless African Landscapes",
    motag: "Standard",
    rating: 5,
    img: "/big-five.webp",
    img1: "/big-five-1.webp",

    itinerary: [
      { day: "Day 1", place: "Arusha" },
      { day: "Day 2", place: "Arusha National Park" },
      { day: "Day 3", place: "Tarangire" },
      { day: "Day 4", place: "Lake Manyara" },
      { day: "Day 5", place: "Serengeti" },
      { day: "Day 6", place: "Serengeti" },
      { day: "Day 7", place: "Serengeti" },
      { day: "Day 8", place: "Ngorongoro " },
      { day: "Day 9", place: "Lake Eyasi" },
      { day: "Day 10", place: "Arusha " },
      { day: "Day 11", place: "Kilimanjaro" },
    ],
  },
  {
    id: 3,
    title: "Great Migration, Big Five Safari, Zanzibar Beach Escape",
    value: "Great Migration, Big Five Safari, Zanzibar Beach Escape",
    tag: "MOST POPULAR",
    days: "12 Days 11 Nights",
    price: "$3,200  p.p",
    places: "7 Places",
    countries: "1 Country",
    motitle:
      "Follow the Great Migration & Relax on Zanzibar’s Turquoise Shores",
    motag: "Standard",
    rating: 5,
    img: "/big-five-2.webp",
    img1: "https://media.istockphoto.com/id/880400564/photo/leopard-rests-in-a-tree-at-sunset.jpg?s=612x612&w=0&k=20&c=jnE07FW8UvgNvjgKF08hOksJBcpXkLOCpB0Z6oJ7uEY=",

    itinerary: [
      { day: "Day 1", place: "Arusha" },
      { day: "Day 2", place: " Kilimanjaro " },
      { day: "Day 3", place: "Tarangire" },
      { day: "Day 4", place: "Ngorongoro " },
      { day: "Day 5", place: "Serengeti" },
      { day: "Day 6", place: "Serengeti" },
      { day: "Day 7", place: "Serengeti" },
      { day: "Day 8", place: "Ngorongoro " },
      { day: "Day 9", place: "Zanzibar" },
      { day: "Day 10", place: "Zanzibar " },
      { day: "Day 11", place: "Zanzibar" },
      { day: "Day 12", place: "Zanzibar" },
    ],
  },
  {
    id: 4,
    title:
      "Cultural Encounters, Rift Valley Adventure, Authentic Tanzania Safari",
    value:
      "Cultural Encounters, Rift Valley Adventure, Authentic Tanzania Safari",
    tag: "ADVENTURE & CULTURE",
    days: "7 Days 6 Nights",
    price: "$2,450 p.p",
    places: "6 Places",
    countries: "1 Country",
    motitle:
      "Discover Tanzania’s Hidden Tribes, Crater Wonders & Remote Rift Valley Landscapes",
    motag: "Standard",
    rating: 5,
    img: "/cultural-encunter.webp",
    img1: "https://media.istockphoto.com/id/880400564/photo/leopard-rests-in-a-tree-at-sunset.jpg?s=612x612&w=0&k=20&c=jnE07FW8UvgNvjgKF08hOksJBcpXkLOCpB0Z6oJ7uEY=",

    itinerary: [
      { day: "Day 1", place: "Monduli Juu" },
      { day: "Day 2", place: "Lake Eyasi" },
      { day: "Day 3", place: "Ngorongoro Crater" },
      { day: "Day 4", place: "Lake Natron" },
      { day: "Day 5", place: "Lake Natron" },
      { day: "Day 6", place: "Mto wa Mbu" },
      { day: "Day 7", place: "Arusha" },
      { day: "Day 8", place: "Ngorongoro " },
      { day: "Day 9", place: "Lake Eyasi" },
      { day: "Day 10", place: "Arusha " },
      { day: "Day 11", place: "Kilimanjaro" },
    ],
  },
  {
    id: 5,
    title:
      "Luxury Glamping, Cultural Discovery, Big Five & Rift Valley Adventure",
    value:
      "Luxury Glamping, Cultural Discovery, Big Five & Rift Valley Adventure",
    tag: " PREMIUM SAFARI EXPERIENCE",
    days: "10 Days 9 Nights",
    price: "$4,980 p.p",
    places: "8 Places",
    countries: "1 Country",
    motitle:
      "Journey Through Tanzania’s Wild Landscapes, Ancient Cultures & Luxury Safari Escapes",
    motag: "Luxury Glamping",
    rating: 5,
    img: "/big-five-3.webp",
    img1: "https://media.istockphoto.com/id/880400564/photo/leopard-rests-in-a-tree-at-sunset.jpg?s=612x612&w=0&k=20&c=jnE07FW8UvgNvjgKF08hOksJBcpXkLOCpB0Z6oJ7uEY=",

    itinerary: [
      { day: "Day 1", place: "Arusha & Monduli Highlands" },
      { day: "Day 2", place: "Lake Manyara" },
      { day: "Day 3", place: "Lake Eyasi" },
      { day: "Day 4", place: "Ngorongoro" },
      { day: "Day 5", place: "Serengeti" },
      { day: "Day 6", place: "Serengeti" },
      { day: "Day 7", place: "Lake Natron" },
      { day: "Day 8", place: "Rift Valley Highland " },
      { day: "Day 9", place: "Tarangire" },
      { day: "Day 10", place: "Arusha " },
    ],
  },
  {
    id: 6,
    title: "Great Migration, Maasai Culture, Big Five & Highland Adventure",
    value: "Great Migration, Maasai Culture, Big Five & Highland Adventure",
    tag: "SIGNATURE SAFARI",
    days: "15 Days 14 Nights",
    price: "$6,250 p.p",
    places: "9 Places",
    countries: "1 Country",
    motitle:
      "Experience the Great Migration, Maasai Traditions & Tanzania’s Untamed Wilderness",
    motag: "Premium Safari",
    rating: 5,
    img: "/big-five-4.webp",
    img1: "https://media.istockphoto.com/id/880400564/photo/leopard-rests-in-a-tree-at-sunset.jpg?s=612x612&w=0&k=20&c=jnE07FW8UvgNvjgKF08hOksJBcpXkLOCpB0Z6oJ7uEY=",

    itinerary: [
      { day: "Day 1", place: "Arusha" },
      { day: "Day 2", place: "Arusha" },
      { day: "Day 3", place: "Arusha" },
      { day: "Day 4", place: "Lake Manyara" },
      { day: "Day 5", place: "Great Rift Valley Journey" },
      { day: "Day 6", place: "Serengeti" },
      { day: "Day 7", place: "Serengeti" },
      { day: "Day 8", place: "Serengeti" },
      { day: "Day 9", place: "Serengeti" },
      { day: "Day 10", place: "Ngorongoro" },
      { day: "Day 11", place: "Ngorongoro" },
      { day: "Day 12", place: "Empakaai & Olmoti " },
      { day: "Day 13", place: "Tarangire " },
      { day: "Day 14", place: "Tarangire " },
      { day: "Day 15", place: "Arusha" },
    ],
  },
  {
    id: 7,
    title: "Ngorongoro Crater, Serengeti Adventure, Classic Camping Experience",
    value: "Ngorongoro Crater, Serengeti Adventure, Classic Camping Experience",
    tag: "BUDGET SAFARI",
    days: "3 Days 2 Nights",
    price: "$1200 p.p",
    places: "4 Places",
    countries: "1 Country",
    motitle:
      "Explore Tanzania’s Iconic Wildlife Parks on an Authentic Safari Adventure",
    motag: "Budget Camping Safari",
    rating: 5,
    img: "/camping.webp",
    img1: "https://media.istockphoto.com/id/880400564/photo/leopard-rests-in-a-tree-at-sunset.jpg?s=612x612&w=0&k=20&c=jnE07FW8UvgNvjgKF08hOksJBcpXkLOCpB0Z6oJ7uEY=",

    itinerary: [
      { day: "Day 1", place: "Ngorongoro " },
      { day: "Day 2", place: "Serengeti " },
      { day: "Day 3", place: "Arusha" },
    ],
  },
  {
    id: 8,
    title: "Ngorongoro Crater, Serengeti Plains & Rift Valley Discovery",
    value: "Ngorongoro Crater, Serengeti Plains & Rift Valley Discovery",
    tag: "SIGNATURE SAFARI",
    days: "5 Days 4 Nights",
    price: "$2900 p.p",
    places: "5 Places",
    countries: "1 Country",
    motitle:
      "Discover Ngorongoro Crater, Serengeti Wildlife & Tanzania’s Iconic Landscapes",
    motag: "Mid-Range Safari Experience",
    rating: 5,
    img: "/nagarangaro-creator.webp",
    img1: "https://media.istockphoto.com/id/880400564/photo/leopard-rests-in-a-tree-at-sunset.jpg?s=612x612&w=0&k=20&c=jnE07FW8UvgNvjgKF08hOksJBcpXkLOCpB0Z6oJ7uEY=",

    itinerary: [
      { day: "Day 1", place: "Tarangire " },
      { day: "Day 2", place: "Ngorongoro  " },
      { day: "Day 3", place: "Serengeti " },
      { day: "Day 4", place: "Serengeti " },
      { day: "Day 5", place: "Arusha " },
    ],
  },
  {
    id: 9,
    title: "Tarangire, Ngorongoro Crater & Serengeti Classic Wildlife Circuit",
    value: "Tarangire, Ngorongoro Crater & Serengeti Classic Wildlife Circuit",
    tag: "SIGNATURE SAFARI",
    days: "5 Days 4 Nights",
    price: "$2200 p.p",
    places: "3 Major National Parks ",
    countries: "1 Country",
    motitle:
      "Explore Tanzania’s Iconic Parks: Big Five, Crater Safari & Serengeti Plains",
    motag: "Classic Mid-Range Safari",
    rating: 5,
    img: "/tarangire-wild.webp",
    img1: "https://media.istockphoto.com/id/880400564/photo/leopard-rests-in-a-tree-at-sunset.jpg?s=612x612&w=0&k=20&c=jnE07FW8UvgNvjgKF08hOksJBcpXkLOCpB0Z6oJ7uEY=",

    itinerary: [
      { day: "Day 1", place: "Tarangire " },
      { day: "Day 2", place: "Ngorongoro  " },
      { day: "Day 3", place: "Serengeti " },
      { day: "Day 4", place: "Serengeti " },
      { day: "Day 5", place: "Arusha " },
    ],
  },
  {
    id: 10,
    title: "Tarangire & Ngorongoro Crater Highland Retreat",
    value: "Tarangire & Ngorongoro Crater Highland Retreat",
    tag: "SIGNATURE SAFARI",
    days: "7 Days 6 Nights",
    price: "$1800 p.p",
    places: "2 Key Safari Zones  ",
    countries: "1 Country",
    motitle:
      "Discover Ngorongoro Highlands, Crater Views & Relaxed Safari Leisure",
    motag: "Leisure Safari Experience",
    rating: 5,
    img: "/nagarangaro-retret.webp",
    img1: "https://media.istockphoto.com/id/880400564/photo/leopard-rests-in-a-tree-at-sunset.jpg?s=612x612&w=0&k=20&c=jnE07FW8UvgNvjgKF08hOksJBcpXkLOCpB0Z6oJ7uEY=",

    itinerary: [
      { day: "Day 1", place: "Arusha " },
      { day: "Day 2", place: "Tarangire   " },
      { day: "Day 3", place: "Ngorongoro  " },
      { day: "Day 4", place: "Zanzibar " },
      { day: "Day 5", place: "Zanzibar " },
      { day: "Day 6", place: "Zanzibar " },
      { day: "Day 7", place: "Zanzibar " },
    ],
  },
  {
    id: 11,
    title: "Tarangire, Ngorongoro Crater, Serengeti & Zanzibar Escape",
    value: "Tarangire, Ngorongoro Crater, Serengeti & Zanzibar Escape",
    tag: "SIGNATURE SAFARI",
    days: "10 Days 9 Nights",
    price: "$2500 p.p",
    places: "3 Safari Parks + 1 Island",
    countries: "1 Country",
    motitle:
      "Experience Tanzania’s Big Five Safari & Zanzibar’s Tropical Paradise",
    motag: "Safari + Beach Experience",
    rating: 5,
    img: "/zanzibar-excape.webp",
    img1: "https://media.istockphoto.com/id/880400564/photo/leopard-rests-in-a-tree-at-sunset.jpg?s=612x612&w=0&k=20&c=jnE07FW8UvgNvjgKF08hOksJBcpXkLOCpB0Z6oJ7uEY=",

    itinerary: [
      { day: "Day 1", place: "Arusha " },
      { day: "Day 2", place: "Tarangire   " },
      { day: "Day 3", place: "Ngorongoro  " },
      { day: "Day 4", place: "Serengeti " },
      { day: "Day 5", place: "Serengeti  " },
      { day: "Day 6", place: "Zanzibar " },
      { day: "Day 7", place: "Zanzibar   " },
      { day: "Day 8", place: "Zanzibar  " },
      { day: "Day 9", place: "Zanzibar " },
      { day: "Day 10", place: "Zanzibar  " },
    ],
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
          Signature Safari Experiences
        </h2>

        <p className=" !font-avenir text-center text-[#444] text-[18px] mb-8 md:mb-12 max-w-2xl mx-auto">
          From the Great Migration to Masai traditions, immerse in Tanzania’s
          wildlife and landscapes for memories that last.
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
              <div className="flex flex-col h-full bg-[#eee]">
                {/* Main Image */}
                <div className="relative flex-1 min-h-[300px]">
                  <Image
                    src={activeImage || selectedTrip.img}
                    alt={selectedTrip.title}
                    fill
                    className="object-cover transition duration-300"
                  />
                </div>

                {/* Small thumbs */}
                <div className="w-full bg-white p-4 flex gap-4 overflow-x-auto">
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
                      {selectedTrip.tag}
                    </span>

                    <span className="bg-[#f3a876] text-black text-xs px-3 py-1 rounded font-semibold">
                      {selectedTrip.motag}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-semibold !font-cormorant leading-tight mb-2">
                    {selectedTrip.motitle}
                  </h2>

                  <p className="  text-[#444] !font-avenir mb-4">
                    {selectedTrip.motag}
                  </p>

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
