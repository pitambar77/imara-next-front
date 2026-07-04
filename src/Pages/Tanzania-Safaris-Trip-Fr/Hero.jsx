"use client";
import React, { useState } from "react";
import Banner from "./Banner";
import DestinationStepSection from "./DestinationStepSection";
import DayPlaning from "./DayPlaning";
import TravelStyle from "./TravelStyle";

import ContactForm from "./ContactForm";
import FooterSection from "./FooterSection";
import GallerySection from "./GallerySection";
import FAQSection from "./FAQSection";
import WhySection from "./WhySection";
import TestimonialsSection from "./TestimonialsSection";
import WhenToTravel from "./WhenToTravel";

const Hero = () => {
  const [safariData, setSafariData] = useState({
    destinations: [],
    days: "",
    travelStyle: "",
    travelDate: null,
  });
  return (
    <>
      <Banner />
      <DestinationStepSection
        safariData={safariData}
        setSafariData={setSafariData}
      />

      <DayPlaning safariData={safariData} setSafariData={setSafariData} />

      <TravelStyle safariData={safariData} setSafariData={setSafariData} />

      <WhenToTravel safariData={safariData} setSafariData={setSafariData} />

      <ContactForm safariData={safariData} />
      <GallerySection />
      <FAQSection />
      <WhySection />
      <TestimonialsSection />
      <FooterSection />
    </>
  );
};

export default Hero;
