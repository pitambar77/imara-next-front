

"use client";

import {
  IoIosCheckmarkCircleOutline,
  IoIosCloseCircleOutline,
} from "react-icons/io";

export default function FitSection() {
  return (
    <section className="bg-[#f9f9f9] py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Top Label */}
        <p className="!font-avenir text-xs md:text-sm tracking-[0.2em] text-[#d87029] uppercase mb-3">
          A Quick Reality Check
        </p>

        <div className="w-10 h-[1px] bg-[#d87029] mx-auto mb-6"></div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl !font-cormorant text-center text-[#111] mb-4">
          Is Imara Kileleni Safaris Your Kind of Safari Experience?
        </h2>

        <p className="text-center text-[#444] !font-avenir leading-6 text-[18px] max-w-2xl mx-auto mb-14">
          We believe extraordinary journeys begin with honest expectations. We
          are not trying to be everything to everyone — but for the right
          traveller, we create truly unforgettable Tanzania safaris.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 text-left">
          {/* LEFT - GREAT FIT */}
          <div className="bg-white rounded-xl p-4 md:p-8 shadow-sm border-t-4 border-[#d87029]">
            <p className="!font-avenir text-sm tracking-[0.2em] text-[#d87029] uppercase mb-4 mt-4">
              A Great Fit
            </p>

            <h3 className="!font-cormorant text-2xl md:text-3xl mb-8">
              Imara Kileleni Safaris is for you if…
            </h3>

            <ul className="space-y-4">
              {[
                `You seek a <strong>private, tailor-made Tanzania safari</strong>, not crowded group travel.`,
                `You value <strong>authentic experiences, expert planning, and seamless service</strong>.`,
                `You're travelling for a <strong>once-in-a-lifetime journey through Tanzania’s iconic wilderness</strong>.`,
                `You appreciate <strong>quality, comfort, and meaningful safari experiences</strong> over simply chasing the lowest price.`,
                `You want to experience Tanzania properly — from <strong>Serengeti and Ngorongoro</strong> to hidden gems beyond the ordinary route.`,
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 border-b border-b-[#f5dbca] pb-3 last:border-none"
                >
                  <span className="text-[#d87029] text-xl mt-1">
                    <IoIosCheckmarkCircleOutline />
                  </span>

                  <span
                    className="text-[#444] !font-avenir leading-7"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT - NOT A FIT */}
          <div className="bg-[#f3eee7] rounded-xl p-4 md:p-8 shadow-sm border-t-4 border-[#f2b891]">
            <p className="!font-avenir text-sm tracking-[0.2em] text-[#e47b36] uppercase mb-4 mt-4">
              Not the Right Fit
            </p>

            <h3 className="!font-cormorant text-2xl md:text-3xl mb-8">
              Imara Kileleni Safaris may not be for you if…
            </h3>

            <ul className="space-y-4">
              {[
                "You're only searching for the cheapest safari option available.",
                "You prefer fixed, one-size-fits-all itineraries without personalization.",
                "Your main priority is “just give me the lowest price.”",
                "You are looking for a rushed safari rather than a carefully designed Tanzania experience.",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 border-b border-b-[#f1cdb4] pb-3 last:border-none"
                >
                  <span className="text-[#e47b36] text-xl mt-1">
                    <IoIosCloseCircleOutline />
                  </span>

                  <span className="text-[#444] !font-avenir italic leading-7">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
