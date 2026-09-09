"use client";

import React, { useState } from "react";
import Hero from "./Hero";
import WhySafari from "./WhySafari";
import SafariParks from "./SafariParks";
import PartySize from "./PartySize";
import SafariDays from "./SafariDays";
import ComfortLevel from "./ComfortLevel";
import SafariDate from "./SafariDate";
import ContactForm from "./ContactForm";
import ExpertBanner from "./ExpertBanner";
import WhyTravel from "./WhyTravel";
import Partners from "./Partners";
import Testimonials from "./Testimonials";
import FinalCTA from "./FinalCTA";
import Footer from "./Footer";

const Main = () => {
  // Step 1 - Parks
  const [parks, setParks] = useState([]);

  // Step 2 - Party size
  const [party, setParty] = useState("");

  // Step 3 - Safari days
  const [days, setDays] = useState("");

  // Step 4 - Comfort level
  const [comfort, setComfort] = useState("");

  // Step 5 - Safari date
  const [month, setMonth] = useState({
    month: "",
    year: new Date().getFullYear(),
    date: null,
  });

 
  const safariData = {
    destinations: parks,
    partySize: party,
    days: days,
    travelStyle: comfort,
    travelDate: month,
  };

  return (
    <main className="w-full max-w-full overflow-x-hidden">
      <Hero />

      <WhySafari />

      <div id="planner">
        <SafariParks selected={parks} onSelect={setParks} />

        <PartySize selected={party} onSelect={setParty} />

        <SafariDays selected={days} onSelect={setDays} />

        <ComfortLevel selected={comfort} onSelect={setComfort} />

        <SafariDate selected={month} onSelect={setMonth} />

        {/* Pass ALL planner selections */}
        <ContactForm safariData={safariData} />
      </div>

      <ExpertBanner />
      <WhyTravel />
      <Partners />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Main;
