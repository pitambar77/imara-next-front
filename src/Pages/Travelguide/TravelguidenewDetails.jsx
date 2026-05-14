"use client";

import React, { useEffect, useState } from "react";

import API from "../../api/axios";

import TripHighlights from "../../components/TripHighlights";
import BookWithConfidence from "../Home/BookWithConfidence";
import Featured from "../Home/Featured";

import TailormadeSection from "../Home/TailormadeSection";
import TravelguideDataDetails from "../TravelGuideDetails/TravelguideDataDetails";
import Faqs from "./Faqs";

const TravelguidenewDetails = ({ slug }) => {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH BLOG + SEO ================= */
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        // 1️⃣ Get blog by slug
        const res = await API.get(`/travelguide/slug/${slug}`);

        if (!res.data) {
          setBlog(null);
          return;
        }

        const blogData = res.data;

        // 2️⃣ Fetch SEO by blog _id
        const seoRes = await API.get(
          `/seo?referenceId=${blogData._id}&referenceType=blog`,
        );

        // 3️⃣ Attach SEO to blog object
        setBlog({
          ...blogData,
          seo: seoRes.data || null,
        });
      } catch (err) {
        console.error("Blog fetch error:", err);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  /* ================= FETCH RELATED BLOGS ================= */
  useEffect(() => {
    if (!blog?.category) return;

    const fetchRelated = async () => {
      try {
        const res = await API.get(
          `/travelguide/category/${encodeURIComponent(blog.category)}`,
        );

        const blogs = Array.isArray(res.data) ? res.data : [];

        const filtered = blogs.filter((item) => item.slug !== blog.slug);

        const mapped = filtered.map((item) => ({
          id: item._id,
          image: item.thumbnail,
          title: item.title,
          subtitle: item.subtitle,
          description:
            item.sections?.find((s) => s.type === "paragraph")?.text ||
            "Read our detailed travel guide.",
          link: `/travelguide/${item.slug}`,
        }));

        setRelatedBlogs(mapped);
      } catch (err) {
        console.error("Related blog error:", err);
      }
    };

    fetchRelated();
  }, [blog]);

  /* ================= DYNAMIC SEO ================= */

  const faqSection = blog?.faq?.[0];

  if (loading) return <p className="p-6">Loading...</p>;
  if (!blog) return <p className="p-6">No blog found</p>;

  return (
    <div>
      <TravelguideDataDetails blog={blog} faqSection={faqSection} />


      {relatedBlogs.length > 0 && (
        <TripHighlights
          title={`Related ${blog.category}`}
          data={relatedBlogs}
        />
      )}

      {/* <ActiveTravelDestinations /> */}
      <BookWithConfidence />
      <Featured />
      <TailormadeSection />
    </div>
  );
};


export default TravelguidenewDetails