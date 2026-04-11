"use client";

import Image from "next/image";
import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";

const MonthGuide = ({ title, tabs }) => {
  // const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [activeTab, setActiveTab] = useState(tabs?.[0]?.id || null);

  if (!tabs || tabs.length === 0) {
    return null;
  }

  const activeContent = tabs.find((t) => t.id === activeTab);

  // 👉 Normalize description to always be an array
  const descriptionArray = Array.isArray(activeContent.description)
    ? activeContent.description
    : [activeContent.description];

  return (
    <section className=" py-8 md:py-16 max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0">
      {/* Title */}
      <h2 className="text-center text-2xl md:text-3xl capitalize text-[#1a1a1a] font-semibold mb-6">
        {title}
      </h2>

      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
        px-5 py-3
        rounded-md
        cursor-pointer
        text-sm
        uppercase
        transition
        w-[48%] sm:w-auto
        ${activeTab === tab.id ? "" : "bg-[#d87028] text-white"}
      `}
          >
            <h3>{tab.label}</h3>
          </button>
        ))}
      </div>

      {/* CONTENT SECTION */}
      <div className="bg-[#f7d8c1] p-6 md:p-8 rounded-md flex flex-col lg:flex-row gap-6 lg:gap-10 items-start justify-between">
        {/* LEFT TEXT */}
        <div className="w-full lg:w-[60%] order-2 md:order-1">
          <h3 className="font-bold mb-4 text-2xl">
            {activeContent.contentTitle}
          </h3>

          {/* Dynamic Paragraphs */}
          <div className="space-y-3 mb-4">
            {descriptionArray.map((block, index) => {
              if (block.type === "header") {
                return (
                  <h4
                    key={index}
                    className="font-semibold text-xl text-[#222] mt-6"
                  >
                    {block.content}
                  </h4>
                );
              }

              if (block.type === "list") {
                return (
                  <div
                    key={index}
                    className="flex items-start gap-2 ml-2 md:ml-4"
                  >
                    <span className="text-[#d87028] text-lg mt-0.5">
                      <GoDotFill />
                    </span>
                    <p className="text-[#444] text-[16px] leading-relaxed">
                      {block.content}
                    </p>
                  </div>
                );
              }

              return (
                <p
                  key={index}
                  className="text-[#444] text-[16px] leading-relaxed"
                >
                  {block.content}
                </p>
              );
            })}
          </div>

          {/* Bullet List */}
          <div className="mt-4">
            <ul className="space-y-2">
              {activeContent.events?.length > 0 && (
                <div className="mt-4">
                  <h3 className="font-semibold text-xl mb-4">
                    Events & Festivals
                  </h3>
                  <ul className="space-y-2">
                    {activeContent.events.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 ml-2 md:ml-4"
                      >
                        <span className="text-[#d87028] text-lg mt-0.5">
                          <GoDotFill />
                        </span>
                        <p className="text-[#444] text-[16px] leading-relaxed">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </ul>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-[35%] order-1">
          <Image
            src={activeContent.image}
            alt="Section Visual"
            width={500}
            height={300}
            className="w-full h-[250px] md:h-[300px] object-cover rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default MonthGuide;
