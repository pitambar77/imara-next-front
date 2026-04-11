

import React, { useState } from "react";
// import API from "../api/axios.js"; // your axios instance
import Link from "next/link";

const FooterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    privacy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/footer-form", formData);
      alert(res.data.message);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        privacy: false,
      });
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div>
            <h3 className="font-bold text-lg mb-2">Save up to $2,034*!</h3>
      <p className="text-gray-700  mb-2">
        Plus receive latest offers, travel inspiration, and discover how your
        travels will make a positive impact. Together, WE MAKE TRAVEL MATTER®.
      </p>
      <a
        href="#"
        className="text-sm text-[#d87028] font-semibold underline block mb-4"
      >
        Offer Terms
      </a>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex gap-2">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name *"
            required
            className="w-1/2 border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-[#d87028]"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name *"
            required
            className="w-1/2 border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-[#d87028]"
          />
        </div>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email *"
          required
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-[#d87028]"
        />

        <div className="flex items-start gap-2 text-sm text-gray-700">
          <input
            type="checkbox"
            name="privacy"
            checked={formData.privacy}
            onChange={handleChange}
            required
          />
          <p>
           *By checking this box, you accept the Trafalgar{" "}
            <Link href='privacy-policy' className="text-[#d87028] underline">
              privacy policy
              </Link>
          </p>
        </div>

        <button
          type="submit"
          className="bg-[#d87028] hover:bg-orange-700 text-white px-8 py-3 rounded-full text-sm"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FooterForm;

