"use client";

import TailormadeToursSeo from "@/Pages/Seo/TailormadeToursSeo";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();

  return <TailormadeToursSeo id={id} />;
}