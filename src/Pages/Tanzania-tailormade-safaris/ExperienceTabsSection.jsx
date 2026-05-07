"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = ["Experiences", "Accommodation", "Vehicle/Flights"];

const data = {
  Experiences: [
    {
      title: "Private Game Drives",
      tag: "HEART OF THE WILD",
      desc: "Set out at dawn or dusk in a private land cruiser with your expert guide — tracking the Big Five across open savannah, riverbanks and acacia woodlands at your own pace.",
      img: "https://media.istockphoto.com/id/2244811741/photo/masai-giraffe-walks-across-a-dirt-road-in-front-of-a-safari-vehicle-on-the-savannah-plains-of.jpg?s=612x612&w=0&k=20&c=FKGtQLi8vV0-C_wJWMKB4Vd55s_eEQb5v7gt449mgZY=",
    },
    {
      title: "Sundowner",
      tag: "GOLDEN HOUR ESCAPE",
      desc: "Unwind in the heart of the wilderness as the sun dips below the horizon, painting the sky in deep amber and gold—perfectly paired with handcrafted drinks and uninterrupted views.",
      img: "https://media.istockphoto.com/id/921714004/photo/three-giraffes-under-acacia-tree.jpg?s=612x612&w=0&k=20&c=qBWHfq_x7CwQkVcMvgzudc3ODq1WAVbsedyre99Bj0w=",
    },
    {
      title: "Bush Breakfast & Dinner",
      tag: "WILD DINING",
      desc: "From freshly prepared breakfasts at dawn with wildlife calls in the air, to lantern-lit dinners under a canopy of stars — every meal in the bush is an experience in itself.",
      img: "https://media.istockphoto.com/id/921714004/photo/three-giraffes-under-acacia-tree.jpg?s=612x612&w=0&k=20&c=qBWHfq_x7CwQkVcMvgzudc3ODq1WAVbsedyre99Bj0w=",
    },
    {
      title: "Balloon Safari",
      tag: "SKYLINE SAFARI",
      desc: "From freshly prepared breakfasts at dawn with wildlife calls in the air, to lantern-lit dinners under a canopy of stars — every meal in the bush is an experience in itself.",
      img: "https://media.istockphoto.com/id/921714004/photo/three-giraffes-under-acacia-tree.jpg?s=612x612&w=0&k=20&c=qBWHfq_x7CwQkVcMvgzudc3ODq1WAVbsedyre99Bj0w=",
    },
    {
      title: "Maasai Village Visit",
      tag: "CULTURAL IMMERSION",
      desc: "From freshly prepared breakfasts at dawn with wildlife calls in the air, to lantern-lit dinners under a canopy of stars — every meal in the bush is an experience in itself.",
      img: "https://media.istockphoto.com/id/2244811741/photo/masai-giraffe-walks-across-a-dirt-road-in-front-of-a-safari-vehicle-on-the-savannah-plains-of.jpg?s=612x612&w=0&k=20&c=FKGtQLi8vV0-C_wJWMKB4Vd55s_eEQb5v7gt449mgZY=",
    },
    {
      title: "Walking Safari",
      tag: "INTO THE WILD",
      desc: "From freshly prepared breakfasts at dawn with wildlife calls in the air, to lantern-lit dinners under a canopy of stars — every meal in the bush is an experience in itself.",
      img: "https://media.istockphoto.com/id/880400564/photo/leopard-rests-in-a-tree-at-sunset.jpg?s=612x612&w=0&k=20&c=jnE07FW8UvgNvjgKF08hOksJBcpXkLOCpB0Z6oJ7uEY=",
    },
  ],

  Accommodation: [
    {
      title: "Luxury Lodges",
      tag: "PREMIUM STAY",
      desc: "From freshly prepared breakfasts at dawn with wildlife calls in the air, to lantern-lit dinners under a canopy of stars — every meal in the bush is an experience in itself.",
      img: "https://media.istockphoto.com/id/921714004/photo/three-giraffes-under-acacia-tree.jpg?s=612x612&w=0&k=20&c=qBWHfq_x7CwQkVcMvgzudc3ODq1WAVbsedyre99Bj0w=",
    },
    {
      title: "Tented Camps",
      tag: "AUTHENTIC EXPERIENCE",
      desc: "From freshly prepared breakfasts at dawn with wildlife calls in the air, to lantern-lit dinners under a canopy of stars — every meal in the bush is an experience in itself.",
      img: "https://media.istockphoto.com/id/921714004/photo/three-giraffes-under-acacia-tree.jpg?s=612x612&w=0&k=20&c=qBWHfq_x7CwQkVcMvgzudc3ODq1WAVbsedyre99Bj0w=",
    },
  ],

  "Vehicle/Flights": [
    {
      title: "Private Safari Vehicles",
      tag: "COMFORT TRAVEL",
      desc: "From freshly prepared breakfasts at dawn with wildlife calls in the air, to lantern-lit dinners under a canopy of stars — every meal in the bush is an experience in itself.",
      img: "https://media.istockphoto.com/id/880400564/photo/leopard-rests-in-a-tree-at-sunset.jpg?s=612x612&w=0&k=20&c=jnE07FW8UvgNvjgKF08hOksJBcpXkLOCpB0Z6oJ7uEY=",
    },
    {
      title: "Bush Flights",
      tag: "FAST ACCESS",
      desc: "From freshly prepared breakfasts at dawn with wildlife calls in the air, to lantern-lit dinners under a canopy of stars — every meal in the bush is an experience in itself.",
      img: "https://media.istockphoto.com/id/2244811741/photo/masai-giraffe-walks-across-a-dirt-road-in-front-of-a-safari-vehicle-on-the-savannah-plains-of.jpg?s=612x612&w=0&k=20&c=FKGtQLi8vV0-C_wJWMKB4Vd55s_eEQb5v7gt449mgZY=",
    },
  ],
};

