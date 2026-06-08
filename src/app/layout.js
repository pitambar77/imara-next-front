import "./globals.css";
import Script from "next/script";
import { acumin, acuminBold, soleil, avenir, cormorant } from "@/lib/fonts";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`
        ${acumin.variable}
        ${acuminBold.variable}
        ${soleil.variable}
        ${avenir.variable}
        ${cormorant.variable}
      `}
    >
      <body>
        {children}

        {/* Google Ads Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17893363008"
          strategy="afterInteractive"
        />

        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17893363008');
          `}
        </Script>
      </body>
    </html>
  );
}
