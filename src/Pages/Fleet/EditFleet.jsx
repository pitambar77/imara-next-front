import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/axios.js";
import FleetForm from "../../components/Fleet/FleetForm.jsx";


const EditFleet = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get(`/fleet/${id}`).then((res) => setData(res.data));
  }, [id]);

  return (
    <div className="p-6">
      {data ? <FleetForm editData={data} onSuccess={() => window.location.href="/admin/fleet/list"} /> : "Loading..."}
    </div>
  );
};

export default EditFleet;
