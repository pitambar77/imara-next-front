// "use client";

// import React, { useEffect, useState } from "react";
// import API from "../../../api/axios";
// import ContentSection from "./ContentSection";
// import RelatedBlogCard from "./RelatedBlogCard";
// import TailormadeSection from "@/Pages/Home/TailormadeSection";

// const BlogDetails = ({ slug, trips }) => {
//   const [blog, setBlog] = useState(null);
//   const [relatedBlogs, setRelatedBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   /* ================= FETCH RELATED BLOGS ================= */
//   useEffect(() => {
//     if (!blog?.category) return;

//     const fetchRelated = async () => {
//       try {
//         const res = await API.get(
//           `/imarablog/category/${encodeURIComponent(blog.category)}`,
//         );

//         const blogs = Array.isArray(res.data) ? res.data : [];

//         const filtered = blogs.filter((item) => item.slug !== blog.slug);

//         const mapped = filtered.map((item) => ({
//           id: item._id,
//           image: item.thumbnail,
//           title: item.title,
//           subtitle: item.subtitle,
//           description:
//             item.sections?.find((s) => s.type === "paragraph")?.text ||
//             "Read our detailed travel guide.",
//           link: `/imarablog/${item.slug}`,
//         }));

//         setRelatedBlogs(mapped);
//       } catch (err) {
//         console.error("Related blog error:", err);
//       }
//     };

//     fetchRelated();
//   }, [blog]);

//   /* ================= DYNAMIC SEO ================= */

//   if (!blog) return <p className="p-6">No blog found</p>;

//   return (
//     <div>
//       <ContentSection blog={blog} trips={trips} />
//        {relatedBlogs.length > 0 && (
//         <RelatedBlogCard
//           title={`Related Blog`}
//           subtitle="Everything you need to know before planning your safari"
//           category="safari"
//           data={relatedBlogs}

//         />
//       )}
//       <TailormadeSection/>
//     </div>
//   );
// };

// export default BlogDetails;

"use client";

import React, { useEffect, useState } from "react";
import ContentSection from "./ContentSection";
import RelatedBlogCard from "./RelatedBlogCard";
import TailormadeSection from "@/Pages/Home/TailormadeSection";

const BlogDetails = ({ blog, trips, relatedBlogs }) => {
  
  if (!blog) return <p className="p-6">No blog found</p>;

  return (
    <div>
      <ContentSection blog={blog} trips={trips} />

      {/* {relatedBlogs.length > 0 && (
        <RelatedBlogCard
          title="Related Blog"
          subtitle="Everything you need to know before planning your safari"
          data={relatedBlogs}
        />
      )} */}

      {relatedBlogs.length > 0 && (
        <RelatedBlogCard
          title="Related Blog"
          subtitle="Everything you need to know before planning your safari"
          data={relatedBlogs.map((item) => ({
            id: item._id,
            image: item.thumbnail,
            title: item.title,
            description: item.subtitle || "Read our detailed travel guide.",
            link: `/blog/${item.slug}`,
            category: item.category ,
            author: item.author?.name || "Admin",
            date: item.createdAt,
          }))}
        />
      )}

      <TailormadeSection />
    </div>
  );
};

export default BlogDetails;
