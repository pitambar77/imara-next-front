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
import OverviewInfo from "./OverviewInfo";
import FAQSection from "@/components/FAQSection";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

const TravelguideCategoryPage = ({ category, landing,title,subtitle }) => {
  const [asSeenItems, setAsSeenItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch blogs BY CATEGORY (same logic as your old BlogCategoryPage)
  useEffect(() => {
    if (!category) return;

    axios
      .get(`${API_BASE}/travelguide/category/${encodeURIComponent(category)}`)
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

  const faqSection = landing?.faq?.[0];

  return (
    <div>
      {/* ================= HERO ================= */}

      <Banner
        image={bannerImage}
        title={category || "All about travel guide"}
      />

      <OverviewInfo landing={landing} />

   

      {/* ================= CONTENT ================= */}
      {loading ? (
        <p className="p-6 text-center">Loading...</p>
      ) : asSeenItems.length ? (
        <TravelguideCard items={asSeenItems} title={title}  subtitle2={subtitle} />
      ) : (
        <p className="p-6 text-center">No Travelguide found</p>
      )}

      <BookWithConfidence />

      {faqSection && (
        <FAQSection
          title={faqSection.title}
          subtitle={faqSection.subtitle}
          faqs={faqSection.faqs}
        />
      )}

      <Featured />
      <TailormadeSection />
    </div>
  );
};

export default TravelguideCategoryPage;
