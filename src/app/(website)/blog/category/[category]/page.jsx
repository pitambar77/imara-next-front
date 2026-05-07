// import BlogCategoryCard from "@/Pages/Blog/BlogLanding/BlogCategoryCard";
// import RelatedBlogCard from "@/Pages/Blog/BlogLanding/RelatedBlogCard";
// import TailormadeSection from "@/Pages/Home/TailormadeSection";
// import React from "react";

// const relatedBlogsData = [
//   {
//     id: "1",
//     title: "How to Train for Climbing Kilimanjaro",
//     category: "Safari",
//     description:
//       "Preparing for Kilimanjaro requires endurance, strength, and mental focus. Learn how to build stamina and get ready for the summit.",
//     image:
//       "https://media.istockphoto.com/id/864885156/photo/a-male-lion-is-sitting-on-the-rock-watching-his-land.jpg?s=612x612&w=0&k=20&c=Lf8zkvT7xfyioyxADyHy1-AoKKwNbv6ofT_gvsLf6zk=",
//     link: "/blog/how-to-train-for-climbing-kilimanjaro",
//     author: "Peter",
//     authorImage: "/author-blog.webp",
//     date: "03 / MAR / 2026",
//   },
//   {
//     id: "2",
//     title: "Best Time to Visit Tanzania for Safari",
//     category: "Kili",
//     description:
//       "Discover the ideal months for wildlife viewing, the Great Migration, and fewer crowds across Tanzania’s national parks.",
//     image:
//       "https://media.istockphoto.com/id/1212707655/photo/woman-tourist-on-safari-in-africa-traveling-by-car-with-an-open-roof-in-kenya-and-tanzania.jpg?s=612x612&w=0&k=20&c=tZdaSmNLMx2vT04IJ9hBaHGaBwHwjF5oCtIaIfTMUoU=",
//     link: "/blog/best-time-to-visit-tanzania",
//     author: "Steph Herron",
//     authorImage: "/author-blog.webp",
//     date: "15 / FEB / 2026",
//   },
//   {
//     id: "3",
//     title: "Top 10 Safari Packing Essentials",
//     category: "Treaking",
//     description:
//       "From clothing to gear, here’s everything you need to pack for a comfortable and unforgettable safari experience.",
//     image:
//       "https://media.istockphoto.com/id/952433714/photo/giraffe-family.jpg?s=612x612&w=0&k=20&c=bw7n9gB65RuoYgSET-u0fmvoS-NPnlkvsHwo8rK4stM=",
//     link: "/blog/safari-packing-essentials",
//     author: "John Doe",
//     authorImage: "/author-blog.webp",
//     date: "28 / JAN / 2026",
//   },
//   {
//     id: "4",
//     title: "Serengeti Wildlife Guide for Beginners",
//     category: "Safari",
//     description:
//       "Explore the Serengeti like a pro with this beginner-friendly guide to wildlife, seasons, and safari tips.",
//     image:
//       "https://media.istockphoto.com/id/151932902/photo/couple-on-balcony-of-safari-lodge.jpg?s=612x612&w=0&k=20&c=FrqJD25LGhjOKftNJ14FaW24ymqFLKBREJk-oAwq_Dk=",
//     link: "/blog/serengeti-wildlife-guide",
//     author: "Peter",
//     authorImage: "/author-blog.webp",
//     date: "10 / JAN / 2026",
//   },
//   {
//     id: "5",
//     title: "Zanzibar Travel Guide: Beaches & Culture",
//     category: "Traking",
//     description:
//       "Relax on pristine beaches and explore the rich cultural heritage of Zanzibar with this complete travel guide.",
//     image:
//       "https://media.istockphoto.com/id/2167108833/photo/elephant-and-its-baby-eating-calmly-in-the-serengeti-national-park-in-tanzania-wildlife.jpg?s=612x612&w=0&k=20&c=II1pZ5i1J8Vkr9JiI9mweNV8ZYn_5TdoKnsA6T4kAgI=",
//     link: "/blog/zanzibar-travel-guide",
//     author: "Emily Clark",
//     authorImage: "/author-blog.webp",
//     date: "22 / DEC / 2025",
//   },
//   {
//     id: "6",
//     title: "Kilimanjaro Routes Explained: Which One to Choose?",
//     category: "Safari",
//     description:
//       "Compare the most popular Kilimanjaro routes and choose the best one based on difficulty, scenery, and success rate.",
//     image:
//       "https://media.istockphoto.com/id/497832460/photo/ngorongoro-crater.jpg?s=612x612&w=0&k=20&c=kKL24FajscAT68OqGrotZb1m75HS9Zz9rLjTF2hK5Aw=",
//     link: "/blog/kilimanjaro-routes-guide",
//     author: "David Miller",
//     authorImage: "/author-blog.webp",
//     date: "05 / DEC / 2025",
//   },
//   {
//     id: "7",
//     title: "How to Train for Climbing Kilimanjaro",
//     category: "Safari",
//     description:
//       "Preparing for Kilimanjaro requires endurance, strength, and mental focus. Learn how to build stamina and get ready for the summit.",
//     image:
//       "https://media.istockphoto.com/id/864885156/photo/a-male-lion-is-sitting-on-the-rock-watching-his-land.jpg?s=612x612&w=0&k=20&c=Lf8zkvT7xfyioyxADyHy1-AoKKwNbv6ofT_gvsLf6zk=",
//     link: "/blog/how-to-train-for-climbing-kilimanjaro",
//     author: "Peter",
//     authorImage: "/author-blog.webp",
//     date: "03 / MAR / 2026",
//   },
//   {
//     id: "8",
//     title: "Best Time to Visit Tanzania for Safari",
//     category: "Kili",
//     description:
//       "Discover the ideal months for wildlife viewing, the Great Migration, and fewer crowds across Tanzania’s national parks.",
//     image:
//       "https://media.istockphoto.com/id/1212707655/photo/woman-tourist-on-safari-in-africa-traveling-by-car-with-an-open-roof-in-kenya-and-tanzania.jpg?s=612x612&w=0&k=20&c=tZdaSmNLMx2vT04IJ9hBaHGaBwHwjF5oCtIaIfTMUoU=",
//     link: "/blog/best-time-to-visit-tanzania",
//     author: "Steph Herron",
//     authorImage: "/author-blog.webp",
//     date: "15 / FEB / 2026",
//   },
//   {
//     id: "9",
//     title: "Top 10 Safari Packing Essentials",
//     category: "Treaking",
//     description:
//       "From clothing to gear, here’s everything you need to pack for a comfortable and unforgettable safari experience.",
//     image:
//       "https://media.istockphoto.com/id/952433714/photo/giraffe-family.jpg?s=612x612&w=0&k=20&c=bw7n9gB65RuoYgSET-u0fmvoS-NPnlkvsHwo8rK4stM=",
//     link: "/blog/safari-packing-essentials",
//     author: "John Doe",
//     authorImage: "/author-blog.webp",
//     date: "28 / JAN / 2026",
//   },
//   {
//     id: "10",
//     title: "Serengeti Wildlife Guide for Beginners",
//     category: "Safari",
//     description:
//       "Explore the Serengeti like a pro with this beginner-friendly guide to wildlife, seasons, and safari tips.",
//     image:
//       "https://media.istockphoto.com/id/151932902/photo/couple-on-balcony-of-safari-lodge.jpg?s=612x612&w=0&k=20&c=FrqJD25LGhjOKftNJ14FaW24ymqFLKBREJk-oAwq_Dk=",
//     link: "/blog/serengeti-wildlife-guide",
//     author: "Peter",
//     authorImage: "/author-blog.webp",
//     date: "10 / JAN / 2026",
//   },
//   {
//     id: "11",
//     title: "Zanzibar Travel Guide: Beaches & Culture",
//     category: "Traking",
//     description:
//       "Relax on pristine beaches and explore the rich cultural heritage of Zanzibar with this complete travel guide.",
//     image:
//       "https://media.istockphoto.com/id/2167108833/photo/elephant-and-its-baby-eating-calmly-in-the-serengeti-national-park-in-tanzania-wildlife.jpg?s=612x612&w=0&k=20&c=II1pZ5i1J8Vkr9JiI9mweNV8ZYn_5TdoKnsA6T4kAgI=",
//     link: "/blog/zanzibar-travel-guide",
//     author: "Emily Clark",
//     authorImage: "/author-blog.webp",
//     date: "22 / DEC / 2025",
//   },
//   {
//     id: "12",
//     title: "Kilimanjaro Routes Explained: Which One to Choose?",
//     category: "Safari",
//     description:
//       "Compare the most popular Kilimanjaro routes and choose the best one based on difficulty, scenery, and success rate.",
//     image:
//       "https://media.istockphoto.com/id/497832460/photo/ngorongoro-crater.jpg?s=612x612&w=0&k=20&c=kKL24FajscAT68OqGrotZb1m75HS9Zz9rLjTF2hK5Aw=",
//     link: "/blog/kilimanjaro-routes-guide",
//     author: "David Miller",
//     authorImage: "/author-blog.webp",
//     date: "05 / DEC / 2025",
//   },
// ];

