import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../api/axios.js";
import KilimanjarolandingForm from "../../components/KilimanjarolandingForm/KilimanjarolandingForm.jsx";

const KilimanjaroLandingEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    API.get(`/kilimanjarolanding/${id}`)
      .then((res) => setEditData(res.data))
      .catch(() => alert("Failed to load"));
  }, [id]);

  if (!editData) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-8
    ">
      <KilimanjarolandingForm
        editData={editData}
        onSuccess={() => navigate("/dashboard/kilimanjaro")}
      />
    </div>
  );
};

export default KilimanjaroLandingEdit;
