"use client";
import React from "react";

import Banner from "@/components/Banner";

import { FaStar } from "react-icons/fa";
import BlogCategoryCard from "./BlogCategoryCard";
import TailormadeSection from "@/Pages/Home/TailormadeSection";
import RelatedBlogCard from "./RelatedBlogCard";

const BlogLanding = ({ blogs }) => {
  return (
    <div>
      {/* ================= HERO ================= */}

      <Banner image={"/contact-us.webp"} title={"Blog & News"} />

      <div className="w-full bg-[#d76e28]">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-white text-xs md:text-sm font-semibold">
          <span className="inline-flex items-center gap-2">
            RATED 5 / 5
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
            <span className="opacity-90">| BASED ON 100 VERIFIED REVIEWS</span>
          </span>
        </div>
      </div>
      <div className=" w-full bg-[#fedec7] py-8 md:py-16 px-4 ">
        <div className=" text-center max-w-3xl mx-auto  space-y-3 ">
          <h2 className=" text-xl md:text-3xl capitalize text-center text-[#1a1a1a]">
            Imara Kileleni Safaris Blogs & News
          </h2>
          <h3 className=" font-extrabold text-[#444]">
            Expert Tanzania Travel Stories, Safari Guides & Kilimanjaro Insights
          </h3>
          <p className=" text-[#444]">
            Imara Kileleni Safaris shares trusted Tanzania travel blogs, safari
            insights, wildlife stories, and Kilimanjaro climbing knowledge
            designed to help travellers explore Tanzania with confidence.
            Discover expert advice, destination updates, cultural experiences,
            and inspiring journeys across Tanzania, carefully created to make
            every safari and adventure more meaningful, informed, and
            unforgettable.
          </p>
        </div>
      </div>

      <BlogCategoryCard blogs={blogs} />
      <RelatedBlogCard
        title="Related Articles"
        subtitle="Explore more travel insights and guides"
        data={blogs}
      />
      <TailormadeSection />
    </div>
  );
};

export default BlogLanding;
