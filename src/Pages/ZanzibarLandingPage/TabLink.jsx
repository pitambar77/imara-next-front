

import React, { useState } from "react";

const TabLink = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "packages", label: "Safaris" },
    { id: "details", label: "Things To Do" },
    { id: "highlight", label: "Beach" },
    { id: "besttime", label: "Best Time" },
    { id: "adventure", label: "Adventure" },
    { id: "faq", label: "FAQ" },
    { id: "more", label: "More Info" },
  ];

  const handleTabClick = (id) => {
    setActiveTab(id);
    const section = document.getElementById(id);

    if (section) {
      const headerOffset = 90;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="hidden md:block bg-white sticky top-[80px] z-40 border-b border-gray-200">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0">
        <div className="flex flex-wrap items-center gap-8 py-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={` text-sm uppercase font-semibold pb-2 transition ${
                activeTab === tab.id
                  ? "text-[#d87028] border-b-2 border-[#d87028]"
                  : "text-gray-700 hover:text-[#d87028]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabLink;
