
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/axios";
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

const ZanzibarDetailsPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get(`/zanzibardetails/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.error("Destination error:", err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="p-10 text-center">Loading...</p>;
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
    name: m.month,                // ✅ month name
    season: bt.title,             // ✅ group title
    rating: "Excellent",          // optional (UI only)
    description: [m.content],     // ✅ must be ARRAY
  }))
);


  /* ================= TRIP HIGHLIGHTS ================= */
const trips = highlight.flatMap((group, groupIndex) =>
  (group.section || []).map((item, index) => ({
    id: `${groupIndex}-${index}`,
    image: item.image,
    title: item.title,
    description: item.description,
  }))
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
      <div
        className="relative w-full h-[64vh] bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h2 className="text-xl md:text-5xl text-white uppercase z-10">
          {title}
        </h2>
      </div>

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

      {/* MIGRATION */}
     {migration.length > 0 && (
  <SerengetiMigrationTabs data={migration} />
)}

      {trips.length > 0 && (
  <TripHighlights
    title={`${destination} Trip Highlights`}
    data={trips}
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

      <ActiveTravelDestinations />
      <BookWithConfidence />
      <Featured />
    </div>
  );
};


export default ZanzibarDetailsPage
