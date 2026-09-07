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
  const [parks, setParks] = useState("decide");
  const [party, setParty] = useState("");
  const [days, setDays] = useState("");
  const [comfort, setComfort] = useState("");
  const [month, setMonth] = useState("Sep");

  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <WhySafari />
      <div id="planner">
        <SafariParks selected={parks} onSelect={setParks} />

        <PartySize selected={party} onSelect={setParty} />

        <SafariDays selected={days} onSelect={setDays} />

        <ComfortLevel selected={comfort} onSelect={setComfort} />

        <SafariDate selected={month} onSelect={setMonth} />

        <ContactForm />
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
