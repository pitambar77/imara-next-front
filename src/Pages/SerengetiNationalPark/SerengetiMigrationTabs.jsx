"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Earth } from "lucide-react";

const icons = [<Earth />];

const SerengetiMigrationTabs = ({ data = [] }) => {
  if (!Array.isArray(data) || !data.length) return null;

  const migration = data[0];
  const sections = migration.section || [];

  const [activeTab, setActiveTab] = useState(0);

  if (!sections.length) return null;

  return (
    <section
      id="details"
      className=" bg-white py-10 sm:py-12 md:py-16 max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0"
    >
      {/* HEADER */}
      <div className="text-center mx-auto mb-12 max-w-4xl">
        <h4 className="tracking-widest text-sm text-gray-500 font-semibold mb-4 uppercase">
          {migration.subtitle}
        </h4>
        <h2 className=" text-2xl md:text-[32px] font-extrabold text-[#1a1a1a] mb-8 capitalize">
          {migration.title
            ?.toLowerCase()
            .replace(/\b\w/g, (c) => c.toUpperCase())}
        </h2>

        <div
          className="
    migration-description
    max-w-none
    text-[15px]
    text-[#444]
    leading-[1.8]
  "
          dangerouslySetInnerHTML={{
            __html: migration.description || "",
          }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-9 gap-10">
        <div className="lg:col-span-3 space-y-3">
          {sections.map((tab, index) => (
            <button
              key={tab._id}
              onClick={() => setActiveTab(index)}
              className={`w-full flex justify-between cursor-pointer items-center p-4 rounded-lg font-semibold border
                ${
                  activeTab === index
                    ? "bg-black text-white"
                    : "bg-[#d87028] text-white hover:bg-orange-300"
                }`}
            >
              <span className="flex items-center gap-3">
                {icons[index % icons.length]}
                {tab.nationalpark}
              </span>
              <span>›</span>
            </button>
          ))}
        </div>

        <div className="lg:col-span-6">
          <h3 className="text-2xl font-bold mb-6 text-[#111]">
            {sections[activeTab]?.nationalpark}
          </h3>
          {/* {sections[activeTab]?.details?.map((d, i) => (
            <p key={i} className="text-[15px] text-[#444] leading-relaxed mb-6">
              {d.content}
            </p>
          ))} */}

          <div
            className="
    migration-details
    max-w-none
    text-[15px]
    text-[#444]
    leading-[1.8]
    mb-6
  "
            dangerouslySetInnerHTML={{
              __html: sections[activeTab]?.details || "",
            }}
          />

          {sections[activeTab]?.image && (
            <Image
              src={sections[activeTab].image}
              width={800}
              height={400}
              className="h-[400px] w-full object-cover rounded-md"
              alt={sections[activeTab]?.nationalpark}
            />
          )}
        </div>
      </div>
      <style>
        {`
    .migration-description,
    .migration-description p,
    .migration-description span,
    .migration-description li,
    .migration-description a,
    .migration-description strong,
    .migration-description em,
    .migration-details,
    .migration-details p,
    .migration-details span,
    .migration-details li,
    .migration-details strong,
    .migration-details em {
      font-family: "Soleil", sans-serif !important;
      color: #444 !important;
      line-height: 1.8;

    }

    .migration-description a,
    .migration-details a {
      color: #d87029 !important;
      text-decoration: underline;
      font-weight: 500;
    }

    .migration-description a:hover,
    .migration-details a:hover {
      opacity: 0.8;
    }

    .migration-description p,
    .migration-details p {
      margin-bottom: 1rem;
      line-height: 1.8;
    }

    .migration-description strong,
    .migration-details strong {
      font-weight: 700;
      color: #111 !important;
    }

    .migration-description mark,
    .migration-details mark {
      background: #fef08a;
      padding: 0 4px;
    }

    .migration-description h1,
    .migration-description h2,
    .migration-description h3,
    .migration-details h1,
    .migration-details h2,
    .migration-details h3 {
      font-family: "fonnts.com-AcuminPro-Bold" !important;
      color: #111 !important;
    }
  `}
      </style>
    </section>
  );
};

export default SerengetiMigrationTabs;
