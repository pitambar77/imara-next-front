

import React, { useState } from "react";

const API_URL = "https://imarabackend.imarakilelenisafaris.com/api/contactformkili"; // change if deployed

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    updates: false,
    privacy: false,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [serverError, setServerError] = useState("");

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  /* ================= VALIDATION ================= */
  const validate = () => {
    let tempErrors = {};

    if (!formData.firstName.trim())
      tempErrors.firstName = "First name is required";

    if (!formData.lastName.trim())
      tempErrors.lastName = "Last name is required";

    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        tempErrors.email = "Enter a valid email address";
      }
    }

    if (!formData.message.trim())
      tempErrors.message = "Message is required";

    if (!formData.privacy)
      tempErrors.privacy = "You must accept the privacy policy";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");
    setSuccess("");

    if (!validate()) return;

    try {
      setLoading(true);

      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setSuccess("✅ Your message has been sent successfully!");

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        updates: false,
        privacy: false,
      });
      setErrors({});
    } catch (err) {
      setServerError(err.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  /* ================= UI ================= */
  return (
    <section className=" py-10 md:py-16 px-4 md:px-12 lg:px-18 2xl:px-28 max-w-4xl mx-auto">
      <h2 className="text-center text-3xl capitalize font-semibold mb-10">
        Get in touch
      </h2>

      {success && (
        <p className="text-green-600 text-center mb-6">{success}</p>
      )}

      {serverError && (
        <p className="text-red-600 text-center mb-6">{serverError}</p>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-6 rounded-lg "
      >
        {/* First Name */}
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="First Name *"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border rounded px-4 py-3"
          />
          {errors.firstName && (
            <p className="text-red-600 text-sm mt-1">
              {errors.firstName}
            </p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name *"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border rounded px-4 py-3"
          />
          {errors.lastName && (
            <p className="text-red-600 text-sm mt-1">
              {errors.lastName}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded px-4 py-3"
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">
              {errors.email}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <textarea
            name="message"
            placeholder="Write your message here *"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded px-4 py-3"
          />
          {errors.message && (
            <p className="text-red-600 text-sm mt-1">
              {errors.message}
            </p>
          )}
        </div>

        {/* Updates Checkbox */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            name="updates"
            checked={formData.updates}
            onChange={handleChange}
            className="mt-1"
          />
          <p className="text-gray-700 text-sm">
            Keep me updated on the latest news and offers.
          </p>
        </div>

        {/* Privacy Checkbox */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            name="privacy"
            checked={formData.privacy}
            onChange={handleChange}
            className="mt-1"
          />
          <p className="text-gray-700 text-sm">
            I accept the privacy policy *
          </p>
        </div>

        {errors.privacy && (
          <p className="text-red-600 text-sm">{errors.privacy}</p>
        )}

        {/* Submit */}
        <div className="flex justify-end mt-8">
          <button
            type="submit"
            disabled={loading}
            className={`bg-[#d87328] cursor-pointer text-white px-10 py-3 rounded-full font-semibold transition
              ${
                loading
                  ? "opacity-60 cursor-not-allowed"
                  : "hover:bg-orange-700"
              }
            `}
          >
            {loading ? "Sending..." : "SUBMIT"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
