import { getTrips } from "@/lib/getTrips";
import { getZanzibarLanding } from "@/lib/getZanzibarLanding";
import ZanzibarLanding from "@/Pages/ZanzibarLandingPage/ZanzibarLanding";

/* ================= METADATA ================= */

export async function generateMetadata() {
  const data = await getZanzibarLanding();

  if (!data) {
    return { title: "Page Not Found" };
  }

  // Fetch SEO from SEO collection
  const seoRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${data._id}&referenceType=zanzibardetails`,
    { next: { revalidate: 300 } }
  );

  const seo = await seoRes.json();

  return {
    title: seo?.metaTitle || data.title,
    description: seo?.metaDescription || data.subtitle,
    keywords: seo?.keywords || "Zanzibar beach holidays, Zanzibar tours",

    alternates: {
      canonical:
        seo?.canonicalUrl ||
        "https://imarakilelenisafaris.com/zanzibar-holidays",
    },

    openGraph: {
      title: seo?.metaTitle || data.title,
      description: seo?.metaDescription || data.subtitle,
      images: [seo?.ogImage || data.image],
      url:
        seo?.canonicalUrl ||
        "https://imarakilelenisafaris.com/zanzibar-holidays",
    },
  };
}

/* ================= PAGE ================= */

export default async function Page() {
  const [trips, data] = await Promise.all([
    getTrips(),
    getZanzibarLanding(),
  ]);

  if (!data) {
    return <div>Page not found</div>;
  }

  // Fetch SEO again for schema injection
  const seoRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${data._id}&referenceType=zanzibardetails`,
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

      <ZanzibarLanding trips={trips} data={data} />
    </>
  );
}