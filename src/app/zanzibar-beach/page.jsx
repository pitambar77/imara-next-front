// import { getTrips } from "@/lib/getTrips";
// import { getZanzibarLanding } from "@/lib/getZanzibarLanding";
// import ZanzibarLanding from "@/Pages/ZanzibarLandingPage/ZanzibarLanding";

// export default async function Page() {
//   const [trips, data] = await Promise.all([
//     getTrips(),
//     getZanzibarLanding(),
//   ]);
//   return <ZanzibarLanding trips={trips} data={data} />;
// }


import { getTrips } from "@/lib/getTrips";
import { getZanzibarLanding } from "@/lib/getZanzibarLanding";
import ZanzibarLanding from "@/Pages/ZanzibarLandingPage/ZanzibarLanding";

export async function generateMetadata() {
  const data = await getZanzibarLanding();

  if (!data) {
    return { title: "Page Not Found" };
  }

  let seo = null;

  try {
    const seoRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${data._id}&referenceType=zanzibarlanding`,
      { next: { revalidate: 300 } }
    );

    if (seoRes.ok) {
      const contentType = seoRes.headers.get("content-type");

      if (contentType?.includes("application/json")) {
        seo = await seoRes.json();
      }
    }
  } catch (err) {
    console.error("SEO fetch error:", err);
  }

  return {
    title: seo?.metaTitle || data.title,
    description: seo?.metaDescription || data.subtitle,
    keywords: seo?.keywords || "Zanzibar beach holidays, Zanzibar tours",
    openGraph: {
      title: seo?.metaTitle || data.title,
      description: seo?.metaDescription || data.subtitle,
      images: [data.image],
      url: `https://imarakilelenisafaris.com/zanzibar-holidays`,
    },
    alternates: {
      canonical: `https://imarakilelenisafaris.com/zanzibar-holidays`,
    },
  };
}

export default async function Page() {
  const [trips, data] = await Promise.all([
    getTrips(),
    getZanzibarLanding(),
  ]);

  if (!data) {
    return <div>Page not found</div>;
  }

  let seo = null;

  try {
    const seoRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${data._id}&referenceType=zanzibardetails`,
      { next: { revalidate: 300 } }
    );

    if (seoRes.ok) {
      const contentType = seoRes.headers.get("content-type");

      if (contentType?.includes("application/json")) {
        seo = await seoRes.json();
      }
    }
  } catch (err) {
    console.error("SEO fetch error:", err);
  }

  return (
    <>
      {/* Inject Schema */}
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