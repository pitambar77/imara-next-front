// import "./globals.css";
// import Script from "next/script";
// import { acumin, acuminBold, soleil, avenir, cormorant } from "@/lib/fonts";

// export const viewport = {
//   width: "device-width",
//   initialScale: 1,
//   maximumScale: 1,
// };

// export default function RootLayout({ children }) {
//   return (
//     <html
//       lang="en"
//       className={`
//         ${acumin.variable}
//         ${acuminBold.variable}
//         ${soleil.variable}
//         ${avenir.variable}
//         ${cormorant.variable}
//       `}
//     >
//       <body>
//         {children}

//         <noscript>
//           <iframe
//             src="https://www.googletagmanager.com/ns.html?id=GTM-MPBPDFQ6"
//             height="0"
//             width="0"
//             style="display:none;visibility:hidden"
//           ></iframe>
//         </noscript>

//         {/* Google Ads Tag */}
//         <Script
//           src="https://www.googletagmanager.com/gtag/js?id=AW-17893363008"
//           strategy="afterInteractive"
//         />

//         <Script id="google-ads" strategy="afterInteractive">
//           {`
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', 'AW-17893363008');
//           `}
//         </Script>
//       </body>
//     </html>
//   );
// }

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
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({
              'gtm.start': new Date().getTime(),
              event:'gtm.js'
            });
            var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MPBPDFQ6');
        `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vfkj3g5erd");
          `}
        </Script>

        {/* Analitics (noscript) */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QR83H3B29S');
          `}
        </Script>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QR83H3B29S"
          strategy="afterInteractive"
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MPBPDFQ6"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>

        {children}

        {/* Google Ads */}
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
