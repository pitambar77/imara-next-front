// import { getTrips } from "@/lib/getTrips";
// import { getKilimanjaroLanding } from "@/lib/getKilimanjaroLanding";
// import KilimanjaroLanding from "@/Pages/KilimanjaroLanding/KilimanjaroLanding";

// export async function generateMetadata() {
//   const page = await getKilimanjaroLanding();

//   if (!page) {
//     return { title: "Page Not Found" };
//   }

//   let seo = null;

//   try {
//     const seoRes = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${page._id}&referenceType=kilimanjarolanding`,
//       { next: { revalidate: 300 } }
//     );

//     if (seoRes.ok) {
//       const contentType = seoRes.headers.get("content-type");

//       if (contentType?.includes("application/json")) {
//         seo = await seoRes.json();
//       }
//     }
//   } catch (err) {
//     console.error("SEO fetch error:", err);
//   }

//   return {
//     title: seo?.metaTitle || page.title,
//     description: seo?.metaDescription || page.subtitle,
//     keywords: seo?.keywords || "Kilimanjaro climb, Mount Kilimanjaro tours",
//     openGraph: {
//       title: seo?.metaTitle || page.title,
//       description: seo?.metaDescription || page.subtitle,
//       images: [page.image],
//       url: `https://imarakilelenisafaris.com/kilimanjaro-climbing`,
//     },
//     alternates: {
//       canonical: `https://imarakilelenisafaris.com/kilimanjaro-climbing`,
//     },
//   };
// }

// export default async function Page() {
//   const [trips, page] = await Promise.all([
//     getTrips(),
//     getKilimanjaroLanding(),
//   ]);

//   if (!page) {
//     return <div>Page not found</div>;
//   }

//   let seo = null;

//   try {
//     const seoRes = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${page._id}&referenceType=kilimanjarolanding`,
//       { next: { revalidate: 300 } }
//     );

//     if (seoRes.ok) {
//       const contentType = seoRes.headers.get("content-type");

//       if (contentType?.includes("application/json")) {
//         seo = await seoRes.json();
//       }
//     }
//   } catch (err) {
//     console.error("SEO fetch error:", err);
//   }

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

//       <KilimanjaroLanding trips={trips} page={page} />
//     </>
//   );
// }

import { getTrips } from "@/lib/getTrips";
import { getKilimanjaroLanding } from "@/lib/getKilimanjaroLanding";
import KilimanjaroLanding from "@/Pages/KilimanjaroLanding/KilimanjaroLanding";

/* ================= METADATA ================= */

export async function generateMetadata() {
  const page = await getKilimanjaroLanding();

  if (!page) {
    return { title: "Page Not Found" };
  }

  // Fetch SEO from SEO collection
  const seoRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${page._id}&referenceType=kilimanjarolanding`,
    { next: { revalidate: 300 } },
  );

  const seo = await seoRes.json();

  return {
    title: seo?.metaTitle || page.title,
    description: seo?.metaDescription || page.subtitle,
    keywords: seo?.keywords || "Kilimanjaro climb, Mount Kilimanjaro tours",

    alternates: {
      canonical:
        seo?.canonicalUrl ||
        "",
    },

    openGraph: {
      title: seo?.metaTitle || page.title,
      description: seo?.metaDescription || page.subtitle,
      images: [seo?.ogImage || page.image],
      url:
        seo?.canonicalUrl ||
        "",
    },
  };
}

/* ================= PAGE ================= */

export default async function Page() {
  const [trips, page] = await Promise.all([
    getTrips(),
    getKilimanjaroLanding(),
  ]);

  if (!page) {
    return <div>Page not found</div>;
  }

  // Fetch SEO again for schema injection
  const seoRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${page._id}&referenceType=kilimanjarolanding`,
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

      <KilimanjaroLanding trips={trips} page={page} />
    </>
  );
}
