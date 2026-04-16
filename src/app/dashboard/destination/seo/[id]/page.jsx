// "use client";

// import DestinationSeo from "@/Pages/Seo/DestinationSeo";
// import { useParams } from "next/navigation";

// export default function Page() {
//   const { id } = useParams();

//   return <DestinationSeo id={id} />;
// }

"use client";

import DestinationSeo from "@/Pages/Seo/DestinationSeo";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();

  return <DestinationSeo id={id} />;
}