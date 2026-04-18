"use client";

import { useEffect, useState } from "react";
import API from "@/api/axios";

export default function HomepagePage() {
  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    bannerImage: ""
  });

  const [loading, setLoading] = useState(true);

  /* ================= FETCH HOMEPAGE ================= */

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get("/homepage");

        if (res.data.length > 0) {
          setForm(res.data[0]);
        }
      } catch (error) {
        console.error("Fetch homepage error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  /* ================= HANDLE CHANGE ================= */

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  /* ================= SAVE ================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/homepage", form);

      alert("Homepage saved successfully");
    } catch (error) {
      console.error("Save error:", error);
      alert("Error saving homepage");
    }
  };

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 max-w-xl">

      <h1 className="text-2xl font-bold mb-6">Homepage Settings</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          name="title"
          placeholder="Title"
          className="border p-2 w-full"
          value={form.title || ""}
          onChange={handleChange}
        />

        <textarea
          name="subtitle"
          placeholder="Subtitle"
          className="border p-2 w-full"
          value={form.subtitle || ""}
          onChange={handleChange}
        />

        <input
          name="bannerImage"
          placeholder="Banner Image URL"
          className="border p-2 w-full"
          value={form.bannerImage || ""}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save Homepage
        </button>

      </form>
    </div>
  );
}