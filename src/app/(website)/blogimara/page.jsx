import BlogLanding from "@/Pages/Blog/BlogLanding/BlogLanding";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;


export default async function Page() {
  let blogs = [];

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
      link: `/blogimara/${blog.slug}`,
      author: blog.author?.name || "Admin",
      date: blog.createdAt,
    }));
  } catch (err) {
    console.error(err);
  }

  return <BlogLanding blogs={blogs}  />;
}
