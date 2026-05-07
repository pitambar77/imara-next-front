// import BlogLanding from "@/Pages/Blog/BlogLanding/BlogLanding";

// const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";

// export default async function Page() {
//   let blogs = [];

//   try {
//     const res = await fetch(`${API_BASE}/api/imarablog`, {
//       cache: "no-store",
//     });

//     const result = await res.json();

//     const data = result?.data || [];

//     blogs = data.map((blog, index) => ({
//       id: blog._id || index,
//       image: blog.thumbnail,
//       title: blog.title,
//       category: blog.category || "General",
//       description: blog.subtitle || "Read our detailed travel guide.",
//       link: `/blog/${blog.slug}`,
//       author: blog.author || "Admin",
//       date: blog.createdAt || "",
//     }));
//   } catch (err) {
//     console.error("Fetch error:", err);
//   }

//   console.log(blogs);

//   return <BlogLanding blogs={blogs} />;
// }

import BlogLanding from "@/Pages/Blog/BlogLanding/BlogLanding";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;


export default async function Page() {
  let blogs = [];

  try {
    const res = await fetch(`${API_BASE}/imarablog`, {
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

  return <BlogLanding blogs={blogs}  />;
}
