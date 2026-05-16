"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import API from "@/api/axios";
import BlogLandingForm from "@/Pages/Blog/BlogLanding/BlogLandingForm";

export default function Page() {
  const { id } = useParams();

  const [editData, setEditData] = useState(null);

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  const fetchData = async () => {
    try {
      const res = await API.get(`/bloglanding/${id}`);

      setEditData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!editData) {
    return <p className="p-6">Loading...</p>;
  }

  return <BlogLandingForm editData={editData} />;
}
