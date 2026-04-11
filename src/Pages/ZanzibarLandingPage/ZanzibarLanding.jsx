"use client";

import React from "react";
// import API from "../../api/axios";
import SerengetiMigrationTabs from "../SerengetiNationalPark/SerengetiMigrationTabs";
import ChoosingSafariSection from "../SerengetiNationalPark/ChoosingSafariSection";
import TripHighlights from "../../components/TripHighlights";
import BestTimeToVisitSection from "../SerengetiNationalPark/BestTimeToVisitSection";
import BookWithConfidence from "../Home/BookWithConfidence";
import Featured from "../Home/Featured";
import ActiveTravelDestinations from "../TravelGuideDetails/ActiveTravelDestinations";
import AdventureTour from "../../components/AdventureTour";
import FAQSection from "../../components/FAQSection";
import OverviewSections from "../../components/OverviewSections";
import TabLink from "./TabLink";

import TailormadeSection from "../Home/TailormadeSection";
import TripsSection from "../../components/TripsSection";
import Banner from "../../components/Banner";

const ZanzibarLanding = ({ trips, data }) => {


  if (!data) {
    return <p className="p-10 text-center">No data found</p>;
  }

  const {
    title,
    subtitle,
    destination,
    image,
    overviewinfo = [],
    highlight = [],
    besttime = [],
    migration = [],
    adventure = [],
    aboutBooking = [],
  } = data;

  /* ================= FAQ ================= */
  const faqs = aboutBooking.map((item) => ({
    question: item.question,
    answerBlocks: item.answer.map((a) => ({
      type: a.type,
      text: a.content,
    })),
  }));

  const monthData = besttime.flatMap((bt) =>
    (bt.section || []).map((m) => ({
      name: m.month, // ✅ month name
      season: bt.title, // ✅ group title
      rating: "Excellent", // optional (UI only)
      description: [m.content], // ✅ must be ARRAY
    })),
  );

  /* ================= TRIP HIGHLIGHTS ================= */
  const highlightTrips = highlight.flatMap((group, groupIndex) =>
    (group.section || []).map((item, index) => ({
      id: `${groupIndex}-${index}`,
      image: item.image,
      title: item.title,
      description: item.description,
      link: `/package/${item.slug}`, // or your correct URL
    })),
  );

  /* ================= ADVENTURE ================= */
  const adventureSections = adventure.map((item) => ({
    image: item.image,
    heading: item.title,
    subheading: item.subtitle,
    description: item.description,
  }));

  return (
    <div>
      {/* HERO */}

      <Banner image={image} title={title} />

      <TabLink />

      {/* OVERVIEW */}
      {overviewinfo.map((item) => (
        <OverviewSections
          key={item._id}
          label={item.subtitle}
          title={item.title}
          image={item.image}
          imagePosition="right"
          bg="#fcfcfc"
          paragraphs={item.description}
        />
      ))}

      <ChoosingSafariSection />
      <TripsSection
        bg="bg-[#fedec7]"
        trips={trips}
        destination="tanzania"
        layout="slider"
        btnname="See All Trips"
        btnlink="/tanzania-safaris"
        showArrows={false}
      />

      {/* MIGRATION */}
      {migration.length > 0 && <SerengetiMigrationTabs data={migration} />}

      {highlightTrips.length > 0 && (
        <TripHighlights
          title={`${destination} Trip Highlights`}
          data={highlightTrips}
          subtitle="Lorem Ipsum is simply dummy text of the printing"
        />
      )}

      {monthData.length > 0 && (
        <BestTimeToVisitSection
          title={`Best time to visit ${title}`}
          staticMonths={monthData}
        />
      )}

      {/* ADVENTURE */}
      {adventureSections.length > 0 && (
        <AdventureTour sections={adventureSections} />
      )}

      {/* FAQ */}
      {faqs.length > 0 && (
        <FAQSection
          title="What travellers ask about our safari tours?"
          faqs={faqs}
        />
      )}

      {/* <ActiveTravelDestinations /> */}
      <BookWithConfidence />
      <Featured />
      <TailormadeSection />
    </div>
  );
};

export default ZanzibarLanding;
