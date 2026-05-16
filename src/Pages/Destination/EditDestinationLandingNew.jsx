"use client";

import { useEffect, useState } from "react";
import API from "@/api/axios";
// import DestinationLandingForm from "@/components/Destination/DestinationLandingForm";
import DestinationLandingFormNew from "@/components/Destination/DestinationLandingFormNew";

export default function EditDestinationLandingNew({ id }) {

  const [data, setData] = useState(null);

  useEffect(() => {

    if (!id) return;

    API.get(`/tanzaniadestinationlanding/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));

  }, [id]);

  if (!data) return <p className="p-6">Loading...</p>;

  return (
    <div className="px-6">

      <h1 className="text-2xl font-bold mb-6">
        Edit Destination Landing
      </h1>

      <DestinationLandingFormNew
        editData={data}
        onSuccess={() => alert("Updated successfully")}
      />

    </div>
  );
}