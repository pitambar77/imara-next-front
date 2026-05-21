"use client";

import React from "react";

// import API from "../../api/axios";
import OverviewSections from "../../components/OverviewSections";
import ChoosingSafariSection from "../SerengetiNationalPark/ChoosingSafariSection";
import AdventureTour from "../../components/AdventureTour";
import FAQSection from "../../components/FAQSection";
import BookWithConfidence from "../Home/BookWithConfidence";
import Featured from "../Home/Featured";
import TripsSection from "../../components/TripsSection";
import TailormadeSection from "../Home/TailormadeSection";
import Banner from "../../components/Banner";
import ReviewsSection from "../Aboutus/ReviewsSection";


const TravelgroupDetails = ({ slug, trips, item }) => {


  if (!item) return <p className="p-6">Not found</p>;

  /* ================= MAP ADVENTURE ================= */
  const adventureSections = item.adventure.map((a) => ({
    image: a.image,
    heading: a.title,
    subheading: a.subtitle,
    description: a.description,
  }));



  const safariFaqs = item.aboutBooking.map((q) => ({
    question: q.question,
    answer: q.answer || "",
  }));

  return (
    <div>


      <Banner image={item.image} title={item.title} />

      {/* ================= OVERVIEW ================= */}
      {item.overviewinfo.map((o) => (
        <OverviewSections
          key={o._id}
          label={o.title}
          title={o.subtitle}
          image={o.image}
          imagePosition="right"
          bg="#fcfcfc"
          paragraphs={o.description}
        />
      ))}

      <ChoosingSafariSection />
      <TripsSection
        bg="bg-[#fedec7]"
        trips={trips}
        destination="tanzania"
        layout="slider"
        btnname="See All Trips"
        btnlink="tanzania-safaris"
        showArrows={false}
      />

      {/* ================= ADVENTURE ================= */}
      <AdventureTour sections={adventureSections} />

      {/* ================= FAQ ================= */}
      <FAQSection title={item.FaqTitle} subtitle={item.FaqSubTitle} faqs={safariFaqs} />

      <BookWithConfidence />
      <ReviewsSection />
      <Featured />
      <TailormadeSection />
    </div>
  );
};

export default TravelgroupDetails;
