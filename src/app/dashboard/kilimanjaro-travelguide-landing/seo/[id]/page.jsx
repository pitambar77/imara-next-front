"use client";

import KilimanjarotravelguidelandingSeo from "@/Pages/Seo/KilimanjarotravelguidelandingSeo";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();

  return <KilimanjarotravelguidelandingSeo id={id} />;
}