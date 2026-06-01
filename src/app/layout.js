import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
