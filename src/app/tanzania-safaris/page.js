import { getTrips } from "@/lib/getTrips";
import SafariDestiLanding from "@/Pages/SafariDestination/SafariDestiLanding";

export default async function Page() {
  const trips = await getTrips();
  return <SafariDestiLanding trips={trips} />;
}