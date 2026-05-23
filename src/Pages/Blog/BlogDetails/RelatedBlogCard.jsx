"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { CalendarDays, MoveLeft, MoveRight } from "lucide-react";

const RelatedBlogCard = ({ title, subtitle, data }) => {
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);
  const [expandedCard, setExpandedCard] = useState(null);

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
    <section
      id="highlight"
      className="w-full py-10 sm:py-12 md:py-16 bg-gray-50 relative"
    >
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0">
        <div className="mb-10">
          <h3 className="text-2xl md:text-4xl text-center text-[#1a1a1a] capitalize mb-3">
            {title}
          </h3>

          <div className="relative flex items-center justify-center">
            <p className="text-[16px] md:text-[18px] text-[#444] text-center">
              {subtitle}
            </p>

            <div className="hidden md:flex items-center space-x-3 absolute right-0">
              <button
                ref={swiperNavPrevRef}
                className="cursor-pointer bg-white border border-gray-300 text-gray-800 rounded-full p-3 hover:bg-gray-100 shadow-sm transition"
              >
               <MoveLeft size={16} />
              </button>

              <button
                ref={swiperNavNextRef}
                className="cursor-pointer bg-white border border-gray-300 text-gray-800 rounded-full p-3 hover:bg-gray-100 shadow-sm transition"
              >
                 <MoveRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <CustomRelatedBlogSlider
          data={data}
          formatDate={formatDate}
          prevRef={swiperNavPrevRef}
          nextRef={swiperNavNextRef}
        />

        {/* Pagination Dots */}
        <div className="custom-pagination flex justify-center mt-6"></div>

        <style>
          {`
            .custom-pagination .swiper-pagination-bullet-active {
              background-color: #4a5464 !important;
              width: 12px !important;
              height: 12px !important;
              transform: scale(1.3);
              transition: all 0.35s ease;
            }

            .trip-card {
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }

            .trip-image {
              height: 160px;
              width: 100%;
              object-fit: cover;
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default RelatedBlogCard;

const CustomRelatedBlogSlider = ({ data, formatDate, prevRef, nextRef }) => {
  const [current, setCurrent] = useState(0);
  const [transition, setTransition] = useState(true);

  const startX = useRef(0);
  const isDragging = useRef(false);

  const [slidesPerView, setSlidesPerView] = useState(3);

  // RESPONSIVE
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1.1);
      } else if (window.innerWidth < 768) {
        setSlidesPerView(1.5);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2.5);
      } else {
        setSlidesPerView(3);
      }
    };

    updateSlides();

    window.addEventListener("resize", updateSlides);

    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  // CLONE
  const cloneCount = Math.ceil(slidesPerView);

  const sliderData = [...data, ...data.slice(0, cloneCount)];

  // NEXT
  const nextSlide = () => {
    if (current >= data.length) return;

    setCurrent((prev) => prev + 1);
    setTransition(true);
  };

  // PREV
  const prevSlide = () => {
    if (current === 0) {
      setTransition(false);

      setCurrent(data.length - 1);

      setTimeout(() => {
        setTransition(true);
      }, 50);

      return;
    }

    setCurrent((prev) => prev - 1);
  };

  // AUTO SLIDE ONLY MOBILE/TABLET
  useEffect(() => {
    if (window.innerWidth >= 1024) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [current]);

  // RESET LOOP
  useEffect(() => {
    if (current >= data.length) {
      const timeout = setTimeout(() => {
        setTransition(false);

        setCurrent(0);

        setTimeout(() => {
          setTransition(true);
        }, 50);
      }, 700);

      return () => clearTimeout(timeout);
    }
  }, [current, data.length]);

  // SWIPE START
  const handleStart = (clientX) => {
    startX.current = clientX;
    isDragging.current = true;
  };

  // SWIPE END
  const handleEnd = (clientX) => {
    if (!isDragging.current) return;

    const distance = startX.current - clientX;

    if (Math.abs(distance) < 10) {
      isDragging.current = false;
      return;
    }

    if (distance > 50) {
      nextSlide();
    }

    if (distance < -50) {
      prevSlide();
    }

    isDragging.current = false;
  };

  // BUTTONS
  useEffect(() => {
    if (prevRef?.current) {
      prevRef.current.onclick = prevSlide;
    }

    if (nextRef?.current) {
      nextRef.current.onclick = nextSlide;
    }
  });

  return (
    <>
      <div
        className="overflow-hidden active:cursor-grabbing select-none pb-4"
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseUp={(e) => handleEnd(e.clientX)}
        onMouseLeave={(e) => {
          if (isDragging.current) {
            handleEnd(e.clientX);
          }
        }}
      >
        {/* TRACK WRAPPER */}
        <div className="px-[2px]">
          {/* TRACK */}
          <div
            className={`flex ${
              transition ? "transition-transform duration-700 ease-in-out" : ""
            }`}
            style={{
              gap: "24px",
              transform: `translateX(calc(-${
                current * (100 / slidesPerView)
              }% - ${current * 24}px))`,
            }}
          >
            {sliderData.map((trip, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{
                  width: `calc(${100 / slidesPerView}% - ${
                    24 - 24 / slidesPerView
                  }px)`,
                }}
              >
                <div className="rounded-md overflow-hidden bg-white shadow-md hover:shadow-lg transition flex flex-col h-full mb-4">
                  {/* IMAGE */}
                  <div className="relative">
                    <Link href={trip.link}>
                      <Image
                        src={trip.image || "/fallback.jpg"}
                        alt={trip.title}
                        width={400}
                        height={220}
                        draggable={false}
                        className="w-full h-[220px] object-cover pointer-events-none"
                      />
                    </Link>

                    {/* CATEGORY */}
                    {trip.category && (
                      <div className="absolute bottom-4 left-4">
                        <span className="text-[#d87028] bg-white text-sm md:text-base font-semibold px-5 py-2 rounded-md shadow-md">
                          {trip.category}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* CONTENT */}
                  <div className="py-4 px-2 md:p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      {/* AUTHOR */}
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 relative">
                          <Image
                            src={trip.authorImage || "/author-blog.webp"}
                            alt={trip.author || "author image"}
                            fill
                            className="rounded-full object-cover"
                          />
                        </div>

                        <span className="capitalize tracking-wide text-[#444] text-[16px] font-medium">
                          {trip.author || "Peter"}
                        </span>
                      </div>

                      {/* DATE */}
                      <div className="flex items-center gap-2">
                       <CalendarDays size={18} className="text-[16px] text-[#d87028]" />

                        <span className="uppercase tracking-wider text-xs md:text-sm font-medium text-[#444] text-[16px] mt-1">
                          {formatDate(trip.date)}
                        </span>
                      </div>
                    </div>

                    {/* TITLE */}
                    <Link href={trip.link}>
                      <h3 className="font-semibold text-lg hover:text-[#d97129] md:text-[24px] mb-4">
                        {trip.title}
                      </h3>
                    </Link>

                    {/* DESCRIPTION */}
                    <p className="text-[#444] text-[16px] leading-relaxed line-clamp-4 mb-4">
                      {trip.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PAGINATION */}
      <div className="hidden md:flex justify-center mt-6 gap-3">
        {Array.from({
          length: Math.ceil(data.length / slidesPerView),
        }).map((_, index) => {
          const activeDot = Math.floor((current % data.length) / slidesPerView);

          return (
            <button
              key={index}
              onClick={() => {
                setCurrent(index * slidesPerView);
                setTransition(true);
              }}
              className={`rounded-full transition-all duration-300 ${
                activeDot === index
                  ? "bg-[#4a5464] w-3 h-3 scale-125"
                  : "bg-[#c4c4c4] w-2 h-2"
              }`}
            />
          );
        })}
      </div>
    </>
  );
};
