import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../api/axios.js";
import ZanzibardetailsForm from "../../components/Zanzibar/ZanzibardetailsForm";

const EditZanzibar = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    API.get(`/zanzibardetails/${id}`).then((res) => {
      setEditData(res.data);
    });
  }, [id]);

  if (!editData) return <p className="p-6">Loading...</p>;

  return (
    <>
      <div className=" p-6">
        <ZanzibardetailsForm
          editData={editData}
          onSuccess={() => navigate("/dashboard/zanibar-details")}
        />
      </div>
    </>
  );
};

export default EditZanzibar;
