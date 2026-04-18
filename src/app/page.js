// import { getTrips } from "@/lib/getTrips";
// import Home from "@/Pages/Home/Home";

// export const metadata = {
//   title: "Imara kileleni Safaris - Local Tanzania Safari & Kilimanjaro Specialists",
//   description:
//     "Local experts creating personalised Tanzania safaris and Kilimanjaro climbs with honest guidance.",
//   keywords:
//     "Tanzania safari, Kilimanjaro climb, local safari experts",
//   openGraph: {
//     title: "Imara Kileleni Safaris",
//     description:
//       "Discover Tanzania safaris and Kilimanjaro adventures with expert local guides.",
//     url: "https://imarakilelenisafaris.com",
//     siteName: "Imara Kileleni Safaris",
//     images: [
//       {
//         url: "https://imarakilelenisafaris.com/tanzania.webp",
//         width: 1200,
//         height: 630,
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
// };

// export default async function Page() {
//   const trips = await getTrips();
//   return <Home trips={trips} />;
// }

import { getTrips } from "@/lib/getTrips";
import Home from "@/Pages/Home/Home";

/* ================= METADATA ================= */

export async function generateMetadata() {
  // first fetch homepage data
  const homeRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/homepage`, {
    next: { revalidate: 300 },
  });

  const homeData = await homeRes.json();
  const home = homeData?.[0];

  if (!home) {
    return { title: "Homepage" };
  }

  // fetch seo using homepage id
  const seoRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${home._id}&referenceType=homepage`,
    { next: { revalidate: 300 } },
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
  const home = homeData?.[0];

  let seo = null;

  if (home) {
    const seoRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${home._id}&referenceType=homepage`,
      { next: { revalidate: 300 } },
    );

    seo = await seoRes.json();
  }

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

      <Home trips={trips} />
    </>
  );
}
