import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../api/axios.js";
import AboutForm from "../../components/About/AboutForm.jsx";

const AboutEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [editData, setEditData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSingle = async () => {
      try {
        const res = await API.get(`/about/${id}`);
        setEditData(res.data);
      } catch (err) {
        console.error(err);
        alert("Failed to load About data");
      } finally {
        setLoading(false);
      }
    };

    fetchSingle();
  }, [id]);

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <button
        onClick={() => navigate("/admin/aboutlist")}
        className="mb-4 text-blue-600 underline"
      >
        ← Back to List
      </button>

      <AboutForm
        editData={editData}
        onSuccess={() => navigate("/about-us")}
      />
    </div>
  );
};

export default AboutEdit;
