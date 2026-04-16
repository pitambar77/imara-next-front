"use client";

import BlogForm from "@/components/BlogForm";

export default function Page({ params }) {
  return <BlogForm id={params.id} />;
}