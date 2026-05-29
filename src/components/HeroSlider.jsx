"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MoveLeft, MoveRight } from "lucide-react";
import PrimaryButton from "./PrimaryButton";

const slides = [
  {
    id: 1,
    image: "/tanzania.webp",
    title: "Tanzania Safaris",
    description:
      "Wild spaces invite travellers into Tanzania’s raw beauty with genuine discovery.",
  },
  {
    id: 2,
    image: "/kilimanjaro.webp",
    title: "Kilimanjaro Climbs",
    description:
      "Guided ascents built on steady expertise, safe pacing, and real mountain insight.",
  },
  {
    id: 3,
    image: "/zanzibar.webp",
    title: "Zanzibar Escapes",
    description:
      "Easy coastal days shaped by warm waters, island culture, and quiet rest.",
  },
];

// Clone first slide
const sliderData = [...slides, slides[0]];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [transition, setTransition] = useState(true);

  const startX = useRef(0);
  const isDragging = useRef(false);

  // NEXT
  const nextSlide = () => {
    if (current >= slides.length) return;

    setCurrent((prev) => prev + 1);
    setTransition(true);
  };

  // PREV
  const prevSlide = () => {
    if (current === 0) {
      setTransition(false);
      setCurrent(slides.length - 1);

      setTimeout(() => {
        setTransition(true);
      }, 50);

      return;
    }

    setCurrent((prev) => prev - 1);
  };

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  // RESET AFTER LAST SLIDE
  useEffect(() => {
    if (current === slides.length) {
      const timeout = setTimeout(() => {
        setTransition(false);
        setCurrent(0);

        setTimeout(() => {
          setTransition(true);
        }, 50);
      }, 700);

      return () => clearTimeout(timeout);
    }
  }, [current]);

  // SWIPE START
  const handleStart = (clientX) => {
    startX.current = clientX;
    isDragging.current = true;
  };

  // SWIPE END
  const handleEnd = (clientX) => {
    if (!isDragging.current) return;

    const distance = startX.current - clientX;

    if (distance > 50) {
      nextSlide();
    }

    if (distance < -50) {
      prevSlide();
    }

    isDragging.current = false;
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* SLIDER */}
      <div
        className="relative w-full h-[350px] md:h-[500px] 2xl:h-[650px] overflow-hidden cursor-grab active:cursor-grabbing"
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
        {/* TRACK */}
        <div
          className={`flex h-full ${
            transition ? "transition-transform duration-700 ease-in-out" : ""
          }`}
          style={{
            width: `${sliderData.length * 100}%`,
            transform: `translateX(-${current * (100 / sliderData.length)}%)`,
          }}
        >
          {sliderData.map((slide, index) => (
            <div
              key={index}
              className="relative h-full flex-shrink-0"
              style={{
                width: `${100 / sliderData.length}%`,
              }}
            >
              {/* IMAGE */}
              <Image
                src={slide.image}
                alt={slide.title}
                title={slide.title}
                fill
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "low"}
                quality={80}
                sizes="100vw"
                draggable={false}
                className="object-cover select-none pointer-events-none"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/30" />

              {/* CONTENT */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
                {index === 0 ? (
                  <h1 className="text-2xl md:text-5xl mb-4 font-bold uppercase">
                    {slide.title}
                  </h1>
                ) : (
                  <h2 className="text-2xl md:text-5xl mb-4 font-bold uppercase">
                    {slide.title}
                  </h2>
                )}

                <p className="text-sm md:text-xl mb-4 md:mb-6 max-w-2xl">
                  {slide.description}
                </p>

                <PrimaryButton href="/tailor-made-tours">
                  Plan A Trip
                </PrimaryButton>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PREV BUTTON */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white text-gray-800 rounded-full p-3 shadow-md hover:bg-gray-100 transition cursor-pointer"
      >
        <MoveLeft strokeWidth={2} />
      </button>

      {/* NEXT BUTTON */}
      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white text-gray-800 rounded-full p-3 shadow-md hover:bg-gray-100 transition cursor-pointer"
      >
        <MoveRight strokeWidth={2} />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index);
              setTransition(true);
            }}
            className={`w-3 h-3 rounded-full transition-all cursor-pointer duration-300 ${
              current % slides.length === index
                ? "bg-white scale-110"
                : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
