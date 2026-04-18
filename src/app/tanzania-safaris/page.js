// // import { getTrips } from "@/lib/getTrips";
// // import SafariDestiLanding from "@/Pages/SafariDestination/SafariDestiLanding";

// // export default async function Page() {
// //   const trips = await getTrips();
// //   return <SafariDestiLanding trips={trips} />;
// // }

// import { getTrips } from "@/lib/getTrips";
// import SafariDestiLanding from "@/Pages/SafariDestination/SafariDestiLanding";

// export async function generateMetadata() {
//   const seoRes = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceType=destinationlanding`,
//     { next: { revalidate: 300 } }
//   );

//   const seo = await seoRes.json();

//   return {
//     title: seo?.metaTitle || "Tanzania Safari Destinations",
//     description:
//       seo?.metaDescription ||
//       "Explore Tanzania's top safari destinations including Serengeti, Ngorongoro Crater, and Tarangire.",
//     keywords:
//       seo?.keywords ||
//       "Tanzania safari destinations, Serengeti safari, Ngorongoro crater safari",
//     openGraph: {
//       title: seo?.metaTitle || "Tanzania Safari Destinations",
//       description: seo?.metaDescription,
//       images: [seo?.ogImage],
//       url: "https://imarakilelenisafaris.com/tanzania-destinations",
//     },
//   };
// }

// export default async function Page() {
//   const trips = await getTrips();

//   const seoRes = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceType=destinationlanding`,
//     { next: { revalidate: 300 } }
//   );

//   const seo = await seoRes.json();

//   return (
//     <>
//       {/* Inject Schema */}
//       {seo?.schemaMarkup && (
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(seo.schemaMarkup),
//           }}
//         />
//       )}

//       <SafariDestiLanding trips={trips} />
//     </>
//   );
// }

import { getTrips } from "@/lib/getTrips";
import SafariDestiLanding from "@/Pages/SafariDestination/SafariDestiLanding";

/* ================= METADATA ================= */

export async function generateMetadata() {
  // fetch safarilanding data
  const landingRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/safarilanding`,
    { next: { revalidate: 300 } },
  );

  const landingData = await landingRes.json();
  const landing = landingData?.[0];

  if (!landing) {
    return { title: "Safari Landing Page" };
  }

  // fetch seo
  const seoRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${landing._id}&referenceType=safarilanding`,
    { next: { revalidate: 300 } },
  );

  const seo = await seoRes.json();

  return {
    title: seo?.metaTitle || landing.title || "Tanzania Safaris",

    description:
      seo?.metaDescription ||
      landing.subtitle ||
      "Explore Tanzania safari packages and wildlife adventures.",

    keywords:
      seo?.keywords || "Tanzania safari, Serengeti safari, Ngorongoro safari",

    alternates: {
      canonical:
        seo?.canonicalUrl ||
        "https://imarakilelenisafaris.com/tanzania-safaris",
    },

    openGraph: {
      title: seo?.metaTitle || landing.title,
      description: seo?.metaDescription || landing.subtitle,
      url:
        seo?.canonicalUrl ||
        "https://imarakilelenisafaris.com/tanzania-safaris",
      images: [
        {
          url: seo?.ogImage || landing.image,
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
}

/* ================= PAGE ================= */

export default async function Page() {
  const [trips, landingRes] = await Promise.all([
    getTrips(),
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/safarilanding`, {
      next: { revalidate: 300 },
    }),
  ]);

  const landingData = await landingRes.json();
  const landing = landingData?.[0];

  let seo = null;

  if (landing) {
    const seoRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${landing._id}&referenceType=safarilanding`,
      { next: { revalidate: 300 } },
    );

    seo = await seoRes.json();
  }

  return (
    <>
      {/* Schema */}
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
