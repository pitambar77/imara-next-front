"use client";

import React from "react";

import Banner from "../../components/Banner";

import AboutInfoSection from "./AboutInfoSection";
import OnTheRoadSection from "./OnTheRoadSection";
import OffTheRoadSection from "./OffTheRoadSection";
import SafariFeatureSection from "./SafariFeatureSection";
import ContikiCrewSection from "./ContikiCrewSection";

import ReviewsSection from "./ReviewsSection";

import Featured from "../Home/Featured";
import WhyVisitSection from "../../components/WhyVisitSection";
import FAQSection from "../../components/FAQSection";
import OverviewSections from "../../components/OverviewSections";

import Communication from "../../assets/Communication.webp";
import Knowledge from "../../assets/Knowledge.webp";
import Service from "../../assets/Service.webp";
import TailormadeSection from "../Home/TailormadeSection";
import Link from "next/link";
import { CalendarDays, Hourglass, ShieldCheck, Star, Wallet } from "lucide-react";

const AboutUs = ({ aboutData }) => {
  const data = [
    {
      id: 1,
      image: Communication,
      title: "Clear Open Communication",
      text: "Travellers share preferences, needs, and expectations, and we listen carefully, communicate openly, and coordinate with lodges and guides so every detail, dietary request, and wildlife wish list is understood, planned, and delivered without confusion.",
    },
    {
      id: 2,
      image: Knowledge,
      title: "Strong Local Knowledge",
      text: "Our team understands Tanzania’s landscapes, wildlife, and people, sharing that insight from first inquiry onward, helping travellers plan confidently while guides adapt routes and sightings to create meaningful safari and climbing experiences.",
    },
    {
      id: 3,
      image: Service,
      title: "Honest Experienced Service",
      text: "Integrity, fairness, and transparency guide every interaction, with clear explanations, realistic planning, and experienced teams delivering what is promised while handling challenges smoothly to maintain consistent service throughout each journey.",
    },
  ];

  if (!aboutData) return <p className="p-6">No data found</p>;

  const {
    title,
    subtitle,
    image,
    overview,
    overviewinfo,
    adventure,
    faq = [],
  } = aboutData;

  // const safariFaqs = faq.map((item) => ({
  //   question: item.question,
  //   answerBlocks: item.answer.map((a) => ({
  //     type: a.type,
  //     text: a.content,
  //   })),
  // }));

  const safariFaqs = faq.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  return (
    <>
      <div
        className="relative w-full aspect-[16/9] md:h-[500px] 2xl:h-[650px] bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        <h1 className=" text-3xl md:text-5xl text-white uppercase z-10 ">
          {title}
        </h1>
      </div>
      <div className="w-full bg-[#d76e28] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-center text-white text-[11px] sm:text-xs md:text-sm font-semibold leading-relaxed">
            {/* Rating */}
            <div className="flex items-center gap-1 sm:gap-2 flex-wrap justify-center">
              <span>RATED 5 / 5</span>

              <div className="flex items-center gap-1 text-yellow-300">
                <Star size={18} className=" fill-amber-300" />
                <Star size={18} className=" fill-amber-300" />
                <Star size={18} className=" fill-amber-300" />
                <Star size={18} className=" fill-amber-300" />
                <Star size={18} className=" fill-amber-300" />
              </div>
            </div>

            {/* Reviews */}
            <span className="opacity-90">BASED ON 100 VERIFIED REVIEWS</span>
          </div>
        </div>
      </div>
      <div className=" w-full bg-[#fedec7] py-8 md:py-16 px-4 ">
        <div className=" text-center max-w-3xl mx-auto  space-y-3 ">
          <h2 className=" text-xl md:text-3xl capitalize text-center text-[#1a1a1a]">
            About Us
          </h2>
          <h3 className=" font-extrabold text-[#444]">
            Customer focused journeys across Tanzania Safaris and Kilimanjaro
            Climbs with purpose
          </h3>
          <p className=" text-[#444]">
            Imara Kileleni Safaris creates and operates customer-oriented tours,
            safaris, and climbs, designing detailed itineraries with selected
            accommodation and activities, delivering well planned Tanzania
            Safaris and professionally guided Kilimanjaro Climbs built around
            clarity, comfort, and experience.{" "}
          </p>
        </div>
      </div>

      {overviewinfo.map((item, index) => (
        <OverviewSections
          key={index}
          label={item.subtitle}
          title={item.title}
          image={item.image}
          imagePosition="right"
          bg="#fcfcfc"
          paragraphs={item.description}
        />
      ))}

      <div className="bg-[#fedec7]">
        {" "}
        {/* soft peach background */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
          {/* Heading centered */}
          <h2 className="text-center text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-8 md:mb-16 capitalize">
            Book with confidence
          </h2>

          {/* Features row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center ">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="flex-none w-14 h-14 rounded-full bg-black flex items-center justify-center">
                < CalendarDays className="text-[#f3a85f] w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-[#444]">
                  Book early to secure preferred tour dates
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="flex-none w-14 h-14 rounded-full bg-black flex items-center justify-center">
                <Hourglass className="text-[#f3a85f] w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-[#444]">
                  Share accurate nationality birth dates passport details
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <div className="flex-none w-14 h-14 rounded-full bg-black flex items-center justify-center">
                <Wallet className="text-[#f3a85f] w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-[#444]">
                  Review price inclusions clearly before confirming booking
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start gap-4">
              <div className="flex-none w-14 h-14 rounded-full bg-black flex items-center justify-center">
                <ShieldCheck className="text-[#f3a85f] w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-[#444]">
                  Confirmed itineraries remain fixed and non-transferable
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-16">
            <Link
              href="/tailor-made-tours"
              className="px-[21px] py-2.5 cursor-pointer rounded-full border-1 hover:border-[#d87028] text-black font-semibold bg-transparent hover:bg-[#d87028] hover:text-white transition"
              aria-label="Find out more"
            >
              FIND OUT MORE
            </Link>
          </div>
        </div>
      </div>

      <OnTheRoadSection adventure={adventure} />
      <OffTheRoadSection />
      <ContikiCrewSection />
      <SafariFeatureSection />
      {/* <WhyVisitTanzania/> */}
      <WhyVisitSection
        title={" Why visit Tanzania with Imara Kileleni Safaris?"}
        subtitle={
          "Discover why local planning makes every Tanzania Safari feel smoother."
        }
        cards={data}
      />
      <ReviewsSection />

      <FAQSection
        title=" Questions People Ask About Us"
        subtitle={
          "Helpful answers about our values, planning style, and travel support."
        }
        faqs={safariFaqs}
      />
      <Featured />
      <TailormadeSection />
    </>
  );
};

export default AboutUs;
