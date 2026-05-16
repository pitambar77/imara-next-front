"use client";

import React from "react";

const OverviewInfo = ({ landing }) => {
  const overview = landing?.overviewinfo?.[0];

  if (!overview) return null;

  return (
    <div className="w-full bg-[#fedec7] py-8 md:py-16 px-4">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        {/* TITLE */}
        {overview.title && (
          <h2 className="text-xl md:text-3xl capitalize text-center text-[#1a1a1a] mb-10">
            {overview.title}
          </h2>
        )}

        {/* SUBTITLE */}
        {/* {overview.subtitle && (
          <h3 className="font-extrabold text-[#444]">{overview.subtitle}</h3>
        )} */}

        {/* DESCRIPTION */}
        {overview.description && (
          <div
            className="text-[#444] leading-relaxed rich-text"
            dangerouslySetInnerHTML={{
              __html: overview.description,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default OverviewInfo;