export default function ExperienceTabsSection() {
  const [activeTab, setActiveTab] = useState("Experiences");

  return (
    <section id="experience" className="bg-[#f6f3ee] py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Top Label */}
        <p className=" !font-avenir text-xs md:text-sm tracking-[0.2em] text-[#d87029] uppercase mb-3">
          What We Offer
        </p>

        <div className="w-10 h-[1px] bg-[#d87029] mx-auto mb-4 md:mb-6"></div>

        {/* Heading */}
        <h2 className=" !font-cormorant text-3xl md:text-4xl lg:text-5xl  text-center capitalize mb-8">
          Inside the Experience
        </h2>

        {/* Tabs */}
        {/* <div className="flex justify-center gap-8 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`uppercase text-sm !font-avenir tracking-widest pb-2 cursor-pointer transition ${
                activeTab === tab
                  ? "text-[#d87029] border-b-2 border-[#d87029]"
                  : "text-[#444] hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div> */}

        {/* Tabs */}
        <div className="w-full overflow-x-auto scrollbar-hide">
          <div className="flex justify-start md:justify-center gap-4 md:gap-8 mb-6 md:mb-12 min-w-max px-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`uppercase text-xs sm:text-sm !font-avenir tracking-[0.2em] pb-2 whitespace-nowrap cursor-pointer transition ${
                  activeTab === tab
                    ? "text-[#d87029] border-b-2 border-[#d87029]"
                    : "text-[#444] hover:text-black"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 text-left">
          {data[activeTab].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition"
            >
              {/* Image */}
              <div className="relative h-[220px]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <p className=" !font-avenir text-xs tracking-wider text-[#d87029] mb-4">
                  {item.tag}
                </p>

                <h3 className=" !font-cormorant text-lg md:text-xl font-medium mb-4 text-[#111] leading-tight">
                  {item.title}
                </h3>

                <p className=" !font-avenir leading-6 text-[#444]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
