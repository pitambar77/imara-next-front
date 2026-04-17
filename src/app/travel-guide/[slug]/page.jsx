// // import BlogDetail from "@/Pages/Travelguide/BlogDetail";


// // export default async function Page({ params }) {
// //   const { slug } = await params;

// //   return <BlogDetail slug={slug} />;
// // }

// import BlogDetail from "@/Pages/Travelguide/BlogDetail";
// import { slugify } from "@/utils/slugify";
// import { getBlogs } from "@/lib/getBlogs";

// export async function generateMetadata({ params }) {
//   const { slug } = await params;

//   const blogs = await getBlogs();
//   const matchedBlog = blogs.find((item) => slugify(item.title) === slug);

//   if (!matchedBlog) {
//     return { title: "Blog Not Found" };
//   }

//   let seo = null;

//   try {
//     const seoRes = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${matchedBlog._id}&referenceType=blog`,
//       { next: { revalidate: 300 } }
//     );

//     if (seoRes.ok) {
//       const contentType = seoRes.headers.get("content-type");

//       if (contentType?.includes("application/json")) {
//         seo = await seoRes.json();
//       }
//     }
//   } catch (err) {
//     console.error("SEO fetch error:", err);
//   }

//   return {
//     title: seo?.metaTitle || matchedBlog.title,
//     description: seo?.metaDescription || matchedBlog.excerpt,
//     keywords: seo?.keywords || `Tanzania travel guide, ${matchedBlog.title}`,
//     openGraph: {
//       title: seo?.metaTitle || matchedBlog.title,
//       description: seo?.metaDescription || matchedBlog.excerpt,
//       images: [matchedBlog.image],
//       url: `https://imarakilelenisafaris.com/travel-guide/${slug}`,
//     },
//     alternates: {
//       canonical: `https://imarakilelenisafaris.com/travel-guide/${slug}`,
//     },
//   };
// }

// export default async function Page({ params }) {
//   const { slug } = await params;

//   const blogs = await getBlogs();
//   const matchedBlog = blogs.find((item) => slugify(item.title) === slug);

//   if (!matchedBlog) {
//     return <div>Blog not found</div>;
//   }

//   let seo = null;

//   try {
//     const seoRes = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${matchedBlog._id}&referenceType=blog`,
//       { next: { revalidate: 300 } }
//     );

//     if (seoRes.ok) {
//       const contentType = seoRes.headers.get("content-type");

//       if (contentType?.includes("application/json")) {
//         seo = await seoRes.json();
//       }
//     }
//   } catch (err) {
//     console.error("SEO fetch error:", err);
//   }

//   return (
//     <>
//       {seo?.schemaMarkup && (
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(seo.schemaMarkup),
//           }}
//         />
//       )}

//       <BlogDetail slug={slug} />
//     </>
//   );
// }


import BlogDetail from "@/Pages/Travelguide/BlogDetail";
import { slugify } from "@/utils/slugify";
import { getBlogs } from "@/lib/getBlogs";

/* ================= METADATA ================= */

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const blogs = await getBlogs();
  const matchedBlog = blogs.find((item) => slugify(item.title) === slug);

  if (!matchedBlog) {
    return { title: "Blog Not Found" };
  }

  // Fetch SEO from SEO collection
  const seoRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${matchedBlog._id}&referenceType=blog`,
    { next: { revalidate: 300 } }
  );

  const seo = await seoRes.json();

  return {
    title: seo?.metaTitle || matchedBlog.title,
    description: seo?.metaDescription || matchedBlog.excerpt,

    keywords:
      seo?.keywords || `Tanzania travel guide, ${matchedBlog.title}`,

    alternates: {
      canonical:
        seo?.canonicalUrl ||
        `https://imarakilelenisafaris.com/travel-guide/${slug}`,
    },

    openGraph: {
      title: seo?.metaTitle || matchedBlog.title,
      description: seo?.metaDescription || matchedBlog.excerpt,
      images: [seo?.ogImage || matchedBlog.image],
      url:
        seo?.canonicalUrl ||
        `https://imarakilelenisafaris.com/travel-guide/${slug}`,
    },
  };
}

/* ================= PAGE ================= */

export default async function Page({ params }) {
  const { slug } = await params;

  const blogs = await getBlogs();
  const matchedBlog = blogs.find((item) => slugify(item.title) === slug);

  if (!matchedBlog) {
    return <div>Blog not found</div>;
  }

  // Fetch SEO for schema
  const seoRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${matchedBlog._id}&referenceType=blog`,
    { next: { revalidate: 300 } }
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

      <BlogDetail slug={slug} />
    </>
  );
}