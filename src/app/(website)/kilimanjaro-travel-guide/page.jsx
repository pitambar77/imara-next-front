import TravelguideCategoryPage from "@/Pages/Travelguide/TravelguideCategoryPage";
import { getKilimanjaroTravelGuideLanding } from "@/lib/getKilimanjaroTravelGuideLanding";

/* ================= METADATA ================= */

export async function generateMetadata() {
  const data = await getKilimanjaroTravelGuideLanding();

  if (!data) {
    return { title: "Page Not Found" };
  }

  // Fetch SEO from SEO collection
  const seoRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${data._id}&referenceType=kilimanjarotravelguidelanding`,
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
        "https://imarakilelenisafaris.com/kilimanjaro-travel-guide",
    },

    openGraph: {
      title: seo?.metaTitle || data.title,

      description: seo?.metaDescription || data.subtitle,

      images: [seo?.ogImage || data.image],

      url:
        seo?.canonicalUrl ||
        "https://imarakilelenisafaris.com/kilimanjaro-travel-guide",
    },
  };
}

/* ================= PAGE ================= */

export default async function Page() {
  const data = await getKilimanjaroTravelGuideLanding();

  if (!data) {
    return <div>Page not found</div>;
  }

  // Fetch SEO again for schema injection
  const seoRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${data._id}&referenceType=kilimanjarotravelguidelanding`,
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
        category="Kilimanjaro Travel Guide"
        landing={data}
        title="Ultimate Guide to Kilimanjaro Travel"
        subtitle="Helpful trekking tips and travel advice for climbing Africa’s highest peak with confidence."
      />
    </>
  );
}
