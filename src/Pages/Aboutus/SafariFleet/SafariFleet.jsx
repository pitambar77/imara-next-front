"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import VechileInfo from "./VechileInfo";
import VehicleAndCabinSection from "./VehicleAndCabinSection";
import SafariExtrasSection from "./SafariExtrasSection";
import BookWithConfidence from "../../Home/BookWithConfidence";
import Featured from "../../Home/Featured";
import FAQSection from "../../../components/FAQSection";
import OverviewSections from "../../../components/OverviewSections";
import TailormadeSection from "../../Home/TailormadeSection";
import ReviewsSection from "../ReviewsSection";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/fleet`;

const SafariFleet = () => {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH DATA ================= */
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        // API returns array → use first object
        setPage(res.data?.[0] || null);
      })
      .catch((err) => console.error("API ERROR:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-10 text-center">Loading...</p>;
  if (!page) return <p className="p-10 text-center">No data found</p>;

  /* ================= DATA MAPPING ================= */

  /* HERO */
  const heroTitle = page.title;
  const heroImage = page.image;

  /* OVERVIEW */
  const overview = page.overviewinfo?.[0];

  /* FAQ */
  const faqs =
    page.faq?.map((f) => ({
      question: f.question,
      answer: f.answer,
    })) || [];

  return (
    <div>
      <div className="relative w-full h-[40vh] md:h-[64vh]">
        <Image src={heroImage} alt={heroTitle} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/30"></div>

        <h1 className="absolute inset-0 flex items-center justify-center text-2xl md:text-5xl text-white uppercase">
          {heroTitle}
        </h1>
      </div>

      {/* ================= OVERVIEW ================= */}
      {overview && (
        <OverviewSections
          label={overview.subtitle || "Tanzania Safaris"}
          title={overview.title}
          // image={overviewimage || '/safari-fleet-1.webp'}
          image="/safari-fleet-1.webp"
          imagePosition="right"
          bg="#fcfcfc"
          paragraphs={overview.description}
        />
      )}

      {/* ================= EXISTING SECTIONS (UNCHANGED) ================= */}
      <VehicleAndCabinSection />
      <SafariExtrasSection />

      {/* ================= FAQ ================= */}
      <FAQSection
        title="Questions About Our Safari Fleet"
        subtitle={
          "Clear answers about safari vehicles, comfort, safety, and travel features."
        }
        faqs={faqs}
      />

      <BookWithConfidence />
      <ReviewsSection />
      <Featured />
      <TailormadeSection />
    </div>
  );
};

export default SafariFleet;
