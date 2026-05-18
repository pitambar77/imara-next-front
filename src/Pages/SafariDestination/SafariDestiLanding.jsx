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
// import KilimanjaroRoute from "../KilimanjaroLanding/KilimanjaroRoute";
import AdventureTour from "@/components/AdventureTour";
import MonthGuide from "@/components/MonthGuide";
import MonthWeatherGrid from "@/components/MonthWeatherGrid";
import AsSeenIn from "../KilimanjaroLanding/AsSeenIn";

const weatherData = [
  { month: "JAN", temp: "28°C", rain: "50mm" },
  { month: "FEB", temp: "28°C", rain: "80mm" },
  { month: "MAR", temp: "27°C", rain: "170mm" },
  { month: "APR", temp: "25°C", rain: "360mm" },
  { month: "MAY", temp: "22°C", rain: "210mm" },
  { month: "JUN", temp: "21°C", rain: "30mm" },
  { month: "JUL", temp: "20°C", rain: "10mm" },
  { month: "AUG", temp: "22°C", rain: "10mm" },
  { month: "SEP", temp: "24°C", rain: "20mm" },
  { month: "OCT", temp: "26°C", rain: "30mm" },
  { month: "NOV", temp: "27°C", rain: "210mm" },
  { month: "DEC", temp: "27°C", rain: "100mm" },
];

const SafariDestiLanding = ({ trips, page }) => {
  /* HERO */
  const heroImage = page.image;
  const heroTitle = page.title;

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

  console.log(page);

  return (
    <div>
      <Banner image={heroImage} title={heroTitle} />

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

      {/* <KilimanjaroRoute overview={page.overviewinfo} /> */}

      <AdventureTour sections={adventureSections} />

      {/* <SafariToursSection /> */}
      {/* <TripSection
        title="Europe Backpacking"
        buttonLabel="EXPLORE EUROPE"
        trips={trips}
      /> */}
      <WhyVisitTanzania
        title={relatedSection?.heading}
        subtitle={relatedSection?.subtitle}
        cards={relatedCards}
      />

      <TourGroupSection />

      <TripHighlights
        subtitle={
          "Explore memorable safari moments, wildlife scenes, and landscapes across Tanzania."
        }
      />

      <MonthGuide
        title={page.whenvisit[0].heading}
        tabs={monthTabs}
      />

      <MonthWeatherGrid data={weatherData} />

      <AsSeenIn travelguide={page.travelguide} />

      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Find clear answers to common questions before planning your trip."
        faqs={faqs}
      />
      <ReviewsSection />
      <Featured />
      <TailormadeSection />
    </div>
  );
};

export default SafariDestiLanding;
