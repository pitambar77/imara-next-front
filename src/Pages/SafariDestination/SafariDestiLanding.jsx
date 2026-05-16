"use client";

import React from "react";
import Image from "next/image";
// import SafariToursSection from "./SafariToursSection";
// import TripSection from "../../components/TripSection";
import WhyVisitTanzania from "../Aboutus/WhyVisitTanzania";
import ReviewsSection from "../Aboutus/ReviewsSection";
import TourGroupSection from "../TanzaniaSafariLanding/TourGroupSection";
import TripHighlights from "../TanzaniaSafariLanding/TripHighlights";
import Featured from "../Home/Featured";
// import SafariTour from "../TanzaniaSafariLanding/SafariTour";
import banner from "../../assets/imara-home-banner-3.webp";

import TailormadeSection from "../Home/TailormadeSection";
// import TripsSection from "../../components/TripsSection";
import TripsWithFilters from "../KilimanjaroLanding/TripsWithFilters";
import Banner from "../../components/Banner";
import FAQSection from "@/components/FAQSection";

const SafariDestiLanding = ({ trips, data }) => {
  const faqSection = data?.faq?.[0];

  return (
    <div>
      <Banner image={banner} title={"TANZANIA SAFARI"} />

      {/* <SafariTour /> */}

      {/* <TripsSection
        title="Top Tanzania Safari & Tours"
        // subtitle="Handpicked safari experiences across Tanzania"
        destination="tanzania"
        layout="grid"
      /> */}

      <TripsWithFilters
        title="Top Tanzania Safari & Tours"
        subtitle="Handpicked safari experiences across Tanzania"
        trips={trips}
        destination={["tanzania", "day-trip"]}
        category="Choose Your Route"
        regions={["Arusha", "Ngorongoro", "Tarangire", "Manyara"]}
      />

      {/* <SafariToursSection /> */}
      {/* <TripSection
        title="Europe Backpacking"
        buttonLabel="EXPLORE EUROPE"
        trips={trips}
      /> */}
      <WhyVisitTanzania />

      <TourGroupSection />

      <TripHighlights
        subtitle={"Explore memorable safari moments, wildlife scenes, and landscapes across Tanzania."}
      />

      {/* <FAQSection
        title={faqSection.title}
        subtitle={faqSection.subtitle}
        faqs={faqSection.faqs}
      /> */}
      <ReviewsSection />
      <Featured />
      <TailormadeSection />
    </div>
  );
};

export default SafariDestiLanding;
