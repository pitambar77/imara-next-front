"use client";

import React, { useEffect, useState } from "react";
import API from "../../api/axios";
import { slugify } from "../../utils/slugify";

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

const ItinaryDetails = ({ trip, trips }) => {
  // const [trip, setTrip] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchTrip = async () => {
  //     try {
  //       const res = await API.get("/packages");

  //       const matchedTrip = res.data.find(
  //         (item) => slugify(item.title) === slug,
  //       );

  //       // setTrip(matchedTrip || null);
  //       if (!matchedTrip) {
  //         setTrip(null);
  //         return;
  //       }

  //       // 3️⃣ Fetch SEO by ID
  //       const seoRes = await API.get(
  //         `/seo?referenceId=${matchedTrip._id}&referenceType=package`,
  //       );

  //       // 4️⃣ Attach SEO to trip manually
  //       setTrip({
  //         ...matchedTrip,
  //         seo: seoRes.data || null,
  //       });
  //     } catch (error) {
  //       console.error("Trip fetch error:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchTrip();
  // }, [slug]);

  // if (loading) return <p className="p-6">Loading...</p>;
  // if (!trip) return <p className="p-6">Trip not found</p>;

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
      <Featured />
      <TailormadeSection />
    </>
  );
};

export default ItinaryDetails;
