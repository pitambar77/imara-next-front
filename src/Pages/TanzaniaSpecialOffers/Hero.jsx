

"use client";

import imaralogo from "@/assets/imaralogo.png";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const handleScrollToForm = () => {
    const section = document.getElementById("parks");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="relative h-[95vh] w-full overflow-hidden md:h-[895px]">
      {/* Background Image */}
      <Image
        src="/special-offers-banner.webp"
        alt="Tanzania Safari"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto h-full w-full max-w-[1140px]">
        {/* ================= TOP BAR ================= */}
        <div className="flex items-start justify-between px-4 pt-[48px] sm:px-6 md:px-10 xl:px-0">
          {/* Logo */}
          <div className="h-[112px] w-[220px] overflow-hidden">
            <Link href="/" aria-label="Go to homepage">
              <Image
                src={imaralogo}
                alt="Imara Kileleni Safaris"
                width={180}
                height={60}
                priority
                className="h-10 w-auto sm:h-11 md:h-12 lg:h-14"
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
              !font-cormorant
              mb-2
              text-4xl
              font-semibold
              tracking-wide
              md:mb-4
              md:text-5xl
              lg:text-7xl
            "
          >
            Tanzania Safaris
          </h1>

          <p
            className="
              !font-avenir
              m-0
              mt-[20px]
              text-[25px]
              text-white
              
            "
          >
            Discover tailor-made journeys through the heart of Africa.
          </p>

          <button
            type="button"
            aria-label="Plan my Tanzania safari"
            onClick={handleScrollToForm}
            className="
              mt-[45px]
              inline-flex
              cursor-pointer
              items-center
              justify-center
              rounded-[10px]
              border
              border-[#e78e4b]
              bg-[#d87028]
              px-[34px]
              py-2.5
              !font-avenir
              text-[14px]
              font-bold
              uppercase
              tracking-[0.02em]
              text-white
              transition
              duration-200
              hover:bg-[#e78e4b]
              md:mt-[55px]
            "
          >
            HELP ME PLAN
          </button>
        </div>
      </div>
    </section>
  );
}
