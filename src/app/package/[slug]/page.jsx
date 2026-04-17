// import { getTrips } from "@/lib/getTrips";
// import { slugify } from "@/utils/slugify";
// import ItinaryDetails from "@/Pages/Itinenary/ItinaryDetails";

// export async function generateMetadata({ params }) {
//   const { slug } = await params;

//   const trips = await getTrips();

//   const matchedTrip = trips.find((item) => slugify(item.title) === slug);

//   if (!matchedTrip) {
//     return { title: "Trip Not Found" };
//   }

//   try {
//     const seoRes = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${matchedTrip._id}&referenceType=package`,
//       { next: { revalidate: 300 } },
//     );

//     const seo = await seoRes.json();

//     return {
//       title: seo?.metaTitle || matchedTrip.title,
//       description: seo?.metaDescription || matchedTrip.subtitle,
//       keywords:
//         seo?.keywords ||
//         `Tanzania safari, ${matchedTrip.title}, Kilimanjaro trek`,
//       openGraph: {
//         title: seo?.metaTitle || matchedTrip.title,
//         description: seo?.metaDescription || matchedTrip.subtitle,
//         images: [matchedTrip.image],
//         url: `https://imarakilelenisafaris.com/tanzania-safaris/${slug}`,
//       },
//     };
//   } catch {
//     return {
//       title: matchedTrip.title,
//       description: matchedTrip.subtitle,
//     };
//   }
// }

// export default async function Page({ params }) {
//   const { slug } = await params;

//   const trips = await getTrips();

//   const matchedTrip = trips.find((item) => slugify(item.title) === slug);

//   if (!matchedTrip) {
//     return <div>Trip not found</div>;
//   }

//   let seo = null;

//   try {
//     const seoRes = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${matchedTrip._id}&referenceType=packages`,
//       { next: { revalidate: 300 } },
//     );

//     seo = await seoRes.json();
//   } catch (err) {
//     console.error("SEO fetch error:", err);
//   }

//   const trip = {
//     ...matchedTrip,
//     seo,
//   };

//   return (
//     <>
//       {/* ✅ Inject Schema */}
//       {seo?.schemaMarkup && (
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(seo.schemaMarkup),
//           }}
//         />
//       )}

//       <ItinaryDetails trip={trip} trips={trips} />
//     </>
//   );
// }



import { getTrips } from "@/lib/getTrips";
import { slugify } from "@/utils/slugify";
import ItinaryDetails from "@/Pages/Itinenary/ItinaryDetails";

/* ================= METADATA ================= */

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const trips = await getTrips();

  const matchedTrip = trips.find((item) => slugify(item.title) === slug);

  if (!matchedTrip) {
    return { title: "Trip Not Found" };
  }

  // fetch SEO from your SEO collection
  const seoRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${matchedTrip._id}&referenceType=packages`,
    { next: { revalidate: 300 } }
  );

  const seo = await seoRes.json();

  return {
    title: seo?.metaTitle || matchedTrip.title,
    description: seo?.metaDescription || matchedTrip.subtitle,

    keywords:
      seo?.keywords ||
      `Tanzania safari, ${matchedTrip.title}, Kilimanjaro trek`,

    alternates: {
      canonical: seo?.canonicalUrl,
    },

    openGraph: {
      title: seo?.metaTitle || matchedTrip.title,
      description: seo?.metaDescription || matchedTrip.subtitle,
      images: [seo?.ogImage || matchedTrip.image],
      url:
        seo?.canonicalUrl ||
        `https://imarakilelenisafaris.com/tanzania-safaris/${slug}`,
    },
  };
}

/* ================= PAGE ================= */

export default async function Page({ params }) {
  const { slug } = await params;

  const trips = await getTrips();

  const matchedTrip = trips.find((item) => slugify(item.title) === slug);

  if (!matchedTrip) {
    return <div>Trip not found</div>;
  }

  // fetch SEO for schema
  const seoRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${matchedTrip._id}&referenceType=packages`,
    { next: { revalidate: 300 } }
  );

  const seo = await seoRes.json();

  const trip = {
    ...matchedTrip,
    seo,
  };

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

      <ItinaryDetails trip={trip} trips={trips} />
    </>
  );
}
