"use client";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useRouter } from "next/navigation";
import { isValidPhoneNumber } from "libphonenumber-js";
import { useState, useRef, useEffect } from "react";

export default function ContactForm({ safariData }) {
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [open, setOpen] = useState(false);
  const [stepError, setStepError] = useState("");

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    countryCode: "",
    country: "",
    email: "",
    adults: 1,
    children: 0,
    destination: [],
    countryOfResidence: "",
    travelDate: "",
    days: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // const validateSafariSelections = () => {
  //   if (!safariData?.destinations?.length) {
  //     setStepError("Please select at least one destination");
  //     document.getElementById("destinations")?.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //     return false;
  //   }

  //   if (!safariData?.days) {
  //     setStepError("Please select number of days");
  //     document.getElementById("days")?.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //     return false;
  //   }

  //   if (!safariData?.travelStyle) {
  //     setStepError("Please select a travel style");
  //     document.getElementById("travel-style")?.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //     return false;
  //   }

  //   if (!safariData?.travelDate) {
  //     setStepError("Please select your travel date");
  //     document.getElementById("travel-date")?.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //     return false;
  //   }

  //   setStepError("");
  //   return true;
  // };

  const scrollToSection = (id, message) => {
    setStepError(message);

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // remove error after scroll
      setTimeout(() => {
        setStepError("");
      }, 3000);
    }, 1000); // wait 5 seconds before scrolling

    return false;
  };

  const validateSafariSelections = () => {
    if (!safariData?.destinations?.length) {
      return scrollToSection(
        "destinations",
        "Please select at least one destination",
      );
    }

    if (!safariData?.days) {
      return scrollToSection("days", "Please select number of days");
    }

    if (!safariData?.travelStyle) {
      return scrollToSection("travel-style", "Please select a travel style");
    }

    if (!safariData?.travelDate) {
      return scrollToSection("travel-date", "Please select your travel date");
    }

    setStepError("");
    return true;
  };

  const dropdownRef = useRef(null);

  const router = useRouter();

  const fieldRefs = {
    firstname: useRef(null),
    lastname: useRef(null),
    email: useRef(null),
    phone: useRef(null),
    countryOfResidence: useRef(null),
  };

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

    if (!formData.firstname.trim())
      newErrors.firstname = "First name is required";
    if (!formData.lastname.trim())
      newErrors.lastname = " Last name is required";

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

    if (!formData.countryOfResidence.trim()) {
      newErrors.countryOfResidence = "Country of residency is required";
    }

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

    // Step 1-4 validation
    if (!validateSafariSelections()) return;

    // Contact form validation
    if (!validateForm()) return;

    const payload = {
      ...formData,
      destinations: safariData.destinations,
      days: safariData.days,
      travelStyle: safariData.travelStyle,
      travelDate: safariData.travelDate,
    };

    try {
      setLoading(true);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/safariform`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      if (window.gtag) {
        window.gtag("event", "conversion", {
          send_to: "AW-17893363008/sdljCIGrxvQbEMCanNRC",
          value: 1.0,
          currency: "USD",
        });
      }

      router.push("/thank-you");

      setFormData({
        firstname: "",
        lastname: "",
        phone: "",
        countryCode: "",
        country: "",
        email: "",
        adults: 1,
        children: 0,
        countryOfResidence: "",
        destination: [],
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
      id="contact-form"
      className="bg-[#fbf5ef91] py-12 md:py-20 px-4 md:px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="!font-cormorant text-3xl md:text-4xl lg:text-5xl mb-4 text-[#2c2c2c]">
          5. Contact Information
        </h2>

        <p className="!font-avenir text-[#444] text-lg mb-10">
          Share your details and our safari expert will create your personalized
          itinerary and quotation.
        </p>

        {/* RIGHT SIDE FORM */}
        <div className=" text-black rounded-md max-w-xl mx-auto">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="label">First Name *</label>
                <input
                  name="firstname"
                  ref={fieldRefs.firstname}
                  value={formData.firstname}
                  onChange={handleChange}
                  className="input text-[#444] text-sm !font-avenir !bg-[#fff]"
                  placeholder="First name"
                />
                {errors.firstname && (
                  <p className="text-red-500 text-sm">{errors.firstname}</p>
                )}
              </div>

              <div>
                <label className="label">Last Name *</label>
                <input
                  name="lastname"
                  ref={fieldRefs.lastname}
                  value={formData.lastname}
                  onChange={handleChange}
                  className="input text-[#444] text-sm !font-avenir !bg-[#fff]"
                  placeholder="Last name"
                />
                {errors.lastname && (
                  <p className="text-red-500 text-sm">{errors.lastname}</p>
                )}
              </div>
            </div>
            <div>
              <label className="label">Email *</label>
              <input
                name="email"
                ref={fieldRefs.email}
                value={formData.email}
                onChange={handleChange}
                className="input text-[#444] text-sm !font-avenir !bg-[#fff]"
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
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
                  className="input text-[#444] !bg-[#fff] text-sm !font-avenir"
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
                  className="input text-[#444] text-sm !font-avenir !bg-[#fff]"
                  placeholder="e.g. 0"
                />
              </div>
            </div>

            {/* Name + Email */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="label">Country of Residency *</label>
                <select
                  name="countryOfResidence"
                  ref={fieldRefs.countryOfResidence}
                  value={formData.countryOfResidence}
                  onChange={handleChange}
                  className="input !h-12 text-[#444] !bg-[#fff] text-sm !font-avenir"
                >
                  <option value="">Select Country</option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Angola">Angola</option>
                  <option value="Antigua and Barbuda">
                    Antigua and Barbuda
                  </option>
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
                  <option value="Congo">Congo</option>
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
                  <option value="Equatorial Guinea">Equatorial Guinea</option>
                  <option value="Eritrea">Eritrea</option>
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
                  <option value="Kyrgyzstan">Kyrgyzstan</option>

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
                  <option value="Mauritania">Mauritania</option>
                  <option value="Mauritius">Mauritius</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Moldova">Moldova</option>
                  <option value="Monaco">Monaco</option>
                  <option value="Mongolia">Mongolia</option>
                  <option value="Montenegro">Montenegro</option>
                  <option value="Morocco">Morocco</option>
                  <option value="Mozambique">Mozambique</option>
                  <option value="Myanmar">Myanmar</option>

                  <option value="Namibia">Namibia</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Nicaragua">Nicaragua</option>
                  <option value="Niger">Niger</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="North Korea">North Korea</option>
                  <option value="Norway">Norway</option>

                  <option value="Oman">Oman</option>

                  <option value="Pakistan">Pakistan</option>
                  <option value="Panama">Panama</option>
                  <option value="Papua New Guinea">Papua New Guinea</option>
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
                  <option value="Sierra Leone">Sierra Leone</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Slovakia">Slovakia</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Somalia">Somalia</option>
                  <option value="South Africa">South Africa</option>
                  <option value="South Korea">South Korea</option>
                  <option value="Spain">Spain</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="Sudan">Sudan</option>
                  <option value="Suriname">Suriname</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Syria">Syria</option>

                  <option value="Taiwan">Taiwan</option>
                  <option value="Tajikistan">Tajikistan</option>
                  <option value="Tanzania">Tanzania</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Togo">Togo</option>
                  <option value="Trinidad and Tobago">
                    Trinidad and Tobago
                  </option>
                  <option value="Tunisia">Tunisia</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Turkmenistan">Turkmenistan</option>

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

                  <option value="Yemen">Yemen</option>

                  <option value="Zambia">Zambia</option>
                  <option value="Zimbabwe">Zimbabwe</option>
                </select>
                {errors.countryOfResidence && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.countryOfResidence}
                  </p>
                )}
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
                  inputClass="!w-full !h-12 !rounded-md !bg-[#f3eee7] !border !border-[#e5ded6] focus:outline-none focus:ring-1 focus:ring-[#d87029] text-[#444] text-sm !font-avenir !bg-[#fff]"
                  containerStyle={{
                    width: "100%",
                  }}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
                {/* <input className="input" placeholder="+1 (000) 000-0000" /> */}
              </div>
            </div>
            {/* Textarea */}
            <div>
              <label className="label">Message</label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="input text-[#444] text-sm !font-avenir !bg-[#fff]"
                placeholder="Tell us more about your travel plan..."
              ></textarea>
            </div>

            {stepError && (
              <p className="text-red-500 text-sm text-center">{stepError}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="!font-avenir text-xs tracking-[0.72px] md:tracking-[2.4px] uppercase bg-[#d87028] border border-[#e78e4b] text-white  px-6 md:py-2.5 py-3 rounded-xs hover:bg-[#eb8034de] transition cursor-pointer whitespace-nowrap w-full"
            >
              {loading ? "Submitting..." : "Send Me My Safari Plan"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
