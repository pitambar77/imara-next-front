"use client";

import React from "react";

import TripDetailsSection from "./TripDetailsSection";
import TripMomentsSection from "./TripMomentsSection";
import MapItinerarySection from "./MapItinerarySection";
import BookWithConfidence from "../Home/BookWithConfidence";
import ReviewBanner from "./ReviewBanner";
// import ContactUs from "../Contactus/ContactUs";
import Featured from "../Home/Featured";
// import useSEO from "../../hooks/useSEO";
import ItineraryForm from "../../components/ItineraryForm";
import TripsSection from "../../components/TripsSection";
import TailormadeSection from "../Home/TailormadeSection";
import ReviewsSection from "../Aboutus/ReviewsSection";

const ItinaryDetails = ({ trip, trips }) => {
  if (!trip) return <p className="p-6">Trip not found</p>;

  const days = trip?.title?.match(/\d+/)?.[0] || "";

  return (
    <>
      <TripDetailsSection trip={trip} />
      <ReviewBanner />

      <TripMomentsSection experience={trip.experience} />

      <MapItinerarySection itinerary={trip.itinerary} />

      <BookWithConfidence />
      {/* RELATED ITINERARIES */}
      <TripsSection
        title="Related Itineraries"
        subtitle="Explore more safaris similar to this itinerary"
        trips={trips}
        destination={trip.destination}
        currentTripId={trip._id}
        layout="slider"
      />

      {/* <ContactUs /> */}
      <ItineraryForm
        packageName={trip.title}
        days={days}
        formheading={`Planning Your ${trip.title} `}
      />
      <ReviewsSection />
      <Featured />
      <TailormadeSection />
    </>
  );
};

export default ItinaryDetails;
