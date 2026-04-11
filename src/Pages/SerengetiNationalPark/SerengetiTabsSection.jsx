import React, { useState } from "react";

const SerengetiTabsSection = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "safaris", label: "Safaris" },
    { id: "stay", label: "Where to Stay" },
    { id: "wildlife", label: "Wildlife" },
    { id: "whentogo", label: "When to Go" },
    { id: "reviews", label: "Reviews" },
    { id: "maps", label: "Maps" },
    { id: "more", label: "More Info" },
  ];

  const tabContent = {
    overview: {
      heading:
        "The Serengeti's endless, open plains, scattered with rocky kopjes, are home to astonishing quantities of wildlife.",
      leftText1:
        "The vast and beautiful Serengeti is one of Africa's most awe-inspiring safari areas. The sheer volume of animals here is extraordinary; estimates suggest around one million wildebeest, hundreds of thousands of zebra and Thomson’s gazelle, and tens of thousands of impala, Grant’s gazelle, topi, hartebeest, eland and other antelopes live here – all hunted by the predators for which these plains are famous.",
      leftText2:
        "Some of these animals reside permanently in home areas, which are excellent for safaris all year round. But most of the wildebeest and good numbers of other species are permanently on the move in the ‘Great Migration’ – a remarkable spectacle that is one of the greatest wildlife shows on earth. If you plan carefully, it’s still possible to witness this in wild and remote areas without too many fellow enthusiasts crowding the scene.",
      image:
        "https://www.eastafricasafaristours.com/wp-content/uploads/2020/07/a-serengeti-national-park.jpg",
    },
    safaris: {
      heading: "Explore Safaris in the Serengeti National Park.",
      leftText1:
        "The Serengeti offers a wide variety of safari options, from luxurious lodges to authentic tented camps. Each safari brings you closer to the rhythm of nature and the breathtaking migration of wildlife across vast plains.",
      leftText2:
        "Morning and evening game drives reveal dramatic encounters between predators and prey, while balloon safaris offer an unforgettable bird’s-eye view of the savannah.",
      image:
        "https://cdn.sanity.io/images/cctd4ker/production/1deba868a4bfe107d598a51e0798df77c9a77e05-1920x1080.jpg",
    },
    stay: {
      heading: "Stay in the heart of nature at Serengeti’s finest lodges.",
      leftText1:
        "Serengeti offers accommodations that blend comfort with wilderness. Choose from luxury lodges, mid-range tented camps, and budget-friendly eco-stays.",
      leftText2:
        "Many lodges are designed with sustainability in mind, allowing you to enjoy panoramic views while minimizing your environmental footprint.",
      image:
        "https://www.andbeyond.com/wp-content/uploads/sites/5/serengeti-safari-lodge-1.jpg",
    },
  };

  const current = tabContent[activeTab] || tabContent["overview"];

  return (
    <section className="bg-white py-12 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28">
      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-8 border-b border-gray-200 pb-3 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-[16px] uppercase font-semibold pb-2 transition relative ${
              activeTab === tab.id
                ? "text-[#d87028] border-b-2 border-[#d87028]"
                : "text-gray-700 hover:text-[#d87028]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Text Section */}
        <div className="md:col-span-2">
          <p className=" text-[15px] text-gray-500 tracking-widest uppercase mb-3">
            Serengeti Migration Area
          </p>

          <h3 className="text-[30px] md:text-[36px] font-bold text-[#111] leading-snug mb-6">
            {current.heading}
          </h3>

          <div className=" leading-relaxed space-y-5 text-[16px] leading-[1.8] [column-count:2] [column-gap:3rem]">
            <p>{current.leftText1}</p>
            <p>{current.leftText2}</p>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src={current.image}
            alt={current.heading}
            className="w-full md:w-[400px] h-[460px] object-cover rounded-lg shadow-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default SerengetiTabsSection;
