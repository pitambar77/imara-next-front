"use client";
import Image from "next/image";
import { useState } from "react";

const destinations = [
  {
    name: "Serengeti National Park",
    value: "Serengeti National Park",
    desc: "Endless golden plains, the Great Migration, and abundant predators. Witness millions of wildebeest and zebras crossing the savannah in one of nature’s greatest spectacles.",
    img: "/Serengeti-National-park-new.webp",
  },
  {
    name: "Ngorongoro Crater",
    value: "Ngorongoro Crater",
    desc: "A breathtaking wildlife haven within the world’s largest intact volcanic caldera. Exceptional game viewing with lions, rhinos, elephants, and countless other species.",
    img: "/nagarangaro-creator-desti.webp",
  },
  {
    name: "Tarangire National Park",
    value: "Tarangire National Park",
    desc: "Famous for its giant baobab trees and large elephant herds. A hidden gem offering diverse wildlife and scenic landscapes away from the crowds.",
    img: "/tarangire-natinal-park-desti.webp",
  },
  {
    name: "Arusha National Park",
    value: "Arusha National Park",
    desc: "A diverse park featuring lush forests, volcanic craters, and stunning views of Mount Meru. Ideal for walking safaris and close encounters with wildlife.",
    img: "/arusha-ntional.webp",
  },
  {
    name: "Lake Manyara",
    value: "Lake Manyara",
    desc: "A picturesque park known for its tree-climbing lions, flamingo-filled lake, and dense groundwater forests. Rich birdlife and varied ecosystems make it a unique safari destination.",
    img: "/lake-manyara-desti.webp",
  },

  {
    name: "Zanzibar",
    value: "Zanzibar",
    desc: "Pristine white-sand beaches, turquoise waters, and rich Swahili culture. The perfect tropical escape for relaxation, diving, and island adventures.",
    img: "/zanzibar-desti.webp",
  },
  {
    name: "Mount Kilimanjaro",
    value: "Mount Kilimanjaro",
    desc: "Africa’s highest peak and the world’s tallest freestanding mountain. A legendary trekking destination offering breathtaking scenery and an unforgettable summit experience.",
    img: "/mount-kili-desti.webp",
  },
  {
    name: "Mikumi National Park",
    desc: "Open plains, rich wildlife, and exceptional game viewing. A classic Tanzanian safari destination known for lions, elephants, giraffes, and breathtaking landscapes.",
    img: "/big-five-2.webp",
  },
];

export default function DestinationStepSection() {
  return (
    <section className="bg-[#fedec7] py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className=" !font-cormorant text-3xl md:text-4xl lg:text-5xl text-center mb-4 capitalize">
          Create Your Signature Experience
        </h2>

        <p className=" !font-avenir text-center text-[#444] text-[18px] mb-6 md:mb-12 max-w-2xl mx-auto">
          Discover bespoke international tour packages crafted with privacy,
          refined comfort, and seamless planning for discerning global
          travellers
        </p>

        {/* Step Badge */}
        {/* <div className="flex flex-col items-center mb-4 md:mb-6">
          <span className=" !font-avenir border border-[#d87029] text-[#d87029] px-6 py-2 rounded-full text-sm tracking-[0.2em] uppercase">
            Step 1
          </span>
          <div className="w-10 h-[1px] bg-[#d87029] mt-3"></div>
        </div> */}

        {/* Title */}
        {/* <h3 className="text-2xl md:text-4xl !font-cormorant  mb-3">
          Where Do You Want to Go?*
        </h3>

        <p className=" !font-avenir text-[#444] mb-8 md:mb-12">
          Please select at least one destination — you can choose multiple
        </p> */}

        {/* Grid */}
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {/* {destinations.map((item, i) => (
            <div
              key={i}
              className="group cursor-pointer rounded-md overflow-hidden bg-white shadow-sm hover:shadow-md transition"
            > */}

          {destinations.map((item, i) => (
            <div
              key={i}
              className={`group  rounded-sm overflow-hidden bg-white shadow-sm transition `}
            >
              <div className="relative h-[140px] md:h-[160px]">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Label */}
              <h2
                className={`!font-cormorant text-lg md:text-xl capitalize tracking-widest px-4 py-3 text-left transition `}
              >
                {item.name}
              </h2>
              <p className="!font-avenir text-sm md:text-[15px] text-[#444] px-4 mb-4 text-left leading-[1.6]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-14 w-full md:w-auto">
          <button
            onClick={() => {
              const section = document.getElementById("step-2");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className=" w-full md:w-auto !font-avenir text-xs tracking-[0.72px] md:tracking-[2.4px] uppercase bg-[#d87028] border border-[#e78e4b] text-white  px-6 md:py-2.5 py-3 rounded-xs hover:bg-[#eb8034de] transition cursor-pointer whitespace-nowrap"
          >
            Continue to Plan My Safari →
          </button>
        </div>
      </div>
    </section>
  );
}
