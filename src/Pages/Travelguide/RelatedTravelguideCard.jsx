"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { MoveLeft, MoveRight } from "lucide-react";

const RelatedTravelguideCard = ({ title, subtitle, data }) => {
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);
  const [expandedCard, setExpandedCard] = useState(null);

  const formatTitle = (text) => {
    if (!text) return "";
    return text.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <section
      id="highlight"
      className="w-full py-10 sm:py-12 md:py-16 bg-white relative"
    >
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0">
        {/* Title + Navigation */}

        <h2 className="text-2xl md:text-3xl mb-3 text-center font-bold w-full text-[#1a1a1a] capitalize">
          {formatTitle(title)}
        </h2>
        <div className="relative flex items-center justify-center mb-8 md:mb-12">
          {subtitle && <p className="text-[18px] text-[#444] ">{subtitle}</p>}

          <div className=" hidden md:block absolute right-0 flex items-center space-x-3">
            <button
              ref={swiperNavPrevRef}
              className="swiper-button-prev- cursor-pointer bg-white border border-gray-300 text-gray-800 rounded-full p-3 hover:bg-gray-100 shadow-sm transition"
            >
             <MoveLeft size={16} />
            </button>

            <button
              ref={swiperNavNextRef}
              className="swiper-button-next-custom cursor-pointer bg-white border border-gray-300 text-gray-800 rounded-full p-3 hover:bg-gray-100 shadow-sm transition"
            >
               <MoveRight size={16} />
            </button>
          </div>
        </div>
        {/* ================= CUSTOM SLIDER ================= */}

        <CustomTravelGuideSlider
          data={data}
          prevRef={swiperNavPrevRef}
          nextRef={swiperNavNextRef}
        />
      </div>
    </section>
  );
};

export default RelatedTravelguideCard;

const CustomTravelGuideSlider = ({ data, prevRef, nextRef }) => {
  const [current, setCurrent] = useState(0);
  const [transition, setTransition] = useState(true);

  const startX = useRef(0);
  const isDragging = useRef(false);

  const [slidesPerView, setSlidesPerView] = useState(4);

  // RESPONSIVE
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1.1);
      } else if (window.innerWidth < 768) {
        setSlidesPerView(1.5);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2.5);
      } else if (window.innerWidth < 1280) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(4);
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
                <Link href={trip.link} className="block h-full cursor-pointer">
                  <div className="trip-card rounded-sm overflow-hidden bg-white shadow-sm hover:shadow-lg transition duration-300 mb-4">
                    {/* IMAGE */}
                    <div className="relative">
                      <Image
                        src={trip.image}
                        alt={trip.title}
                        width={400}
                        height={160}
                        draggable={false}
                        className="trip-image pointer-events-none"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="p-5 flex flex-col justify-between flex-1 pb-4">
                      <div>
                        <h3 className="text-xl mb-4 leading-tight">
                          {trip.title}
                        </h3>

                        <p className="text-[15px] text-[#444] leading-relaxed line-clamp-6">
                          {trip.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
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

      {/* EXTRA CSS */}
      <style jsx>{`
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

        .trip-description a {
          color: #d87029 !important;
          text-decoration: underline;
          font-weight: 500;
        }

        .trip-description a:hover {
          opacity: 0.8;
        }
      `}</style>
    </>
  );
};
