"use client";

import { IoIosCheckmarkCircleOutline, IoIosCloseCircleOutline } from "react-icons/io";

export default function FitSection() {
  return (
    <section className="bg-[#f9f9f9] py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Top Label */}
        <p className=" !font-avenir text-xs md:text-sm tracking-[0.2em] text-[#d87029] uppercase mb-3">
          Honest Check
        </p>

        <div className="w-10 h-[1px] bg-[#d87029] mx-auto mb-6"></div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl !font-cormorant text-center text-[#111] mb-4">
          Is Imara Kileleni Safaris Right for You?
        </h2>

        <p className="text-center text-[#444] !font-avenir leading-6 text-[18px] max-w-2xl mx-auto mb-14">
          We’d rather be clear upfront than over-promise. Here’s who we’re a
          great fit for — and who we’re not.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 text-left">
          {/* LEFT - GREAT FIT */}
          <div className="bg-white rounded-xl p-4 md:p-8 shadow-sm border-t-4 border-[#d87029]">
            <p className=" !font-avenir text-sm tracking-[0.2em] text-[#d87029] uppercase mb-4 mt-4">
              A Great Fit
            </p>

            <h3 className=" !font-cormorant text-2xl md:text-3xl mb-8">
              Wild Voyager safaris are for you if...
            </h3>

            <ul className="space-y-4 ">
              {[
                "You want a private safari, not a group tour with strangers",
                "You value comfort, careful planning, and expert guidance",
                "You're traveling for a once-in-a-lifetime experience",
                "You’d rather do it properly than cheaply",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 border-b border-b-[#f5dbca] pb-3 last:border-none"
                >
                  <span className="text-[#d87029] text-xl"><IoIosCheckmarkCircleOutline /></span>
                  <span className="text-[#444] !font-avenir ">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT - NOT A FIT */}
          <div className="bg-[#f3eee7] rounded-xl p-4 md:p-8 shadow-sm border-t-4 border-[#f2b891]">
            <p className=" !font-avenir text-sm tracking-[0.2em] text-[#e47b36] uppercase mb-4 mt-4">
              Not a Fit
            </p>

            <h3 className=" !font-cormorant text-2xl md:text-3xl mb-8">
              We’re probably not for you if...
            </h3>

            <ul className="space-y-4">
              {[
                "You’re bargain-hunting for the lowest price",
                "You want fixed, cookie-cutter itineraries",
                "“Just give me the cheapest option” is your brief",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 border-b border-b-[#f1cdb4] pb-3 last:border-none"
                >
                  <span className="text-[#e47b36] text-xl"><IoIosCloseCircleOutline /></span>
                  <span className="text-[#444] !font-avenir italic">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
