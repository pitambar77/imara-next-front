"use client";

import { useParams } from "next/navigation";
import SafariLandingEdit from "@/Pages/SafariLandingPage/SafariLandingEdit";

export default function Page() {

  const { id } = useParams();

  return <SafariLandingEdit id={id} />;

}