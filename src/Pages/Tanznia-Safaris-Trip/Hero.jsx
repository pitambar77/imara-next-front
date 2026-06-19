"use client";
import React, { useState } from "react";
import Banner from "./Banner";
import DestinationStepSection from "./DestinationStepSection";
import DayPlaning from "./DayPlaning";
import TravelStyle from "./TravelStyle";
import WhenToTravel from "./WhenToTravel";
import GallerySection from "../Tanzania-tailormade-safaris/GallerySection";
import FAQSection from "../Tanzania-tailormade-safaris/FAQSection";
import WhySection from "../Tanzania-tailormade-safaris/WhySection";
import TestimonialsSection from "../Tanzania-tailormade-safaris/TestimonialsSection";
import ContactForm from "./ContactForm";
import FooterSection from "./FooterSection";

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
