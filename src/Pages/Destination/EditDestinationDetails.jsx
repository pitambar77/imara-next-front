// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import API from "../../api/axios";
// import DestinationDetailsForm from "../../components/Destination/DestinationDetailsForm";

// const EditDestinationDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [editData, setEditData] = useState(null);

//   useEffect(() => {
//     API.get(`/destinationdetails/${id}`).then((res) => {
//       setEditData(res.data);
//     });
//   }, [id]);

//   if (!editData) return <p className="p-6">Loading...</p>;

//   return (
//     <>
//     <div className=" p-6">
//   <DestinationDetailsForm
//       editData={editData}
//       onSuccess={() => navigate("/dashboard/destination-details")}
//     />
//     </div>

//     </>

//   );
// };

// export default EditDestinationDetails;

"use client";

import React, { useEffect, useState } from "react";
import API from "@/api/axios";
import { useRouter } from "next/navigation";
import DestinationDetailsForm from "@/components/Destination/DestinationDetailsForm";

export default function EditDestinationDetails({ id }) {
  const router = useRouter();
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    API.get(`/destinationdetails/${id}`).then((res) => {
      setEditData(res.data);
    });
  }, [id]);

  if (!editData) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <DestinationDetailsForm
        editData={editData}
        onSuccess={() => router.push("/dashboard/destination")}
      />
    </div>
  );
}
