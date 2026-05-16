import { getBlogLanding } from "@/lib/getBlogLanding";
import BlogLanding from "@/Pages/Blog/BlogLanding/BlogLanding";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

/* ================= METADATA ================= */

export async function generateMetadata() {
  const data = await getBlogLanding();

  if (!data) {
    return { title: "Page Not Found" };
  }

  // Fetch SEO from SEO collection
  const seoRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${data._id}&referenceType=bloglanding`,
    { next: { revalidate: 300 } },
  );

  const seo = await seoRes.json();

  return {
    title: seo?.metaTitle || data.title,

    description: seo?.metaDescription || data.subtitle,

    keywords:
      seo?.keywords ||
      "Tanzania safari blog, travel blog, africa safari articles",

    alternates: {
      canonical: seo?.canonicalUrl || "https://imarakilelenisafaris.com/blog",
    },

    openGraph: {
      title: seo?.metaTitle || data.title,

      description: seo?.metaDescription || data.subtitle,

      images: [seo?.ogImage || data.image],

      url: seo?.canonicalUrl || "https://imarakilelenisafaris.com/blog",
    },
  };
}

export default async function Page() {
  let blogs = [];

  // ✅ ADD THIS
  const landing = await getBlogLanding();

  try {
    const res = await fetch(`${API_BASE}/blogimara`, {
      cache: "no-store",
    });

    const json = await res.json();
    const allBlogs = json?.data || [];

    blogs = allBlogs.map((blog, index) => ({
      id: blog._id || index,
      image: blog.thumbnail,
      title: blog.title,
      category: blog.category,
      description: blog.subtitle || "Read our detailed travel guide.",
      link: `/blog/${blog.slug}`,
      author: blog.author?.name || "Admin",
      date: blog.createdAt,
    }));
  } catch (err) {
    console.error(err);
  }

  // Fetch SEO again for schema injection
  const seoRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/seo?referenceId=${landing._id}&referenceType=bloglanding`,
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

      <BlogLanding blogs={blogs} landing={landing} />
    </>
  );
}
