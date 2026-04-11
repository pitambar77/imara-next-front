// import AboutUs from "@/Pages/Aboutus/AboutUs";

// export default function Page() {
//   return <AboutUs />;
// }

import AboutUs from "@/Pages/Aboutus/AboutUs";

export async function getAboutData() {
  const res = await fetch(
    "https://imarabackend.imarakilelenisafaris.com/api/about",
    {
      next: { revalidate: 300 },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch about data");
  }

  const data = await res.json();
  return data[0];
}

export default async function Page() {
  const aboutData = await getAboutData();

  return <AboutUs aboutData={aboutData} />;
}
