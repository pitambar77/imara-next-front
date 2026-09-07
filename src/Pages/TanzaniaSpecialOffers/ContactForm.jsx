"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitted(true);

    // Connect your API / Zoho CRM here.
  }

  return (
    <section className="w-full bg-white py-[55px] sm:py-[60px] lg:py-[70px]">
      <div className="mx-auto w-full max-w-[1140px] px-[30px] sm:px-[40px] lg:px-0">
        {/* Heading */}
        <h2 className="!font-cormorant m-0 mb-4 text-3xl font-medium leading-tight text-[#29283b] md:text-4xl lg:text-5xl">
          6. And Finally Your Contact Information
        </h2>

        {/* Description */}
        <p className="!font-avenir m-0 mb-6 max-w-[800px] text-[17px] leading-[1.6] text-[#444] md:mb-10">
          We will send quotes to your email ID. Your contact information will be
          confidential and will be used only to send quotes for Safari in
          Tanzania.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-[500px]">
          {/* Full Name */}
          <label className="!font-avenir mb-5 block text-[17px] font-semibold text-[#333]">
            Full Name
            <input
              required
              type="text"
              placeholder="Full Name"
              className="!font-avenir mt-2 h-[42px] w-full border border-[#dddddd] px-3 text-[17px] font-normal text-[#333] outline-none transition-colors focus:border-[#c6a24e]"
            />
          </label>

          {/* Email */}
          <label className="!font-avenir mb-5 block text-[17px] font-semibold text-[#333]">
            Email (We will send the quotes to this email id. We do not spam)
            <input
              required
              type="email"
              placeholder="Email ID"
              className="!font-avenir mt-2 h-[42px] w-full border border-[#dddddd] px-3 text-[17px] font-normal text-[#333] outline-none transition-colors focus:border-[#c6a24e]"
            />
          </label>

          {/* Phone */}
          <label className="!font-avenir mb-5 block text-[17px] font-semibold text-[#333]">
            Phone (Please include your international country code as well)
            <div className="mt-2 flex w-full">
              <select
                required
                className="!font-avenir h-[42px] w-[180px] cursor-pointer border border-[#dddddd] bg-white px-2 text-[15px] font-normal text-[#555] outline-none focus:border-[#c6a24e]"
              >
                <option value="" className="text-[#333]">-- Country Code --</option>
                <option value="+91">+91 — India</option>
                <option value="+44">+44 — UK</option>
                <option value="+1">+1 — USA</option>
                <option value="+255">+255 — Tanzania</option>
              </select>

              <input
                required
                type="tel"
                placeholder="Phone"
                className="!font-avenir h-[42px] flex-1 border-y border-r border-[#dddddd] px-3 text-[17px] font-normal text-[#333] outline-none focus:border-[#c6a24e]"
              />
            </div>
          </label>

          {/* Message */}
          <label className="!font-avenir mb-5 block text-[17px] font-semibold text-[#333]">
            Message (Optional)
            <textarea
              rows={5}
              placeholder="Additional information can help our sales consultant suggest you best suited parks, itinerary, accommodations etc for your plan"
              className="!font-avenir mt-2 w-full resize-none border border-[#dddddd] p-3 text-[17px] font-normal leading-[1.5] text-[#333] outline-none transition-colors focus:border-[#c6a24e]"
            />
          </label>

          {/* Submit */}
          <button
            type="submit"
            className="!font-avenir h-[45px] w-full cursor-pointer bg-[#d87028] px-5 text-[12px] font-bold tracking-[0.03em] text-white transition-colors duration-300 hover:bg-[#dfa509]"
          >
            SEND ME QUOTES
          </button>

          {/* Success Message */}
          {submitted && (
            <p className="!font-avenir mt-4 text-[12px] text-[#77777e]">
              Thank you. Your enquiry has been submitted.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
