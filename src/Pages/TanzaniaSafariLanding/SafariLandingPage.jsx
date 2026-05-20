"use client";

import React from "react";
import Banner from "../../components/Banner";
import SafariInfoSection from "./SafariInfoSection";
import TanzaniaTabsSection from "./TanzaniaTabsSection";
import GuestReviewSection from "./GuestReviewSection";

import TourGroupSection from "./TourGroupSection";
import WhentoGo from "./WhentoGo";
import TripHighlights from "./TripHighlights";
import Featured from "../Home/Featured";

import TailormadeSection from "../Home/TailormadeSection";
import TripsSection from "../../components/TripsSection";
import FAQSection from "@/components/FAQSection";
import ReviewsSection from "../Aboutus/ReviewsSection";

const SafariLandingPage = ({ trips, destination }) => {
  const faqSection = destination?.faq?.[0];

  if (!destination) return null;

  return (
    <div>
      <Banner
        image={"/tanzania destination.webp"}
        title={destination.title}
        buttonText="Plan A Trip"
        onButtonClick={"/tailor-made-tours"}
      />
      <SafariInfoSection overview={destination.overviewinfo?.[0]} />

      <TanzaniaTabsSection taboverview={destination.taboverview} />

      <GuestReviewSection />

      <TripsSection
        title="Top Tanzania Safari & Tours"
        subtitle="Handpicked safari experiences across Tanzania"
        trips={trips}
        destination="tanzania"
        layout="grid"
      />
      <TourGroupSection />

      <WhentoGo />

      <TripHighlights
        subtitle={
          "Explore memorable safari moments, wildlife scenes, and landscapes across Tanzania."
        }
      />

      {faqSection && (
        <FAQSection
          title={faqSection.title}
          subtitle={faqSection.subtitle}
          faqs={faqSection.faqs}
        />
      )}
      <ReviewsSection />
      <Featured />
      <TailormadeSection />
    </div>
  );
};

export default SafariLandingPage;
