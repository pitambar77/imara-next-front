import React, { useState } from "react";
import {
  FaGlobeAfrica,
  FaMapMarkerAlt,
  FaPaw,
  FaTree,
  FaHiking,
} from "react-icons/fa";

const tabs = [
  {
    id: 1,
    title: "Africa & the Middle East",
    icon: <FaGlobeAfrica />,
    content: (
      <div>
        <h3 className="font-bold text-2xl mb-4">Become a community creator!</h3>
        <p className="text-[15px] text-gray-700 leading-relaxed mb-10">
          To become a community creator, first clarify your purpose and identify
          your target audience, then choose the right platform and create a
          content plan. Engage with your community by being authentic, sharing
          exclusive content, and responding to questions. Promote your platform
          and reward your members to build a loyal and active community.
        </p>
        <img
          className="h-[400px] rounded-md "
          src="https://www.responsibletravel.com/imagesclient/map-id24161-east-africa-wildlife-tour.jpg"
          alt=""
        />
      </div>
    ),
  },
  {
    id: 2,
    title: "The Seronera Area",
    icon: <FaMapMarkerAlt />,
    content: (
      <div>
        <h3 className="font-bold text-2xl mb-4">Become a community creator!</h3>
        <p className="text-[15px] text-gray-700 leading-relaxed mb-10">
          To become a community creator, first clarify your purpose and identify
          your target audience, then choose the right platform and create a
          content plan. Engage with your community by being authentic, sharing
          exclusive content, and responding to questions. Promote your platform
          and reward your members to build a loyal and active community.
        </p>
        <img
          className=" h-[400px] rounded-md"
          src="https://www.nationalgeographic.com/content/dam/expeditions/destinations/africa/family-journeys/tanzania/tanzania-family-journey-header-2023.jpg"
          alt=""
        />
      </div>
    ),
  },
  {
    id: 3,
    title: "Northern Serengeti",
    icon: <FaPaw />,
    content: (
      <div>
        <h3 className="font-bold text-2xl mb-4">Become a community creator!</h3>
        <p className="text-[15px] text-gray-700 leading-relaxed mb-10">
          To become a community creator, first clarify your purpose and identify
          your target audience, then choose the right platform and create a
          content plan. Engage with your community by being authentic, sharing
          exclusive content, and responding to questions. Promote your platform
          and reward your members to build a loyal and active community.
        </p>
        <img
          className=" h-[400px] rounded-md"
          src="https://www.responsibletravel.com/imagesclient/map-id24161-east-africa-wildlife-tour.jpg"
          alt=""
        />
      </div>
    ),
  },
  {
    id: 4,
    title: "Grumeti Reserves",
    icon: <FaTree />,
    content: (
      <div>
        <h3 className="font-bold text-2xl mb-4">Become a community creator!</h3>
        <p className="text-[15px] text-gray-700 leading-relaxed mb-10">
          To become a community creator, first clarify your purpose and identify
          your target audience, then choose the right platform and create a
          content plan. Engage with your community by being authentic, sharing
          exclusive content, and responding to questions. Promote your platform
          and reward your members to build a loyal and active community.
        </p>
        <img
          className=" h-[400px] rounded-md"
          src="https://www.responsibletravel.com/imagesclient/map-id24161-east-africa-wildlife-tour.jpg"
          alt=""
        />
      </div>
    ),
  },
  {
    id: 5,
    title: "Western Corredor",
    icon: <FaHiking />,
    content: (
      <div>
        <h3 className="font-bold text-2xl mb-4">Become a community creator!</h3>
        <p className="text-[15px] text-gray-700 leading-relaxed mb-10">
          To become a community creator, first clarify your purpose and identify
          your target audience, then choose the right platform and create a
          content plan. Engage with your community by being authentic, sharing
          exclusive content, and responding to questions. Promote your platform
          and reward your members to build a loyal and active community.
        </p>
        <img
          className=" h-[400px] rounded-md"
          src="https://www.responsibletravel.com/imagesclient/map-id24161-east-africa-wildlife-tour.jpg"
          alt=""
        />
      </div>
    ),
  },
  {
    id: 6,
    title: "Trip To The Serengeti",
    icon: <FaHiking />,
    content: (
      <div>
        <h3 className="font-bold text-2xl mb-4">Become a community creator!</h3>
        <p className="text-[15px] text-gray-700 leading-relaxed mb-10">
          To become a community creator, first clarify your purpose and identify
          your target audience, then choose the right platform and create a
          content plan. Engage with your community by being authentic, sharing
          exclusive content, and responding to questions. Promote your platform
          and reward your members to build a loyal and active community.
        </p>
        <img
          className=" h-[400px] rounded-md"
          src="https://www.responsibletravel.com/imagesclient/map-id24161-east-africa-wildlife-tour.jpg"
          alt=""
        />
      </div>
    ),
  },
];

const ThingsToDo = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section id="thingstodo" className="bg-white py-16 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-48">
      {/* TOP SECTION */}
      <div className="text-center mx-auto mb-12">
        <h4 className="tracking-widest text-sm text-gray-500 font-semibold mb-4">
          Zanzibar : IN DETAIL
        </h4>
        <h2 className="text-[32px] font-extrabold text-[#111] mb-8 capitalize">
          Things to do
        </h2>
        <p className="text-gray-700 leading-relaxed text-[15px] mb-8">
          The journey for the key players in the Great Migration, the roughly
          two million wildebeest, starts in the south of the Serengeti, with the
          birth of half a million calves between January and March. A favourite
          season for many of the seasoned Serengeti guides: the air during these
          months is full of new life and action. Read all about Africa's biggest
          wildlife event on this page.
        </p>
        <p className="text-gray-700 leading-relaxed text-[15px]">
          A better representation of the circle of life probably cannot be found
          anywhere else in the world. The journey starts in Southern Serengeti
          when wildebeest calves are being born. Predators like lions and hyenas
          are constantly hunting for babies, and thousands and thousands of
          calves are born within a couple weeks of each other – a feast for the
          eyes of true wildlife enthusiasts. But seeing a group of lions
          collaborating to hunt down a wildebeest is an unforgettable sight.
        </p>
      </div>

      {/* GRID (40% / 60%) */}
      <div className="grid grid-cols-1 lg:grid-cols-9 gap-10 items-start">
        {/* LEFT SIDE — 40% */}
        <div className="lg:col-span-3">
          <h3 className="font-bold text-2xl mb-4">Things to do in Zanzibar</h3>

          <div className="space-y-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center justify-between p-4 rounded-lg font-semibold text-left  transition border
                ${
                  activeTab === tab.id
                    ? "bg-black text-white "
                    : "bg-[#d87028] text-[#222] hover:bg-orange-300 border-orange-300"
                }`}
              >
                <span className="flex items-center gap-3 text-[15px]">
                  <span className={`text-2xl ${
            activeTab === tab.id ? "text-[#d87028]" : "text-black"
          }`}>{tab.icon}</span>
                  {tab.title}
                </span>
                <span className="text-xl">›</span>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE — 60% */}
        <div className="lg:col-span-6">
          <div className="">
            {tabs.find((t) => t.id === activeTab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};


export default ThingsToDo