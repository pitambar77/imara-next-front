import { getTrips } from "@/lib/getTrips";
import { getKilimanjaroLanding } from "@/lib/getKilimanjaroLanding";
import KilimanjaroLanding from "@/Pages/KilimanjaroLanding/KilimanjaroLanding";


export default async function Page() {
  const [trips, page] = await Promise.all([
    getTrips(),
    getKilimanjaroLanding(),
  ]);

  return <KilimanjaroLanding trips={trips} page={page} />;
}