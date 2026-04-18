// import { getTrips } from "@/lib/getTrips";
// import { getDestinationLanding } from "@/lib/getDestinationLanding";
// import SafariLandingPage from "@/Pages/TanzaniaSafariLanding/SafariLandingPage";

// export const metadata = {
//   title: "Tanzania Safari Destinations - National Parks & Attractions",
//   description:
//     "Discover top Tanzania safari destinations, including Serengeti, Ngorongoro, Kilimanjaro, and hidden gems guided by local experts.",
//   keywords:
//     "Tanzania Safari Destinations, Tanzania National Parks, Tanzania Travel Destinations, Wildlife Destinations Tanzania, Northern Circuit Tanzania, Best Places To Visit In Tanzania, Safari Parks Tanzania",
//   openGraph: {
//     title: "Imara Kileleni Safaris",
//     description:
//       "Discover Tanzania safaris and Kilimanjaro adventures with expert local guides.",
//     url: "https://imarakilelenisafaris.com/tanzania-destinations",
//     siteName: "Imara Kileleni Safaris",
//     images: [
//       {
//         url: "https://res.cloudinary.com/dq0ug85oe/image/upload/v1766472384/imarakileleni_uploads/vkkwdqmiuf9yhcmqcrur.webp",
//         width: 1200,
//         height: 630,
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
// };

// export default async function Page() {
//   const [trips, destination] = await Promise.all([
//     getTrips(),
//     getDestinationLanding(),
//   ]);
//   return <SafariLandingPage trips={trips} destination={destination} />;
// }


import { getTrips } from "@/lib/getTrips";
import { getDestinationLanding } from "@/lib/getDestinationLanding";
import SafariLandingPage from "@/Pages/TanzaniaSafariLanding/SafariLandingPage";

/* ================= METADATA ================= */

export async function generateMetadata() {

  const destination = await getDestinationLanding();

  if (!destination) {
    return { title: "Destination Landing Not Found" };
  }

  const seoRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${destination._id}&referenceType=destinationlanding`,
    { next: { revalidate: 300 } }
  );

  const seo = await seoRes.json();

  return {
    title: seo?.metaTitle || destination.title,
    description: seo?.metaDescription || destination.subtitle,
    keywords: seo?.keywords,

    alternates: {
      canonical:
        seo?.canonicalUrl ||
        "https://imarakilelenisafaris.com/tanzania-destinations",
    },

    openGraph: {
      title: seo?.metaTitle || destination.title,
      description: seo?.metaDescription || destination.subtitle,
      images: [seo?.ogImage || destination.image],
      url:
        seo?.canonicalUrl ||
        "https://imarakilelenisafaris.com/tanzania-destinations",
      siteName: "Imara Kileleni Safaris",
      type: "website",
    },
  };
}

/* ================= PAGE ================= */

export default async function Page() {

  const [trips, destination] = await Promise.all([
    getTrips(),
    getDestinationLanding(),
  ]);

  const seoRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${destination._id}&referenceType=destinationlanding`,
    { next: { revalidate: 300 } }
  );

  const seo = await seoRes.json();

  return (
    <>
      {/* Schema from Admin */}
      {seo?.schemaMarkup && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seo.schemaMarkup),
          }}
        />
      )}

      <SafariLandingPage trips={trips} destination={destination} />
    </>
  );
}