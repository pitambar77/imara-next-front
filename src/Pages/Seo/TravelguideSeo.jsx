"use client";

import SeoForm from "@/components/SeoForm";

const TravelguideSeo = ({ id }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">
        Travel Guide SEO Settings
      </h2>

      <SeoForm
        referenceId={id}
        referenceType="blog"
      />
    </div>
  );
};

export default TravelguideSeo;