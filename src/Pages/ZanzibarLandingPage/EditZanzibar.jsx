"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import API from "../../api/axios";
import ZanzibardetailsForm from "../../components/Zanzibar/ZanzibardetailsForm";

export default function EditZanzibar({ id }) {

  const router = useRouter();
  const [editData, setEditData] = useState(null);

  useEffect(() => {

    if (!id) return;

    API.get(`/zanzibardetails/${id}`)
      .then((res) => setEditData(res.data))
      .catch((err) => console.error(err));

  }, [id]);

  if (!editData) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">

      <ZanzibardetailsForm
        editData={editData}
        onSuccess={() => router.push("/dashboard/zanzibar-details")}
      />

    </div>
  );
}