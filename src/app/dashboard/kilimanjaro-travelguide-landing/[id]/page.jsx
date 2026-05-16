"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import API from "@/api/axios";
import KilimanjarotravelguidelandingForm from "@/Pages/Travelguide/KilimanjarotravelguidelandingForm";

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
      const res = await API.get(`/kilimanjarotravelguidelanding/${id}`);

      setEditData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!editData) {
    return <p className="p-6">Loading...</p>;
  }

  return <KilimanjarotravelguidelandingForm editData={editData} />;
}
