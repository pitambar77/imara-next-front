import imaralogo from "@/assets/imaralogo.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {

   const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const handleScrollToForm = () => {
      const section = document.getElementById("parks");
  
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };


  const certificates = [
    "/tripadvisor-wht-2017.png",
    "/tripadvisor-wht-2017.png",
    "/tripadvisor-wht-2017.png",
  ];

  return (
    <section className="relative h-[895px] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="/special-offers-banner.webp"
        alt="Tanzania Safari"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto h-full w-full max-w-[1140px] ">
        {/* ================= TOP BAR ================= */}
        <div className="flex items-start justify-between pt-[48px] px-4 sm:px-6 md:px-10 xl:px-0">
          {/* Logo */}
          <div className="h-[112px] w-[220px] overflow-hidden ">
            <Link href="/" aria-label="Go to homepage">
              <Image
                src={imaralogo}
                alt="Imara Kileleni Safaris"
                width={180}
                height={60}
                priority
                className="h-10 sm:h-11 md:h-12 lg:h-14 w-auto"
              />
            </Link>
          </div>
        </div>

        {/* ================= CENTER ================= */}
        <div
          className="
            absolute
            left-1/2
            top-[48%]
            w-full
            -translate-x-1/2
            -translate-y-1/2
            text-center
            text-white
          "
        >
          <h1
            className="
              text-4xl md:text-5xl lg:text-7xl font-semibold tracking-wide mb-2 md:mb-4 !font-cormorant"
          >
            TANZANIA
          </h1>

          <p
            className="
              m-0
              mt-[38px]
              !font-avenir
              text-[25px]
              font-normal
              leading-none
              tracking-[0.25em]
              text-white
              sm:text-[27px]
              lg:text-[29px]
            "
          >
            A Premium Safari Destination
          </p>

          <button
             type="button"
            aria-label="Plan my Tanzania safari"
            onClick={handleScrollToForm}
            className="
              mt-[72px]
              inline-flex
              py-2.5
              items-center
              justify-center
              rounded-[10px]
              bg-[#d87028]
              px-[34px]
              !font-avenir
              text-[14px]
              font-bold
              uppercase
              tracking-[0.02em]
              text-white
              transition
              duration-200
              cursor-pointer
              hover:bg-[#e78e4b]
            "
          >
            HELP ME PLAN
          </button>
        </div>
      </div>
    </section>
  );
}
