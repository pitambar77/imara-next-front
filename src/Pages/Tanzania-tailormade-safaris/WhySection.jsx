"use client";

import Image from "next/image";

export default function WhySection() {
  return (
    <section id="why-travel" className="bg-[#fdfaf5] py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center mb-8 md:mb-16">
          {/* Left Media */}
          <div className=" order-2 md:order-1 relative w-full h-[200px] sm:h-[260px] lg:h-[320px] bg-black rounded-lg overflow-hidden">
            <Image
              src="https://media.istockphoto.com/id/502992633/photo/wedding-couple.jpg?s=612x612&w=0&k=20&c=YdGoZ9xz5NCJlwxkpXN-XaUN4mcatJ8LhD10p0le57U=" // also fix path (see below)
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
              Why Travel With Imara <br/>
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
            <p className="text-sm  !font-avenir font-bold tracking-widest text-[#d76e28] mb-3">01</p>
            <h3 className=" text-2xl md:text-2xl  !font-cormorant leading-tight mb-3">
              Seamless, Start to Finish
            </h3>
            <p className=" text-[#444] leading-relaxed !font-avenir">
              From the first email to the last night at camp, every detail is
              handled for you. Arrivals, transfers, permits, timings — nothing
              slips. Our guests consistently tell us it was the most relaxed
              they’ve ever felt on a trip.
            </p>
          </div>

          <div className="p-4 md:p-6">
            <p className="text-sm !font-avenir font-bold tracking-widest text-[#d76e28] mb-3">02</p>
            <h3 className="text-2xl !font-cormorant leading-tight mb-3">Guides Who Tell Stories</h3>
            <p className=" text-[#444] leading-relaxed !font-avenir">
              Our guides don’t just find animals — they read the bush,
              anticipate behavior, and turn every drive into a story. Most have
              10+ years in these parks.
            </p>
          </div>

          <div className="p-4 md:p-6">
            <p className="text-sm !font-avenir font-bold tracking-widest text-[#d76e28] mb-3">03</p>
            <h3 className="text-2xl !font-cormorant leading-tight mb-3">
              More Wildlife Than You Imagined
            </h3>
            <p className=" text-[#444] leading-relaxed !font-avenir">
              Private vehicles, insider knowledge of where animals move, and the
              freedom to stay out longer when the action is happening.
            </p>
          </div>

          <div className="p-4 md:p-6">
            <p className="text-sm !font-avenir font-bold tracking-widest text-[#d76e28] mb-3">04</p>
            <h3 className="text-2xl !font-cormorant leading-tight mb-3">Wake Up in the Wildlife</h3>
            <p className=" text-[#444] leading-relaxed !font-avenir">
              We place you inside the reserves — not an hour’s drive away. You
              hear lions at night and step into the action at dawn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
