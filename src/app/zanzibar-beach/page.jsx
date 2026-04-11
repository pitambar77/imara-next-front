import { getTrips } from "@/lib/getTrips";
import { getZanzibarLanding } from "@/lib/getZanzibarLanding";
import ZanzibarLanding from "@/Pages/ZanzibarLandingPage/ZanzibarLanding";

export default async function Page() {
  const [trips, data] = await Promise.all([
    getTrips(),
    getZanzibarLanding(),
  ]);
  return <ZanzibarLanding trips={trips} data={data} />;
}
