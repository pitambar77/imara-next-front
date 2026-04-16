"use client";

import TravelgroupSeo from "@/Pages/Seo/TravelgroupSeo";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();

  return <TravelgroupSeo id={id} />;
}
