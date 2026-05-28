"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    q: "Are your safaris private or group tours?",
    a: "All our safaris are private and tailor-made. Your journey is designed around your interests, travel style, pace, and preferred experiences — no shared buses or fixed group schedules.",
  },

  {
    q: "Which Tanzania destinations do you specialize in?",
    a: "We curate safaris across Tanzania’s most iconic destinations, including <strong>Serengeti National Park, Ngorongoro Crater, Tarangire, Lake Manyara, Zanzibar, Ruaha, and Nyerere National Park (Selous)</strong>.",
  },

  {
    q: "Can you customize my itinerary?",
    a: "Absolutely. Every traveller is different. Whether you're planning a <strong>luxury safari, honeymoon, family adventure, migration safari, or beach & bush escape</strong>, we tailor the experience around you.",
  },

  {
    q: "What is included in your safari packages?",
    a: "Most safari packages typically include:",
    list: [
      "Accommodation",
      "Private safari vehicle & professional guide",
      "Park fees",
      "Meals as mentioned in the itinerary",
      "Airport transfers",
      "Internal arrangements as specified",
    ],
    bottom:
      "Your proposal will clearly outline all inclusions and exclusions before booking.",
  },

  {
    q: "When is the best time to visit Tanzania?",
    a: "Tanzania is a year-round safari destination. The best timing depends on your travel goals:",
    list: [
      "<strong>June – October:</strong> Best for wildlife viewing & dry season safaris",
      "<strong>December – March:</strong> Calving season & migration experiences",
      "<strong>January – February:</strong> Excellent for Serengeti migration births",
      "<strong>Zanzibar:</strong> Great throughout much of the year",
    ],
    bottom:
      "We’ll always recommend the best season based on your safari priorities.",
  },

  {
    q: "Why travel with Imara Kileleni Safaris?",
    a: "Because we focus on <strong>personalized planning, authentic Tanzania experiences, expert local knowledge, and seamless service</strong> — creating safaris that feel deeply memorable, not mass-produced.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-[#f6f3ee] py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <p className=" !font-avenir text-xs md:text-sm tracking-[0.2em] text-[#d87029] uppercase mb-3">
            Common Questions
          </p>
          <div className="w-10 h-[1px] bg-[#d87029] mx-auto mb-4 md:mb-6"></div>

          <h2 className=" !font-cormorant text-3xl md:text-4xl lg:text-5xl text-[#111]">
            Everything You Need to Know
          </h2>
        </div>

        {/* Layout */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <div>
            {/* Video Card */}
            <div className="relative rounded-md overflow-hidden mb-6">
              <Image
                src="/imara-vechille-1.webp"
                alt="FAQ"
                width={600}
                height={400}
                className="object-cover w-full h-[200px] md:h-[300px] lg:h-[260px]"
              />

              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-black/30 flex items-center justify-center flex-col text-white">
                <div className="w-14 h-14 rounded-full bg-white/80 flex items-center justify-center mb-2">
                  ▶
                </div>
                <p className=" !font-avenir text-xs tracking-widest uppercase">
                  Watch Our FAQ Guide
                </p>
              </div> */}
            </div>
            <div
              onClick={() => {
                const section = document.getElementById("step-2");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className=" cursor-pointer"
            >
              {/* Resource Card */}
              <div className="bg-white rounded-md p-4 flex items-center gap-4 mb-4 shadow-sm">
                <Image
                  src="/imara-vechille-1.webp"
                  alt=""
                  width={60}
                  height={100}
                  className="rounded"
                />
                <div className="flex-1">
                  <p className=" !font-avenir text-sm text-[#d87029] uppercase tracking-widest">
                    Chat with Experts
                  </p>
                  <h4 className=" !font-cormorant font-semibold text-lg py-2">
                    Plan Tanzania Safaris with local specialists
                  </h4>
                  <p className=" !font-avenir text-sm text-[#444]">
                    Ask questions and get clear safari guidance
                  </p>
                </div>
                <span className="text-[#d87029]">→</span>
              </div>

              {/* FAQ Page Card */}
            </div>
            <div
              onClick={() => {
                const section = document.getElementById("step-2");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className=" cursor-pointer"
            >
              <div className="bg-white rounded-md p-4 flex items-center gap-4 shadow-sm">
                <Image
                  src="/imara-vechille-1.webp"
                  alt=""
                  width={60}
                  height={100}
                  className="rounded"
                />
                <div className="flex-1">
                  <p className=" !font-avenir text-sm text-[#d87029] uppercase tracking-widest">
                    Expert Safari Help
                  </p>
                  <h4 className=" !font-cormorant font-semibold text-lg py-2">
                    Ask Us Anything
                  </h4>
                  <p className=" !font-avenir text-sm text-[#444]">
                    Get clear answers before booking
                  </p>
                </div>
                <span className="text-[#d87029]">→</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (Accordion) */}
          <div className="divide-y divide-[#f6d3bc] border-t border-t-[#f6d3bc]">
            {faqs.map((item, i) => (
              <div key={i} className=" py-3 md:py-5">
                {/* Question */}
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex justify-between items-center text-left cursor-pointer"
                >
                  <span
                    className={` !font-avenir font-medium transition hover:text-[#d87029] ${
                      openIndex === i ? "text-[#d87029]" : "text-[#444]"
                    }`}
                  >
                    {item.q}
                  </span>
                  <span className="text-[#d87029] text-xl">
                    {openIndex === i ? "×" : "+"}
                  </span>
                </button>

                {/* Answer */}
                {/* {openIndex === i && (
                  <p className=" !font-avenir text-[#444] mt-4 leading-7">
                    {item.a}
                  </p>
                )} */}
                {/* Answer */}
                {openIndex === i && (
                  <div className="mt-4">
                    {/* Main Answer */}
                    {item.a && (
                      <p
                        className="!font-avenir text-[#444] leading-7"
                        dangerouslySetInnerHTML={{ __html: item.a }}
                      />
                    )}

                    {/* List */}
                    {item.list && (
                      <ul className="mt-4 space-y-2 ml-4">
                        {item.list.map((listItem, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-[#d87029] text-lg ">•</span>

                            <span
                              className="!font-avenir text-[#444] leading-7"
                              dangerouslySetInnerHTML={{ __html: listItem }}
                            />
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Bottom Text */}
                    {item.bottom && (
                      <p
                        className="!font-avenir text-[#444] leading-7 mt-4"
                        dangerouslySetInnerHTML={{ __html: item.bottom }}
                      />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
