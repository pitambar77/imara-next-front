"use client";

import React from "react";
import SerengetiMigrationTabs from "./SerengetiMigrationTabs";
import ChoosingSafariSection from "./ChoosingSafariSection";
import TripHighlights from "../../components/TripHighlights";
import BestTimeToVisitSection from "./BestTimeToVisitSection";
import BookWithConfidence from "../Home/BookWithConfidence";
import Featured from "../Home/Featured";

import AdventureTour from "../../components/AdventureTour";
import FAQSection from "../../components/FAQSection";
import OverviewSections from "../../components/OverviewSections";
import TabLink from "./TabLink";
import { slugify } from "../../utils/slugify";

import TailormadeSection from "../Home/TailormadeSection";
import TripsSection from "../../components/TripsSection";
import Banner from "../../components/Banner";
import ReviewsSection from "../Aboutus/ReviewsSection";

const SerengetiNationalPark = ({ data, allDestinations, trips }) => {
  if (!data) return <p className="p-10 text-center">No data found</p>;

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

  const relatedDestinations = allDestinations
    .filter((item) => item.destination === destination && item._id !== data._id)
    .slice(0, 8)
    .map((item) => ({
      id: item._id,
      image: item.landingImage || item.image,
      title: item.title,
      // description: item.overviewinfo?.[0]?.description?.[0]?.content || "",
      description: item.overviewinfo?.[0]?.description || "",
      link: `/tanzania-destinations/${slugify(item.title)}`,
    }));

  /* ================= FAQ ================= */
  /* ================= FAQ ================= */
  const faqs = aboutBooking.map((item) => ({
    question: item.question,
    answer: item.answer || "",
  }));

  /* ================= BEST TIME ================= */
  const monthData = besttime.flatMap((bt) =>
    (bt.section || []).map((m) => ({
      name: m.month,
      season: bt.title,
      rating: "Excellent",
      description: m.content,
    })),
  );

  /* ================= TRIP HIGHLIGHTS ================= */
  const hightlightTrips = highlight.flatMap((group, gIndex) =>
    (group.section || []).map((item, i) => ({
      id: `${gIndex}-${i}`,
      image: item.image,
      title: item.title,
      description: item.description,
      link: `/tanzania-destinations/${slugify(item.title)}`, // ✅ add this
    })),
  );

  const highlightTitle = highlight?.[0]?.heading || "";
  const highlightSubtitle = highlight?.[0]?.subtitle || "";

  /* ================= ADVENTURE ================= */
  const adventureSections = adventure.map((item) => ({
    image: item.image,
    heading: item.title,
    subheading: item.subtitle,
    description: item.description,
  }));

  return (
    <div>
      {/* ================= HERO ================= */}

      <Banner image={image} title={title} />

      <TabLink />

      {/* ================= OVERVIEW ================= */}
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
        btnlink="tanzania-safaris"
        showArrows={false}
      />

      {/* ================= MIGRATION ================= */}
      {migration.length > 0 && <SerengetiMigrationTabs data={migration} />}

      {/* ================= HIGHLIGHTS ================= */}
      {hightlightTrips.length > 0 && (
        <TripHighlights
          title={highlightTitle}
          subtitle={highlightSubtitle}
          data={hightlightTrips}
        />
      )}

      {/* ================= BEST TIME ================= */}
      {monthData.length > 0 && (
        <BestTimeToVisitSection
          title={besttime?.[0]?.title}
          subtitle={besttime?.[0]?.subtitle}
          staticMonths={monthData}
        />
      )}

      {/* ================= ADVENTURE ================= */}
      {adventureSections.length > 0 && (
        <AdventureTour sections={adventureSections} />
      )}

      {/* ================= FAQ ================= */}
      {faqs.length > 0 && (
        <FAQSection
          title={`Questions About ${title} `}
          subtitle={
            "Helpful answers to help you plan your visit with more confidence."
          }
          faqs={faqs}
        />
      )}

      {/* ================= RELATED DESTINATIONS ================= */}
      {relatedDestinations.length > 0 && (
        <TripHighlights
          title={`More Safari Places to Visit`}
          subtitle={
            "Explore nearby safari destinations featuring wildlife, scenery, and a variety of trips."
          }
          data={relatedDestinations}
        />
      )}

      {/* <ActiveTravelDestinations /> */}
      <BookWithConfidence />
      <ReviewsSection />
      <Featured />
      <TailormadeSection />
    </div>
  );
};

export default SerengetiNationalPark;
