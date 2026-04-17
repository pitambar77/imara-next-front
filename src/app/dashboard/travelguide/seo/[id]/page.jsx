"use client";

import TravelguideSeo from "@/Pages/Seo/TravelguideSeo";

export default async function Page({ params }) {
   const { id } = await params;
  return <TravelguideSeo id={id} />;
}