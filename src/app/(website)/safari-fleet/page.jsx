// import SafariFleet from "@/Pages/Aboutus/SafariFleet/SafariFleet";

// export default function Page() {
//   return <SafariFleet />;
// }

import SafariFleet from "@/Pages/Aboutus/SafariFleet/SafariFleet";

/* ================= FETCH FLEET DATA ================= */

export async function getFleetData() {
  const res = await fetch(
    "https://imarabackend.imarakilelenisafaris.com/api/fleet",
    {
      next: { revalidate: 300 },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch fleet data");
  }

  const data = await res.json();
  return data[0];
}

/* ================= METADATA ================= */

export async function generateMetadata() {
  const fleetData = await getFleetData();

  if (!fleetData) {
    return { title: "Fleet Page Not Found" };
  }

  const seoRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${fleetData._id}&referenceType=fleet`,
    { next: { revalidate: 300 } },
  );

  const seo = await seoRes.json();

  return {
    title: seo?.metaTitle || fleetData.title,
    description: seo?.metaDescription || fleetData.subtitle,
    keywords: seo?.keywords,

    alternates: {
      canonical: seo?.canonicalUrl || "https://imarakilelenisafaris.com/fleet",
    },

    openGraph: {
      title: seo?.metaTitle || fleetData.title,
      description: seo?.metaDescription || fleetData.subtitle,
      images: [seo?.ogImage || fleetData.image],
      url: seo?.canonicalUrl || "https://imarakilelenisafaris.com/fleet",
    },
  };
}

/* ================= PAGE ================= */

export default async function Page() {
  const fleetData = await getFleetData();

  if (!fleetData) {
    return <div>Fleet page not found</div>;
  }

  const seoRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${fleetData._id}&referenceType=fleet`,
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

      <SafariFleet fleetData={fleetData} />
    </>
  );
}
