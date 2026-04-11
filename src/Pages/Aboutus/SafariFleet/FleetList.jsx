import React, { useEffect, useState } from "react";
import API from "../../../api/axios.js";
import FleetForm from "../../../components/Fleet/FleetForm";

const FleetList = () => {
  const [fleets, setFleets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editData, setEditData] = useState(null); // 👈 for edit mode
  const [showForm, setShowForm] = useState(false);

  const fetchFleets = async () => {
    try {
      const res = await API.get("/fleet");
      setFleets(res.data || []);
    } catch (err) {
      console.error("Fetch error", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFleets();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this fleet?")) return;
    try {
      await API.delete(`/fleet/${id}`);
      fetchFleets();
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };

  const handleEdit = (fleet) => {
    setEditData(fleet);
    setShowForm(true);
  };

  const handleCreate = () => {
    setEditData(null);
    setShowForm(true);
  };

  const handleSuccess = () => {
    setShowForm(false);
    fetchFleets();
  };

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Safari Fleet</h1>
        <button
          onClick={handleCreate}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          + Add Fleet
        </button>
      </div>

      {/* FORM */}
      {showForm && (
        <FleetForm
          editData={editData}
          onSuccess={handleSuccess}
        />
      )}

      {/* LIST TABLE */}
      {!showForm && (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Image</th>
                <th className="border p-2">Title</th>
                <th className="border p-2">Subtitle</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {fleets.map((fleet) => (
                <tr key={fleet._id}>
                  <td className="border p-2">
                    <img
                      src={fleet.image}
                      alt=""
                      className="w-24 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="border p-2">{fleet.title}</td>
                  <td className="border p-2">{fleet.subtitle}</td>
                  <td className="border p-2 flex gap-2">
                    <button
                      onClick={() => handleEdit(fleet)}
                      className="bg-blue-600 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(fleet._id)}
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {fleets.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center p-6">
                    No fleet records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FleetList;
