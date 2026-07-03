import "../globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata = {
  title: "Imara Kileleni Safaris",
  description: "Safari tours in Tanzania",
  verification: {
    google: "r8UolgaqzJvp1edpBUfL0AAOPy-u2R2Me0MZXohH3qk",
  },
  icons: {
    icon: "/imaralogo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="image"
          href="/tanzania.webp"
          fetchPriority="high"
        />
      </head>

      <body>
        {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MPBPDFQ6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript> */}

        <Navbar />
        {children}

        <Footer />

        {/* Microsoft Clarity */}
      </body>
    </html>
  );
}
