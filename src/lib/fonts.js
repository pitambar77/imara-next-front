import localFont from "next/font/local";

export const acumin = localFont({
  src: [
    {
      path: "../../public/fonts/fonnts.com-AcuminPro-Black.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-acumin",
  display: "swap",
});

export const acuminBold = localFont({
  src: [
    {
      path: "../../public/fonts/fonnts.com-AcuminPro-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-acumin-bold",
  display: "swap",
});

export const soleil = localFont({
  src: [
    {
      path: "../../public/fonts/soleil/fonnts.com-SoleilRegular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-soleil",
  display: "swap",
});

export const avenir = localFont({
  src: [
    {
      path: "../../public/fonts/avenir/Avenir Next LT Pro Regular.woff2",
      weight: "400",
      style: "normal",
    },
    // {
    //   path: "../../public/fonts/avenir/Avenir Next LT Pro Demi.woff2",
    //   weight: "600",
    //   style: "normal",
    // },
    {
      path: "../../public/fonts/avenir/avenir-next-light.woff2",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-avenir",
  display: "swap",
});

export const cormorant = localFont({
  src: [
    {
      path: "../../public/fonts/cormorant-garamond/CormorantGaramond-Light.woff2",
      weight: "300",
    },
    {
      path: "../../public/fonts/cormorant-garamond/CormorantGaramond-Regular.woff2",
      weight: "400",
    },
    {
      path: "../../public/fonts/cormorant-garamond/CormorantGaramond-Medium.woff2",
      weight: "500",
    },
    {
      path: "../../public/fonts/cormorant-garamond/CormorantGaramond-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../../public/fonts/cormorant-garamond/CormorantGaramond-Bold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-cormorant",
  display: "swap",
});
