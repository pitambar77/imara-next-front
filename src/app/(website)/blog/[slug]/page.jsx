// import { slugify } from "@/utils/slugify";
// import { getBlogs } from "@/lib/getBlogs";
// import BlogDetails from "@/Pages/Blog/BlogDetails/BlogDetails";
// import { getTrips } from "@/lib/getTrips";

// /* ================= PAGE ================= */

// export default async function Page({ params }) {
//   const { slug } = await params;

//    const [trips] = await Promise.all([
//       getTrips(),

//     ]);

//   const blogs = await getBlogs();
//   const matchedBlog = blogs.find((item) => slugify(item.title) === slug);

//   if (!matchedBlog) {
//     return <div>Blog not found</div>;
//   }

//   return <BlogDetails slug={slug} trips={trips} />;
// }

// this is working

// import BlogDetails from "@/Pages/Blog/BlogDetails/BlogDetails";
// import { getTrips } from "@/lib/getTrips";

// const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";

// export default async function Page({ params }) {
//   const { slug } = await params;

//   const [blogRes, trips] = await Promise.all([
//     fetch(`${API_BASE}/api/imarablog/slug/${slug}`, {
//       cache: "no-store",
//     }),
//     getTrips(),
//   ]);

//   if (!blogRes.ok) {
//     return <div>Blog not found</div>;
//   }

//   const blog = await blogRes.json();

//   if (!blog) {
//     return <div>Blog not found</div>;
//   }

//   return <BlogDetails blog={blog} trips={trips} />;
// }

export const dynamic = "force-dynamic";
import BlogDetails from "@/Pages/Blog/BlogDetails/BlogDetails";
import { getTrips } from "@/lib/getTrips";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export default async function Page({ params }) {
  const { slug } = await params;

  try {
    // 🔥 1. Fetch blog + trips
    const [blogRes, trips] = await Promise.all([
      fetch(`${API_BASE}/imarablog/slug/${slug}`, {
        cache: "no-store",
      }),
      getTrips(),
    ]);

    if (!blogRes.ok) {
      return <div>Blog not found</div>;
    }

    const blogJson = await blogRes.json();
    const blog = blogJson?.data;

    if (!blog) {
      return <div>Blog not found</div>;
    }

    const formattedBlog = {
  ...blog,
  authorName: blog.author?.name || "Admin",
  authorImage: blog.author?.image || "/author-blog.webp",
  authorRole: blog.author?.role || "",
  authorDescription: blog.author?.description || "",
  authorSocial: blog.author?.social || {},
};

    // 🔥 2. Fetch related blogs (SERVER SIDE)

    const relatedRes = await fetch(`${API_BASE}/imarablog`, {
      cache: "no-store",
    });

    const relatedJson = await relatedRes.json();

    const relatedBlogs =
      relatedJson?.data?.filter(
        (b) =>
          b.category?.toLowerCase() === blog.category?.toLowerCase() &&
          b.slug !== blog.slug,
      ) || [];
    console.log("URL:", `${API_BASE}/imarablog/category/${blog.category}`);

    // 🔥 3. Pass everything to client
    return (
      <BlogDetails blog={formattedBlog} trips={trips} relatedBlogs={relatedBlogs} />
    );
  } catch (err) {
    console.error("Page error:", err);
    return <div>Something went wrong</div>;x
  }
}
