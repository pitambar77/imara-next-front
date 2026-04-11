import React, { useEffect, useState } from "react";
import API from "../../api/axios.js";
import { useNavigate } from "react-router-dom";

const AboutList = () => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const res = await API.get("/about");
      setList(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this About page?")) return;

    try {
      await API.delete(`/about/${id}`);
      alert("Deleted successfully");
      fetchData();
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold">About Pages</h2>
        <button
          onClick={() => navigate("/dashboard/about/create")}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          + Create About
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {list.map((item) => (
          <div key={item._id} className="border p-4 rounded shadow-sm bg-white">
            {item.image && (
              <img
                src={item.image}
                alt="banner"
                className="w-full h-40 object-cover rounded mb-3"
              />
            )}

            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-600 mb-4">{item.subtitle}</p>

            <div className="flex gap-3">
              <button
                onClick={() => navigate(`/admin/about/edit/${item._id}`)}
                className="bg-blue-600 text-white px-4 py-1 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(item._id)}
                className="bg-red-600 text-white px-4 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutList;
