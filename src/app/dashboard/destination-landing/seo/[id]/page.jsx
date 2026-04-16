"use client";

import { useParams } from "next/navigation";
import DestinationLandingSeo from "@/Pages/Seo/DestinationLandingSeo";

export default function Page() {

  const { id } = useParams();

  return <DestinationLandingSeo id={id} />;
}