// // src/pages/Destination/EditDestination.jsx
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// // import DestinationForm from "../../components/Destination/DestinationForm";
// import API from "../../api/axios.js";
// import DestinationDetailsForm from "../../components/Destination/DestinationDetailsForm";

// const EditDestinationDetails = () => {
//   const { id } = useParams();
//   const [destinationData, setDestinationData] = useState(null);

//   useEffect(() => {
//     API.get(`/destinationdetails/${id}`).then((res) => setDestinationData(res.data));
//   }, [id]);

//   return (
//     <div className="p-6">
//       {destinationData ? (
//         // <DestinationForm editData={destinationData} onSuccess={() => window.location.href = "/admin/destination/list"} />
//         <DestinationDetailsForm/>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default EditDestinationDetails

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../api/axios";
import DestinationDetailsForm from "../../components/Destination/DestinationDetailsForm";


const EditDestinationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    API.get(`/destinationdetails/${id}`).then((res) => {
      setEditData(res.data);
    });
  }, [id]);

  if (!editData) return <p className="p-6">Loading...</p>;

  return (
    <>
    <div className=" p-6">
  <DestinationDetailsForm
      editData={editData}
      onSuccess={() => navigate("/dashboard/destination-details")}
    />
    </div>
   
    </>
   
  );
};

export default EditDestinationDetails;
