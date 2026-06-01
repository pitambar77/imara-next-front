"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = ["Experiences", "Accommodations", "Vehicle/Flights"];

const data = {
  Experiences: [
    {
      title: "Private Game Drives",
      tag: "Heart of Tanzania",
      desc: "Venture deep into Tanzania’s iconic wilderness on private game drives through Serengeti, Ngorongoro, Tarangire, and Ruaha, guided by safari experts as you track the Big Five across endless plains and ancient landscapes.",
      img: "/private-game-drive.jpg",
    },
    {
      title: "Sundowner Experience",
      tag: "Golden Safari Moments",
      desc: "Relax in the heart of Tanzania’s wild beauty as the African sun melts into the horizon, enjoying handcrafted drinks surrounded by sweeping savannah views and untouched wilderness.",
      img: "/souranded-bush.webp",
    },
    {
      title: "Bush Breakfast & Dinner",
      tag: "Flavours of the Bush",
      desc: "Experience unforgettable dining in Tanzania’s wilderness — from sunrise breakfasts amidst the sounds of nature to elegant lantern-lit dinners beneath the vast African sky.",
      img: "/bush-breakfast.jpg",
    },
    {
      title: "Balloon Safari",
      tag: "Above the Serengeti",
      desc: "Float silently above the legendary Serengeti plains at sunrise, witnessing breathtaking aerial views of roaming wildlife, the Great Migration routes, and endless golden landscapes.",
      img: "/ballon-safari.jpg",
    },
    {
      title: "Maasai Village Visit",
      tag: "Authentic Tanzania Culture",
      desc: "Connect with Tanzania’s rich heritage through an authentic Maasai cultural experience, discovering traditional customs, vibrant ceremonies, storytelling, and centuries-old pastoral traditions.",
      // img: "/massai-village.webp",
      img: "/landing-culture-village-tour.webp",
    },
    {
      title: "Walking Safari",
      tag: "Walk the Tanzanian Wilderness",
      desc: "Step beyond the safari vehicle and explore Tanzania’s untamed bush on foot, guided by experienced naturalists who reveal hidden wildlife tracks, native flora, and the finer details of the ecosystem.",
      img: "/safri-walking-1.jpg",
    },
  ],

  Accommodations: [
    {
      title: "Elewana Collections",
      tag: "luxury safari",
      desc: "Experience luxury Tanzania safaris with Elewana Collections, offering premium lodges and elegant tented camps in iconic destinations like the Serengeti and Ngorongoro. Perfect for travellers seeking luxury safari accommodation, exceptional comfort, and unforgettable wildlife experiences.",
      img: "/Elewana.webp",
    },
    {
      title: "Sopa Lodges",
      tag: "comfortable safari",
      desc: "Sopa Lodges Tanzania provide comfortable safari stays in prime wildlife destinations, combining spacious accommodations, warm hospitality, and scenic surroundings. An excellent choice for travellers looking for reliable mid-range to luxury Tanzania safari lodges.",
      img: "/sopa-lodge.webp",
    },
    {
      title: "Serena Hotels",
      tag: "premium safari",
      desc: "Discover authentic African hospitality with Serena Hotels Tanzania, known for stylish lodges, premium amenities, and exceptional service across Tanzania’s top safari locations. Ideal for luxury safari holidays, honeymoon safaris, and premium wildlife adventures.",
      img: "/Serena.webp",
    },
    {
      title: "Tarangire Safari Lodge",
      tag: "authentic safari",
      desc: "Located within Tarangire National Park, Tarangire Safari Lodge offers classic safari charm, stunning wildlife views, and immersive bush experiences. A perfect option for travellers searching for authentic Tanzania safari lodges and unforgettable game-viewing stays.",
      img: "/Tarangire-Safari-Lodge.webp",
    },
    {
      title: "Bougainvillea Group of Lodges",
      tag: "charming safari",
      desc: "The Bougainvillea Group of Lodges offers comfortable and charming accommodations in key Tanzania safari destinations, blending personalized service, cozy surroundings, and convenient access to wildlife parks. Ideal for affordable luxury and mid-range Tanzania safari experiences.",
      img: "/Bougainvillea.webp",
    },
    {
      title: "The Zanzibar Collections",
      tag: "beach escape",
      desc: "Enhance your Tanzania safari with a luxury beach escape at The Zanzibar Collections, featuring boutique beachfront accommodations, world-class hospitality, and relaxing Indian Ocean experiences. Perfect for Tanzania safari and Zanzibar holiday packages, honeymoon trips, and luxury beach vacations.",
      img: "/Zanzibar-Collections.webp",
    },
  ],

  "Vehicle/Flights": [
    {
      title: "Unfiltered Tanzania Wilderness",
      tag: "Open Vehicle",
      desc: "Completely open and immersive — experience Tanzania’s iconic wilderness with uninterrupted views across Serengeti, Tarangire, and Ngorongoro, ideal for photography and authentic safari moments.",
      img: "/open-vechile-tanzania.webp",
    },
    {
      title: "Comfort Meets Adventure",
      tag: "Semi-Open Vehicle",
      desc: "Designed for balanced comfort, featuring large sliding windows and partial openings — offering exceptional wildlife viewing while protecting you from dust, sun, and changing safari conditions.",
      img: "/semi-open-vechicle.webp",
    },
    {
      title: "Relaxed Safari Journey",
      tag: "Closed Vehicle",
      desc: "Fully enclosed with panoramic windows — comfortable, secure, and perfect for extended game drives through Tanzania’s diverse landscapes and wildlife-rich destinations.",
      img: "/closed-vechicle.webp",
    },
    {
      title: "Wings Over Tanzania",
      tag: "Bush Flight",
      desc: "Fly seamlessly into Tanzania’s remote wilderness with trusted bush aviation connections, linking destinations like Serengeti, Ruaha, Selous, and Zanzibar for fast, scenic, and effortless travel.",
      img: "/bush-flight.jpg",
    },
    {
      title: "Raw Safari Freedom",
      tag: "Open Vehicle",
      desc: "Feel completely connected to Tanzania’s wild landscapes with open-air game drives delivering panoramic wildlife viewing, unobstructed photography, and a true safari immersion.",
      img: "/open-vechile-1.webp",
    },
    {
      title: "Refined Safari Comfort",
      tag: "Semi-Open Vehicle",
      desc: "Blending adventure with comfort, semi-open safari vehicles provide expansive views with added protection — ideal for exploring Tanzania’s vast national parks in style.",
      img: "/semi-open-vechicle-1.webp",
    },
    {
      title: "Protected Luxury Exploration",
      tag: "Closed Vehicle",
      desc: "Travel comfortably through Tanzania’s wilderness in fully enclosed safari vehicles, combining security, relaxation, and uninterrupted wildlife encounters.",
      img: "/closed-vechicle-1.webp",
    },
    {
      title: "Sky Safari Tanzania",
      tag: "Bush Flight",
      desc: "Connect effortlessly between Tanzania’s most spectacular safari destinations through scenic bush flights, transforming long journeys into breathtaking aerial experiences.",
      img: "/bush-flight-1.jpg",
    },
  ],
};

