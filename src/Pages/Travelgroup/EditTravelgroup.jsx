// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import API from "../../api/axios.js";
// import TravelgroupForm from "../../components/Travelgroup/TravelgroupForm.jsx";

// const EditTravelgroup = () => {
//   const { id } = useParams();
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     API.get(`/travelgroup/${id}`)
//       .then((res) => setData(res.data))
//       .catch(err => console.error(err));
//   }, [id]);

//   return (
//     <div className="p-6">
//       {data ? (
//         <TravelgroupForm
//           editData={data}
//           onSuccess={() => window.location.href = "/"}
//         />
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default EditTravelgroup;

"use client";

import { useEffect, useState } from "react";
import API from "@/api/axios";
import TravelgroupForm from "@/components/Travelgroup/TravelgroupForm";

export default function EditTravelgroup({ id }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get(`/travelgroup/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <TravelgroupForm
        editData={data}
        onSuccess={() => (window.location.href = "/dashboard/travelgroup")}
      />
    </div>
  );
}
