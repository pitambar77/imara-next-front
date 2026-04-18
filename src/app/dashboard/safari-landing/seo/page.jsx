"use client";

import SeoForm from "@/components/SeoForm";
import { useEffect, useState } from "react";
import API from "@/api/axios";

export default function SafarilandingSeo() {
  const [id, setId] = useState(null);

  useEffect(() => {
    const fetchHomepage = async () => {
      try {
        const res = await API.get("/safarilanding");

        const data = Array.isArray(res.data) ? res.data[0] : res.data;

        if (data?._id) {
          setId(data._id);
        }
      } catch (error) {
        console.error("safarilanding fetch error:", error);
      }
    };

    fetchHomepage();
  }, []);

  if (!id) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Safarilanding SEO Settings</h2>

      <SeoForm referenceId={id} referenceType="safarilanding" />
    </div>
  );
}