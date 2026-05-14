"use client";

import BlogimaraSeo from "@/Pages/Seo/BlogimaraSeo";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();

  return <BlogimaraSeo id={id} />;
}
