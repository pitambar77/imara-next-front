import localFont from "next/font/local";

export const acumin = localFont({
  src: [
    {
      path: "../fonts/AcuminPro-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/AcuminPro-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-acumin",
});

export const soleil = localFont({
  src: [
    {
      path: "../fonts/SoleilRegular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-soleil",
});