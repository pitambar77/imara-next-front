"use client";

import EditDestinationLanding from "@/Pages/Destination/EditDestinationLanding";
import { useParams } from "next/navigation";


export default function Page() {

  const { id } = useParams();

  return <EditDestinationLanding id={id} />;
}