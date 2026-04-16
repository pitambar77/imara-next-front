// import TravelgroupDetails from "@/Pages/Travelgroup/TravelgroupDetails";
// import { getTrips } from "@/lib/getTrips";
// import { getTravelGroup } from "@/lib/getTravelGroup";

// export default async function Page({ params }) {
//   const { slug } = await params;
//    const [trips, item] = await Promise.all([
//     getTrips(),
//     getTravelGroup(slug),
//   ]);
//   return <TravelgroupDetails slug={slug} trips={trips} item={item} />;
// }

import TravelgroupDetails from "@/Pages/Travelgroup/TravelgroupDetails";
import { getTrips } from "@/lib/getTrips";
import { getTravelGroup } from "@/lib/getTravelGroup";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const item = await getTravelGroup(slug);

  if (!item) {
    return { title: "Travel Group Not Found" };
  }

  let seo = null;

  try {
    const seoRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${item._id}&referenceType=travelgroup`,
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
    title: seo?.metaTitle || item.title,
    description: seo?.metaDescription || item.subtitle,
    keywords: seo?.keywords || `Tanzania safari group, ${item.title}`,
    openGraph: {
      title: seo?.metaTitle || item.title,
      description: seo?.metaDescription || item.subtitle,
      images: [item.image],
      url: `https://imarakilelenisafaris.com/travel-groups/${slug}`,
    },
    alternates: {
      canonical: `https://imarakilelenisafaris.com/travel-groups/${slug}`,
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;

  const [trips, item] = await Promise.all([
    getTrips(),
    getTravelGroup(slug),
  ]);

  if (!item) {
    return <div>Travel group not found</div>;
  }

  let seo = null;

  try {
    const seoRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${item._id}&referenceType=travelgroup`,
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
      {/* ✅ Inject Schema */}
      {seo?.schemaMarkup && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seo.schemaMarkup),
          }}
        />
      )}

      <TravelgroupDetails slug={slug} trips={trips} item={item} />
    </>
  );
}