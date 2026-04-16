

import EditPackage from "@/Pages/Itinenary/EditPackage";

export default async function Page({ params }) {
      const { id } = await params;
  return <EditPackage id={id} />;
}