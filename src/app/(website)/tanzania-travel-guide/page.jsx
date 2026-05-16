// // import BlogCategoryPage from "@/Pages/Travelguide/BlogCategoryPage";

// // export default function Page() {
// //   return <BlogCategoryPage category="Tanzania Travel Guide" />;
// // }

// import TravelguideCategoryPage from "@/Pages/Travelguide/TravelguideCategoryPage";

// export default function Page() {
//   return <TravelguideCategoryPage category="Tanzania Travel Guide" />;
// }

import TravelguideCategoryPage from "@/Pages/Travelguide/TravelguideCategoryPage";
import { getTanzaniaTravelGuideLanding } from "@/lib/getTanzaniaTravelGuideLanding";

/* ================= METADATA ================= */

export async function generateMetadata() {
  const data = await getTanzaniaTravelGuideLanding();

  if (!data) {
    return { title: "Page Not Found" };
  }

  // Fetch SEO from SEO collection
  const seoRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${data._id}&referenceType=tanzaniatravelguidelanding`,
    { next: { revalidate: 300 } },
  );

  const seo = await seoRes.json();

  return {
    title: seo?.metaTitle || data.title,

    description: seo?.metaDescription || data.subtitle,

    keywords:
      seo?.keywords ||
      "Tanzania travel guide, Tanzania safari guide, Tanzania tips",

    alternates: {
      canonical:
        seo?.canonicalUrl ||
        "https://imarakilelenisafaris.com/tanzania-travel-guide",
    },

    openGraph: {
      title: seo?.metaTitle || data.title,

      description: seo?.metaDescription || data.subtitle,

      images: [seo?.ogImage || data.image],

      url:
        seo?.canonicalUrl ||
        "https://imarakilelenisafaris.com/tanzania-travel-guide",
    },
  };
}

/* ================= PAGE ================= */

export default async function Page() {
  const data = await getTanzaniaTravelGuideLanding();

  if (!data) {
    return <div>Page not found</div>;
  }

  // Fetch SEO again for schema injection
  const seoRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${data._id}&referenceType=tanzaniatravelguidelanding`,
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

      <TravelguideCategoryPage
        category="Tanzania Travel Guide"
        landing={data}
        title="Ultimate Guide to Tanzania Travel"
        subtitle="Helpful safari travel tips for visiting dream wildlife destinations with ease."
      />
    </>
  );
}
