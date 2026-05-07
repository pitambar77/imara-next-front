"use client";

import React, { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const RelatedBlogCard = ({
  title,
  subtitle,
  data = [],
  bgColor = "bg-gray-50",
  itemsPerPage = 12,
  showPagination = true,
  primaryColor = "#d87028",
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  // const totalPages = Math.ceil(data.length / itemsPerPage);

  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  const isAll = itemsPerPage === "all";

  const totalPages = isAll ? 1 : Math.ceil(data.length / itemsPerPage);

  const startIndex = isAll ? 0 : (currentPage - 1) * itemsPerPage;

  const currentData = isAll
    ? data
    : data.slice(startIndex, startIndex + itemsPerPage);


    function formatDate(dateString) {
  const date = dateString ? new Date(dateString) : new Date();

  const day = String(date.getDate()).padStart(2, "0");
  const month = date
    .toLocaleString("en-US", { month: "short" })
    .toUpperCase();
  const year = date.getFullYear();

  return `${day} / ${month} / ${year}`;
}

  return (
    <section className={`w-full py-4 md:py-16 ${bgColor}`}>
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0">
        {/* Header */}
        <div className="mb-10 text-center">
          {title && (
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] capitalize mb-3">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-[16px] md:text-[18px] text-[#444]">{subtitle}</p>
          )}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentData.map((trip) => (
            <div
              key={trip.id}
              className="rounded-md overflow-hidden bg-white shadow-md hover:shadow-lg transition flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative">
                <Link href={trip.link}>
                  <Image
                    src={trip.image || "/fallback.jpg"}
                    alt={trip.title}
                    width={400}
                    height={220}
                    className="w-full h-[220px] object-cover"
                  />
                </Link>

                {/* Category */}
                {trip.category && (
                  <div className="absolute bottom-4 left-4">
                    <span
                      className="bg-white text-sm font-semibold px-4 py-2 rounded-md shadow-md"
                      style={{ color: primaryColor }}
                    >
                      {trip.category}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="py-4 px-2 md:p-6 flex flex-col flex-1">
                {/* Author + Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 relative">
                      <Image
                        src={trip.authorImage || "/author-blog.webp"}
                        alt={trip.author || "author"}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>

                    <span className="capitalize text-[#444] text-[16px] font-medium">
                      {trip.author || "Admin"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaRegCalendarAlt
                      className="text-[16px]"
                      style={{ color: primaryColor }}
                    />
                    <span className="uppercase text-xs md:text-sm font-medium text-[#444]">
                     {formatDate(trip.date)}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <Link href={trip.link}>
                  <h3
                    className="font-semibold text-lg md:text-[24px] mb-4 hover:opacity-80"
                    style={{ color: "#1a1a1a" }}
                  >
                    {trip.title}
                  </h3>
                </Link>

                {/* Description */}
                <p className="text-[#444] text-[16px] leading-relaxed line-clamp-4">
                  {trip.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {showPagination && totalPages > 1 && !isAll && (
          <div className="flex justify-center items-center gap-3 mt-12">
            {/* Previous */}
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-5 py-2 rounded-md border  ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gray-100 hover:bg-gray-200 cursor-pointer"
              }`}
              style={{ color: primaryColor }}
            >
              Previous
            </button>

            {/* Pages */}
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className="px-4 py-2 rounded-md border cursor-pointer"
                style={{
                  backgroundColor:
                    currentPage === i + 1 ? primaryColor : "#fff",
                  color: currentPage === i + 1 ? "#fff" : primaryColor,
                }}
              >
                {i + 1}
              </button>
            ))}

            {/* Next */}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className={`px-5 py-2 rounded-md border  ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gray-100 hover:bg-gray-200 cursor-pointer"
              }`}
              style={{ color: primaryColor }}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default RelatedBlogCard;
