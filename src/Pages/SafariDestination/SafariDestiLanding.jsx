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

const SafariDestiLanding = ({ trips }) => {
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

      <ReviewsSection />

      <TourGroupSection />

      <TripHighlights
        subtitle={"Lorem Ipsum is simply dummy text of the printing"}
      />
      <Featured />
      <TailormadeSection />
    </div>
  );
};

export default SafariDestiLanding;
