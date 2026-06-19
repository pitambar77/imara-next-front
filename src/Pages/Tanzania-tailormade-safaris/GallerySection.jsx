"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function GallerySection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const images = [
    "/gallery-big-1.webp",
    "/gallery-row-1.webp",
    "/gallery-row-2.webp",
    "/gallery-row-3.webp",
    "/gallery-row-4.webp",
    "/gallery-row-5.webp",
    "/gallery-last-row-1.webp",
    "/gallery-last-row-2.webp",
    "/gallery-last-row-3.webp",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;

    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  return (
    <section className="bg-gradient-to-r from-[#2a1a0f] via-[#3a2415] to-[#2a1a0f] py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <p className="!font-avenir text-xs md:text-sm text-center tracking-[0.2em] text-[#d87029] uppercase mb-3">
          From the Field
        </p>

        <div className="w-10 h-[1px] bg-[#d87029] mx-auto mb-4 md:mb-6"></div>

        <h2 className="!font-cormorant text-[#f3f0ed]  text-3xl md:text-4xl lg:text-5xl text-center capitalize mb-4">
          Tanzania,{" "}
          <span className=" !font-cormorant italic text-[#d87029]">
            {" "}
            Through Our Lens
          </span>
        </h2>

        <p className="!font-avenir text-[#f1a878] mt-4 mb-16 max-w-xl mx-auto text-center">
          Every frame tells a real story from the African wilderness. Nothing
          artificial, nothing staged.
        </p>

        {/* Desktop Gallery */}
        <div className="hidden lg:grid grid-cols-4 gap-2.5">
          {/* Large Left Image */}
          <div className="col-span-2 row-span-2 h-[650px] relative overflow-hidden rounded-md">
            <Image
              src="/gallery-big-1.webp"
              alt=""
              fill
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Top Row */}
          <div className="h-[355px] relative overflow-hidden rounded-md">
            <Image
              src="/gallery-row-3.webp"
              alt=""
              fill
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <div className="h-[355px] relative overflow-hidden rounded-md">
            <Image
              src="/gallery-row-2.webp"
              alt=""
              fill
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Middle Row */}
          <div className=" h-[280px] relative overflow-hidden rounded-md">
            <Image
              src="/gallery-row-4.webp"
              alt=""
              fill
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <div className="h-[280px] relative overflow-hidden rounded-md">
            <Image
              src="/gallery-row-5.webp"
              alt=""
              fill
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Bottom Row */}
          <div className="h-[180px] relative overflow-hidden rounded-md">
            <Image
              src="/gallery-last-row-1.webp"
              alt=""
              fill
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <div className="h-[180px] relative overflow-hidden rounded-md">
            <Image
              src="/gallery-last-row-2.webp"
              alt=""
              fill
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <div className="h-[180px] relative overflow-hidden rounded-md">
            <Image
              src="/gallery-last-row-3.webp"
              alt=""
              fill
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <div className="h-[180px] relative overflow-hidden rounded-md">
            <Image
              src="/gallery-last-row-4.webp"
              alt=""
              fill
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>

        {/* Tablet */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-3">
          {[
            "/gallery-big-1.webp",
            "/gallery-row-1.webp",
            "/gallery-row-2.webp",
            "/gallery-row-3.webp",
            "/gallery-row-4.webp",
            "/gallery-row-5.webp",
            "/gallery-last-row-1.webp",
            "/gallery-last-row-2.webp",
            "/gallery-last-row-3.webp",
            "/gallery-last-row-4.webp",
          ].map((img, i) => (
            <div
              key={i}
              className="relative h-[300px] overflow-hidden rounded-md"
            >
              <Image
                src={img}
                alt=""
                fill
                className="object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>

        {/* Mobile Custom Slider */}
        <div className="md:hidden">
          <div
            className="relative overflow-hidden rounded-sm"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {images.map((img, index) => (
                <div key={index} className="relative min-w-full h-[280px]">
                  <Image
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index
                    ? "w-6 bg-[#d87029]"
                    : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className=" pt-10 md:pt-16 max-w-[900px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 ">
            {[
              {
                value: "500+",
                label: "HAPPY GUESTS",
                subLabel: "SINCE 2012",
              },
              {
                value: "5.0",
                label: "TRIPADVISOR",
                subLabel: "RATING",
              },
              {
                value: "4.7",
                label: "Google",
                subLabel: "SCORE",
              },
              {
                value: "14+",
                label: "YEARS IN",
                subLabel: "THE FIELD",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`text-center px-4 ${
                  index !== 3 ? "md:border-r border-[#3a2a1d]" : ""
                }`}
              >
                <h3 className="!font-cormorant text-[#d87029] text-4xl md:text-5xl leading-none">
                  {item.value}
                </h3>

                <p className="!font-avenir mt-4 text-[11px]  tracking-[0.25em] text-[#f1a878] uppercase">
                  {item.label}
                </p>

                <p className="!font-avenir text-[11px]  tracking-[0.25em] text-[#f1a878] uppercase">
                  {item.subLabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
