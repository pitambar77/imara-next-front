"use client";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useRouter } from "next/navigation";
import { isValidPhoneNumber } from "libphonenumber-js";
import { useState, useRef, useEffect } from "react";
import TravelDatePicker from "./TravelDatePicker";

const options = [
  { label: "Serengeti National Park", value: "Serengeti National Park" },
  { label: "Ngorongoro Crater", value: "Ngorongoro Crater" },
  { label: "Tarangire National Park", value: "Tarangire National Park" },
  {
    label: "Lake Manyarak",
    value: "Lake Manyara",
  },
  { label: "Arusha National Park", value: "Arusha National Park" },
  { label: "Zanzibar", value: "Zanzibar" },
  { label: "Mount Kilimanjaro", value: "Mount Kilimanjaro" },
  {
    label: "Not Sure - Need Expert Advice",
    value: "Not Sure - Need Expert Advice",
  },
  {
    label: "Great Migration, Wildlife Adventure, Zanzibar Escape",
    value: "Great Migration, Wildlife Adventure, Zanzibar Escape",
  },
  {
    label: "Big Five Safari, Cultural Encounters, Scenic Tanzania Adventure",
    value: "Big Five Safari, Cultural Encounters, Scenic Tanzania Adventure",
  },
  {
    label:
      "Cultural Encounters, Rift Valley Adventure, Authentic Tanzania Safari",
    value:
      "Cultural Encounters, Rift Valley Adventure, Authentic Tanzania Safari",
  },
  {
    label:
      "Luxury Glamping, Cultural Discovery, Big Five & Rift Valley Adventure",
    value:
      "Luxury Glamping, Cultural Discovery, Big Five & Rift Valley Adventure",
  },
  {
    label: "Great Migration, Maasai Culture, Big Five & Highland Adventure",
    value: "Great Migration, Maasai Culture, Big Five & Highland Adventure",
  },
  {
    label: "Ngorongoro Crater, Serengeti Adventure, Classic Camping Experience",
    value: "Ngorongoro Crater, Serengeti Adventure, Classic Camping Experience",
  },
  {
    label: "Ngorongoro Crater, Serengeti Plains & Rift Valley Discovery",
    value: "Ngorongoro Crater, Serengeti Plains & Rift Valley Discovery",
  },
  {
    label: "Tarangire, Ngorongoro Crater & Serengeti Classic Wildlife Circuit",
    value: "Tarangire, Ngorongoro Crater & Serengeti Classic Wildlife Circuit",
  },
];

