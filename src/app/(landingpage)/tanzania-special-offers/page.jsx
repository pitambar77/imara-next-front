import Main from "@/Pages/TanzaniaSpecialOffers/Main";
import Script from "next/script";
import React from "react";

const page = () => {
  return (
    <div>
      <Main />
      <Script id="landing-conversion" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {
            'send_to': 'AW-17893363008/sdljCIGrxvQbEMCanNRC',
            'value': 1.0,
            'currency': 'USD'
          });
        `}
      </Script>
    </div>
  );
};

export default page;
