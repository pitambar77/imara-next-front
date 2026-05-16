"use client";

// import EditDestinationLanding from "@/Pages/Destination/EditDestinationLanding";
import EditDestinationLandingNew from "@/Pages/Destination/EditDestinationLandingNew";
import { useParams } from "next/navigation";


export default function Page() {

  const { id } = useParams();

  // return <EditDestinationLanding id={id} />;
  return <EditDestinationLandingNew id={id} />;
}