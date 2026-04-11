import React from "react";
import WhatHappensNext from "./WhatHappensNext";
// import SafariExpert from "./SafariExpert";
// import GuestReviewSection from "../TanzaniaSafariLanding/GuestReviewSection";
// import BookWithConfidence from "../Home/BookWithConfidence";
import Featured from "../Home/Featured";

const ThankYouPage = () => {
  return (
    <>
      <div className=" max-w-4xl mx-auto text-center py-8 md:py-16 px-4 md:px-20">
        <h2 className=" text-3xl md:text-5xl capitalize mb-4">Thank you for your enquiry</h2>
        <p>
          Your conformation email has been sent to you inbox. Please look out
          for this email which explain the next step to your incredible African
          adventure.
        </p>
      </div>
      <WhatHappensNext/>
      {/* <SafariExpert/>
      <GuestReviewSection/> */}
      {/* <BookWithConfidence/> */}
      <Featured/>
    </>
  );
};

export default ThankYouPage;
