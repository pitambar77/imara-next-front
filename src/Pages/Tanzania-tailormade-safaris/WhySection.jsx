"use client";

import Image from "next/image";

export default function WhySection() {
  return (
    <section
      id="why-travel"
      className="bg-[#fdfaf5] py-12 md:py-20 px-4 md:px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center mb-8 md:mb-16">
          {/* Left Media */}
          <div className=" order-2 md:order-1 relative w-full h-[200px] sm:h-[260px] lg:h-[320px] bg-black rounded-lg overflow-hidden">
            <Image
              src="/new-vechicle.webp" // also fix path (see below)
              alt="Why section"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="order-1 md:order-2 text-center md:text-left ">
            <p className="text-xs md:text-sm text-center md:text-left !font-avenir tracking-[0.3em] text-[#d76e28] uppercase mb-3">
              Our Distinction
            </p>

            <div className="w-10 h-[1px] bg-[#d76e28] mb-6 mx-auto md:mx-0"></div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight !font-cormorant mb-4">
              Why Travel With Imara <br />
              Kileleni Safaris
            </h2>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#f5dbca]"></div>

        {/* Bottom Features */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#f5dbca] md:mt-4">
          {/* Item */}
          <div className=" p-4 md:p-6">
            <p className="text-sm  !font-avenir font-bold tracking-widest text-[#d76e28] mb-3">
              01
            </p>
            <h3 className=" text-2xl md:text-2xl  !font-cormorant leading-tight mb-3">
              Tailor-Made Tanzania Safari Planning
            </h3>
            <p className=" text-[#444] leading-relaxed !font-avenir">
              Every <strong> luxury Tanzania safari </strong> is customized around your interests,
              travel style, comfort level, and dream wildlife experiences.
            </p>
          </div>

          <div className="p-4 md:p-6">
            <p className="text-sm !font-avenir font-bold tracking-widest text-[#d76e28] mb-3">
              02
            </p>
            <h3 className="text-2xl !font-cormorant leading-tight mb-3">
              Expert Guides, Authentic Experiences
            </h3>
            <p className=" text-[#444] leading-relaxed !font-avenir">
              Our professional <strong> Tanzania safari guides </strong> combine local expertise,
              wildlife knowledge, and storytelling for truly meaningful safari
              journeys.
            </p>
          </div>

          <div className="p-4 md:p-6">
            <p className="text-sm !font-avenir font-bold tracking-widest text-[#d76e28] mb-3">
              03
            </p>
            <h3 className="text-2xl !font-cormorant leading-tight mb-3">
              Private Safaris, Better Game Viewing
            </h3>
            <p className=" text-[#444] leading-relaxed !font-avenir">
              Travel privately with expert guides, exclusive vehicles, and
              flexible schedules that unlock extraordinary <strong> wildlife safari 
              experiences </strong>.
            </p>
          </div>

          <div className="p-4 md:p-6">
            <p className="text-sm !font-avenir font-bold tracking-widest text-[#d76e28] mb-3">
              04
            </p>
            <h3 className="text-2xl !font-cormorant leading-tight mb-3">
              Stay Close To Tanzania’s Wildlife
            </h3>
            <p className=" text-[#444] leading-relaxed !font-avenir">
              Wake up in premium <strong> safari lodges and luxury camps </strong> positioned near
              Serengeti, Ngorongoro, and Tanzania’s most spectacular wildlife
              areas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
