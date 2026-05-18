"use client";

import CorevalueSeo from "@/Pages/Seo/CorevalueSeo";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();

  return <CorevalueSeo id={id} />;
}