import React, { useEffect, useState } from "react";
import API from "../../api/axios";
import { useRouter } from "next/navigation";

const PackageList = () => {
  const [packages, setPackages] = useState([]);
const router = useRouter();

  const fetchPackages = async () => {
    const res = await API.get("/packages");
    setPackages(res.data);
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    await API.delete(`/packages/${id}`);
    fetchPackages();
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold">Packages</h2>
        <button
          onClick={() => router.push("/dashboard/package/create")}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          + Create Package
        </button>
      </div>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Duration</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {packages.map((pkg) => (
            <tr key={pkg._id}>
              <td className="p-2 border">{pkg.title}</td>
              <td className="p-2 border">${pkg.price}</td>
              <td className="p-2 border">{pkg.duration}</td>
              <td className="p-2 border space-x-2">
                <button
                  onClick={() =>
                    router.push(`/dashboard/package/${pkg._id}`)

                  }
                  className="bg-blue-600 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>

                   {/* 🔥 NEW SEO BUTTON */}

                <button
                  onClick={() =>
                    router.push(`/dashboard/package/seo/${pkg._id}`)
                  }
                  className="bg-purple-600 text-white px-3 py-1 rounded"
                >
                  SEO
                </button>

                <button
                  onClick={() => handleDelete(pkg._id)}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
                <button
                  onClick={() => navigate(`/package/${pkg._id}`)}
                  className="bg-gray-800 text-white px-3 py-1 rounded"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PackageList;
