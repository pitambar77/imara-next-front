// "use client";

// import PackageSeo from "@/Pages/Seo/PackageSeo";

// export default async function Page({ params }) {
//   const { id } = await params;

//   return <PackageSeo id={id} />;
// }

"use client";

import PackageSeo from "@/Pages/Seo/PackageSeo";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();

  return <PackageSeo id={id} />;
}