"use client";
import React from "react";

import Banner from "@/components/Banner";

import { FaStar } from "react-icons/fa";
import BlogCategoryCard from "./BlogCategoryCard";
import TailormadeSection from "@/Pages/Home/TailormadeSection";
import RelatedBlogCard from "./RelatedBlogCard";

const relatedBlogsData = [
  {
    id: "1",
    title: "How to Train for Climbing Kilimanjaro",
    category: "Safari",
    description:
      "Preparing for Kilimanjaro requires endurance, strength, and mental focus. Learn how to build stamina and get ready for the summit.",
    image:
      "https://media.istockphoto.com/id/864885156/photo/a-male-lion-is-sitting-on-the-rock-watching-his-land.jpg?s=612x612&w=0&k=20&c=Lf8zkvT7xfyioyxADyHy1-AoKKwNbv6ofT_gvsLf6zk=",
    link: "/blog/how-to-train-for-climbing-kilimanjaro",
    author: "Peter",
    authorImage: "/author-blog.webp",
    date: "03 / MAR / 2026",
  },
  {
    id: "2",
    title: "Best Time to Visit Tanzania for Safari",
    category: "Kili",
    description:
      "Discover the ideal months for wildlife viewing, the Great Migration, and fewer crowds across Tanzania’s national parks.",
    image:
      "https://media.istockphoto.com/id/1212707655/photo/woman-tourist-on-safari-in-africa-traveling-by-car-with-an-open-roof-in-kenya-and-tanzania.jpg?s=612x612&w=0&k=20&c=tZdaSmNLMx2vT04IJ9hBaHGaBwHwjF5oCtIaIfTMUoU=",
    link: "/blog/best-time-to-visit-tanzania",
    author: "Steph Herron",
    authorImage: "/author-blog.webp",
    date: "15 / FEB / 2026",
  },
  {
    id: "3",
    title: "Top 10 Safari Packing Essentials",
    category: "Treaking",
    description:
      "From clothing to gear, here’s everything you need to pack for a comfortable and unforgettable safari experience.",
    image:
      "https://media.istockphoto.com/id/952433714/photo/giraffe-family.jpg?s=612x612&w=0&k=20&c=bw7n9gB65RuoYgSET-u0fmvoS-NPnlkvsHwo8rK4stM=",
    link: "/blog/safari-packing-essentials",
    author: "John Doe",
    authorImage: "/author-blog.webp",
    date: "28 / JAN / 2026",
  },
  {
    id: "4",
    title: "Serengeti Wildlife Guide for Beginners",
    category: "Safari",
    description:
      "Explore the Serengeti like a pro with this beginner-friendly guide to wildlife, seasons, and safari tips.",
    image:
      "https://media.istockphoto.com/id/151932902/photo/couple-on-balcony-of-safari-lodge.jpg?s=612x612&w=0&k=20&c=FrqJD25LGhjOKftNJ14FaW24ymqFLKBREJk-oAwq_Dk=",
    link: "/blog/serengeti-wildlife-guide",
    author: "Peter",
    authorImage: "/author-blog.webp",
    date: "10 / JAN / 2026",
  },
  {
    id: "5",
    title: "Zanzibar Travel Guide: Beaches & Culture",
    category: "Traking",
    description:
      "Relax on pristine beaches and explore the rich cultural heritage of Zanzibar with this complete travel guide.",
    image:
      "https://media.istockphoto.com/id/2167108833/photo/elephant-and-its-baby-eating-calmly-in-the-serengeti-national-park-in-tanzania-wildlife.jpg?s=612x612&w=0&k=20&c=II1pZ5i1J8Vkr9JiI9mweNV8ZYn_5TdoKnsA6T4kAgI=",
    link: "/blog/zanzibar-travel-guide",
    author: "Emily Clark",
    authorImage: "/author-blog.webp",
    date: "22 / DEC / 2025",
  },
  {
    id: "6",
    title: "Kilimanjaro Routes Explained: Which One to Choose?",
    category: "Safari",
    description:
      "Compare the most popular Kilimanjaro routes and choose the best one based on difficulty, scenery, and success rate.",
    image:
      "https://media.istockphoto.com/id/497832460/photo/ngorongoro-crater.jpg?s=612x612&w=0&k=20&c=kKL24FajscAT68OqGrotZb1m75HS9Zz9rLjTF2hK5Aw=",
    link: "/blog/kilimanjaro-routes-guide",
    author: "David Miller",
    authorImage: "/author-blog.webp",
    date: "05 / DEC / 2025",
  },
  {
    id: "7",
    title: "How to Train for Climbing Kilimanjaro",
    category: "Safari",
    description:
      "Preparing for Kilimanjaro requires endurance, strength, and mental focus. Learn how to build stamina and get ready for the summit.",
    image:
      "https://media.istockphoto.com/id/864885156/photo/a-male-lion-is-sitting-on-the-rock-watching-his-land.jpg?s=612x612&w=0&k=20&c=Lf8zkvT7xfyioyxADyHy1-AoKKwNbv6ofT_gvsLf6zk=",
    link: "/blog/how-to-train-for-climbing-kilimanjaro",
    author: "Peter",
    authorImage: "/author-blog.webp",
    date: "03 / MAR / 2026",
  },
  {
    id: "8",
    title: "Best Time to Visit Tanzania for Safari",
    category: "Kili",
    description:
      "Discover the ideal months for wildlife viewing, the Great Migration, and fewer crowds across Tanzania’s national parks.",
    image:
      "https://media.istockphoto.com/id/1212707655/photo/woman-tourist-on-safari-in-africa-traveling-by-car-with-an-open-roof-in-kenya-and-tanzania.jpg?s=612x612&w=0&k=20&c=tZdaSmNLMx2vT04IJ9hBaHGaBwHwjF5oCtIaIfTMUoU=",
    link: "/blog/best-time-to-visit-tanzania",
    author: "Steph Herron",
    authorImage: "/author-blog.webp",
    date: "15 / FEB / 2026",
  },
  {
    id: "9",
    title: "Top 10 Safari Packing Essentials",
    category: "Treaking",
    description:
      "From clothing to gear, here’s everything you need to pack for a comfortable and unforgettable safari experience.",
    image:
      "https://media.istockphoto.com/id/952433714/photo/giraffe-family.jpg?s=612x612&w=0&k=20&c=bw7n9gB65RuoYgSET-u0fmvoS-NPnlkvsHwo8rK4stM=",
    link: "/blog/safari-packing-essentials",
    author: "John Doe",
    authorImage: "/author-blog.webp",
    date: "28 / JAN / 2026",
  },
  {
    id: "10",
    title: "Serengeti Wildlife Guide for Beginners",
    category: "Safari",
    description:
      "Explore the Serengeti like a pro with this beginner-friendly guide to wildlife, seasons, and safari tips.",
    image:
      "https://media.istockphoto.com/id/151932902/photo/couple-on-balcony-of-safari-lodge.jpg?s=612x612&w=0&k=20&c=FrqJD25LGhjOKftNJ14FaW24ymqFLKBREJk-oAwq_Dk=",
    link: "/blog/serengeti-wildlife-guide",
    author: "Peter",
    authorImage: "/author-blog.webp",
    date: "10 / JAN / 2026",
  },
  {
    id: "11",
    title: "Zanzibar Travel Guide: Beaches & Culture",
    category: "Traking",
    description:
      "Relax on pristine beaches and explore the rich cultural heritage of Zanzibar with this complete travel guide.",
    image:
      "https://media.istockphoto.com/id/2167108833/photo/elephant-and-its-baby-eating-calmly-in-the-serengeti-national-park-in-tanzania-wildlife.jpg?s=612x612&w=0&k=20&c=II1pZ5i1J8Vkr9JiI9mweNV8ZYn_5TdoKnsA6T4kAgI=",
    link: "/blog/zanzibar-travel-guide",
    author: "Emily Clark",
    authorImage: "/author-blog.webp",
    date: "22 / DEC / 2025",
  },
  {
    id: "12",
    title: "Kilimanjaro Routes Explained: Which One to Choose?",
    category: "Safari",
    description:
      "Compare the most popular Kilimanjaro routes and choose the best one based on difficulty, scenery, and success rate.",
    image:
      "https://media.istockphoto.com/id/497832460/photo/ngorongoro-crater.jpg?s=612x612&w=0&k=20&c=kKL24FajscAT68OqGrotZb1m75HS9Zz9rLjTF2hK5Aw=",
    link: "/blog/kilimanjaro-routes-guide",
    author: "David Miller",
    authorImage: "/author-blog.webp",
    date: "05 / DEC / 2025",
  },
  {
    id: "13",
    title: "How to Train for Climbing Kilimanjaro",
    category: "Safari",
    description:
      "Preparing for Kilimanjaro requires endurance, strength, and mental focus. Learn how to build stamina and get ready for the summit.",
    image:
      "https://media.istockphoto.com/id/864885156/photo/a-male-lion-is-sitting-on-the-rock-watching-his-land.jpg?s=612x612&w=0&k=20&c=Lf8zkvT7xfyioyxADyHy1-AoKKwNbv6ofT_gvsLf6zk=",
    link: "/blog/how-to-train-for-climbing-kilimanjaro",
    author: "Peter",
    authorImage: "/author-blog.webp",
    date: "03 / MAR / 2026",
  },
  {
    id: "14",
    title: "Best Time to Visit Tanzania for Safari",
    category: "Kili",
    description:
      "Discover the ideal months for wildlife viewing, the Great Migration, and fewer crowds across Tanzania’s national parks.",
    image:
      "https://media.istockphoto.com/id/1212707655/photo/woman-tourist-on-safari-in-africa-traveling-by-car-with-an-open-roof-in-kenya-and-tanzania.jpg?s=612x612&w=0&k=20&c=tZdaSmNLMx2vT04IJ9hBaHGaBwHwjF5oCtIaIfTMUoU=",
    link: "/blog/best-time-to-visit-tanzania",
    author: "Steph Herron",
    authorImage: "/author-blog.webp",
    date: "15 / FEB / 2026",
  },
  {
    id: "15",
    title: "Top 10 Safari Packing Essentials",
    category: "Treaking",
    description:
      "From clothing to gear, here’s everything you need to pack for a comfortable and unforgettable safari experience.",
    image:
      "https://media.istockphoto.com/id/952433714/photo/giraffe-family.jpg?s=612x612&w=0&k=20&c=bw7n9gB65RuoYgSET-u0fmvoS-NPnlkvsHwo8rK4stM=",
    link: "/blog/safari-packing-essentials",
    author: "John Doe",
    authorImage: "/author-blog.webp",
    date: "28 / JAN / 2026",
  },
  {
    id: "16",
    title: "Serengeti Wildlife Guide for Beginners",
    category: "Safari",
    description:
      "Explore the Serengeti like a pro with this beginner-friendly guide to wildlife, seasons, and safari tips.",
    image:
      "https://media.istockphoto.com/id/151932902/photo/couple-on-balcony-of-safari-lodge.jpg?s=612x612&w=0&k=20&c=FrqJD25LGhjOKftNJ14FaW24ymqFLKBREJk-oAwq_Dk=",
    link: "/blog/serengeti-wildlife-guide",
    author: "Peter",
    authorImage: "/author-blog.webp",
    date: "10 / JAN / 2026",
  },
  {
    id: "17",
    title: "Zanzibar Travel Guide: Beaches & Culture",
    category: "Traking",
    description:
      "Relax on pristine beaches and explore the rich cultural heritage of Zanzibar with this complete travel guide.",
    image:
      "https://media.istockphoto.com/id/2167108833/photo/elephant-and-its-baby-eating-calmly-in-the-serengeti-national-park-in-tanzania-wildlife.jpg?s=612x612&w=0&k=20&c=II1pZ5i1J8Vkr9JiI9mweNV8ZYn_5TdoKnsA6T4kAgI=",
    link: "/blog/zanzibar-travel-guide",
    author: "Emily Clark",
    authorImage: "/author-blog.webp",
    date: "22 / DEC / 2025",
  },
  {
    id: "18",
    title: "Kilimanjaro Routes Explained: Which One to Choose?",
    category: "Safari",
    description:
      "Compare the most popular Kilimanjaro routes and choose the best one based on difficulty, scenery, and success rate.",
    image:
      "https://media.istockphoto.com/id/497832460/photo/ngorongoro-crater.jpg?s=612x612&w=0&k=20&c=kKL24FajscAT68OqGrotZb1m75HS9Zz9rLjTF2hK5Aw=",
    link: "/blog/kilimanjaro-routes-guide",
    author: "David Miller",
    authorImage: "/author-blog.webp",
    date: "05 / DEC / 2025",
  },
  {
    id: "19",
    title: "How to Train for Climbing Kilimanjaro",
    category: "Safari",
    description:
      "Preparing for Kilimanjaro requires endurance, strength, and mental focus. Learn how to build stamina and get ready for the summit.",
    image:
      "https://media.istockphoto.com/id/864885156/photo/a-male-lion-is-sitting-on-the-rock-watching-his-land.jpg?s=612x612&w=0&k=20&c=Lf8zkvT7xfyioyxADyHy1-AoKKwNbv6ofT_gvsLf6zk=",
    link: "/blog/how-to-train-for-climbing-kilimanjaro",
    author: "Peter",
    authorImage: "/author-blog.webp",
    date: "03 / MAR / 2026",
  },
  {
    id: "20",
    title: "Best Time to Visit Tanzania for Safari",
    category: "Kili",
    description:
      "Discover the ideal months for wildlife viewing, the Great Migration, and fewer crowds across Tanzania’s national parks.",
    image:
      "https://media.istockphoto.com/id/1212707655/photo/woman-tourist-on-safari-in-africa-traveling-by-car-with-an-open-roof-in-kenya-and-tanzania.jpg?s=612x612&w=0&k=20&c=tZdaSmNLMx2vT04IJ9hBaHGaBwHwjF5oCtIaIfTMUoU=",
    link: "/blog/best-time-to-visit-tanzania",
    author: "Steph Herron",
    authorImage: "/author-blog.webp",
    date: "15 / FEB / 2026",
  },
  {
    id: "21",
    title: "Top 10 Safari Packing Essentials",
    category: "Treaking",
    description:
      "From clothing to gear, here’s everything you need to pack for a comfortable and unforgettable safari experience.",
    image:
      "https://media.istockphoto.com/id/952433714/photo/giraffe-family.jpg?s=612x612&w=0&k=20&c=bw7n9gB65RuoYgSET-u0fmvoS-NPnlkvsHwo8rK4stM=",
    link: "/blog/safari-packing-essentials",
    author: "John Doe",
    authorImage: "/author-blog.webp",
    date: "28 / JAN / 2026",
  },
  {
    id: "22",
    title: "Serengeti Wildlife Guide for Beginners",
    category: "Safari",
    description:
      "Explore the Serengeti like a pro with this beginner-friendly guide to wildlife, seasons, and safari tips.",
    image:
      "https://media.istockphoto.com/id/151932902/photo/couple-on-balcony-of-safari-lodge.jpg?s=612x612&w=0&k=20&c=FrqJD25LGhjOKftNJ14FaW24ymqFLKBREJk-oAwq_Dk=",
    link: "/blog/serengeti-wildlife-guide",
    author: "Peter",
    authorImage: "/author-blog.webp",
    date: "10 / JAN / 2026",
  },
  {
    id: "23",
    title: "Zanzibar Travel Guide: Beaches & Culture",
    category: "Traking",
    description:
      "Relax on pristine beaches and explore the rich cultural heritage of Zanzibar with this complete travel guide.",
    image:
      "https://media.istockphoto.com/id/2167108833/photo/elephant-and-its-baby-eating-calmly-in-the-serengeti-national-park-in-tanzania-wildlife.jpg?s=612x612&w=0&k=20&c=II1pZ5i1J8Vkr9JiI9mweNV8ZYn_5TdoKnsA6T4kAgI=",
    link: "/blog/zanzibar-travel-guide",
    author: "Emily Clark",
    authorImage: "/author-blog.webp",
    date: "22 / DEC / 2025",
  },
  {
    id: "24",
    title: "Kilimanjaro Routes Explained: Which One to Choose?",
    category: "Safari",
    description:
      "Compare the most popular Kilimanjaro routes and choose the best one based on difficulty, scenery, and success rate.",
    image:
      "https://media.istockphoto.com/id/497832460/photo/ngorongoro-crater.jpg?s=612x612&w=0&k=20&c=kKL24FajscAT68OqGrotZb1m75HS9Zz9rLjTF2hK5Aw=",
    link: "/blog/kilimanjaro-routes-guide",
    author: "David Miller",
    authorImage: "/author-blog.webp",
    date: "05 / DEC / 2025",
  },
  {
    id: "25",
    title: "Zanzibar Travel Guide: Beaches & Culture",
    category: "Traking",
    description:
      "Relax on pristine beaches and explore the rich cultural heritage of Zanzibar with this complete travel guide.",
    image:
      "https://media.istockphoto.com/id/2167108833/photo/elephant-and-its-baby-eating-calmly-in-the-serengeti-national-park-in-tanzania-wildlife.jpg?s=612x612&w=0&k=20&c=II1pZ5i1J8Vkr9JiI9mweNV8ZYn_5TdoKnsA6T4kAgI=",
    link: "/blog/zanzibar-travel-guide",
    author: "Emily Clark",
    authorImage: "/author-blog.webp",
    date: "22 / DEC / 2025",
  },
];

const BlogLanding = ({ blogs }) => {
  return (
    <div>
      {/* ================= HERO ================= */}

      <Banner image={"/contact-us.webp"} title={"Blog Landing"} />

      <div className="w-full bg-[#d76e28]">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-white text-xs md:text-sm font-semibold">
          <span className="inline-flex items-center gap-2">
            RATED 4.7 / 5
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
            Blog landing
          </h2>
          <h3 className=" font-extrabold text-[#444]">
            Customer focused journeys across Tanzania Safaris and Kilimanjaro
            Climbs with purpose
          </h3>
          <p className=" text-[#444]">
            Imara Kileleni Safaris creates and operates customer-oriented tours,
            safaris, and climbs, designing detailed itineraries with selected
            accommodation and activities, delivering well planned Tanzania
            Safaris and professionally guided Kilimanjaro Climbs built around
            clarity, comfort, and experience.{" "}
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

      {/* ================= CONTENT =================
      {loading ? (
        <p className="p-6 text-center">Loading...</p>
      ) : asSeenItems.length ? (
        <BlogCard items={asSeenItems} />
      ) : (
        <p className="p-6 text-center">No blogs found</p>
      )} */}
    </div>
  );
};

export default BlogLanding;
