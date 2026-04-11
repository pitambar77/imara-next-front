import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../../api/axios";

const ZanzibarDetailsList = () => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const res = await API.get("/zanzibardetails");
      setList(res.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this destination?")) return;

    try {
      await API.delete(`/zanzibardetails/${id}`);
      fetchData();
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold">Destination Details</h2>
        <Link
          to="/dashboard/create-zanzibar"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          + Create
        </Link>
      </div>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Title</th>
            <th className="border p-2">Destination</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {list.map((item) => (
            <tr key={item._id}>
              <td className="border p-2">{item.title}</td>
              <td className="border p-2">{item.destination}</td>
              <td className="border p-2 flex gap-2">
                <button
                  onClick={() =>
                    navigate(`/dashboard/edit-zanzibar-details/${item._id}`)
                  }
                  className="bg-blue-600 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>

                <Link
                  to={`/zanzibar-details/${item._id}`}
                  className="bg-gray-600 text-white px-3 py-1 rounded"
                >
                  View
                </Link>

                <button
                  onClick={() => handleDelete(item._id)}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {!list.length && (
            <tr>
              <td colSpan="3" className="text-center p-4">
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};


export default ZanzibarDetailsList