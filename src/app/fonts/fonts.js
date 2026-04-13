import localFont from "next/font/local";

export const acumin = localFont({
  src: [
    {
      path: "./fonnts.com-AcuminPro-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonnts.com-AcuminPro-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-acumin",
  display: "swap",
});

export const soleil = localFont({
  src: [
    {
      path: "./soleil/fonnts.com-SoleilRegular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-soleil",
  display: "swap",
});