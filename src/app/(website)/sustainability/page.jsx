import Sustanbility from "@/Pages/Sustanbility/Sustanbility";

/* ================= FETCH DATA ================= */

export async function getSustanbilityData() {
  const res = await fetch(
    "https://imarabackend.imarakilelenisafaris.com/api/sustanbility",
    {
      next: { revalidate: 300 },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch sustanbility data");
  }

  const data = await res.json();
  return data[0];
}

/* ================= METADATA ================= */

export async function generateMetadata() {
  const data = await getSustanbilityData();

  if (!data) {
    return { title: "Page Not Found" };
  }

  const seoRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${data._id}&referenceType=sustanbility`,
    { next: { revalidate: 300 } },
  );

  const seo = await seoRes.json();

  return {
    title: seo?.metaTitle || data.title,
    description: seo?.metaDescription || data.subtitle,
    keywords: seo?.keywords,

    alternates: {
      canonical:
        seo?.canonicalUrl || "https://imarakilelenisafaris.com/sustainability",
    },

    openGraph: {
      title: seo?.metaTitle || data.title,
      description: seo?.metaDescription || data.subtitle,
      images: [seo?.ogImage || data.image],
      url:
        seo?.canonicalUrl || "https://imarakilelenisafaris.com/sustainability",
    },
  };
}

/* ================= PAGE ================= */

export default async function Page() {
  const data = await getSustanbilityData();

  if (!data) {
    return <div>Page not found</div>;
  }

  const seoRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${data._id}&referenceType=sustanbility`,
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

      <Sustanbility data={data} />
    </>
  );
}
