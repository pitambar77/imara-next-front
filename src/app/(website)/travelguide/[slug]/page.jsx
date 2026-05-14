import TravelguidenewDetails from "@/Pages/Travelguide/TravelguidenewDetails";

/* ================= METADATA ================= */

// export async function generateMetadata({ params }) {
//   const { slug } = await params;

//   const blogs = await getBlogs();
//   const matchedBlog = blogs.find((item) => item.slug === slug);

//   if (!matchedBlog) {
//     return { title: "Blog Not Found" };
//   }

//   // Fetch SEO from SEO collection
//   const seoRes = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${matchedBlog._id}&referenceType=blog`,
//     { next: { revalidate: 300 } },
//   );

//   const seo = await seoRes.json();

//   return {
//     title: seo?.metaTitle || matchedBlog.title,
//     description: seo?.metaDescription || matchedBlog.excerpt,

//     keywords: seo?.keywords || `Tanzania travel guide, ${matchedBlog.title}`,

//     alternates: {
//       canonical:
//         seo?.canonicalUrl ||
//         `https://imarakilelenisafaris.com/travel-guide/${slug}`,
//     },

//     openGraph: {
//       title: seo?.metaTitle || matchedBlog.title,
//       description: seo?.metaDescription || matchedBlog.excerpt,
//       images: [seo?.ogImage || matchedBlog.image],
//       url:
//         seo?.canonicalUrl ||
//         `https://imarakilelenisafaris.com/travel-guide/${slug}`,
//     },
//   };
// }

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/travelguide/slug/${slug}`,
    {
      next: { revalidate: 300 },
    },
  );

  const matchedBlog = await res.json();

  if (!matchedBlog || matchedBlog.error) {
    return {
      title: "Blog Not Found",
    };
  }

  const seoRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${matchedBlog._id}&referenceType=blog`,
    {
      next: { revalidate: 300 },
    },
  );

  const seo = await seoRes.json();

  return {
    title: seo?.metaTitle || matchedBlog.title,
    description: seo?.metaDescription || matchedBlog.subtitle,

    keywords: seo?.keywords || `Tanzania travel guide, ${matchedBlog.title}`,

    alternates: {
      canonical:
        seo?.canonicalUrl ||
        `https://imarakilelenisafaris.com/travelguide/${slug}`,
    },

    openGraph: {
      title: seo?.metaTitle || matchedBlog.title,
      description: seo?.metaDescription || matchedBlog.subtitle,
      images: [seo?.ogImage || matchedBlog.thumbnail],
      url:
        seo?.canonicalUrl ||
        `https://imarakilelenisafaris.com/travelguide/${slug}`,
    },
  };
}

/* ================= PAGE ================= */

// export default async function Page({ params }) {
//   const { slug } = await params;

//   const blogs = await getBlogs();
//   const matchedBlog = blogs.find((item) => item.slug === slug);

//   if (!matchedBlog) {
//     return <div>Blog not found</div>;
//   }

//   // Fetch SEO for schema
//   const seoRes = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${matchedBlog._id}&referenceType=blog`,
//     { next: { revalidate: 300 } },
//   );

//   const seo = await seoRes.json();

//   console.log(matchedBlog);

//   return (
//     <>
//       {/* Schema from Admin */}
//       {seo?.schemaMarkup && (
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(seo.schemaMarkup),
//           }}
//         />
//       )}

//       <TravelguidenewDetails slug={slug} />
//     </>
//   );
// }

export default async function Page({ params }) {
  const { slug } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/travelguide/slug/${slug}`,
    {
      next: { revalidate: 300 },
    },
  );

  const matchedBlog = await res.json();

  if (!matchedBlog || matchedBlog.error) {
    return <div>Blog not found</div>;
  }

  const seoRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${matchedBlog._id}&referenceType=blog`,
    {
      next: { revalidate: 300 },
    },
  );

  const seo = await seoRes.json();

  return (
    <>
      {seo?.schemaMarkup && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seo.schemaMarkup),
          }}
        />
      )}

      <TravelguidenewDetails slug={slug} />
    </>
  );
}
