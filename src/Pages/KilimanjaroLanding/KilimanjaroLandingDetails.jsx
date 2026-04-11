

import React, { useEffect, useState } from "react";
import API from "../../api/axios.js";

import SafariToursSection from "../SafariDestination/SafariToursSection";
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
import ContactForm from "./ContactForm";
import WhyVisitSection from "../../components/WhyVisitSection";
import ReviewsSection from "../Aboutus/ReviewsSection";
import Featured from "../Home/Featured";

const jobData = [
  {
    position: "Trip Manager",
    location: "Europe 2026",
    linkText: "Read more",
  },
  {
    position: "Trip Manager",
    location: "Asia 2025/26",
    linkText: "Read more",
  },
  {
    position: "Trip Driver",
    location: "Europe 2026",
    linkText: "Read more",
  },
  {
    position: "On-Site Team Member",
    location: "Europe 2026",
    linkText: "Read more",
  },
];

const weatherData = [
  { month: "JAN", temp: "40°C", rain: "11mm" },
  { month: "FEB", temp: "36°C", rain: "12mm" },
  { month: "MAR", temp: "34°C", rain: "15mm" },
  { month: "APR", temp: "30°C", rain: "17mm" },
  { month: "MAY", temp: "26°C", rain: "6mm" },
  { month: "JUN", temp: "22°C", rain: "15mm" },
  { month: "JUL", temp: "23°C", rain: "8mm" },
  { month: "AUG", temp: "25°C", rain: "8mm" },
  { month: "SEP", temp: "31°C", rain: "9mm" },
  { month: "OCT", temp: "34°C", rain: "8mm" },
  { month: "NOV", temp: "36°C", rain: "9mm" },
  { month: "DEC", temp: "37°C", rain: "8mm" },
];

const KilimanjaroLandingDetails = () => {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH DATA ================= */
  useEffect(() => {
    const fetchPage = async () => {
      try {
        const res = await API.get("/kilimanjarolanding");
        setPage(res.data?.[0] || null);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPage();
  }, []);

  if (loading) return <p className="p-6">Loading...</p>;
  if (!page) return <p className="p-6">No data found</p>;

  /* ================= DATA MAPPINGS ================= */

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
        heading: block.heading,
        title: s.title,
        subtitle:s.subtitle,
        description: s.description,
      }))
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
        description: Array.isArray(m.description)
          ? m.description.map((d) => d.content)
          : [],
        image: m.image || "",
        events: [], // 👈 REQUIRED by UI (empty for now)
      }))
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
      <div
        className="relative w-full h-[40vh] md:h-[64vh] bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url('${heroImage}')` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <h2 className="text-xl md:text-5xl text-white uppercase z-10">
          {heroTitle}
        </h2>
      </div>

      {/* ================= PAGE SECTIONS ================= */}
      <SafariToursSection />

      <KilimanjaroRoute overview={page.overviewinfo} />

      <AdventureTour title="Adventure Tours" sections={adventureSections} />

      <TanzaniaExpertCTA />

      <WhyJoin />

      <Highlights title="As Route" trips={highlightTrips} />

      <PositionsSection
        title="Positions available"
        subtitle="Wanna work with awesome people in awesome places? Check out our latest vacancies below."
        positions={jobData}
      />

      <MonthGuide
        title="Month-by-month guide for travelling in Tanzania"
        tabs={monthTabs}
      />

      <MonthWeatherGrid data={weatherData} />

      <AsSeenIn />

      <FAQSection title="Top Frequently asked questions" faqs={faqs} />

      <BookWithConfidence />

      <ContactForm />

      <WhyVisitSection
        title="Why visit Tanzania with Imara Kileleni Safaris?"
        cards={whyVisitCards}
      />

      <ReviewsSection />

      <Featured />
    </>
  );
};

export default KilimanjaroLandingDetails;
