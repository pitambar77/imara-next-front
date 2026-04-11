// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import API from "../../api/axios.js";
// import DestinationLandingForm from "../../components/Destination/DestinationLandingForm.jsx";
// // import DestinationLandingForm from "../../components/DestinationLanding/DestinationLandingForm";

// const EditDestinationLanding = () => {
//   const { id } = useParams();
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     API.get(`/destinationlanding/${id}`).then((res) => setData(res.data));
//   }, [id]);

//   return (
//     <div className="p-6">
//       {data ? (
//         // <DestinationLandingForm editData={data} onSuccess={() => window.location.href = "/admin/destinationlanding/list"} />
//         <DestinationLandingForm/>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default EditDestinationLanding;


import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../../api/axios";
import DestinationLandingForm from "../../components/Destination/DestinationLandingForm";

const EditDestinationLanding = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get(`/destinationlanding/${id}`)
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!data) return <p>Loading...</p>;

  return (
    <div className=" px-6">
      <h1 className="text-2xl font-bold mb-6">
        Edit Destination Landing
      </h1>

      <DestinationLandingForm
        editData={data}
        onSuccess={() => alert("Updated successfully")}
      />
    </div>
  );
};

export default EditDestinationLanding;
