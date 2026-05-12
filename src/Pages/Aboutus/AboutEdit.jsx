// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import API from "../../api/axios.js";
// import AboutForm from "../../components/About/AboutForm.jsx";

// const AboutEdit = ({id}) => {

//   const navigate = useNavigate();
//   const [editData, setEditData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchSingle = async () => {
//       try {
//         const res = await API.get(`/about/${id}`);
//         setEditData(res.data);
//       } catch (err) {
//         console.error(err);
//         alert("Failed to load About data");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSingle();
//   }, [id]);

//   if (loading) return <p className="p-6">Loading...</p>;

//   return (
//     <div className="p-6">
//       <button
//         onClick={() => navigate("/admin/aboutlist")}
//         className="mb-4 text-blue-600 underline"
//       >
//         ← Back to List
//       </button>

//       <AboutForm
//         editData={editData}
//         onSuccess={() => navigate("/about-us")}
//       />
//     </div>
//   );
// };

// export default AboutEdit;

"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import API from "../../api/axios";
import AboutForm from "../../components/About/AboutForm";

const AboutEdit = () => {
  const router = useRouter();
  const params = useParams();

  const id = params?.id;

  const [editData, setEditData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch Single About Data
  useEffect(() => {
    if (!id) return;

    const fetchSingle = async () => {
      try {
        const res = await API.get(`/about/${id}`);
        setEditData(res.data);
      } catch (err) {
        console.error("Fetch Error:", err);
        alert("Failed to load About data");
      } finally {
        setLoading(false);
      }
    };

    fetchSingle();
  }, [id]);

  // Loading State
  if (loading) {
    return <p className="p-6">Loading...</p>;
  }

  return (
    <div className="p-6">
      {/* Back Button */}
      <button
        onClick={() => router.push("/dashboard/about")}
        className="mb-4 text-blue-600 hover:underline"
      >
        ← Back to List
      </button>

      {/* Form */}
      <AboutForm
        editData={editData}
        onSuccess={() => router.push("/about-us")}
      />
    </div>
  );
};

export default AboutEdit;
