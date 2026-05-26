"use client";
import Image from "next/image";
import { useState } from "react";

const destinations = [
  {
    name: "Serengeti National Park",
    value: "Serengeti National Park",
    img: "/serengeti-national-park-desti.webp",
  },
  {
    name: "Ngorongoro Crater",
    value: "Ngorongoro Crater",
    img: "/nagarangaro-creator-desti.webp",
  },
  {
    name: "Tarangire National Park",
    value: "Tarangire National Park",
    img: "/tarangire-natinal-park-desti.webp",
  },
  {
    name: "Lake Manyara",
    value: "Lake Manyara",
    img: "/lake-manyara-desti.webp",
  },
  {
    name: "Zanzibar",
    value: "Zanzibar",
    img: "/zanzibar-desti.webp",
  },
  {
    name: "Mount Kilimanjaro",
    value: "Mount Kilimanjaro",
    img: "/mount-kili-desti.webp",
  },
  {
    name: "Not Sure — Need Expert Advice",
    value: "Not Sure - Need Expert Advice",
    img: "https://media.istockphoto.com/id/921714004/photo/three-giraffes-under-acacia-tree.jpg?s=612x612&w=0&k=20&c=qBWHfq_x7CwQkVcMvgzudc3ODq1WAVbsedyre99Bj0w=",
  },
];

export default function DestinationStepSection({ setSelected }) {
  const [selected, setLocalSelected] = useState([]);

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
        <div className="flex flex-col items-center mb-4 md:mb-6">
          <span className=" !font-avenir border border-[#d87029] text-[#d87029] px-6 py-2 rounded-full text-sm tracking-[0.2em] uppercase">
            Step 1
          </span>
          <div className="w-10 h-[1px] bg-[#d87029] mt-3"></div>
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-4xl !font-cormorant  mb-3">
         Where Do You Want to Go?*
        </h3>

        <p className=" !font-avenir text-[#444] mb-8 md:mb-12">
          Please select at least one destination — you can choose multiple
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {/* {destinations.map((item, i) => (
            <div
              key={i}
              className="group cursor-pointer rounded-md overflow-hidden bg-white shadow-sm hover:shadow-md transition"
            > */}

          {destinations.map((item, i) => (
            <div
              key={i}
              onClick={() => {
                const updated = selected.includes(item.value)
                  ? selected.filter((v) => v !== item.value)
                  : [...selected, item.value];

                setLocalSelected(updated);
                // setSelected(updated); // send to parent
              }}
              className={`group cursor-pointer rounded-md overflow-hidden bg-white shadow-sm transition ${
                selected.includes(item.value)
                  ? "ring-2 ring-[#d87029]"
                  : "hover:shadow-md"
              }`}
            >
              {/* Image */}
              <div className="relative h-[100px] md:h-[160px]">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Label */}
              <div className=" font-avenir font-bold text-xs md:text-sm uppercase tracking-widest text-[#d87029] px-3 py-3 text-center ">
                {item.name}
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-14">
          <button
            onClick={() => {
              if (selected.length === 0) {
                alert("Please select at least one destination");
                return;
              }

              setSelected(selected);
              // ✅ scroll without ref
              const section = document.getElementById("step-2");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className=" bg-[#d87028] text-white px-6 py-2  rounded-full  hover:bg-[#eb8034de] transition cursor-pointer !font-avenir text-sm md:text-base md:py-2.5"
          >
            Continue to Plan My Safari →
          </button>
        </div>
      </div>
    </section>
  );
}
