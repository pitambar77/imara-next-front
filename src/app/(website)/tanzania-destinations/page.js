

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
    `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${destination._id}&referenceType=tanzaniadestinationlanding`,
    { next: { revalidate: 300 } },
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
    `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${destination._id}&referenceType=tanzaniadestinationlanding`,
    { next: { revalidate: 300 } },
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
