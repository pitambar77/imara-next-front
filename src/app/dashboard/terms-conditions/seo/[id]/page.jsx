"use client";

import TermsconditionSeo from "@/Pages/Seo/TermsconditionSeo";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();

  return <TermsconditionSeo id={id} />;
}