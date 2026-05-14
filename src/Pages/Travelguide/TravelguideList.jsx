"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL
 

export default function TravelguideList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get(`${API_BASE}/travelguide`);
      setBlogs(data);
    } catch (err) {
      console.error("Failed to fetch blogs", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    try {
      await axios.delete(`${API_BASE}/travelguide/${id}`);
      setBlogs((prev) => prev.filter((b) => b._id !== id));
    } catch (err) {
      alert("Delete failed");
    }
  };

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Travelguide data </h1>

        <button
          onClick={() => router.push("/dashboard/travelguidenew/create")}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          + Create 
        </button>
      </div>

      <div className="space-y-4">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="border rounded-xl p-4 flex justify-between items-center"
          >
            <div>
              <h2 className="font-semibold">{blog.title}</h2>
              <p className="text-sm text-gray-500">{blog.category}</p>
            </div>

            <div className="flex gap-3">

              {/* EDIT */}
              <Link
                href={`/dashboard/travelguidenew/${blog._id}`}
                className="px-3 py-1 border rounded-lg"
              >
                Edit
              </Link>

              {/* SEO */}
              <button
                onClick={() =>
                  router.push(`/dashboard/travelguidenew/seo/${blog._id}`)
                }
                className="bg-purple-600 text-white px-3 py-1 rounded"
              >
                SEO
              </button>

              {/* DELETE */}
              <button
                onClick={() => handleDelete(blog._id)}
                className="px-3 py-1 border rounded-lg text-red-600"
              >
                Delete
              </button>

            </div>
          </div>
        ))}

        {blogs.length === 0 && (
          <p className="text-gray-500">No data found</p>
        )}
      </div>
    </div>
  );
}