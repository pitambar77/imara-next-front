// import { getTrips } from "@/lib/getTrips";
// import ItinaryDetails from "@/Pages/Itinenary/ItinaryDetails";

// export default async function Page({ params }) {
//   const { slug } = await params;
//   const trips = await getTrips();
//   return <ItinaryDetails slug={slug} trips={trips} />;
// }

import { getTrips } from "@/lib/getTrips";
import { slugify } from "@/utils/slugify";
import ItinaryDetails from "@/Pages/Itinenary/ItinaryDetails";

export default async function Page({ params }) {
  const { slug } = await params;

  const trips = await getTrips();

  const matchedTrip = trips.find((item) => slugify(item.title) === slug);

  if (!matchedTrip) {
    return <div>Trip not found</div>;
  }

  let seo = null;

  try {
    const seoRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${matchedTrip._id}&referenceType=package`,
      { cache: "no-store" },
    );

    if (seoRes.ok) {
      seo = await seoRes.json();
    }
  } catch (err) {
    console.error("SEO fetch error:", err);
  }

  const trip = {
    ...matchedTrip,
    seo,
  };

  return <ItinaryDetails trip={trip} trips={trips} />;
}
