// import AboutUs from "@/Pages/Aboutus/AboutUs";

// export async function getAboutData() {
//   const res = await fetch(
//     "https://imarabackend.imarakilelenisafaris.com/api/about",
//     {
//       next: { revalidate: 300 },
//     },
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch about data");
//   }

//   const data = await res.json();
//   return data[0];
// }

// export default async function Page() {
//   const aboutData = await getAboutData();

//   return <AboutUs aboutData={aboutData} />;
// }

import AboutUs from "@/Pages/Aboutus/AboutUs";

/* ================= FETCH ABOUT DATA ================= */

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

/* ================= METADATA ================= */

export async function generateMetadata() {
  const aboutData = await getAboutData();

  if (!aboutData) {
    return { title: "Page Not Found" };
  }

  const seoRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${aboutData._id}&referenceType=about`,
    { next: { revalidate: 300 } },
  );

  const seo = await seoRes.json();

  return {
    title: seo?.metaTitle || aboutData.title,
    description: seo?.metaDescription || aboutData.subtitle,
    keywords: seo?.keywords,

    alternates: {
      canonical:
        seo?.canonicalUrl || "https://imarakilelenisafaris.com/about-us",
    },

    openGraph: {
      title: seo?.metaTitle || aboutData.title,
      description: seo?.metaDescription || aboutData.subtitle,
      images: [seo?.ogImage || aboutData.image],
      url: seo?.canonicalUrl || "https://imarakilelenisafaris.com/about-us",
    },
  };
}

/* ================= PAGE ================= */

export default async function Page() {
  const aboutData = await getAboutData();

  if (!aboutData) {
    return <div>Page not found</div>;
  }

  const seoRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${aboutData._id}&referenceType=about`,
    { next: { revalidate: 300 } },
  );

  const seo = await seoRes.json();

  return (
    <>
      {/* Schema from Admin */}
      {seo?.schemaMarkup && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seo.schemaMarkup),
          }}
        />
      )}

      <AboutUs aboutData={aboutData} />
    </>
  );
}
