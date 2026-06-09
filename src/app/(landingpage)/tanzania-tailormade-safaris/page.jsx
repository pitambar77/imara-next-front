import Script from "next/script";
import Hero from "@/Pages/Tanzania-tailormade-safaris/Hero";

export default function Page() {
  return (
    <>
      <Hero />

      <Script id="landing-conversion" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {
            'send_to': 'AW-17893363008/sdljCIGrxvQbEMCanNRC',
            'value': 1.0,
            'currency': 'USD'
          });
        `}
      </Script>
    </>
  );
}