// const page = () => {
//   return (
//     <div className="">
// <div className=" text-center mt-16 -mb-10">
//   <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a1a] capitalize mb-4">
//     Best Safaris in Tanzania
//   </h1>
//   <p className="text-[16px] md:text-[18px] text-[#444] ">
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
//     qua.
//   </p>
// </div>
// <RelatedBlogCard
//   // title="Best Safaris in Tanzania"
//   // subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio qua."
//   data={relatedBlogsData}
//   bgColor="white"
//   showPagination={false}
//   itemsPerPage={'all'}
// />

//       <BlogCategoryCard title="Related Category" subtitle="Lorem Ipsum is simply dummy text of the printing" bgColor="#f9fafb"/>
//       <TailormadeSection/>
//     </div>
//   );
// };

// export default page;

import BlogCategoryCard from "@/Pages/Blog/BlogLanding/BlogCategoryCard";
import RelatedBlogCard from "@/Pages/Blog/BlogLanding/RelatedBlogCard";
import TailormadeSection from "@/Pages/Home/TailormadeSection";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export default async function Page({ params }) {
  const { category } = await params; // 🔥 IMPORTANT

  const res = await fetch(`${API_BASE}/imarablog`, {
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
          Best Safaris in Tanzania
        </h1>
        <p className="text-[16px] md:text-[18px] text-[#444] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          qua.
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
