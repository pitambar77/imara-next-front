"use client";

import { useParams } from "next/navigation";
import KilimanjaroLandingEdit from "@/Pages/KilimanjaroLanding/KilimanjaroLandingEdit";

export default function Page() {

  const { id } = useParams();

  return <KilimanjaroLandingEdit id={id} />;

}