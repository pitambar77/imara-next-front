import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/axios";
import PackageForm from "../../components/packages/PackageForm";

const EditPackage = () => {
  const { id } = useParams();
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    API.get(`/packages/${id}`).then((res) => {
      setEditData(res.data);
    });
  }, [id]);

  if (!editData) return <p className="p-6">Loading...</p>;

  return (
    <div className=" p-6">
      <PackageForm editData={editData} />;
    </div>
  );
};

export default EditPackage;
