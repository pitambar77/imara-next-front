import { getTrips } from "@/lib/getTrips";
import Home from "@/Pages/Home/Home";

export const metadata = {
  title: "Imara kileleni Safaris - Local Tanzania Safari & Kilimanjaro Specialists",
  description:
    "Local experts creating personalised Tanzania safaris and Kilimanjaro climbs with honest guidance.",
  keywords:
    "Tanzania safari, Kilimanjaro climb, local safari experts",
  openGraph: {
    title: "Imara Kileleni Safaris",
    description:
      "Discover Tanzania safaris and Kilimanjaro adventures with expert local guides.",
    url: "https://imarakilelenisafaris.com",
    siteName: "Imara Kileleni Safaris",
    images: [
      {
        url: "https://imarakilelenisafaris.com/tanzania.webp",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function Page() {
  const trips = await getTrips();
  return <Home trips={trips} />;
}