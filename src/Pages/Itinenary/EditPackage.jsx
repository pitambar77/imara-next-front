"use client";

import React, { useEffect, useState } from "react";
import API from "@/api/axios";
import PackageForm from "@/components/packages/PackageForm";

export default function EditPackage({ id }) {
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    API.get(`/packages/${id}`).then((res) => {
      setEditData(res.data);
    });
  }, [id]);

  if (!editData) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <PackageForm editData={editData} />
    </div>
  );
}