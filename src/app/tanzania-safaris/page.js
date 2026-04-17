// import { getTrips } from "@/lib/getTrips";
// import SafariDestiLanding from "@/Pages/SafariDestination/SafariDestiLanding";

// export default async function Page() {
//   const trips = await getTrips();
//   return <SafariDestiLanding trips={trips} />;
// }

import { getTrips } from "@/lib/getTrips";
import SafariDestiLanding from "@/Pages/SafariDestination/SafariDestiLanding";

export async function generateMetadata() {
  const seoRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceType=destinationlanding`,
    { next: { revalidate: 300 } }
  );

  const seo = await seoRes.json();

  return {
    title: seo?.metaTitle || "Tanzania Safari Destinations",
    description:
      seo?.metaDescription ||
      "Explore Tanzania's top safari destinations including Serengeti, Ngorongoro Crater, and Tarangire.",
    keywords:
      seo?.keywords ||
      "Tanzania safari destinations, Serengeti safari, Ngorongoro crater safari",
    openGraph: {
      title: seo?.metaTitle || "Tanzania Safari Destinations",
      description: seo?.metaDescription,
      images: [seo?.ogImage],
      url: "https://imarakilelenisafaris.com/tanzania-destinations",
    },
  };
}

export default async function Page() {
  const trips = await getTrips();

  const seoRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceType=destinationlanding`,
    { next: { revalidate: 300 } }
  );

  const seo = await seoRes.json();

  return (
    <>
      {/* Inject Schema */}
      {seo?.schemaMarkup && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seo.schemaMarkup),
          }}
        />
      )}

      <SafariDestiLanding trips={trips} />
    </>
  );
}