import React from "react";
// import Script from "next/script";
import Hero from "@/Pages/Tanznia-Safaris-Trip/Hero";
const page = () => {
  return (
    <div>
      <Hero />
      {/* <Script id="landing-conversion" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {
            'send_to': 'AW-17893363008/sdljCIGrxvQbEMCanNRC',
            'value': 1.0,
            'currency': 'USD'
          });
        `}
      </Script> */}
    </div>
  );
};

export default page;
