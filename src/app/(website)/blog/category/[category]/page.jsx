

import BlogCategoryCard from "@/Pages/Blog/BlogLanding/BlogCategoryCard";
import RelatedBlogCard from "@/Pages/Blog/BlogLanding/RelatedBlogCard";
import TailormadeSection from "@/Pages/Home/TailormadeSection";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export default async function Page({ params }) {
  const { category } = await params; // 🔥 IMPORTANT

  const res = await fetch(`${API_BASE}/blogimara`, {
    cache: "no-store",
  });

  const json = await res.json();
  const allBlogs = json?.data || [];

  const normalize = (str) =>
    String(str || "")
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]/g, "");

  const filteredBlogs = allBlogs
    .filter((b) => {
      const blogCat = normalize(b.category);
      const urlCat = normalize(category);

      return blogCat === urlCat;
    })
    .map((blog, index) => ({
      id: blog._id || index,
      image:
        blog.thumbnail && blog.thumbnail.startsWith("http")
          ? blog.thumbnail
          : "/fallback.jpg",
      title: blog.title,
      category: blog.category,
      description: blog.subtitle || "Read more...",
      link: `/blog/${blog.slug}`,
      author: blog.author?.name || "Admin",
      authorImage: "/author-blog.webp",
      date: new Date(blog.createdAt).toLocaleDateString(),
    }));

  const otherBlogs = allBlogs.filter(
    (b) => normalize(b.category) !== normalize(category),
  );

  return (
    <div>
      <div className=" text-center mt-16 -mb-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a1a] capitalize mb-4">
          {category}
        </h1>
        <p className="text-[16px] md:text-[18px] text-[#444] ">
          Explore Tanzania Safari, Wildlife, Adventure Stories
        </p>
      </div>

      <RelatedBlogCard
        data={filteredBlogs}
        bgColor="white"
        showPagination={false}
        itemsPerPage="all"
      />

      {filteredBlogs.length === 0 && (
        <p className="text-center py-10 text-gray-500">
          No blogs found for this category
        </p>
      )}

      <BlogCategoryCard
        blogs={otherBlogs.map((b, i) => ({
          id: b._id || i,
          image: b.thumbnail,
          category: b.category,
          title: b.category,
        }))}
        title="Related Category"
        subtitle="Explore other categories"
        bgColor="#f9fafb"
      />

      <TailormadeSection />
    </div>
  );
}
