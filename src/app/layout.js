// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// export const metadata = {
//   title: "Imara Kileleni Safaris",
//   description: "Safari tours in Tanzania",
//   icons: {
//     icon: "/imaralogo.png",
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         <link
//           rel="preload"
//           as="image"
//           href="/tanzania.webp"
//           fetchPriority="high"
//         />
//       </head>
//       <body>
//         <Navbar />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

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
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MPBPDFQ6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Navbar />
        {children}
        <Footer />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QR83H3B29S"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QR83H3B29S');
          `}
        </Script>
      </body>
    </html>
  );
}

// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import Script from "next/script";

// export const metadata = {
//   title: "Imara Kileleni Safaris",
//   description: "Safari tours in Tanzania",
//   verification: {
//     google: "r8UolgaqzJvp1edpBUfL0AAOPy-u2R2Me0MZXohH3qk",
//   },
//   icons: {
//     icon: "/imaralogo.png",
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         {/* Preload LCP image */}
//         <link
//           rel="preload"
//           as="image"
//           href="/tanzania.webp"
//           fetchPriority="high"
//         />

//         {/* Viewport */}
//         <meta
//           name="viewport"
//           content="width=device-width,initial-scale=1,maximum-scale=1"
//         />
//       </head>

//       <body>
//         {/* Google Tag Manager */}
//         <Script id="gtm-script" strategy="afterInteractive">
//           {`
//             (function(w,d,s,l,i){w[l]=w[l]||[];
//             w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
//             var f=d.getElementsByTagName(s)[0],
//             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
//             j.async=true;
//             j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
//             f.parentNode.insertBefore(j,f);
//             })(window,document,'script','dataLayer','GTM-MPBPDFQ6');
//           `}
//         </Script>

//         {/* GTM noscript */}
//         <noscript>
//           <iframe
//             src="https://www.googletagmanager.com/ns.html?id=GTM-MPBPDFQ6"
//             height="0"
//             width="0"
//             style={{ display: "none", visibility: "hidden" }}
//           ></iframe>
//         </noscript>

//         <Navbar />
//         {children}
//         <Footer />

//         {/* Google Analytics */}
//         <Script
//           src="https://www.googletagmanager.com/gtag/js?id=G-QR83H3B29S"
//           strategy="afterInteractive"
//         />

//         <Script id="google-analytics" strategy="afterInteractive">
//           {`
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', 'G-QR83H3B29S');
//           `}
//         </Script>
//       </body>
//     </html>
//   );
// }
