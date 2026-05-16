"use client";

import React from "react";

// import SafariToursSection from "../SafariDestination/SafariToursSection";
import KilimanjaroRoute from "./KilimanjaroRoute";
import AdventureTour from "../../components/AdventureTour";
import TanzaniaExpertCTA from "./TanzaniaExpertCTA";
import WhyJoin from "./WhyJoin";
import Highlights from "../../components/Highlights";
import PositionsSection from "../../components/PositionsSection";
import MonthGuide from "../../components/MonthGuide";
import MonthWeatherGrid from "../../components/MonthWeatherGrid";
import AsSeenIn from "./AsSeenIn";
import FAQSection from "../../components/FAQSection";
import BookWithConfidence from "../Home/BookWithConfidence";
// import ContactForm from "./ContactForm";
import WhyVisitSection from "../../components/WhyVisitSection";
// import GuestReviewSection from "../TanzaniaSafariLanding/GuestReviewSection";
import ReviewsSection from "../Aboutus/ReviewsSection";
import Featured from "../Home/Featured";
import BookAssurance from "./BookAssurance.jsx";
// import useSEO from "../../hooks/useSEO.js";
import EnquiryForm from "../../components/EnquiryForm.jsx";
import TailormadeSection from "../Home/TailormadeSection.jsx";
// import TripsSection from "../../components/TripsSection.jsx";
import TripsWithFilters from "./TripsWithFilters.jsx";
import Banner from "../../components/Banner.jsx";

const jobData = [
  {
    position: "Climbing Routes",
    location: "6 official routes",
  },
  {
    position: "Climbers",
    location: "1000+ climbers",
  },
  {
    position: "Success Rates",
    location: "More than 95 %",
  },
  {
    position: "Local Experts",
    location: "More than 30+ seasoned crew",
  },
];

const weatherData = [
  { month: "JAN", temp: "25°C", rain: "35mm" },
  { month: "FEB", temp: "25°C", rain: "50mm" },
  { month: "MAR", temp: "25°C", rain: "119mm" },
  { month: "APR", temp: "24°C", rain: "350mm" },
  { month: "MAY", temp: "22°C", rain: "236mm" },
  { month: "JUN", temp: "21°C", rain: "38mm" },
  { month: "JUL", temp: "20°C", rain: "25mm" },
  { month: "AUG", temp: "21°C", rain: "15mm" },
  { month: "SEP", temp: "21°C", rain: "14mm" },
  { month: "OCT", temp: "24°C", rain: "25mm" },
  { month: "NOV", temp: "25°C", rain: "63mm" },
  { month: "DEC", temp: "24°C", rain: "53mm" },
];

const KilimanjaroLanding = ({ trips, page }) => {
  if (!page) {
    return <p className="p-6">No data found</p>;
  }

  /* HERO */
  const heroImage = page.image;
  const heroTitle = page.title;

  /* ROUTE */
  const routeData = page.route || [];

  /* ADVENTURE */
  const adventureSections =
    page.adventure?.flatMap((block) =>
      block.section.map((s) => ({
        image: s.image,
        title: block.heading,
        heading: s.title,
        subheading: s.subtitle,
        description: s.description,
      })),
    ) || [];

  const highlightTrips =
    page.route?.map((r, index) => ({
      id: r._id || index,
      image: r.image,
      title: r.title,
      description: r.description,
    })) || [];

  const faqs =
    page.faq?.map((f) => ({
      question: f.question,
      answer: f.answer,
    })) || [];

  /* MONTH GUIDE */
  const monthTabs =
    page.whenvisit?.flatMap((w, wi) =>
      w.months.map((m, mi) => ({
        id: `${wi}-${mi}`,
        label: m.monthname || `Month ${mi + 1}`,
        contentTitle: m.title || "",
        description: m.description || [], // ✅ KEEP FULL OBJECT
        image: m.image || "",
        events: [], // optional
      })),
    ) || [];

  const relatedSection = page.relatedsection?.[0];

  const relatedCards =
    relatedSection?.section?.map((item, index) => ({
      id: index,

      image: item.image,

      title: item.title,

      subtitle: item.subtitle,

      text: item.description,
    })) || [];

  return (
    <>
      {/* ================= HERO ================= */}

      <Banner image={heroImage} title={heroTitle} />

      <TripsWithFilters
        title="Top Kilimanjaro Packages"
        subtitle="Handpicked Kilimanjaro Climbing Experiences"
        trips={trips}
        destination={["kili"]}
        category="Choose Your Route"
        regions={[
          "Machame",
          "Lemosho",
          "Rongai",
          "Umbwe",
          "Marangu",
          "Northern Circuit",
        ]}
      />

      <KilimanjaroRoute overview={page.overviewinfo} />

      <AdventureTour sections={adventureSections} />

      <TanzaniaExpertCTA />

      <WhyJoin />

      <Highlights
        title="Kilimanjaro Climbing Routes"
        trips={highlightTrips}
        subtitle="Explore Kilimanjaro routes designed for different goals and climbing styles."
      />

      <PositionsSection
        title="Our Track Record"
        subtitle="Guiding climbers with steady care, deep experience, and thoughtful safety standards built from years of paying close attention to the mountain’s shifting moods.
"
        positions={jobData}
      />

      <MonthGuide
        title="Month-by-Month Guide for Climbing Kilimanjaro"
        tabs={monthTabs}
      />

      <MonthWeatherGrid data={weatherData} />

      <AsSeenIn travelguide={page.travelguide} />

      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Find clear answers to common questions before planning your trip."
        faqs={faqs}
      />

      <BookAssurance />
      {/* <ContactForm /> */}
      <EnquiryForm
        formType="Kilimanjaro form"
        formheading="Plan Your Kilimanjaro Climb"
        formsubheading="Our team is always here to help you plan your climb."
      />
      <WhyVisitSection
        title={relatedSection?.heading}
        subtitle={relatedSection?.subtitle}
        cards={relatedCards}
      />

      <ReviewsSection />
      <Featured />
      <TailormadeSection />
    </>
  );
};

export default KilimanjaroLanding;
