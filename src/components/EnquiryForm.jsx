"use client";

import { useState, useRef } from "react";
import TravelDatePicker from "./TravelDatePicker";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { isValidPhoneNumber } from "libphonenumber-js";
import { FaChevronDown } from "react-icons/fa";
import axios from "axios";
import { FaCheck } from "react-icons/fa";

export default function EnquiryForm({
  formType = "enquiry",
  formheading = "Planning a Trip to Tanzania?",
  formsubheading = "Our team is always here to help",
}) {
  const [formData, setFormData] = useState({
    formType, // 👈 dynamic form source
    name: "",
    phone: "",
    countryCode: "",
    country: "",
    email: "",
    adults: 1,
    children: 0,
    destination: "",
    tourType: "",
    travelDate: "",
    departureDate: "",
    days: "",
    message: "",
  });

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [tripCategory, setTripCategory] = useState(
    formType === "Kilimanjaro form" ? "kilimanjaro" : "safari",
  );

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const fieldRefs = {
    name: useRef(null),
    phone: useRef(null),
    email: useRef(null),
    destination: useRef(null),
    travelDate: useRef(null),
    days: useRef(null),
    tourType: useRef(null),
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.phone) newErrors.phone = "Phone number is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.destination)
      newErrors.destination = "Please select a destination";

    if (!formData.travelDate)
      newErrors.travelDate = "Please select a travel date";

    if (!formData.days || formData.days < 1)
      newErrors.days = "Please enter number of days";
    if (!formData.tourType) newErrors.tourType = "Please select a travel date";

    setErrors(newErrors);

    // scroll to first error
    const firstError = Object.keys(newErrors)[0];
    if (firstError && fieldRefs[firstError]?.current) {
      fieldRefs[firstError].current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      fieldRefs[firstError].current.focus();
    }

    return Object.keys(newErrors).length === 0;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // clear error while typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  //   const handlePhoneChange = (value, data) => {
  //     const formattedPhone = "+" + value;

  //     setPhone(value);

  //     setFormData((prev) => ({
  //       ...prev,
  //       phone: formattedPhone,
  //       countryCode: "+" + data.dialCode,
  //       country: data.countryCode.toUpperCase(), // tz, in, us
  //     }));

  //     if (!value) {
  //       setPhoneError("Phone number is required");
  //       return;
  //     }

  //     if (!isValidPhoneNumber(formattedPhone)) {
  //       setPhoneError("Invalid phone number");
  //     } else {
  //       setPhoneError("");
  //     }
  //   };

  const handlePhoneChange = (value, data) => {
    const formattedPhone = "+" + value;

    setPhone(value);

    setFormData((prev) => ({
      ...prev,
      phone: formattedPhone,
      countryCode: "+" + data.dialCode,
      country: data.countryCode.toUpperCase(),
    }));

    if (!value) {
      setPhoneError("Phone number is required");

      setErrors((prev) => ({
        ...prev,
        phone: "Phone number is required",
      }));
      return;
    }

    if (!isValidPhoneNumber(formattedPhone)) {
      setPhoneError("Invalid phone number");

      setErrors((prev) => ({
        ...prev,
        phone: "Invalid phone number",
      }));
    } else {
      setPhoneError("");

      setErrors((prev) => ({
        ...prev,
        phone: "",
      }));
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (loading) return;

    setLoading(true);

    try {
      const res = await axios.post(
        "https://imarabackend.imarakilelenisafaris.com/api/enquiry",
        formData,
      );

      alert(res.data.message);
    } catch (error) {
      alert("Submission failed");
    } finally {
      setLoading(false);
    }
  };

  const safariDestinations = [
    "Kilimanjaro National Park",
    "Serengeti National Park",
    "Ngorongoro Crater",
    "Tarangire National Park",
    "Lake Natron",
    "Mkomazi National Park",
    "Lake Manyara National Park",
    "Arusha National Park",
    "Udzungwa Mountains National Park",
    "Mikumi National Park",
    "Ruaha National Park",
    "Nyerere National Park",
  ];

  const kilimanjaroDestinations = [
    "Machame Route",
    "Rongai Route",
    "Umbwe Route",
    "Marangu Route",
    "Lemosho Route",
    "Northern Circuit Route",
  ];

  return (
    <div className="max-w-4xl mx-auto py-16">
      <div className=" mb-4">
        <h2 className="text-3xl font-semibold mb-2 text-center ">
          {formheading}
        </h2>
        <p className="text-gray-600 mb-6 text-center">{formsubheading}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 ">
        {/* PERSONAL DETAILS */}
        <div className="bg-gray-100 p-6 rounded">
          <h3 className="text-xl font-semibold mb-4">Personal Details</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className=" mb-1 ">Name *</label>
              <input
                ref={fieldRefs.name}
                type="text"
                name="name"
                onChange={handleChange}
                className="w-full border border-[#e5e7eb] text-sm text-gray-600 bg-white outline-0 p-3 rounded"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className=" mb-1 ">
                Phone Number (International Format)
              </label>

              <PhoneInput
                country={"tz"}
                ref={fieldRefs.phone}
                value={phone}
                // onChange={(phone) => setPhone(phone)}
                onChange={handlePhoneChange}
                enableSearch={true}
                inputStyle={{
                  width: "100%",
                  height: "48px",
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb",
                }}
                containerStyle={{
                  width: "100%",
                }}
              />
              {/* {phoneError && (
                <p className="text-red-500 text-sm mt-1">{phoneError}</p>
              )} */}

              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}

              {/* <PhoneInputField value={phone} setValue={setPhone} /> */}
            </div>

            <div className="md:col-span-2">
              <label className=" mb-1">Email *</label>
              <input
                ref={fieldRefs.email}
                type="email"
                name="email"
                onChange={handleChange}
                className="w-full border  border-[#e5e7eb] text-sm text-gray-600 bg-white outline-0 p-3 rounded"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>
        </div>

        {/* Travel details */}
        <div className="bg-gray-100 p-6 rounded ">
          <h3 className="text-xl font-semibold mb-4">Travel Dates</h3>

          <div>
            {/* <TravelDatePicker
              onChange={(data) =>
                setFormData({
                  ...formData,
                  travelDate: data.startDate,
                })
              }
            /> */}
            <TravelDatePicker
              onChange={(data) => {
                setFormData((prev) => ({
                  ...prev,
                  travelDate: data.startDate,
                }));

                setErrors((prev) => ({
                  ...prev,
                  travelDate: "",
                }));
              }}
            />
            {errors.travelDate && (
              <p className="text-red-500 text-sm mt-1">{errors.travelDate}</p>
            )}
          </div>
        </div>

        {/* TRIP DETAILS */}
        <div className="bg-gray-100 p-6 rounded">
          <h3 className="text-xl font-semibold mb-4">Trip Details</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Adults</label>
              <div className="relative">
                <select
                  name="adults"
                  onChange={handleChange}
                  className="w-full border border-[#e5e7eb] text-sm text-gray-600 bg-white outline-0 p-3 appearance-none rounded"
                >
                  {[...Array(50)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                {/* Custom Icon */}
                <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium">Children</label>

              <div className="relative">
                <select
                  name="children"
                  onChange={handleChange}
                  className="w-full border border-[#e5e7eb] text-sm text-gray-600 bg-white outline-0 p-3 rounded appearance-none pr-10"
                >
                  {[...Array(50)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>

                {/* Custom Icon */}
                <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>

            {/* <div>
              <label className="block mb-1 font-medium">Destinations</label>
              <div className="relative">
                <select
                  name="destination"
                  onChange={handleChange}
                  className="w-full border border-[#e5e7eb] text-sm text-gray-600 bg-white outline-0 appearance-none p-3 rounded"
                >
                  <option value="">All Destinations</option>
                  <option>Tanzania</option>
                  <option>Kenya</option>
                  <option>Uganda</option>
                  <option>Rwanda</option>
                </select>
                
                <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div> */}
            {formType !== "Kilimanjaro form" && (
              <div className="md:col-span-2">
                <label className="block mb-2 font-medium">Trip Type</label>

                <div className="flex gap-6 text-sm text-gray-600">
                  {formType !== "Kilimanjaro form" && (
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="tripCategory"
                        value="safari"
                        checked={tripCategory === "safari"}
                        onChange={(e) => {
                          setTripCategory(e.target.value);
                          setFormData({ ...formData, destination: "" });
                        }}
                      />
                      Only Safari
                    </label>
                  )}

                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="tripCategory"
                      value="kilimanjaro"
                      checked={tripCategory === "kilimanjaro"}
                      onChange={(e) => {
                        setTripCategory(e.target.value);
                        setFormData({ ...formData, destination: "" });
                      }}
                    />
                    Only Kilimanjaro
                  </label>
                </div>

                {/* <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="tripCategory"
                    value="both"
                    checked={tripCategory === "both"}
                    onChange={(e) => setTripCategory(e.target.value)}
                  />
                  Both
                </label> */}
              </div>
            )}
            <div>
              {/* <label className="block mb-1 font-medium">Destinations</label> */}
              <label className="block mb-1 font-medium">
                {tripCategory === "safari"
                  ? "Safari Destination"
                  : "Kilimanjaro Route"}
              </label>

              <div className="relative">
                <select
                  ref={fieldRefs.destination}
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className="w-full border border-[#e5e7eb] text-sm text-gray-600 bg-white outline-0 appearance-none p-3 rounded"
                >
                  <option value="">
                    {tripCategory === "safari"
                      ? "Select Safari Destination"
                      : "Select Kilimanjaro Route"}
                  </option>

                  {tripCategory === "safari" &&
                    safariDestinations.map((d) => <option key={d}>{d}</option>)}

                  {tripCategory === "kilimanjaro" &&
                    kilimanjaroDestinations.map((d) => (
                      <option key={d}>{d}</option>
                    ))}

                  {/* {tripCategory === "both" &&
                    [...safariDestinations, ...kilimanjaroDestinations].map(
                      (d) => <option key={d}>{d}</option>,
                    )} */}
                </select>
                {errors.destination && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.destination}
                  </p>
                )}

                <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium">Tour Type</label>
              <div className="relative">
                <select
                  ref={fieldRefs.tourType}
                  name="tourType"
                  value={formData.tourType}
                  onChange={handleChange}
                  className="w-full border border-[#e5e7eb] text-sm text-gray-600 bg-white outline-0 p-3 appearance-none rounded"
                >
                  <option value="">Choose Tour Type</option>
                  <option value="Midrange">Midrange</option>
                  <option value="Luxury">Luxury</option>
                  <option value="Ultra Luxury">Ultra Luxury</option>
                </select>
                {errors.tourType && (
                  <p className="text-red-500 text-sm mt-1">{errors.tourType}</p>
                )}
                {/* Custom Icon */}
                <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium">Number of Days</label>

              <input
                ref={fieldRefs.days}
                type="number"
                name="days"
                min="1"
                onChange={handleChange}
                className="w-full border border-[#e5e7eb] text-sm text-gray-600 bg-white outline-0 p-3 rounded"
              />
              {errors.days && (
                <p className="text-red-500 text-sm mt-1">{errors.days}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block mb-1 font-medium">
                Message / Additional Details
              </label>
              <textarea
                name="message"
                rows="4"
                onChange={handleChange}
                className="w-full border border-[#e5e7eb] bg-white outline-0 p-3 rounded"
              />
            </div>
          </div>
        </div>
        {/* <p className=" py-4">By clicking 'Send', you agree to our <a className=" text-[#da7228]" target="blanck" href="https://imarakilelenisafaris.com/privacy-policy"> Privacy Policy.</a> </p> */}
        <p className="py-4 flex items-start gap-2">
          <FaCheck className="text-green-500 mt-1" />

          <span>
            By clicking 'Enquire', you agree to our{" "}
            <a
              className="text-[#da7228]"
              target="_blank"
              rel="noopener noreferrer"
              href="https://imarakilelenisafaris.com/privacy-policy"
            >
              Privacy Policy
            </a>
            .
          </span>
        </p>
        {/* SUBMIT */}
        <button
          type="submit"
          disabled={loading}
          className={`rounded-full px-8 py-3 font-semibold text-white 
  ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#d97129] hover:bg-[#e8853f] cursor-pointer"}`}
        >
          {loading ? "Submitting..." : "ENQUIRE"}
        </button>
      </form>
    </div>
  );
}
