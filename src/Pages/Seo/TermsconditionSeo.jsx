"use client";

import SeoForm from "@/components/SeoForm";

export default function TermsconditionSeo({ id }) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6"> SEO Settings</h2>

      <SeoForm referenceId={id} referenceType="termscondition" />
    </div>
  );
}

