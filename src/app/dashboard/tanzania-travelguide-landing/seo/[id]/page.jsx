"use client";

import TanzaniatravelguidelandingSeo from "@/Pages/Seo/TanzaniatravelguidelandingSeo";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();

  return <TanzaniatravelguidelandingSeo id={id} />;
}