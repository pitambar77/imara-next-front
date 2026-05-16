"use client";

import BlogLandingSeo from "@/Pages/Seo/BlogLandingSeo";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();

  return <BlogLandingSeo id={id} />;
}