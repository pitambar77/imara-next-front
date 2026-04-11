import TravelgroupDetails from "@/Pages/Travelgroup/TravelgroupDetails";
import { getTrips } from "@/lib/getTrips";
import { getTravelGroup } from "@/lib/getTravelGroup";

export default async function Page({ params }) {
  const { slug } = await params;
   const [trips, item] = await Promise.all([
    getTrips(),
    getTravelGroup(slug),
  ]);
  return <TravelgroupDetails slug={slug} trips={trips} item={item} />;
}
