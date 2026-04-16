import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import API from "../../api/axios";

const TravelgroupList = () => {
  const [groups, setGroups] = useState([]);
const router = useRouter();

  const fetchGroups = async () => {
    try {
      const res = await API.get("/travelgroup");
      setGroups(res.data);
    } catch (error) {
      console.error("Error fetching travel groups:", error);
    }
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this travel group?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/travelgroup/${id}`);
      alert("Deleted successfully");
      fetchGroups(); // refresh list
    } catch (error) {
      console.error("Delete error:", error);
      alert("Delete failed");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Travel Groups</h2>

      <button
        onClick={() => router.push("/dashboard/travelgroup/create")}
        className="bg-green-600 text-white px-4 py-2 rounded mb-4"
      >
        + Create Travel Group
      </button>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Title</th>
              <th className="p-3 border">Category</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {groups.map((group) => (
              <tr key={group._id} className="text-center">
                <td className="p-3 border">{group.title}</td>
                <td className="p-3 border">{group.category}</td>
                <td className="p-3 border space-x-2">
                  <button
                    onClick={() =>
                      router.push(`/dashboard/travelgroup/${group._id}`)
                    }
                    className="bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                   {/* 🔥 NEW SEO BUTTON */}

                <button
                  onClick={() =>
                    router.push(`/dashboard/travelgroup/seo/${group._id}`)
                  }
                  className="bg-purple-600 text-white px-3 py-1 rounded"
                >
                  SEO
                </button>


                  <button
                    onClick={() => handleDelete(group._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {groups.length === 0 && (
              <tr>
                <td colSpan="3" className="p-4 text-center">
                  No Travel Groups Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TravelgroupList;
