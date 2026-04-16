"use client";

import EditDestinationDetails from "@/Pages/Destination/EditDestinationDetails";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();

  return <EditDestinationDetails id={id} />;
}