"use client";

import SeoForm from "@/components/SeoForm";
import { useEffect, useState } from "react";
import API from "@/api/axios";

export default function TeamSeoPage() {
  const [id, setId] = useState(null);

  useEffect(() => {
    API.get("/team")
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data[0] : res.data;
        setId(data?._id);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!id) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Team Page SEO</h2>

      <SeoForm referenceId={id} referenceType="team" />
    </div>
  );
}