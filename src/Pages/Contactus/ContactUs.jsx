

import React, { useState } from "react";
import { IoChevronForward } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

/* ================= HELPERS ================= */
const today = new Date();
today.setHours(0, 0, 0, 0);

const years = Array.from({ length: 6 }, (_, i) => today.getFullYear() + i);
const months = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];

const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

const getFirstDay = (year, month) => new Date(year, month, 1).getDay();

const formatFullDate = (year, month, day) =>
  new Date(year, month, day).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const getWeekday = (year, month, day) =>
  new Date(year, month, day).toLocaleDateString("en-GB", {
    weekday: "long",
  });

const formatDate = (date) =>
  date?.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const formatWeekday = (date) =>
  date?.toLocaleDateString("en-GB", {
    weekday: "long",
  });

/* ================= COMPONENT ================= */
const ContactUs = () => {
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  const [arrivalDate, setArrivalDate] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [step, setStep] = useState(0);

  const [travelType, setTravelType] = useState("safari");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    adults: "",
    children: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [serverError, setServerError] = useState("");

  const navigate = useNavigate();

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDay(year, month);

  const isPastDate = (day) => {
    const d = new Date(year, month, day);
    d.setHours(0, 0, 0, 0);
    return d < today;
  };

  // const handleDateClick = (day) => {
  //   if (isPastDate(day)) return;

  //   if (step === 0) {
  //     setArrivalDate(day);
  //     setDepartureDate(null);
  //     setStep(1);
  //   } else if (day > arrivalDate) {
  //     setDepartureDate(day);
  //     setStep(0);
  //   }
  // };

  const handleDateClick = (day) => {
    const clickedDate = new Date(year, month, day);
    clickedDate.setHours(0, 0, 0, 0);

    if (clickedDate < today) return;

    // First click → Arrival
    if (!arrivalDate || (arrivalDate && departureDate)) {
      setArrivalDate(clickedDate);
      setDepartureDate(null);
      return;
    }

    // Second click → Departure (must be after arrival)
    if (clickedDate > arrivalDate) {
      setDepartureDate(clickedDate);
    }
  };

  // const isSelected = (day) => day === arrivalDate || day === departureDate;

  const isSelected = (day) => {
    const d = new Date(year, month, day).setHours(0, 0, 0, 0);
    return (
      (arrivalDate && d === arrivalDate.getTime()) ||
      (departureDate && d === departureDate.getTime())
    );
  };

  // const inRange = (day) =>
  //   arrivalDate && departureDate && day > arrivalDate && day < departureDate;

  const inRange = (day) => {
    if (!arrivalDate || !departureDate) return false;

    const d = new Date(year, month, day).setHours(0, 0, 0, 0);
    return d > arrivalDate.getTime() && d < departureDate.getTime();
  };

  const changeMonth = (dir) => {
    if (dir === "prev") {
      if (month === 0) {
        setMonth(11);
        setYear((y) => y - 1);
      } else setMonth((m) => m - 1);
    } else {
      if (month === 11) {
        setMonth(0);
        setYear((y) => y + 1);
      } else setMonth((m) => m + 1);
    }
  };

  // const totalDays =
  //   arrivalDate && departureDate ? departureDate - arrivalDate + 1 : 0;

  const totalDays =
    arrivalDate && departureDate
      ? Math.round((departureDate - arrivalDate) / (1000 * 60 * 60 * 24)) + 1
      : 0;

  // validation

  const validateForm = () => {
    const newErrors = {};

    if (!arrivalDate) newErrors.arrivalDate = "Arrival date is required";
    if (!departureDate) newErrors.departureDate = "Departure date is required";

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.country.trim()) newErrors.country = "Country is required";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";

    if (!formData.adults || Number(formData.adults) <= 0)
      newErrors.adults = "Adults must be at least 1";

    if (formData.children && Number(formData.children) < 0)
      newErrors.children = "Invalid number";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ================= SUBMIT ================= */

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");
    setSuccess("");

    if (!validateForm()) return;

    const payload = {
      ...formData,
      travelType,
      // arrivalDate: formatFullDate(year, month, arrivalDate),
      // departureDate: formatFullDate(year, month, departureDate),
      arrivalDate: arrivalDate?.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      departureDate: departureDate?.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),

      totalDays,
    };

    try {
      setLoading(true);

      const res = await fetch(
        "https://imarabackend.imarakilelenisafaris.com/api/contact",
        //  "http://localhost:8000/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      // ✅ Success message (same style as your other form)
      setSuccess("✅ Your message has been sent successfully!");

      // ✅ Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        country: "",
        adults: "",
        children: "",
        message: "",
      });

      setErrors({});
      setArrivalDate(null);
      setDepartureDate(null);

      // ✅ Redirect to Thank You page
      setTimeout(() => {
        navigate("/thank-you");
      }, 1200); // small delay for better UX
    } catch (err) {
      setServerError(err.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#fafafa] xl:min-h-screen py-10">
      <div className="px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ================= LEFT ================= */}
        <div className="bg-white rounded-xl p-6 shadow-sm space-y-6">
          <h3 className="text-lg font-semibold">Select Travel Date</h3>

          {/* YEAR & MONTH */}
          <div className="flex gap-3">
            <select
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
              className="border rounded-full px-4 py-2"
            >
              {years.map((y) => (
                <option key={y}>{y}</option>
              ))}
            </select>

            <select
              value={month}
              onChange={(e) => setMonth(Number(e.target.value))}
              className="border rounded-full px-4 py-2 uppercase"
            >
              {months.map((m, i) => (
                <option key={m} value={i}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          {/* CALENDAR */}
          {/* <div className="border rounded-xl p-4">
            <div className="flex items-center  gap-2 mb-3">
              <button
                type="button"
                onClick={() => changeMonth("prev")}
                className="p-1 rounded-full hover:bg-gray-100 transition"
                aria-label="Previous month"
              >
                <IoIosArrowBack className="text-2xl text-gray-700" />
              </button>

              <span className="font-semibold text-sm md:text-base">
                {months[month]} {year}
              </span>

              <button
                type="button"
                onClick={() => changeMonth("next")}
                className="p-1 rounded-full hover:bg-gray-100 transition"
                aria-label="Next month"
              >
                <IoChevronForward className="text-2xl text-gray-700" />
              </button>
            </div>

            <div className="grid grid-cols-7 text-center text-gray-500 text-sm mb-2">
              {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d) => (
                <div key={d}>{d}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: firstDay }).map((_, i) => (
                <div key={i} />
              ))}

              {Array.from({ length: daysInMonth }, (_, i) => {
                const day = i + 1;
                return (
                  <button
                    key={day}
                    onClick={() => handleDateClick(day)}
                    disabled={isPastDate(day)}
                    className={`h-12 rounded-lg
                      ${
                        isPastDate(day)
                          ? "bg-gray-200 text-gray-400"
                          : isSelected(day)
                          ? "bg-[#f6d6b8]"
                          : inRange(day)
                          ? "bg-[#fde6d5]"
                          : "bg-[#fde6d5]"
                      }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div> */}

          <div className="border rounded-xl p-3 sm:p-4 w-full ">
            {/* Header */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <button
                type="button"
                onClick={() => changeMonth("prev")}
                className="p-1 sm:p-2 rounded-full hover:bg-gray-100 transition"
                aria-label="Previous month"
              >
                <IoIosArrowBack className="text-xl sm:text-2xl text-gray-700" />
              </button>

              <span className="font-semibold text-sm sm:text-base text-center">
                {months[month]} {year}
              </span>

              <button
                type="button"
                onClick={() => changeMonth("next")}
                className="p-1 sm:p-2 rounded-full hover:bg-gray-100 transition"
                aria-label="Next month"
              >
                <IoChevronForward className="text-xl sm:text-2xl text-gray-700" />
              </button>
            </div>

            {/* Weekdays */}
            <div className="grid grid-cols-7 text-center text-[10px] sm:text-sm text-gray-500 mb-2">
              {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d) => (
                <div key={d}>{d}</div>
              ))}
            </div>

            {/* Days */}
            <div className="grid grid-cols-7 gap-1 sm:gap-2">
              {Array.from({ length: firstDay }).map((_, i) => (
                <div key={i} />
              ))}

              {Array.from({ length: daysInMonth }, (_, i) => {
                const day = i + 1;
                return (
                  <button
                    key={day}
                    onClick={() => handleDateClick(day)}
                    disabled={isPastDate(day)}
                    className={`
            h-9 sm:h-12
            text-xs sm:text-sm
            rounded-md sm:rounded-lg
            transition
            ${
              isPastDate(day)
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : isSelected(day)
                ? "bg-[#eda45f] font-semibold"
                : inRange(day)
                ? "bg-[#fde6d5]"
                : "bg-[#fde6d5] hover:bg-[#f6d6b8]"
            }
          `}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>

          {errors.arrivalDate && (
            <p className="text-red-500 text-xs">{errors.arrivalDate}</p>
          )}
          {errors.departureDate && (
            <p className="text-red-500 text-xs">{errors.departureDate}</p>
          )}

          {/* TOUR TYPE */}

          <h2> Select Tour Type</h2>

          <select
            value={travelType}
            onChange={(e) => setTravelType(e.target.value)}
            className="border rounded-full px-4 py-2"
          >
            <option value="safari">Wildlife Safari</option>
            <option value="trekking">Trekking</option>
            <option value="daytrip">Day Trip</option>
            <option value="beach">Zanzibar Beach Holiday</option>
          </select>

          {/* PASSENGER FORM */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Full Name */}
            <div className="flex flex-col">
              <input
                placeholder="Full Name*"
                className="border p-2"
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <input
                placeholder="Email*"
                className="border p-2"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Country */}
            <div className="flex flex-col">
              <select
                className="border p-2 text-gray-500"
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
              >
                <option value="">Select Country</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>

                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegovina">
                  Bosnia and Herzegovina
                </option>
                <option value="Botswana">Botswana</option>
                <option value="Brazil">Brazil</option>
                <option value="Brunei">Brunei</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>

                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Central African Republic">
                  Central African Republic
                </option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>

                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>

                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Estonia">Estonia</option>
                <option value="Eswatini">Eswatini</option>
                <option value="Ethiopia">Ethiopia</option>

                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>

                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Greece">Greece</option>
                <option value="Grenada">Grenada</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guinea">Guinea</option>
                <option value="Guyana">Guyana</option>

                <option value="Haiti">Haiti</option>
                <option value="Honduras">Honduras</option>
                <option value="Hungary">Hungary</option>

                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran">Iran</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>

                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jordan">Jordan</option>

                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kuwait">Kuwait</option>

                <option value="Laos">Laos</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libya">Libya</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>

                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Mexico">Mexico</option>
                <option value="Moldova">Moldova</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>

                <option value="Namibia">Namibia</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Nigeria">Nigeria</option>
                <option value="North Korea">North Korea</option>
                <option value="Norway">Norway</option>

                <option value="Oman">Oman</option>

                <option value="Pakistan">Pakistan</option>
                <option value="Panama">Panama</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>

                <option value="Qatar">Qatar</option>

                <option value="Romania">Romania</option>
                <option value="Russia">Russia</option>
                <option value="Rwanda">Rwanda</option>

                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Korea">South Korea</option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>

                <option value="Tanzania">Tanzania</option>
                <option value="Thailand">Thailand</option>
                <option value="Togo">Togo</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>

                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">
                  United Arab Emirates
                </option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>

                <option value="Venezuela">Venezuela</option>
                <option value="Vietnam">Vietnam</option>

                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
              </select>
              {errors.country && (
                <p className="text-red-500 text-xs mt-1">{errors.country}</p>
              )}
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <input
                type="number"
                placeholder="Phone*"
                className="border p-2"
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Adults */}
            <div className="flex flex-col">
              <input
                type="number"
                min="1"
                placeholder="Adults*"
                className="border p-2"
                onChange={(e) =>
                  setFormData({ ...formData, adults: e.target.value })
                }
              />
              {errors.adults && (
                <p className="text-red-500 text-xs mt-1">{errors.adults}</p>
              )}
            </div>

            {/* Children */}
            <div className="flex flex-col">
              <input
                type="number"
                min="0"
                placeholder="Children"
                className="border p-2"
                onChange={(e) =>
                  setFormData({ ...formData, children: e.target.value })
                }
              />
              {errors.children && (
                <p className="text-red-500 text-xs mt-1">{errors.children}</p>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col md:col-span-2">
              <textarea
                placeholder="Message"
                className="border p-2"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="bg-white rounded-xl p-6 shadow-sm space-y-6">
          {/* <h3 className="text-xl font-semibold">
            {arrivalDate ? formatFullDate(year, month, arrivalDate) : "--"}
          </h3>
          <p>
            {departureDate ? formatFullDate(year, month, departureDate) : "--"}
          </p> */}

          <h3 className="text-xl font-semibold">
            {arrivalDate ? formatDate(arrivalDate) : "--"}
          </h3>

          <p>{departureDate ? formatDate(departureDate) : "--"}</p>

          <span className="inline-block bg-[#f2c59b] px-3 py-1 rounded-full text-sm mb-4">
            {travelType.toUpperCase()}
          </span>

          <div className="flex gap-4 mt-6">
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 bg-black rounded-full"></div>
              <div className="flex-1 w-px bg-gray-400 my-2"></div>
              <div className="w-3 h-3 border-2 border-black"></div>
            </div>
            <div className="space-y-8">
              <div>
                {/* <h3 className="font-semibold">
                  {arrivalDate
                    ? formatFullDate(year, month, arrivalDate)
                    : "--"}
                </h3>
                <p>
                  {arrivalDate
                    ? `${getWeekday(year, month, arrivalDate)}`
                    : "--"}
                </p> */}

                <h3 className="font-semibold">
                  {arrivalDate ? formatDate(arrivalDate) : "--"}
                </h3>
                <p>{arrivalDate ? formatWeekday(arrivalDate) : "--"}</p>
              </div>

              <div>
                {/* <h3 className="font-semibold">
                  {departureDate
                    ? formatFullDate(year, month, departureDate)
                    : "--"}
                </h3>
                <p>
                  {departureDate
                    ? `${getWeekday(year, month, departureDate)}`
                    : "--"}
                </p> */}

                <h3 className="font-semibold">
                  {departureDate ? formatDate(departureDate) : "--"}
                </h3>
                <p>{departureDate ? formatWeekday(departureDate) : "--"}</p>
              </div>
            </div>
          </div>

          <div className="bg-[#fde6d5] rounded-xl p-4 flex justify-between">
            <span>Total Days</span>
            <span>{totalDays}</span>
          </div>

          {serverError && (
            <p className="text-red-600 text-sm font-medium">{serverError}</p>
          )}

          {success && (
            <p className="text-green-600 text-sm font-medium">{success}</p>
          )}

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-[#d87028] text-white cursor-pointer rounded-full px-6 py-2 uppercase font-semibold disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
