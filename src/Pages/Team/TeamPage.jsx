"use client";

import React, { useEffect, useState } from "react";
import API from "../../api/axios";

import AboutAfricaSection from "./AboutAfricaSection";
import SafariExpertsSection from "./SafariExpertsSection";
import AdventureTour from "../../components/AdventureTour";
import BookWithConfidence from "../Home/BookWithConfidence";
import Featured from "../Home/Featured";

const TeamPage = () => {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH DATA ================= */
  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await API.get("/team"); // 🔁 adjust endpoint if needed
        setPage(res.data?.[0] || null);
      } catch (err) {
        console.error("Team API error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTeam();
  }, []);

  if (loading) return <p className="p-10 text-center">Loading...</p>;
  if (!page) return null;

  /* ================= MAP ADVENTURE DATA ================= */
  const teamSections =
    page.adventure?.flatMap((block) =>
      block.adventure.map((item) => ({
        image: item.image,
        subheading:item.subtitle,
        description: item.description,
      }))
    ) || [];

  return (
    <div>
      {/* ================= HERO ================= */}
      <div
        className="relative w-full h-[40vh] md:h-[64vh] bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `url('https://www.wildernessdestinations.com/media/3imn2iov/wilderness-experiences-guided-walks-landscape.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <h1 className="text-2xl md:text-5xl text-white uppercase z-10">
          MEET OUR TEAM
        </h1>
      </div>

      {/* ================= STATIC SECTIONS ================= */}
      <AboutAfricaSection />
      <SafariExpertsSection />

      {/* ================= ADVENTURE TOUR (DYNAMIC) ================= */}
      <AdventureTour
        title="Why go on an adventure tour with contiki?"
        sections={teamSections}
      />

      <BookWithConfidence />
      <Featured />
    </div>
  );
};

export default TeamPage;
