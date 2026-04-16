import { getTrips } from "@/lib/getTrips";
import { getDestinationDetails } from "@/lib/getDestinationDetails";
import { slugify } from "@/utils/slugify";
import SerengetiNationalPark from "@/Pages/SerengetiNationalPark/SerengetiNationalPark";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const destinations = await getDestinationDetails();

  const matched = destinations.find((item) => slugify(item.title) === slug);

  if (!matched) {
    return { title: "Destination Not Found" };
  }

  return {
    title: matched.seo?.metaTitle || matched.title,
    description: matched.seo?.metaDescription || matched.subtitle,
    keywords: matched.seo?.keywords || `Tanzania safari, ${matched.title}`,
    openGraph: {
      title: matched.title,
      description: matched.subtitle,
      images: [matched.image],
      url: `https://imarakilelenisafaris.com/tanzania-destinations/${slug}`,
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;

  const [trips, destinations] = await Promise.all([
    getTrips(),
    getDestinationDetails(),
  ]);

  const matched = destinations.find((item) => slugify(item.title) === slug);

  if (!matched) {
    return <div>Destination not found</div>;
  }

  const seoRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${matched._id}&referenceType=destinationdetails`,
    { next: { revalidate: 300 } },
  );

  const seo = await seoRes.json();

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

      <SerengetiNationalPark
        data={matched}
        allDestinations={destinations}
        trips={trips}
      />
    </>

    // <SerengetiNationalPark
    //   data={matched}
    //   allDestinations={destinations}
    //   trips={trips}
    // />
  );
}
