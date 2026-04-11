// import { useState } from "react";
// import { parsePhoneNumberFromString } from "libphonenumber-js";

// export default function PhoneInputField() {
//   const [phone, setPhone] = useState("");
//   const [country, setCountry] = useState("TZ");
//   const [isValid, setIsValid] = useState(true);

//   const handlePhoneChange = (e) => {
//     const value = e.target.value;
//     setPhone(value);

//     const phoneNumber = parsePhoneNumberFromString(value);

//     if (phoneNumber && phoneNumber.isValid()) {
//       setCountry(phoneNumber.country);
//       setIsValid(true);
//     } else {
//       setCountry("Invalid");
//       setIsValid(false);
//     }
//   };

//   return (
//     <div className="w-full max-w-xl">
//       <label className="block mb-2 font-medium">
//         Phone Number (International Format)
//       </label>

//       <div className="flex border rounded-sm overflow-hidden">

//         {/* PHONE INPUT */}
//         <input
//           type="tel"
//           value={phone}
//           onChange={handlePhoneChange}
//           placeholder="+255778778887"
//           className="flex-1 p-3 outline-none"
//         />

//         {/* COUNTRY STATUS */}
//         <div
//           className={`px-6 flex items-center border-l font-semibold ${
//             isValid ? "text-black" : "text-red-500"
//           }`}
//         >
//           {isValid ? country : "Invalid"}
//         </div>

//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import {
//   parsePhoneNumberFromString,
//   getCountries,
//   getCountryCallingCode,
// } from "libphonenumber-js";

// export default function PhoneInputField({ value, setValue }) {
//   const [country, setCountry] = useState("TZ");
//   const [isValid, setIsValid] = useState(true);

//   const handlePhoneChange = (e) => {
//     let val = e.target.value;

//     // ensure + always at start
//     if (!val.startsWith("+")) {
//       val = "+" + val.replace(/\+/g, "");
//     }

//     setValue(val);

//     const phone = parsePhoneNumberFromString(val);

//     if (phone && phone.isValid() && phone.country === country) {
//       setIsValid(true);
//     } else {
//       setIsValid(false);
//     }
//   };

//   const handleCountryChange = (e) => {
//     const newCountry = e.target.value;
//     setCountry(newCountry);

//     const code = getCountryCallingCode(newCountry);

//     // auto insert country code
//     setValue("+" + code);
//   };

//   return (
//     <div>
//       <label className="block mb-1 font-medium">
//         Phone Number (International Format)
//       </label>

//       <div className="flex border rounded-xl overflow-hidden bg-white">
//         {/* PHONE INPUT */}
//         <input
//           type="tel"
//           value={value}
//           onChange={handlePhoneChange}
//           placeholder={`+${getCountryCallingCode(country)}`}
//           className="flex-1 p-3 outline-none"
//         />

//         {/* COUNTRY DROPDOWN */}
//         <select
//           value={country}
//           onChange={handleCountryChange}
//           className={`px-4 border-l outline-none ${
//             isValid ? "text-black" : "text-red-500"
//           }`}
//         >
//           {getCountries().map((c) => {
//             const code = getCountryCallingCode(c);
//             return (
//               <option key={c} value={c}>
//                 {c} (+{code})
//               </option>
//             );
//           })}
//         </select>
//       </div>

//       {!isValid && (
//         <p className="text-red-500 text-sm mt-1">
//           Invalid phone number for selected country
//         </p>
//       )}
//     </div>
//   );
// }

import { useState } from "react";
import {
  parsePhoneNumberFromString,
  getCountries,
  getCountryCallingCode,
} from "libphonenumber-js";

export default function PhoneInputField({ value, setValue }) {
  const [country, setCountry] = useState("TZ");
  const [error, setError] = useState("");

  const handlePhoneChange = (e) => {
    let val = e.target.value;

    // remove letters and symbols except +
    val = val.replace(/[^\d+]/g, "");

    // ensure + prefix
    if (!val.startsWith("+")) {
      val = "+" + val.replace(/\+/g, "");
    }

    setValue(val);

    const phone = parsePhoneNumberFromString(val);

    if (!phone) {
      setError("Invalid phone number");
      return;
    }

    if (phone.country !== country) {
      setError("Country code does not match selected country");
      return;
    }

    if (!phone.isValid()) {
      setError("Phone number digits are incorrect");
      return;
    }

    setError("");
  };

  const handleCountryChange = (e) => {
    const newCountry = e.target.value;
    setCountry(newCountry);

    const code = getCountryCallingCode(newCountry);

    // reset phone with country code
    setValue("+" + code);
    setError("");
  };

  return (
    <div>
      <label className="block mb-1 font-medium">
        Phone Number (International Format)
      </label>

      <div className="flex border rounded-md overflow-hidden bg-white">
        
        {/* PHONE INPUT */}
        <input
          type="tel"
          maxLength={16}
          value={value}
          onChange={handlePhoneChange}
          placeholder={`+${getCountryCallingCode(country)}`}
          className="flex-1 p-3 outline-none"
        />

        {/* COUNTRY SELECT */}
        <select
          value={country}
          onChange={handleCountryChange}
          className="px-4 border-l outline-none"
        >
          {getCountries().map((c) => {
            const code = getCountryCallingCode(c);
            return (
              <option key={c} value={c}>
                {c} (+{code})
              </option>
            );
          })}
        </select>
      </div>

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
}




