"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import TravelguideCard from "../../components/TravelguideCard";
import BookWithConfidence from "../Home/BookWithConfidence";
import Featured from "../Home/Featured";
import tabanner from "../../assets/imara-home-banner-2.webp";
import kabanner from "../../assets/kabanner.webp";
import TailormadeSection from "../Home/TailormadeSection";
import Banner from "../../components/Banner";

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE ||
  "https://imarabackend.imarakilelenisafaris.com";

const BlogCategoryPage = ({ category }) => {
  const [asSeenItems, setAsSeenItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch blogs BY CATEGORY (same logic as your old BlogCategoryPage)
  useEffect(() => {
    if (!category) return;

    axios
      .get(`${API_BASE}/api/blog/category/${encodeURIComponent(category)}`)
      .then((res) => {
        const blogs = Array.isArray(res.data) ? res.data : [];

        // 🔁 Convert category blogs → TravelguideCard format
        const mappedItems = blogs.map((blog, index) => ({
          id: blog._id || index,
          image: blog.thumbnail,
          title: blog.title,
          subtitle: blog.subtitle,
          description:
            blog.sections?.find((s) => s.type === "paragraph")?.text ||
            "Read our detailed travel guide.",
          text:
            blog.sections?.[0]?.text ||
            blog.sections?.[0]?.content ||
            "Read our detailed travel guide.",

          link: `/travel-guide/${blog.slug}`,
        }));

        setAsSeenItems(mappedItems);
      })
      .catch((err) => console.error("Category API error:", err))
      .finally(() => setLoading(false));
  }, [category]);

  const isKilimanjaroCategory = category?.toLowerCase().includes("kilimanjaro");

  const bannerImage = isKilimanjaroCategory ? kabanner : tabanner;

  return (
    <div>
      {/* ================= HERO ================= */}

      <Banner
        image={bannerImage}
        title={category || "All about travel guide"}
      />

      {/* ================= CONTENT ================= */}
      {loading ? (
        <p className="p-6 text-center">Loading...</p>
      ) : asSeenItems.length ? (
        <TravelguideCard items={asSeenItems} />
      ) : (
        <p className="p-6 text-center">No blogs found</p>
      )}

      <BookWithConfidence />
      <Featured />
      <TailormadeSection />
    </div>
  );
};

export default BlogCategoryPage;
