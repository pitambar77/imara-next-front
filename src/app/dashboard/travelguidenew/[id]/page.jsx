
import TravelguideForm from "@/Pages/Travelguide/TravelguideForm";


export default async function Page({ params }) {
  const { id } =await params;
  return <TravelguideForm id={id} />;
}