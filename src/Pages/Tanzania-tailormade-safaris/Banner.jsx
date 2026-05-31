import Image from "next/image";
import React, { useEffect, useState } from "react";

import atta from "../../assets/atta-logo-la.webp";
import imaralogo from "@/assets/imaralogo.png";
import Link from "next/link";

const brands = [
  { id: 1, name: "ATTA", img: atta, link: "" },
  // { id: 2, name: "SafariBookings", img: asta, link: "" },
  { id: 2, name: "TATO", img: "/tra.png", link: "" },
  {
    id: 3,
    name: "Tripadvisor",
    img: "/tripadvisor.png",
    link: "https://www.tripadvisor.com/Attraction_Review-g317084-d34222480-Reviews-Imara_Kileleni_Safaris-Moshi_Kilimanjaro_Region.html",
    rating: "Rated 5.0/5",
  },
];

const Banner = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-x-hidden">
      {/* Background Image */}
      {/* <Image
        src={"/tanzania-tailormade-landing-n.webp"}
        alt="Safari"
        fill
        priority
        className="object-cover"
      /> */}

      {/* Desktop Image */}
      <Image
        src="/tanzania-tailormade-landing-n.webp"
        alt="Safari"
        fill
        priority
        className="hidden md:block object-cover"
      />

      {/* Mobile Image */}
      <Image
        src="/mobile-screen-1.webp"
        alt="Safari"
        fill
        priority
        className="block md:hidden object-cover object-left"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/100" />

      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 text-white transition-all duration-300 ${
          scrolled
            ? "bg-[#fdfaf5] backdrop-blur-md shadow-lg"
            : "bg-transparent py-1 "
        }`}
      >
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 xl:px-0 py-3 md:py-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="#" className="flex items-center">
            <Image
              src={imaralogo}
              alt="Imara Kileleni Safaris"
              width={180}
              height={60}
              priority
              className="h-10 sm:h-11 md:h-12 w-auto"
            />
          </Link>

          {/* Menu */}
          <div
            className={`hidden md:flex gap-10 uppercase tracking-wider text-sm !font-avenir ${
              scrolled ? "text-[#d87029]" : "text-white"
            }`}
          >
            <a href="#why-travel" className="hover:opacity-70">
              Why Us
            </a>
            <a href="#experience" className="hover:opacity-70">
              Experiences
            </a>
            <a href="#review" className="hover:opacity-70">
              Reviews
            </a>
            <a href="#faq" className="hover:opacity-70">
              FAQs
            </a>
          </div>

          {/* Button */}
          <button
            onClick={() => {
              const section = document.getElementById("step-2");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className="!font-avenir text-sm md:text-base bg-[#d87028] text-white px-[21px] py-2.5 rounded-full hover:bg-[#eb8034de] transition cursor-pointer"
          >
            Plan My Safari
          </button>
        </div>
      </div>

      {/* Center Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-7xl tracking-wide mb-4 !font-cormorant font-normal">
          Luxury Tanzania Safaris
        </h1>

        <h2 className="hidden md:block text-lg md:text-2xl lg:text-4xl !font-cormorant italic text-[#e99b64] mb-4">
          Travel Tanzania in exceptional comfort.
        </h2>

        <p className="hidden md:block text-lg md:text-xl mb-4 md:mb-6 max-w-2xl !font-avenir">
          Discover Tanzania’s iconic wildlife destinations with fully customized
          safari journeys.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-10">
          <button
            onClick={() => {
              const section = document.getElementById("step-2");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className="!font-avenir text-sm md:text-base bg-[#d87028] text-white px-[21px] py-2.5 rounded-full  hover:bg-[#eb8034de] transition cursor-pointer"
          >
            Get My Custom Safari →
          </button>

          <button
            onClick={() => {
              const section = document.getElementById("experience");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className="border border-white bg-transparent !font-avenir text-sm md:text-base px-[21px] py-2.5 rounded-full  hover:bg-[#eb8034de] transition cursor-pointer"
          >
            Explore Experiences →
          </button>
        </div>
      </div>

      {/* Bottom Logos */}
      <div className="absolute bottom-4 left-0 w-full z-20">
        {/* MOBILE SLIDER */}
        <div className="md:hidden overflow-x-scroll scrollbar-hide px-4">
          <div className="flex items-center gap-4 divide-x divide-white/30 w-max min-w-max">
            {brands.map((brand) => (
              <div key={brand.id} className="flex-shrink-0 px-4">
                <Image
                  src={brand.img}
                  alt={brand.name}
                  width={100}
                  height={40}
                  className="opacity-80"
                />
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:flex justify-center items-center divide-x divide-white/30 max-w-6xl mx-auto">
          {brands.map((brand) => (
            <div key={brand.id} className="px-6">
              <Image
                src={brand.img}
                alt={brand.name}
                width={140}
                height={80}
                className="opacity-80 hover:opacity-100 transition"
              />
              <p className=" text-center text-[#eac0a4] text-[10px] mt-2">
                {brand.rating}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
