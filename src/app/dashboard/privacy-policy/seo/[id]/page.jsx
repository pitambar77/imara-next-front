"use client";

import PrivacypolicySeo from "@/Pages/Seo/PrivacypolicySeo";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();

  return <PrivacypolicySeo id={id} />;
}