"use client";

import React from "react";
import Banner from "../../components/Banner";
import SafariInfoSection from "./SafariInfoSection";
import TanzaniaTabsSection from "./TanzaniaTabsSection";
import GuestReviewSection from "./GuestReviewSection";

import TourGroupSection from "./TourGroupSection";
import WhentoGo from "./WhentoGo";
import TripHighlights from "./TripHighlights";
import Featured from "../Home/Featured";
// import { useState, useEffect } from "react";

// import API from "../../api/axios";

import TailormadeSection from "../Home/TailormadeSection";
import TripsSection from "../../components/TripsSection";

const SafariLandingPage = ({ trips, destination }) => {
  if (!destination) return null;
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await API.get("/destinationlanding");
  //       setData(res.data?.[0]); // 👈 IMPORTANT (array → first object)
  //     } catch (err) {
  //       console.error("Landing fetch error:", err);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (!data) return null; // or loader

  return (
    <div>
      <Banner
        image={'/tanzania destination.webp'}
        title={destination.title}
        buttonText="Plan A Trip"
        onButtonClick={"/tailor-made-form"}
      />
      <SafariInfoSection overview={destination.overviewinfo?.[0]} />

      <TanzaniaTabsSection />

      <GuestReviewSection />

      <TripsSection
        title="Top Tanzania Safari & Tours"
        subtitle="Handpicked safari experiences across Tanzania"
        trips={trips}
        destination="tanzania"
        layout="grid"
      />
      <TourGroupSection />

      <WhentoGo />

      <TripHighlights
        subtitle={"Lorem Ipsum is simply dummy text of the printing"}
      />

      <Featured />
      <TailormadeSection />
    </div>
  );
};

export default SafariLandingPage;
