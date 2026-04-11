import React, { useState } from "react";

const TabLink = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "packages", label: "Packages" },
    { id: "details", label: "Details" },
    { id: "highlight", label: "Things to do" },
    { id: "besttime", label: "Best Time" },
    { id: "adventure", label: "Experience" },
    { id: "faq", label: "FAQ" },
    { id: "more", label: "More Info" },
  ];



const handleTabClick = (id) => {
    setActiveTab(id);
    const section = document.getElementById(id);

    if (section) {
      const yOffset = -150; // offset to match sticky header height
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className=" hidden md:block bg-white pt-12  sticky top-28 z-9 ">
       <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0">
      <div className="flex flex-wrap items-center gap-8 border-b border-gray-200 pb-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`text-[16px] uppercase cursor-pointer font-semibold pb-2 transition relative ${
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
