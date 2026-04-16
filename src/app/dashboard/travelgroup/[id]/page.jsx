import EditTravelgroup from "@/Pages/Travelgroup/EditTravelgroup";

export default async function Page({ params }) {
      const { id } = await params;
  return <EditTravelgroup id={id} />;
}