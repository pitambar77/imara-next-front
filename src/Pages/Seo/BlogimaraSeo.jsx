"use client";

import SeoForm from "@/components/SeoForm";

export default function BlogimaraSeo({ id }) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Blog SEO</h2>

      <SeoForm referenceId={id} referenceType="blogimara" />
    </div>
  );
}
