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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-[95vh] md:h-screen w-full overflow-x-hidden">
      <Image
        src="/desktop-banner-new.webp"
        alt="Safari"
        fill
        priority
        className="hidden md:block object-cover"
      />

      {/* Mobile Image */}
      <Image
        src="/mobile-banner-new.webp"
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
          <Link href="#" className="flex items-center ">
            <Image
              src={imaralogo}
              alt="Imara Kileleni Safaris"
              width={180}
              height={60}
              priority
              className="h-10 sm:h-11 md:h-12 w-auto "
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
          {/* <button
            onClick={() => {
              const section = document.getElementById("step-2");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className="  !font-avenir text-[10px] md:text-xs tracking-[0.72px] md:tracking-[2.4px] uppercase bg-[#d87028] border border-[#e78e4b] text-white px-[10px] md:px-6 md:py-2.5 py-[7px] rounded-xs hover:bg-[#eb8034de] transition cursor-pointer whitespace-nowrap"
          >
            Plan My Safari
          </button> */}

          <div className="flex items-center gap-2">
            {/* Safari Button */}
            <button
              onClick={() => {
                const section = document.getElementById("step-2");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="!font-avenir text-[10px] md:text-xs tracking-[0.72px] md:tracking-[2.4px] uppercase bg-[#d87028] border border-[#e78e4b] text-white px-[10px] md:px-6 md:py-2.5 py-[7px] rounded-xs hover:bg-[#eb8034de] transition cursor-pointer whitespace-nowrap"
            >
              Plan My Safari
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`md:hidden flex flex-col justify-center items-center w-8 h-8 border-[0.5px] rounded-xs ${
                scrolled
                  ? "border-[#d87029] text-[#d87029]"
                  : "border-[#fff] text-white"
              }`}
            >
              <span className="w-5 h-[1px] bg-current mb-1"></span>
              <span className="w-5 h-[1px] bg-current mb-1"></span>
              <span className="w-5 h-[1px] bg-current"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[999] bg-[#f7f3ec] transition-all duration-500 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Top */}
        <div className="flex items-center justify-between px-6 py-6">
          <Image
            src={imaralogo}
            alt="logo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />

          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#d87029] text-4xl font-light"
          >
            ×
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col items-center mt-24">
          {[
            {
              label: "Why Us",
              id: "why-travel",
            },
            {
              label: "Experiences",
              id: "experience",
            },
            {
              label: "Reviews",
              id: "review",
            },
            {
              label: "FAQs",
              id: "faq",
            },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setMobileMenuOpen(false);

                setTimeout(() => {
                  document.getElementById(item.id)?.scrollIntoView({
                    behavior: "smooth",
                  });
                }, 200);
              }}
              className="w-[240px] py-4 text-center border-b border-[#eadfce]"
            >
              <span className="!font-cormorant text-[24px] text-[#241711]">
                {item.label}
              </span>
            </button>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="px-8 mt-20">
          <button
            onClick={() => {
              setMobileMenuOpen(false);

              setTimeout(() => {
                document.getElementById("step-2")?.scrollIntoView({
                  behavior: "smooth",
                });
              }, 200);
            }}
            className="w-full md:w-auto  !font-avenir text-[12px] tracking-[2.4px] uppercase bg-[#d87028] border border-[#e78e4b] text-white px-6 md:py-2.5 py-3 rounded-xs hover:bg-[#eb8034de] transition cursor-pointer whitespace-nowrap"
          >
            PLAN MY SAFARI
          </button>
        </div>
      </div>

      {/* Center Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-[26px] md:text-5xl lg:text-7xl tracking-wide mb-2 mb:mb-4 !font-cormorant font-normal">
          Luxury Tanzania Safaris
        </h1>

        <h2 className=" text-[20px] md:text-2xl lg:text-4xl !font-cormorant italic text-[#e99b64] mb-6 md:mb-4">
          Travel Tanzania in exceptional comfort.
        </h2>

        <p className=" text-sm md:text-xl mb-4 md:mb-6 max-w-2xl !font-avenir">
          Discover Tanzania’s iconic wildlife destinations with fully customized
          safari journeys.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-10 w-full md:w-auto px-4 md:px-0">
          <button
            onClick={() => {
              const section = document.getElementById("step-2");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full md:w-auto  !font-avenir text-[12px] tracking-[2.4px] uppercase bg-[#d87028] border border-[#e78e4b] text-white px-6 md:py-2.5 py-3 rounded-xs hover:bg-[#eb8034de] transition cursor-pointer whitespace-nowrap"
          >
            Get My Custom Safari →
          </button>

          <button
            onClick={() => {
              const section = document.getElementById("experience");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className=" w-full md:w-auto border-[0.5px] border-white bg-transparent !font-avenir text-[12px] tracking-[2.4px] uppercase px-6 md:py-2.5 py-3 rounded-xs  hover:bg-[#eb8034de] transition cursor-pointer whitespace-nowrap"
          >
            Explore Experiences
          </button>
        </div>
      </div>

      {/* Bottom Logos */}
      <div className="absolute bottom-4 left-0 w-full z-20">
        {/* MOBILE SLIDER */}
        <div className="md:hidden overflow-x-scroll scrollbar-hide px-4">
          <div className="flex items-center gap-1 divide-x divide-white/30 w-max min-w-max">
            {brands.map((brand) => (
              <div key={brand.id} className="flex-shrink-0 px-1">
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
