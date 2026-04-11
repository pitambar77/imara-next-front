import { getTrips } from "@/lib/getTrips";
import { getDestinationLanding } from "@/lib/getDestinationLanding";
import SafariLandingPage from "@/Pages/TanzaniaSafariLanding/SafariLandingPage";

export const metadata = {
  title: "Tanzania Safari Destinations - National Parks & Attractions",
  description:
    "Discover top Tanzania safari destinations, including Serengeti, Ngorongoro, Kilimanjaro, and hidden gems guided by local experts.",
  keywords:
    "Tanzania Safari Destinations, Tanzania National Parks, Tanzania Travel Destinations, Wildlife Destinations Tanzania, Northern Circuit Tanzania, Best Places To Visit In Tanzania, Safari Parks Tanzania",
  openGraph: {
    title: "Imara Kileleni Safaris",
    description:
      "Discover Tanzania safaris and Kilimanjaro adventures with expert local guides.",
    url: "https://imarakilelenisafaris.com/tanzania-destinations",
    siteName: "Imara Kileleni Safaris",
    images: [
      {
        url: "https://res.cloudinary.com/dq0ug85oe/image/upload/v1766472384/imarakileleni_uploads/vkkwdqmiuf9yhcmqcrur.webp",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function Page() {
  const [trips, destination] = await Promise.all([
    getTrips(),
    getDestinationLanding(),
  ]);
  return <SafariLandingPage trips={trips} destination={destination} />;
}
