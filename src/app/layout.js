import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-cormorant",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cormorant.variable}>{children}</body>
    </html>
  );
}

// import "./globals.css";

// import { acumin, acuminBold, soleil, avenir, cormorant } from "@/lib/fonts";

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
//       <body>{children}</body>
//     </html>
//   );
// }