export default function ExperienceTabsSection() {
  const [activeTab, setActiveTab] = useState("Experiences");

  return (
    <section
      id="experience"
      className="bg-[#f6f3ee] py-12 md:py-20 px-4 md:px-6"
    >
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
        {/* <div className="w-full overflow-x-auto scrollbar-hide">
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
        </div> */}

        <div className="mb-6 md:mb-12">
          {/* Mobile */}

          <div className="md:hidden overflow-hidden">
            {/* First Row */}
            <div className="grid grid-cols-2 border border-[#d8c9b8] rounded-t-sm overflow-hidden">
              {tabs.slice(0, 2).map((tab, index) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
          relative
          h-[34px]
          px-4
          flex
          items-center
          justify-center
          whitespace-nowrap
          !font-avenir
          text-sm
          
          tracking-[0.1em]
          
          transition-all

          ${index === 0 ? "border-r border-[#d8c9b8]" : ""}

          ${
            activeTab === tab
              ? "bg-[#f1e9e3] text-[#d87029]"
              : "bg-white text-[#444]"
          }
        `}
                >
                  <span className="relative z-10">{tab}</span>
                </button>
              ))}
            </div>

            {/* Second Row */}
            <div className="flex justify-center">
              <button
                onClick={() => setActiveTab(tabs[2])}
                className={`
        relative
        flex
        items-center
        justify-center
        whitespace-nowrap
        h-[34px]
        px-5
        border
        border-t-0
        border-[#d8c9b8]
        rounded-b-sm

        !font-avenir
        text-sm
        
        tracking-[0.1em]
  
        transition-all

        ${
          activeTab === tabs[2]
            ? "bg-[#f1e9e3] text-[#d87029]"
            : "bg-white text-[#444]"
        }
      `}
              >
                <span className="relative z-10">{tabs[2]}</span>
              </button>
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex justify-center gap-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`uppercase text-sm !font-avenir tracking-[0.2em] pb-2 cursor-pointer transition ${
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
                <p className=" !font-avenir text-xs uppercase tracking-wider text-[#d87029] mb-4">
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
