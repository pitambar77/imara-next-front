"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import AdventureTour from "../../components/AdventureTour";
import AllyshipCommitment from "./AllyshipCommitment";
// import WhyVisitSection from "../../components/WhyVisitSection";
import BookWithConfidence from "../Home/BookWithConfidence";
import Featured from "../Home/Featured";
import WhyVisitTanzania from "../Aboutus/WhyVisitTanzania";
import TailormadeSection from "../Home/TailormadeSection";

const API_URL =
  "https://imarabackend.imarakilelenisafaris.com/api/sustanbility";

const Sustanbility = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        // API returns array → take first object
        setData(res.data?.[0]);
      })
      .catch((err) => console.error("API ERROR:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-10 text-center">Loading...</p>;
  if (!data) return null;

  const {
    title,
    subtitle,
    image,
    overviewinfo,
    adventure,
    whyvisit,
    effective,
  } = data;

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <div
        className="relative w-full h-[40vh] md:h-[64vh] bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <h1 className="text-2xl md:text-5xl text-center text-white uppercase z-10">
          {title}
        </h1>
      </div>

      {/* ================= OVERVIEW ================= */}
      {overviewinfo?.map((item) => (
        <div key={item._id} className="py-8 md:py-16 bg-[#fedec7] px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl mb-4">{item.title}</h3>
            {item.description?.map((desc) => (
              <p
                key={desc._id}
                className="text-[#444] leading-relaxed mb-4"
              >
                {desc.content}
              </p>
            ))}
          </div>
        </div>
      ))}

      {/* ================= ADVENTURE SECTION ================= */}
      <AdventureTour
        sections={adventure?.map((item) => ({
          image: item.image,
          subheading: item.title,
          description: item.description,
        }))}
      />

      {/* ================= ALLYSHIP ================= */}
      <AllyshipCommitment data={effective} />

      {/* ================= WHY VISIT ================= */}
      {/* <WhyVisitSection
        title="Why visit Tanzania with Imara Kileleni Safaris?"
        // cards={whyvisit?.map((item, index) => ({
        //   id: index,
        //   image: item.image,
        //   title: item.title,
        //   text: item.description,
        // }))}
        cards={cards}
      /> */}

      <WhyVisitTanzania/>

      <BookWithConfidence />
      <Featured />
      <TailormadeSection/>
    </>
  );
};

export default Sustanbility;
