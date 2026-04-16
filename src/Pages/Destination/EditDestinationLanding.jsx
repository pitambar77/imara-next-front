"use client";

import { useEffect, useState } from "react";
import API from "@/api/axios";
import DestinationLandingForm from "@/components/Destination/DestinationLandingForm";

export default function EditDestinationLanding({ id }) {

  const [data, setData] = useState(null);

  useEffect(() => {

    if (!id) return;

    API.get(`/destinationlanding/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));

  }, [id]);

  if (!data) return <p className="p-6">Loading...</p>;

  return (
    <div className="px-6">

      <h1 className="text-2xl font-bold mb-6">
        Edit Destination Landing
      </h1>

      <DestinationLandingForm
        editData={data}
        onSuccess={() => alert("Updated successfully")}
      />

    </div>
  );
}