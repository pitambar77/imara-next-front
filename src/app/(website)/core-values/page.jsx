import { getCorevalue } from "@/lib/getCorevalue";
import CoreValue from "@/Pages/PrivacyPolicy/CoreValue";

export async function generateMetadata() {
  const data = await getCorevalue();

  if (!data) {
    return { title: "Page Not Found" };
  }

  // Fetch SEO from SEO collection
  const seoRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${data._id}&referenceType=corevalue`,
    { next: { revalidate: 300 } },
  );

  const seo = await seoRes.json();

  return {
    title: seo?.metaTitle || data.title,

    description: seo?.metaDescription || data.subtitle,

    keywords: seo?.keywords || "Corevalue, enquiry",

    alternates: {
      canonical:
        seo?.canonicalUrl || "https://imarakilelenisafaris.com/core-values",
    },

    openGraph: {
      title: seo?.metaTitle || data.title,

      description: seo?.metaDescription || data.subtitle,

      images: [seo?.ogImage || data.image],

      url: seo?.canonicalUrl || "https://imarakilelenisafaris.com/core-values",
    },
  };
}

export default async function Page() {
  const landing = await getCorevalue();

  // Fetch SEO again for schema injection
  const seoRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${landing._id}&referenceType=corevalue`,
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

      <CoreValue landing={landing} />
    </>
  );
}
