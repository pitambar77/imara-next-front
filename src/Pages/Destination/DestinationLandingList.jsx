import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../api/axios";

const DestinationLandingList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH LIST ================= */
  const fetchList = async () => {
    try {
      const res = await API.get("/destinationlanding");
      setData(res.data || []);
    } catch (err) {
      console.error("Fetch error:", err);
      alert("Failed to load destinations");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  /* ================= DELETE ================= */
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this destination?"))
      return;

    try {
      await API.delete(`/destinationlanding/${id}`);
      setData((prev) => prev.filter((item) => item._id !== id));
      alert("Deleted successfully");
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete");
    }
  };

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Destination Landing List</h1>

        <Link
          to="/dashboard/destination-landing/create"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          + Create Destination
        </Link>
      </div>

      {/* TABLE */}
      {data.length === 0 ? (
        <p>No destinations found</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-3 text-left">Image</th>
                <th className="border p-3 text-left">Title</th>
                <th className="border p-3 text-left">Subtitle</th>
                <th className="border p-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item) => (
                <tr key={item._id} className="hover:bg-gray-50">
                  {/* IMAGE */}
                  <td className="border p-2">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-24 h-16 object-cover rounded"
                      />
                    ) : (
                      <span className="text-gray-400">No Image</span>
                    )}
                  </td>

                  {/* TITLE */}
                  <td className="border p-2 font-semibold">
                    {item.title}
                  </td>

                  {/* SUBTITLE */}
                  <td className="border p-2 text-gray-600">
                    {item.subtitle}
                  </td>

                  {/* ACTIONS */}
                  <td className="border p-2 text-center space-x-2">
                    <Link
                      to={`/dashboard/destination-landing/edit/${item._id}`}
                      className="bg-blue-600 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </Link>

                    <Link
                      to={`/destination-landing/${item._id}`}
                      className="bg-gray-700 text-white px-3 py-1 rounded"
                      target="_blank"
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
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DestinationLandingList;
