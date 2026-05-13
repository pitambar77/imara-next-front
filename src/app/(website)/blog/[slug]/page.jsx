// export const dynamic = "force-dynamic";
// import BlogDetails from "@/Pages/Blog/BlogDetails/BlogDetails";
// import { getTrips } from "@/lib/getTrips";

// const API_BASE = process.env.NEXT_PUBLIC_API_URL;

// export default async function Page({ params }) {
//   const { slug } = await params;

//   try {
//     // 🔥 1. Fetch blog + trips
//     const [blogRes, trips] = await Promise.all([
//       fetch(`${API_BASE}/imarablog/slug/${slug}`, {
//         cache: "no-store",
//       }),
//       getTrips(),
//     ]);

//     if (!blogRes.ok) {
//       return <div>Blog not found</div>;
//     }

//     const blogJson = await blogRes.json();
//     const blog = blogJson?.data;

//     if (!blog) {
//       return <div>Blog not found</div>;
//     }

//     const formattedBlog = {
//       ...blog,
//       authorName: blog.author?.name || "Admin",
//       authorImage: blog.author?.image || "/author-blog.webp",
//       authorRole: blog.author?.role || "",
//       authorDescription: blog.author?.description || "",
//       authorSocial: blog.author?.social || {},
//     };

//     // 🔥 2. Fetch related blogs (SERVER SIDE)

//     const relatedRes = await fetch(`${API_BASE}/imarablog`, {
//       cache: "no-store",
//     });

//     const relatedJson = await relatedRes.json();

//     const relatedBlogs =
//       relatedJson?.data?.filter(
//         (b) =>
//           b.category?.toLowerCase() === blog.category?.toLowerCase() &&
//           b.slug !== blog.slug,
//       ) || [];
//     console.log("URL:", `${API_BASE}/imarablog/category/${blog.category}`);

//     // 🔥 3. Pass everything to client
//     return (
//       <BlogDetails
//         blog={formattedBlog}
//         trips={trips}
//         relatedBlogs={relatedBlogs}
//       />
//     );
//   } catch (err) {
//     console.error("Page error:", err);
//     return <div>Something went wrong</div>;
//     x;
//   }
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
      fetch(`${API_BASE}/blogimara/slug/${slug}`, {
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

    const relatedRes = await fetch(`${API_BASE}/blogimara`, {
      cache: "no-store",
    });

    const relatedJson = await relatedRes.json();

    const relatedBlogs =
      relatedJson?.data?.filter(
        (b) =>
          b.category?.toLowerCase() === blog.category?.toLowerCase() &&
          b.slug !== blog.slug,
      ) || [];
    console.log("URL:", `${API_BASE}/blogimara/category/${blog.category}`);

    // 🔥 3. Pass everything to client
    return (
      <BlogDetails
        blog={formattedBlog}
        trips={trips}
        relatedBlogs={relatedBlogs}
      />
    );
  } catch (err) {
    console.error("Page error:", err);
    return <div>Something went wrong</div>;
    x;
  }
}
