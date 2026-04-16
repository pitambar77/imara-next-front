"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import API from "../../api/axios.js";
import KilimanjarolandingForm from "../../components/KilimanjarolandingForm/KilimanjarolandingForm.jsx";

const KilimanjaroLandingEdit = ({ id }) => {

  const router = useRouter();
  const [editData, setEditData] = useState(null);

  useEffect(() => {

    if (!id) return;

    API.get(`/kilimanjarolanding/${id}`)
      .then((res) => setEditData(res.data))
      .catch(() => alert("Failed to load"));

  }, [id]);

  if (!editData) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-8">

      <KilimanjarolandingForm
        editData={editData}
        onSuccess={() => router.push("/dashboard/kilimanjaro")}
      />

    </div>
  );
};

export default KilimanjaroLandingEdit;