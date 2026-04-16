"use client";

import { useParams } from "next/navigation";
import EditZanzibar from "@/Pages/ZanzibarLandingPage/EditZanzibar";

export default function Page() {

  const { id } = useParams();

  return <EditZanzibar id={id} />;

}