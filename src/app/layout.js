import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Imara Kileleni Safaris",
  description: "Safari tours in Tanzania",
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import Script from "next/script";

// export const viewport = {
//   width: "device-width",
//   initialScale: 1,
//   maximumScale: 1,
// };

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
//         <link
//           rel="preload"
//           as="image"
//           href="/tanzania.webp"
//           fetchPriority="high"
//         />
//       </head>

//       <body>
//         <noscript>
//           <iframe
//             src="https://www.googletagmanager.com/ns.html?id=GTM-MPBPDFQ6"
//             height="0"
//             width="0"
//             style={{ display: "none", visibility: "hidden" }}
//           />
//         </noscript>

//         <Navbar />
//         {children}
//         <Footer />

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
