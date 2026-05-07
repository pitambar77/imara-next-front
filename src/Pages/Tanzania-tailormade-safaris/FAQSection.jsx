"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    q: "When is the best time to visit Tanzania for a safari?",
    a: "Tanzania is a year-round destination. The Great Migration river crossings are at their most dramatic July–October in the northern Serengeti. The calving season (January–March) in the Ndutu Plains is equally spectacular. The dry seasons (June–October) offer the best game viewing across Tarangire, Lake Manyara and the Ngorongoro Crater. The green season (November–May) has fewer crowds, lush scenery and excellent bird life.",
  },
  {
    q: "How far in advance should I book?",
    a: "We recommend booking 6–12 months in advance for peak seasons.",
  },
  {
    q: "Is Tanzania safe for US travelers?",
    a: "Yes, Tanzania is considered safe with proper guidance.",
  },
  {
    q: "Do I need vaccinations or a visa?",
    a: "Most travelers need a visa and recommended vaccinations.",
  },
  {
    q: "What makes Wild Voyager different from other operators?",
    a: "We focus on fully customized luxury experiences.",
  },
  {
    q: "Should I combine my Tanzania safari with Zanzibar?",
    a: "Yes, it's a perfect combination of safari + beach.",
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
                src="https://media.istockphoto.com/id/2244811741/photo/masai-giraffe-walks-across-a-dirt-road-in-front-of-a-safari-vehicle-on-the-savannah-plains-of.jpg?s=612x612&w=0&k=20&c=FKGtQLi8vV0-C_wJWMKB4Vd55s_eEQb5v7gt449mgZY="
                alt="FAQ"
                width={600}
                height={400}
                className="object-cover w-full h-[200px] md:h-[300px] lg:h-[260px]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center flex-col text-white">
                <div className="w-14 h-14 rounded-full bg-white/80 flex items-center justify-center mb-2">
                  ▶
                </div>
                <p className=" !font-avenir text-xs tracking-widest uppercase">
                  Watch Our FAQ Guide
                </p>
              </div>
            </div>

            {/* Resource Card */}
            <div className="bg-white rounded-md p-4 flex items-center gap-4 mb-4 shadow-sm">
              <Image
                src="https://media.istockphoto.com/id/2244811741/photo/masai-giraffe-walks-across-a-dirt-road-in-front-of-a-safari-vehicle-on-the-savannah-plains-of.jpg?s=612x612&w=0&k=20&c=FKGtQLi8vV0-C_wJWMKB4Vd55s_eEQb5v7gt449mgZY="
                alt=""
                width={60}
                height={100}
                className="rounded"
              />
              <div className="flex-1">
                <p className=" !font-avenir text-sm text-[#d87029] uppercase tracking-widest">
                  Free Resource
                </p>
                <h4 className=" !font-cormorant font-semibold text-lg py-2">
                  Guide to East Africa Safaris
                </h4>
                <p className=" !font-avenir text-sm text-[#444]">
                  Everything you need to plan confidently.
                </p>
              </div>
              <span className="text-[#d87029]">→</span>
            </div>

            {/* FAQ Page Card */}
            <div className="bg-white rounded-md p-4 flex items-center gap-4 shadow-sm">
              <Image
                src="https://media.istockphoto.com/id/2244811741/photo/masai-giraffe-walks-across-a-dirt-road-in-front-of-a-safari-vehicle-on-the-savannah-plains-of.jpg?s=612x612&w=0&k=20&c=FKGtQLi8vV0-C_wJWMKB4Vd55s_eEQb5v7gt449mgZY="
                alt=""
                width={60}
                height={100}
                className="rounded"
              />
              <div className="flex-1">
                <p className=" !font-avenir text-sm text-[#d87029] uppercase tracking-widest">
                  Full FAQ Page
                </p>
                <h4 className=" !font-cormorant font-semibold text-lg py-2">
                  Browse All FAQs
                </h4>
                <p className=" !font-avenir text-sm text-[#444]">
                  Visas, vaccinations, packing, money — everything answered.
                </p>
              </div>
              <span className="text-[#d87029]">→</span>
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
                {openIndex === i && (
                  <p className=" !font-avenir text-[#444] mt-4 leading-7">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
