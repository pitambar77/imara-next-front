import { getTrips } from "@/lib/getTrips";
import Home from "@/Pages/Home/Home";

/* ================= METADATA ================= */

export async function generateMetadata() {
  const homeRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/homepage`, {
    next: { revalidate: 300 },
  });

  const homeData = await homeRes.json();

  // FIX HERE
  const home = Array.isArray(homeData) ? homeData[0] : homeData;

  if (!home) {
    return {
      title: "Homepage",
    };
  }

  const seoRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${home._id}&referenceType=homepage`,
    {
      next: { revalidate: 300 },
    },
  );

  const seo = await seoRes.json();

  return {
    title: seo?.metaTitle || "Imara Kileleni Safaris",

    description:
      seo?.metaDescription ||
      "Local experts creating personalised Tanzania safaris and Kilimanjaro climbs.",

    keywords:
      seo?.keywords ||
      "Tanzania safari, Kilimanjaro climb, local safari experts",

    alternates: {
      canonical: seo?.canonicalUrl || "https://imarakilelenisafaris.com",
    },

    openGraph: {
      title: seo?.metaTitle || "Imara Kileleni Safaris",

      description:
        seo?.metaDescription ||
        "Discover Tanzania safaris and Kilimanjaro adventures with expert local guides.",

      url: seo?.canonicalUrl || "https://imarakilelenisafaris.com",

      siteName: "Imara Kileleni Safaris",

      images: [
        {
          url: seo?.ogImage || "https://imarakilelenisafaris.com/tanzania.webp",

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
  const [trips, homeRes] = await Promise.all([
    getTrips(),
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/homepage`, {
      next: { revalidate: 300 },
    }),
  ]);

  const homeData = await homeRes.json();

  // Handle both array and object response
  const home = Array.isArray(homeData) ? homeData[0] : homeData;


  let seo = null;

  if (home?._id) {
    const seoRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${home._id}&referenceType=homepage`,
      {
        next: { revalidate: 300 },
      },
    );

    seo = await seoRes.json();
  }

  return (
    <>
      {seo?.schemaMarkup && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seo.schemaMarkup),
          }}
        />
      )}

      <Home trips={trips} home={home} />
    </>
  );
}
