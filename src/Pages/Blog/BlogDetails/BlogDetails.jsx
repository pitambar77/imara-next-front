

"use client";

import React from "react";
import ContentSection from "./ContentSection";
import RelatedBlogCard from "./RelatedBlogCard";
import TailormadeSection from "@/Pages/Home/TailormadeSection";

const BlogDetails = ({ blog, trips, relatedBlogs }) => {
  
  if (!blog) return <p className="p-6">No blog found</p>;

  return (
    <div>
      <ContentSection blog={blog} trips={trips} />

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
