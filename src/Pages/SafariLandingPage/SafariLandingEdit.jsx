"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import API from "../../api/axios.js";
import SafariLandingForm from "./SafariLandingForm.jsx";

const SafariLandingEdit = ({ id }) => {

  const router = useRouter();
  const [editData, setEditData] = useState(null);

  useEffect(() => {

    if (!id) return;

    API.get(`/safarilanding/${id}`)
      .then((res) => setEditData(res.data))
      .catch(() => alert("Failed to load"));

  }, [id]);

  if (!editData) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-8">

      <SafariLandingForm
        editData={editData}
        onSuccess={() => router.push("/dashboard/safari-landing")}
      />

    </div>
  );
};

export default SafariLandingEdit