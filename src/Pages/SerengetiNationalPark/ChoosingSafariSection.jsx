"use client";

import React, { useEffect, useMemo, useState } from "react";
import { FaStar, FaCalendarAlt, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import TripCard from "../../components/TripCard";
import { IoClose } from "react-icons/io5";
import API from "../../api/axios";
import Link from "next/link";
import { slugify } from "../../utils/slugify";
import PrimaryButton from "../../components/PrimaryButton";

const ChoosingSafariSection = () => {
  const [trips, setTrips] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH PACKAGES ================= */
  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const res = await API.get("/packages");
        setTrips(res.data || []);
      } catch (err) {
        console.error("Package fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);

  /* ================= ONLY 4 TANZANIA PACKAGES ================= */
  const tanzaniaTrips = useMemo(() => {
    return trips
      .filter(
        (trip) =>
          trip.destination &&
          trip.destination.trim().toLowerCase() === "tanzania",
      )
      .slice(0, 4);
  }, [trips]);

  const openModal = (trip) => setSelectedTrip(trip);
  const closeModal = () => setSelectedTrip(null);

  if (loading) {
    return <p className="text-center py-10">Loading safaris…</p>;
  }

  return (
    <section
      id="packages"
      className="bg-[#fedec7] pt-8 md:pt-16 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28"
    >
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl capitalize font-extrabold text-[#1a1a1a] mb-4">
          Tanzania Safari Packages For Every Style
        </h2>

        <p className="text-[16px] md:text-[18px] text-[#444] font-bold mb-8">
          Journeys Designed Around Different Travelers
        </p>

        <div className="text-[16px] text-[#444] leading-relaxed space-y-5 -mb-10">
          <p>
            Tanzania safaris work best when they reflect how people actually
            like to travel, not when they are fixed plans copied from elsewhere.
          </p>
          <p>
            Imara Kileleni Safaris creates packages that suit relaxed explorers,
            photographers, families, and first-time visitors, keeping comfort,
            pacing, and interests in clear focus.
          </p>
          <p>
            From popular northern parks to quieter wildlife areas, each package
            is planned with realistic drive times, clear inclusions, and
            flexibility once on safari.
          </p>
          <p>
            Across all styles, the aim remains steady days, comfortable stays,
            thoughtful guiding, and wildlife experiences that feel natural
            rather than hurried.
          </p>
        </div>
      </div>

      {/* ================= CARDS GRID (UNCHANGED) ================= */}
    </section>
  );
};

export default ChoosingSafariSection;
