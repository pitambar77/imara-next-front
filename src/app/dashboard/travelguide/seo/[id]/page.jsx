"use client";

import TravelguideSeo from "@/Pages/Seo/TravelguideSeo";

export default function Page({ params }) {
  return <TravelguideSeo id={params.id} />;
}