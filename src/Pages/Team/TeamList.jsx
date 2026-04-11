import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../api/axios.js";

const TeamList = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");

  const fetchData = async () => {
    try {
      const res = await API.get("/team");
      setData(res.data);
    } catch (err) {
      console.error(err);
      alert("Error fetching team list");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this record?")) return;

    try {
      await API.delete(`/team/${id}`);
      setData(data.filter((item) => item._id !== id));
      alert("Deleted successfully");
    } catch (err) {
      console.error(err);
      alert("Error deleting record");
    }
  };

  const filteredData = data.filter((item) =>
    item.title?.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Team List</h2>
        <Link to="/admin/team/create">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            + Add New
          </button>
        </Link>
      </div>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search by title..."
        className="border p-2 w-72 mb-4"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="p-3 border">Image</th>
              <th className="p-3 border">Title</th>
              <th className="p-3 border">Subtitle</th>
              <th className="p-3 border">Adventure Count</th>
              <th className="p-3 border">Profile Count</th>
              <th className="p-3 border text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <tr key={item._id} className="border-b">
                  <td className="border p-2 text-center">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt="team"
                        className="w-20 h-12 object-cover rounded mx-auto"
                      />
                    ) : (
                      <span className="text-gray-400">No Image</span>
                    )}
                  </td>

                  <td className="border p-2">{item.title}</td>
                  <td className="border p-2">{item.subtitle}</td>

                  {/* Adventure count */}
                  <td className="border p-2 text-center">
                    {item.adventure?.reduce(
                      (sum, section) => sum + section.adventure.length,
                      0
                    ) ?? 0}
                  </td>

                  {/* Profile count */}
                  <td className="border p-2 text-center">
                    {item.profile?.reduce(
                      (sum, section) => sum + section.profile.length,
                      0
                    ) ?? 0}
                  </td>

                  <td className="border p-2 text-center">
                    <Link to={`/edit/${item._id}`}>
                      <button className="bg-green-600 text-white px-3 py-1 rounded mr-2">
                        Edit
                      </button>
                    </Link>

                    <button
                      className="bg-red-600 text-white px-3 py-1 rounded"
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="p-4 text-center text-gray-500">
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamList;
