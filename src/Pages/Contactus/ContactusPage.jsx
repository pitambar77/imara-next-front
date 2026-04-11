"use client";

import React from "react";

import ContactDetailsSection from "./ContactDetailsSection";
import EnquiryForm from "../../components/EnquiryForm";

const ContactusPage = () => {
  return (
    <div>
      <div
        className="relative w-full h-[40vh] md:h-[64vh] bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `url('/contact-us.webp')`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        <h1 className=" text-3xl md:text-5xl text-white uppercase z-10 ">
          Contact Us
        </h1>
      </div>
      <ContactDetailsSection />
      {/* <ContactUs/> */}
      <EnquiryForm formType="Contact us" />
    </div>
  );
};

export default ContactusPage;
