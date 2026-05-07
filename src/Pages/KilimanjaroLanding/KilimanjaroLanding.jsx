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

const cards = [
  {
    id: 1,
    image: "/why-visit-local.webp",
    title: "Guided With Patience",
    text: "The climb is paced with care, giving your body time to adjust as the trail rises through forest, moorland, alpine desert, and colder summit slopes.",
  },
  {
    id: 2,
    image: "/why-visit-last.webp",
    title: "Comfort Where Needed",
    text: "From camp arrangements to daily trail support, small details are handled properly so you can save energy, rest better, and focus on the climb ahead.",
  },
  {
    id: 3,
    image: "/tailored-safari-journey.webp",
    title: "Safety Comes First",
    text: "Guides monitor your pace, breathing, hydration, and altitude response each day, helping you move with confidence rather than pushing beyond what your body can manage.",
  },
];

const KilimanjaroLanding = ({ trips, page }) => {
  
  if (!page) {
    return <p className="p-6">No data found</p>;
  }

  /* HERO */
  const heroImage = "/mount-kilimanjaro.webp" || page.image;
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

  /* FAQ */
  const faqs =
    page.faq?.map((f) => ({
      question: f.question,
      answerBlocks: f.answer.map((a) => {
        if (a.type === "list") {
          return { type: "list", items: a.content };
        }
        return { type: a.type, text: a.content };
      }),
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

  /* WHY VISIT */
  const whyVisitCards =
    page.overviewinfo?.map((o, i) => ({
      id: i,
      image: o.image,
      title: o.title,
      text: o.description?.[0]?.content || "",
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

      <AsSeenIn />

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
        title="Climb Kilimanjaro with Trusted Mountain Experts"
        subtitle="A Kilimanjaro climb planned with care, patience, real mountain support, and summit-focused guidance."
        cards={cards}
      />

      <ReviewsSection />
      <Featured />
      <TailormadeSection />
    </>
  );
};

export default KilimanjaroLanding;
