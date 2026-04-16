"use client";

import ZanzibarSeo from "@/Pages/Seo/ZanzibarSeo";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();

  return <ZanzibarSeo id={id} />;
}
