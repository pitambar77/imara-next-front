"use client";

import React, {  useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

const blogCategories = [
  {
    _id: "1",
    title: "Family Travel",
    slug: "family-travel-tanzania",
    image:
      "https://media.istockphoto.com/id/864885156/photo/a-male-lion-is-sitting-on-the-rock-watching-his-land.jpg?s=612x612&w=0&k=20&c=Lf8zkvT7xfyioyxADyHy1-AoKKwNbv6ofT_gvsLf6zk=",
  },
  {
    _id: "2",
    title: "Luxury Safari Experiences",
    slug: "luxury-safari-tanzania",
    image:
      "https://media.istockphoto.com/id/1212707655/photo/woman-tourist-on-safari-in-africa-traveling-by-car-with-an-open-roof-in-kenya-and-tanzania.jpg?s=612x612&w=0&k=20&c=tZdaSmNLMx2vT04IJ9hBaHGaBwHwjF5oCtIaIfTMUoU=",
  },
  {
    _id: "3",
    title: "Budget Travel Guides",
    slug: "budget-travel-tanzania",
    image:
      "https://media.istockphoto.com/id/952433714/photo/giraffe-family.jpg?s=612x612&w=0&k=20&c=bw7n9gB65RuoYgSET-u0fmvoS-NPnlkvsHwo8rK4stM=",
  },
  {
    _id: "4",
    title: "Honeymoon & Romantic Getaways",
    slug: "honeymoon-tanzania",
    image:
      "https://media.istockphoto.com/id/151932902/photo/couple-on-balcony-of-safari-lodge.jpg?s=612x612&w=0&k=20&c=FrqJD25LGhjOKftNJ14FaW24ymqFLKBREJk-oAwq_Dk=",
  },
  {
    _id: "5",
    title: "Adventure & Outdoor Activities",
    slug: "adventure-tanzania",
    image:
      "https://media.istockphoto.com/id/2167108833/photo/elephant-and-its-baby-eating-calmly-in-the-serengeti-national-park-in-tanzania-wildlife.jpg?s=612x612&w=0&k=20&c=II1pZ5i1J8Vkr9JiI9mweNV8ZYn_5TdoKnsA6T4kAgI=",
  },
  {
    _id: "6",
    title: "Group Travel & Tours",
    slug: "group-travel-tanzania",
    image:
      "https://media.istockphoto.com/id/497832460/photo/ngorongoro-crater.jpg?s=612x612&w=0&k=20&c=kKL24FajscAT68OqGrotZb1m75HS9Zz9rLjTF2hK5Aw=",
  },
];

const BlogCategoryCard = ({
  blogs = [],
  bgColor = "",
  title = "Tanzania Blog And Guides",
  subtitle = "Lorem Ipsum is simply dummy text of the printing",
}) => {
  // 🔥 Extract UNIQUE categories from blogs
  const categories = useMemo(() => {
    const map = new Map();

    blogs.forEach((blog) => {
      if (!blog.category) return; // skip empty category

      if (!map.has(blog.category)) {
        map.set(blog.category, {
          title: blog.category,
          slug: blog.category.toLowerCase().replace(/\s+/g, "-"),
          image: blog.image || "/fallback.jpg",
        });
      }
    });

    return Array.from(map.values());
  }, [blogs]);

  return (
    <section className="py-8 md:py-16 " style={{ backgroundColor: bgColor }}>
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0">
        {/* Header */}
        {title && (
          <h2 className="text-center capitalize text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-3">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-center text-[#444] text-[18px] mb-12">
            {subtitle}
          </p>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((item) => (
            <div key={item.slug} className="flex flex-col">
              {/* Image */}
              <Link
                href={`/blog/category/${item.slug}`}
                className="relative rounded-md overflow-hidden group cursor-pointer h-56"
              >
                <div className="relative w-full h-56">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width:768px) 100vw, 400px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all"></div>

                <h3 className="absolute uppercase inset-0 flex justify-center items-center text-white text-[22px] md:text-[28px] font-bold text-center px-8">
                  {item.title.replace(/^tanzania\s+/i, "")}
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Feature = ({ icon, text }) => (
  <div className="flex items-start gap-4">
    <div className="flex-none w-14 h-14 rounded-full bg-black flex items-center justify-center text-[#f3a85f]">
      {icon}
    </div>
    <p className="font-semibold text-black">{text}</p>
  </div>
);

export default BlogCategoryCard;
