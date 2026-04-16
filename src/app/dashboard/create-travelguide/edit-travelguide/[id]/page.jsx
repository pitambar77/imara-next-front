"use client";

import TravelguideSeo from "@/Pages/Seo/TravelguideSeo";

export default function Page({ params }) {
  const { id } = params;

  return <TravelguideSeo id={id} />;
}