export default function StepTwoSection({ selectedDestinations }) {
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    countryCode: "",
    country: "",
    email: "",
    adults: 1,
    children: 0,
    destination: [],
    travelDate: "",
    days: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const dropdownRef = useRef(null);

  const router = useRouter();

  const fieldRefs = {
    name: useRef(null),
    phone: useRef(null),
    email: useRef(null),
    destination: useRef(null),
    travelDate: useRef(null),
    days: useRef(null),
  };

  // ✅ auto-fill from step 1
  useEffect(() => {
    if (selectedDestinations.length) {
      setFormData((prev) => ({
        ...prev,
        destination: selectedDestinations,
      }));
    }
  }, [selectedDestinations]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!isValidPhoneNumber(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.destination.length)
      newErrors.destination = "Please select a safari";

    if (!formData.travelDate)
      newErrors.travelDate = "Please select a travel date";

    if (!formData.days || Number(formData.days) < 1)
      newErrors.days = "Please enter valid number of days";

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

    try {
      setLoading(true);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/tanzania-tailormade-safari`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      router.push("/thank-you");

      // reset form
      setFormData({
        name: "",
        phone: "",
        countryCode: "",
        country: "",
        email: "",
        adults: 1,
        children: 0,
        destination: [],
        tourType: "",
        travelDate: "",
        days: "",
        message: "",
      });

      setPhone("");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="step-2"
      className="bg-gradient-to-r from-[#2a1a0f] via-[#3a2415] to-[#2a1a0f] py-12 md:py-20 px-4 md:px-6 text-white"
    >
      <div className="max-w-5xl mx-auto">
        {/* STEP */}
        <div className="flex flex-col items-center mb-12">
          <span className=" !font-avenir border border-[#d87029] text-[#d87029] px-6 py-2 rounded-full text-sm tracking-[0.2em] uppercase">
            Build Your Safari
          </span>
          <div className="w-10 h-[1px] bg-[#d87029] mt-3 mb-8"></div>
          {/* <p className=" !font-avenir text-gray-300 mt-4">
            Just a few details and we’ll design your private itinerary
          </p> */}
          <h2 className=" !font-cormorant text-3xl md:text-4xl lg:text-5xl  text-center mb-4 capitalize">
            Design Your Dream Tanzania Safari
          </h2>

          <p className=" !font-avenir text-center text-[#f1a878] text-[15px] mb-4 max-w-xl mx-auto">
            Tell us what stirs your imagination. We’ll craft a private itinerary
            around your vision.
          </p>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-[#f6f3ee] text-black rounded-md p-8 shadow-xl">
       

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Header */}

            {/* Tier */}
            <div>
              <label className="label">Safari Tier Interest *</label>

              <div className="relative" ref={dropdownRef}>
                <div
                  onClick={() => setOpen((prev) => !prev)}
                  className="input flex justify-between items-center cursor-pointer"
                >
                  {/* <span className="text-gray-600 text-sm">
                      {formData.destination.length > 0
                        ? formData.destination.join(", ")
                        : "Select a tier"}
                    </span> */}
                  <span className="text-gray-600 text-sm">
                    {formData.destination.length > 0
                      ? formData.destination
                          .map(
                            (val) =>
                              options.find((o) => o.value === val)?.label,
                          )
                          .join(", ")
                      : "Select a tier"}
                  </span>
                  <span>▾</span>
                </div>

                {open && (
                  <div className="absolute w-full mt-1 bg-white border border-[#e5ded6] rounded-md shadow z-10 max-h-60 overflow-auto">
                    {options.map((item) => (
                      <label
                        key={item.value}
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={formData.destination.includes(item.value)}
                          onChange={() => {
                            const value = item.value;
                            setFormData((prev) => ({
                              ...prev,
                              destination: prev.destination.includes(value)
                                ? prev.destination.filter((v) => v !== value)
                                : [...prev.destination, value],
                            }));

                            setErrors((prev) => ({
                              ...prev,
                              destination: "",
                            }));
                          }}
                        />
                        <span className="text-sm">{item.label}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
              {errors.destination && (
                <p className="text-red-500 text-sm">{errors.destination}</p>
              )}
            </div>

            {/* Number of days  */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="label">Preferred Travel Date *</label>
                <div className="relative">
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
                    <p className="text-red-500 text-sm mt-1">
                      {errors.travelDate}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label className="label">Number of Days *</label>
                <input
                  type="number"
                  name="days"
                  value={formData.days}
                  onChange={handleChange}
                  ref={fieldRefs.days}
                  className="input"
                  placeholder="e.g. 7"
                />
                {errors.days && (
                  <p className="text-red-500 text-sm">{errors.days}</p>
                )}
              </div>
            </div>

            {/* Adults + Children */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="label">Adults *</label>
                <input
                  type="number"
                  name="adults"
                  value={formData.adults}
                  onChange={handleChange}
                  className="input"
                  placeholder="e.g. 2"
                />
              </div>

              <div>
                <label className="label">Children</label>
                <input
                  type="number"
                  name="children"
                  value={formData.children}
                  onChange={handleChange}
                  className="input"
                  placeholder="e.g. 0"
                />
              </div>
            </div>

            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="label">Your Name *</label>
                <input
                  name="name"
                  ref={fieldRefs.name}
                  value={formData.name}
                  onChange={handleChange}
                  className="input"
                  placeholder="First & last name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="label">Email *</label>
                <input
                  name="email"
                  ref={fieldRefs.email}
                  value={formData.email}
                  onChange={handleChange}
                  className="input"
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Phone */}

            <div>
              <label className="label">Phone</label>
              <PhoneInput
                country={"tz"}
                ref={fieldRefs.phone}
                value={phone}
                // onChange={(phone) => setPhone(phone)}
                onChange={handlePhoneChange}
                enableSearch={true}
                inputClass="!w-full !h-12 !rounded-md !bg-[#f3eee7] !border !border-[#e5ded6] focus:outline-none focus:ring-1 focus:ring-[#d87029]"
                containerStyle={{
                  width: "100%",
                }}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
              {/* <input className="input" placeholder="+1 (000) 000-0000" /> */}
            </div>
            {/* Textarea */}
            <div>
              <label className="label">Tell Us About Your Dream Journey</label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="input"
                placeholder="Wildlife priorities, past travels, special occasions, bucket-list moments..."
              ></textarea>
            </div>

            {/* Button */}
            {/* <button className="w-full bg-gradient-to-r from-[#d87029] to-[#d87029] text-white py-3 uppercase tracking-widest text-sm rounded">
                Get My Custom Safari Plan →
              </button> */}
            <button
              type="submit"
              disabled={loading}
              className="!font-avenir text-xs tracking-[0.72px] md:tracking-[2.4px] uppercase bg-[#d87028] border border-[#e78e4b] text-white  px-6 md:py-2.5 py-3 rounded-xs hover:bg-[#eb8034de] transition cursor-pointer whitespace-nowrap w-full"
            >
              {loading ? "Submitting..." : "Get My Custom Safari Plan →"}
            </button>

            {/* Footer */}
            <div className="flex flex-col md:flex-row justify-between text-xs text-gray-500">
              <span>No obligation · Your details are never shared</span>
              <span>* Required fields</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
