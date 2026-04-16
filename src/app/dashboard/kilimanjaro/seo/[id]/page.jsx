"use client";

import KilimanjaroLandingSeo from "@/Pages/Seo/KilimanjaroLandingSeo";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();

  return <KilimanjaroLandingSeo id={id} />;
}
