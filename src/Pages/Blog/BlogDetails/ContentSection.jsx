// import React from "react";

// import {
//   FaFacebookF,
//   FaInstagram,
//   FaStar,
//   FaStarHalfAlt,
// } from "react-icons/fa";
// import { FaXTwitter, FaYoutube } from "react-icons/fa6";
// import Image from "next/image";
// import FAQSection from "./FAQSection";
// import ImageContentSection from "./ImageContentSection";
// import PackageSection from "./PackageSection";

// /* 🔹 Recursive list renderer */

// const data = {
//   title: "Why Choose Tanzania for Your Next Adventure",
//   sections: [
//     {
//       image:
//         "https://media.istockphoto.com/id/2205226025/photo/large-elephant-at-sunset-shaking-off-dirt.jpg?s=612x612&w=0&k=20&c=Fkncv-Kfn686WTz31thh83mUAmMqZsjRmK779D04aGg=",
//       heading: "Serengeti National Park",
//       subheading: "Experience the Great Migration",
//       description:
//         "The Serengeti is one of the most iconic safari destinations in the world.  The Serengeti is one of the most iconic safari destinations in the world. The Serengeti is one of the most iconic safari destinations in the world. The Serengeti is one of the most iconic safari destinations in the world. The Serengeti is one of the most iconic safari destinations in the world.   ",
//     },
//     {
//       image:
//         "https://media.istockphoto.com/id/1031027106/photo/wildebeest-leaps-from-the-bank-of-the-mara-river.jpg?s=612x612&w=0&k=20&c=9ST1djnL_r7XN-ZhhyztGXrFvKF3vqInKy7bFVen1I4=",
//       heading: "Mount Kilimanjaro",
//       subheading: "Africa’s Highest Peak",
//       description:
//         "Climbing Mount Kilimanjaro is a once-in-a-lifetime experience. With proper preparation, trekkers can enjoy breathtaking landscapes and reach the summit of Africa’s tallest mountain. The Serengeti is one of the most iconic safari destinations in the world. ",
//     },
//     {
//       image:
//         "https://media.istockphoto.com/id/2205226025/photo/large-elephant-at-sunset-shaking-off-dirt.jpg?s=612x612&w=0&k=20&c=Fkncv-Kfn686WTz31thh83mUAmMqZsjRmK779D04aGg=",
//       heading: "Zanzibar Beaches",
//       subheading: "Relax in Paradise",
//       description:
//         "Zanzibar offers pristine white sand beaches, crystal-clear waters, and a rich cultural heritage. It’s the perfect destination to relax after an adventurous safari. The Serengeti is one of the most iconic safari destinations in the world. ",
//     },
//     {
//       image:
//         "https://media.istockphoto.com/id/1031027106/photo/wildebeest-leaps-from-the-bank-of-the-mara-river.jpg?s=612x612&w=0&k=20&c=9ST1djnL_r7XN-ZhhyztGXrFvKF3vqInKy7bFVen1I4=",
//       heading: "Ngorongoro Crater",
//       subheading: "A Natural Wonder",
//       description:
//         "The Ngorongoro Crater is a UNESCO World Heritage Site and home to a dense population of wildlife. Visitors can enjoy incredible game drives in this unique ecosystem. The Serengeti is one of the most iconic safari destinations in the world. ",
//     },
//   ],
// };

// const RenderList = ({ items, level = 0 }) => {
//   if (!Array.isArray(items) || !items.length) return null;

//   return (
//     <ul className={`space-y-3 ${level === 0 ? "ml-6" : "ml-6 mt-2"}`}>
//       {items.map((item, index) => (
//         <li key={index} className="flex gap-3 items-start">
//           {/* Bullet */}
//           <span className="mt-[8px] w-2 h-2 bg-[#d87028]  rounded-full shrink-0"></span>

//           {/* Content */}
//           <div className="flex-1">
//             <span className="text-[16px] md:text-[17px] text-[#444] leading-relaxed">
//               {item.text}
//             </span>

//             {/* Nested list */}
//             {item.children?.length > 0 && (
//               <RenderList items={item.children} level={level + 1} />
//             )}
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// };

// const ContentSection = ({ blog, trips }) => {
//   if (!blog) return null;

//   const blogData = blog?.data || blog;
//   const sections = blogData.sections || [];

//   return (
//     <section className="bg-[#F8E6D5] py-16">
//       <div className="px-4 max-w-4xl mx-auto">
//         {/* ===== MAIN HEADING ===== */}
//         <h1 className="text-[24px] md:text-4xl lg:text-[42px] capitalize text-center font-bold text-[#111] mb-4">
//           {blogData.title}
//         </h1>

//         <p className="mb-6 text-center italic capitalize">
//           {blogData.subtitle}
//         </p>

//         {/* 🔹 Author Section */}
//         <div className="flex items-center justify-center gap-4 mb-10">
//           {/* Avatar */}
//           <div className="w-16 h-16 relative">
//             <Image
//               src={blogData.authorImage} // 👉 replace with your image
//               alt="Author"
//               fill
//               className="rounded-full object-cover"
//             />
//           </div>

//           {/* Author Info */}
//           <div className="text-left">
//             <p className="text-sm text-[#333]">
//               by{" "}
//               <span className="font-semibold underline cursor-pointer">
//                 {blogData.authorName}
//               </span>
//             </p>
//             <p className="text-sm text-[#777]">
//               {" "}
//               {new Date(blogData.date || blogData.createdAt).toDateString()}
//             </p>
//           </div>
//         </div>

//         {/* ===== HERO IMAGE ===== */}
//         {blogData.thumbnail && (
//           <Image
//             src={blogData.thumbnail}
//             alt={blogData.title}
//             width={1200}
//             height={480}
//             className="w-full h-56 md:h-[480px] rounded-md shadow-md object-cover mb-8"
//           />
//         )}

//         {sections.map((s, i) => {
//           switch (s.type) {
//             case "heading": {
//               const level = s.level || 2;

//               const Tag = `h${level}`;

//               const sizeMap = {
//                 1: "text-[28px] md:text-[42px]",
//                 2: "text-[24px] md:text-[36px]",
//                 3: "text-[20px] md:text-[28px]",
//                 4: "text-[18px] md:text-[22px]",
//               };

//               return (
//                 <Tag
//                   key={i}
//                   className={`${sizeMap[level]} font-bold text-[#111] mb-4 capitalize`}
//                 >
//                   {s.text}
//                 </Tag>
//               );
//             }
//             case "paragraph": {
//               const flattened = Array.isArray(s.content)
//                 ? s.content.flat() // 🔥 IMPORTANT FIX
//                 : [];

//               return (
//                 <p
//                   key={i}
//                   className="text-[16px] md:text-[17px] text-[#444] leading-relaxed mb-4"
//                 >
//                   {flattened.map((block, j) => {
//                     if (!block) return null;

//                     if (block.type === "bold")
//                       return (
//                         <strong key={j} className="font-semibold text-[#111]">
//                           {block.value}
//                         </strong>
//                       );

//                     if (block.type === "highlight")
//                       return (
//                         <span key={j} className="bg-yellow-200 px-1 rounded">
//                           {block.value}
//                         </span>
//                       );

//                     if (block.type === "link")
//                       return (
//                         <a
//                           key={j}
//                           href={block.url}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-[#d87028] underline hover:opacity-80 mx-1"
//                         >
//                           {block.value}
//                         </a>
//                       );

//                     return <span key={j}>{block.value}</span>;
//                   })}
//                 </p>
//               );
//             }

//             // case "paragraph":
//             //   return (
//             //     <p
//             //       key={i}
//             //       className="text-[16px] md:text-[17px] text-[#444] leading-relaxed mb-4"
//             //     >
//             //       {Array.isArray(s.content)
//             //         ? s.content.map((block, j) => {
//             //             if (block.type === "bold")
//             //               return (
//             //                 <strong
//             //                   key={j}
//             //                   className="font-semibold text-[#111]"
//             //                 >
//             //                   {block.value}
//             //                 </strong>
//             //               );

//             //             if (block.type === "highlight")
//             //               return (
//             //                 <span
//             //                   key={j}
//             //                   className="bg-yellow-200 px-1 rounded"
//             //                 >
//             //                   {block.value}
//             //                 </span>
//             //               );

//             //             if (block.type === "link")
//             //               return (
//             //                 <a
//             //                   key={j}
//             //                   href={block.url}
//             //                   className="text-[#d87028] underline hover:opacity-80"
//             //                 >
//             //                   {block.value}
//             //                 </a>
//             //               );

//             //             return <span key={j}>{block.value}</span>;
//             //           })
//             //         : s.text}
//             //     </p>
//             //   );

//             case "image":
//               if (!s.image?.url) return null;

//               return (
//                 <Image
//                   key={i}
//                   src={s.image.url}
//                   alt={s.image?.alt || "Blog Image"}
//                   width={1200}
//                   height={480}
//                   className="w-full h-56 md:h-[480px] rounded-md shadow-md object-cover mb-8"
//                 />
//               );

//             // case "image":
//             //   return (
//             //     <Image
//             //       key={i}
//             //       src={`${s.image?.url}`}
//             //       alt={s.image?.alt }
//             //       width={1200}
//             //       height={480}
//             //       className="w-full h-56 md:h-[480px] rounded-md shadow-md object-cover mb-8"
//             //     />
//             //   );

//             case "imageGrid":
//               return (
//                 <div
//                   key={i}
//                   className={`grid gap-4 py-10 ${
//                     s.columns === 2
//                       ? "grid-cols-1 md:grid-cols-2 gap-6"
//                       : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
//                   }`}
//                 >
//                   {s.images.map((img, idx) => (
//                     <div
//                       key={idx}
//                       className={`relative ${
//                         s.columns === 2
//                           ? "h-56 md:h-[480px]"
//                           : "h-56 md:h-[440px]"
//                       }`}
//                     >
//                       <Image
//                         src={img.url}
//                         alt={img.alt || ""}
//                         fill
//                         className="object-cover rounded-md shadow-md"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               );

//             case "list":
//               return (
//                 <div key={i} className="mb-6">
//                   <RenderList items={s.items} />
//                 </div>
//               );

//             case "imageContent":
//               return (
//                 <ImageContentSection
//                   key={i}
//                   title={s.title}
//                   sections={s.sections}
//                 />
//               );

//             case "cta":
//               return (
//                 <div
//                   key={i}
//                   className="bg-[#d76e28] py-10 rounded-md text-center mb-10"
//                 >
//                   <h3 className="text-3xl text-white/95 mb-4 capitalize">
//                     {s.cta?.title}
//                   </h3>
//                   <p className="text-white/90 mb-4">{s.cta?.description}</p>
//                   <a
//                     href={s.cta?.buttonLink}
//                     className="inline-block hover:text-black duration-300 text-white/95 py-2 px-5 border rounded-full font-bold uppercase cursor-pointer"
//                   >
//                     {s.cta?.buttonText}
//                   </a>
//                 </div>
//               );

//             case "highlight":
//               return (
//                 <div key={i} className="py-10">
//                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                     {s.highlights.map((h, idx) => (
//                       <div
//                         key={idx}
//                         className="rounded-sm overflow-hidden bg-white shadow-sm hover:shadow-lg transition duration-300 mb-4"
//                       >
//                         {/* IMAGE */}
//                         <div className="relative h-[160px] w-full">
//                           <Image
//                             src={h.image?.url || h.image} // supports both formats
//                             alt={h.title}
//                             fill
//                             sizes="(max-width:768px) 100vw, 300px"
//                             className="object-cover"
//                           />
//                         </div>

//                         {/* CONTENT */}
//                         <div className="p-5 flex flex-col justify-between flex-1">
//                           <div>
//                             <h3 className="text-xl mb-4 leading-tight">
//                               {h.title}
//                             </h3>

//                             <p className="text-[15px] text-[#444]">
//                               {h.description}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               );

//             case "faq":
//               return <FAQSection key={i} title="" subtitle="" faqs={s.faqs} />;

//             case "review":
//               return (
//                 <section
//                   key={i}
//                   className="py-6 max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0"
//                 >
//                   {/* Top Bar */}
//                   <div className="bg-[#d87028] text-white font-semibold text-center py-3 rounded-md mb-10">
//                     RATED 5★ BY OVER 100 TRAVELLERS{" "}
//                     <span className="inline-flex items-center gap-1">
//                       <FaStar />
//                       <FaStar />
//                       <FaStar />
//                       <FaStar />
//                       <FaStarHalfAlt />
//                     </span>{" "}
//                     <span className="text-white/90 font-normal">
//                       4.7/5 (100 REVIEWS)
//                     </span>
//                   </div>

//                   {/* Title */}
//                   <h2 className="text-[24px] md:text-3xl capitalize font-extrabold text-[#111] text-left mb-10">
//                     Real Stories From Our Travellers
//                   </h2>

//                   {/* Grid */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
//                     {s.reviews.map((r, idx) => (
//                       <div
//                         key={idx}
//                         className="bg-white rounded-md shadow-md hover:shadow-lg transition duration-300 text-center p-8 flex flex-col items-center"
//                       >
//                         {/* Stars */}
//                         <div className="flex justify-center mb-5 text-[#FFD700] text-xl">
//                           {Array.from({ length: r.rating || 5 }).map((_, i) => (
//                             <FaStar key={i} />
//                           ))}
//                         </div>

//                         {/* Text */}
//                         <p className="text-[16px] text-[#444] italic leading-relaxed mb-6">
//                           “{r.text}”
//                         </p>

//                         {/* Divider */}
//                         <div className="w-8 h-1 bg-[#d87028] mb-3"></div>

//                         {/* Name */}
//                         <p className="font-semibold italic text-[#333] mb-1">
//                           {r.name}
//                         </p>

//                         {/* Country */}
//                         <p className="text-[#333] font-semibold underline text-[15px]">
//                           {r.country}
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 </section>
//               );

//             case "package":
//               return (
//                 <PackageSection
//                   key={i}
//                   bg=""
//                   trips={trips}
//                   destination={s.destination} // ✅ dynamic
//                   layout={s.layout}
//                   btnname={s.btnname}
//                   btnlink={s.btnlink}
//                   showArrows={s.showArrows}
//                 />
//               );

//             default:
//               return null;
//           }
//         })}
//         {/* <PackageSection
//           bg=""
//           trips={trips}
//           destination="tanzania"
//           layout="slider"
//           btnname="See All Trips"
//           btnlink="/tanzania-safaris"
//           showArrows={true}
//         /> */}

//         {/* ===== Cards Grid ===== */}
//         <div className=" flex items-center justify-between my-16">
//           {/* 🔹 Share Title */}
//           <h2 className="text-[24px] md:text-4xl capitalize font-bold text-[#111] text-center ">
//             Share Article
//           </h2>

//           {/* 🔹 Social Icons */}
//           <div className="text-sm text-gray-700 space-y-3 text-center ">
//             <div className="flex justify-center gap-4 text-xl">
//               {/* Facebook */}
//               <a
//                 href="https://www.facebook.com/imarakileleni/?_rdc=1&_rdr#"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-2 rounded-full bg-[#d87028] hover:bg-[#c35f22] transition"
//                 aria-label="Facebook"
//               >
//                 <FaFacebookF className="text-white" />
//               </a>

//               {/* Instagram */}
//               <a
//                 href="https://www.instagram.com/imarakileleni/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-2 rounded-full bg-[#d87028] hover:bg-[#c35f22] transition"
//                 aria-label="Instagram"
//               >
//                 <FaInstagram className="text-white" />
//               </a>

//               {/* Pinterest */}
//               <a
//                 href="https://x.com/imarakileleni/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-2 rounded-full bg-[#d87028] hover:bg-[#c35f22] transition"
//                 aria-label="Pinterest"
//               >
//                 <FaXTwitter className="text-white" />
//               </a>

//               {/* YouTube */}
//               <a
//                 href="https://www.youtube.com/@imarakilelenisafaris-d3t"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-2 rounded-full bg-[#d87028] hover:bg-[#c35f22] transition"
//                 aria-label="YouTube"
//               >
//                 <FaYoutube className="text-white" />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* 🔹 Author Section */}
//         <div className="flex flex-col md:flex-row items-center md:items-start gap-8 text-left">
//           {/* Author Image */}
//           <div className="relative w-40 h-40 shrink-0">
//             <Image
//               src="/author-blog.webp" // replace with your image
//               alt="Author"
//               fill
//               className="object-cover rounded-xl"
//             />
//           </div>

//           {/* Author Content */}
//           <div>
//             {/* Name + Badge */}
//             <div className="flex items-center gap-3 mb-4">
//               <h3 className="text-xl font-semibold">{blogData.authorName}</h3>
//               <span className="bg-[#d87028] text-white text-sm px-3 py-1 rounded-md">
//                 {blogData.authorRole}
//               </span>
//             </div>

//             {/* Description */}
//             <p className="text-[#444] leading-relaxed mb-6 max-w-2xl">
//               {blogData.authorDescription}
//             </p>

//             {/* Social Icons (Author) */}
//             <div className="text-sm text-gray-700 space-y-3 text-center ">
//               <div className="flex gap-4 text-xl">
//                 {/* Facebook */}
//                 <a
//                   href={blogData.authorSocial?.facebook || "#"}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="p-2 rounded-full bg-[#d87028] hover:bg-[#c35f22] transition"
//                   aria-label="Facebook"
//                 >
//                   <FaFacebookF className="text-white" />
//                 </a>

//                 {/* Instagram */}
//                 <a
//                   href={blogData.authorSocial?.instagram || "#"}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="p-2 rounded-full bg-[#d87028] hover:bg-[#c35f22] transition"
//                   aria-label="Instagram"
//                 >
//                   <FaInstagram className="text-white" />
//                 </a>

//                 {/* Pinterest */}
//                 <a
//                   href={blogData.authorSocial?.twitter || "#"}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="p-2 rounded-full bg-[#d87028] hover:bg-[#c35f22] transition"
//                   aria-label="Pinterest"
//                 >
//                   <FaXTwitter className="text-white" />
//                 </a>

//                 {/* YouTube */}
//                 <a
//                   href={blogData.authorSocial?.youtube || "#"}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="p-2 rounded-full bg-[#d87028] hover:bg-[#c35f22] transition"
//                   aria-label="YouTube"
//                 >
//                   <FaYoutube className="text-white" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContentSection;

// url chnage of backend

import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import FAQSection from "./FAQSection";
import ImageContentSection from "./ImageContentSection";
import PackageSection from "./PackageSection";
import { Star } from "lucide-react";

const RenderList = ({ items, level = 0 }) => {
  if (!Array.isArray(items) || !items.length) return null;

  return (
    <ul className={`space-y-3 ${level === 0 ? "ml-6" : "ml-6 mt-2"}`}>
      {items.map((item, index) => (
        <li key={index} className="flex gap-3 items-start">
          {/* Bullet */}
          <span className="mt-[8px] w-2 h-2 bg-[#d87028]  rounded-full shrink-0"></span>

          {/* Content */}
          <div className="flex-1">
            <span className="text-[16px] md:text-[17px] text-[#444] leading-relaxed">
              {item.text}
            </span>

            {/* Nested list */}
            {item.children?.length > 0 && (
              <RenderList items={item.children} level={level + 1} />
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

const ContentSection = ({ blog, trips }) => {
  if (!blog) return null;

  const blogData = blog?.data || blog;
  const sections = blogData.sections || [];

  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(blog?.title || "");

  return (
    <section className="bg-[#F8E6D5] py-16">
      <div className="px-4 max-w-4xl mx-auto">
        {/* ===== MAIN HEADING ===== */}
        <h1 className=" font-acumin-bold text-[24px] md:text-4xl lg:text-[42px]  capitalize text-center text-[#111] mb-4">
          {blogData.title}
        </h1>

        <p className="mb-6 text-center italic capitalize">
          {blogData.subtitle}
        </p>

        {/* 🔹 Author Section */}
        <div className="flex items-center justify-center gap-4 mb-10">
          {/* Avatar */}
          <div className="w-16 h-16 relative">
            <Image
              src={blogData.authorImage} // 👉 replace with your image
              alt="Author"
              fill
              className="rounded-full object-cover"
            />
          </div>

          {/* Author Info */}
          <div className="text-left">
            <p className="text-sm text-[#333]">
              by{" "}
              <span className="font-semibold underline cursor-pointer">
                {blogData.authorName}
              </span>
            </p>
            <p className="text-sm text-[#777]">
              {" "}
              {new Date(blogData.date || blogData.createdAt).toDateString()}
            </p>
          </div>
        </div>

        {/* ===== HERO IMAGE ===== */}
        {blogData.thumbnail && (
          <Image
            src={blogData.thumbnail}
            alt={blogData.title}
            width={1200}
            height={480}
            className="w-full h-56 md:h-[480px] rounded-md shadow-md object-cover mb-8"
          />
        )}

        {sections.map((s, i) => {
          switch (s.type) {
            case "heading": {
              const level = s.level || 2;

              const Tag = `h${level}`;

              const sizeMap = {
                1: "text-[28px] md:text-[42px]",
                2: "text-[24px] md:text-[36px]",
                3: "text-[20px] md:text-[28px]",
                4: "text-[18px] md:text-[24px]",
                5: "text-[16px] md:text-[20px]",
                6: "text-[14px] md:text-[18px]",
              };

              // Different top spacing
              const spacingMap = {
                1: "mt-0",
                2: "mt-12",
                3: "mt-8",
                4: "mt-6",
                5: "mt-4",
                6: "mt-3",
              };

              return (
                <Tag
                  key={i}
                  className={`
            ${sizeMap[level]}
            ${spacingMap[level]}
            text-[#111]
            mb-4
            leading-[1.3]
            font-acumin-bold
            capitalize
          `}
                >
                  {s.text}
                </Tag>
              );
            }

            case "paragraph":
              return (
                <div
                  key={i}
                  className="rich-text text-[16px] md:text-[17px] text-[#444] leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{
                    __html: s.content || "",
                  }}
                />
              );

            case "quote":
              return (
                <div
                  key={i}
                  className="relative bg-[#d87029] rounded-md overflow-hidden my-8"
                >
                  {/* Content */}
                  <div className="px-8 py-8 md:px-16 md:py-12 md:pr-20 relative z-10">
                    <div
                      className="
            quote-box
            rich-text
            text-white
            leading-[1.7]
            text-center
          "
                      dangerouslySetInnerHTML={{
                        __html: s.text || "",
                      }}
                    />
                  </div>

                  {/* Quote Icon */}
                  <div
                    className="
          absolute
          -bottom-6
          right-8
          text-white
          text-[90px]
          leading-none
          font-serif
          opacity-90
        "
                  >
                    ”
                  </div>
                </div>
              );

            case "image":
              if (!s.image?.url) return null;

              return (
                <div key={i} className="py-4 md:py-5">
                  <Image
                    src={s.image.url}
                    alt={s.image?.alt || "Blog Image"}
                    width={1200}
                    height={480}
                    className="w-full h-56 md:h-[480px] rounded-md shadow-md object-cover mb-8"
                  />
                </div>
              );

            case "imageGrid":
              return (
                <div
                  key={i}
                  className={`grid gap-4 py-10 ${
                    s.columns === 2
                      ? "grid-cols-1 md:grid-cols-2 gap-6"
                      : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                  }`}
                >
                  {s.images.map((img, idx) => (
                    <div
                      key={idx}
                      className={`relative ${
                        s.columns === 2
                          ? "h-56 md:h-[480px]"
                          : "h-56 md:h-[440px]"
                      }`}
                    >
                      <Image
                        src={img.url}
                        alt={img.alt || ""}
                        fill
                        className="object-cover rounded-md shadow-md"
                      />
                    </div>
                  ))}
                </div>
              );

            case "list":
              return (
                <div key={i} className="mb-6">
                  <RenderList items={s.items} />
                </div>
              );

            case "imageContent":
              return (
                <div key={i} className=" py-4 md:py-8">
                  <ImageContentSection title={s.title} sections={s.sections} />
                </div>
              );

            case "cta":
              return (
                <div
                  key={i}
                  className="bg-[#d76e28] py-10 rounded-md text-center my-8"
                >
                  <h3 className="text-3xl text-white/95 mb-4 capitalize">
                    {s.cta?.title}
                  </h3>
                  <p className="text-white/90 mb-4 px-10">
                    {s.cta?.description}
                  </p>
                  <a
                    href={s.cta?.buttonLink}
                    className="inline-block hover:text-black duration-300 text-white/95 py-2 px-5 border rounded-full font-bold uppercase cursor-pointer"
                  >
                    {s.cta?.buttonText}
                  </a>
                </div>
              );

            case "highlight":
              return (
                <div key={i} className="py-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {s.highlights.map((h, idx) => (
                      <div
                        key={idx}
                        className="rounded-sm overflow-hidden bg-white shadow-sm hover:shadow-lg transition duration-300 mb-4"
                      >
                        {/* IMAGE */}
                        <div className="relative h-[160px] w-full">
                          <Image
                            src={h.image?.url || h.image} // supports both formats
                            alt={h.title}
                            fill
                            sizes="(max-width:768px) 100vw, 300px"
                            className="object-cover"
                          />
                        </div>

                        {/* CONTENT */}
                        <div className="p-5 flex flex-col justify-between flex-1">
                          <div>
                            <h3 className="text-xl mb-4 leading-tight">
                              {h.title}
                            </h3>

                            <p className="text-[15px] text-[#444]">
                              {h.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );

            // case "faq":
            //   return <FAQSection key={i} title="" subtitle="" faqs={s.faqs} />;

            case "faq":
              return (
                <FAQSection
                  key={i}
                  title=""
                  subtitle=""
                  faqs={s.faqs?.map((faq) => ({
                    question: faq.question,
                    answer: faq.answer,
                  }))}
                />
              );

            case "review":
              return (
                <section
                  key={i}
                  className="py-6 max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0"
                >
                  {/* Top Bar */}
                  <div className="bg-[#d87028] text-white font-semibold text-center py-3 rounded-md mb-10">
                    RATED 5★ BY OVER 100 TRAVELLERS{" "}
                    <span className="inline-flex items-center gap-1">
                      <Star
                        size={18}
                        className="fill-[#d87028] text-[#d87028]"
                      />
                      <Star
                        size={18}
                        className="fill-[#d87028] text-[#d87028]"
                      />
                      <Star
                        size={18}
                        className="fill-[#d87028] text-[#d87028]"
                      />
                      <Star
                        size={18}
                        className="fill-[#d87028] text-[#d87028]"
                      />
                      <Star
                        size={18}
                        className="fill-[#d87028] text-[#d87028]"
                      />
                    </span>{" "}
                    <span className="text-white/90 font-normal">
                      5/5 (100 REVIEWS)
                    </span>
                  </div>

                  {/* Title */}
                  {/* <h2 className="text-[24px] md:text-3xl capitalize font-extrabold text-[#111] text-left mb-10">
                    Real Stories From Our Travellers
                  </h2> */}

                  {/* Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    {s.reviews.map((r, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-md shadow-md hover:shadow-lg transition duration-300 text-center p-8 flex flex-col items-center"
                      >
                        {/* Stars */}
                        <div className="flex justify-center mb-5 text-[#FFD700] text-xl">
                          {Array.from({ length: r.rating || 5 }).map((_, i) => (
                            <Star
                              size={18}
                              className="fill-[#FFD700]"
                              key={i}
                            />
                          ))}
                        </div>

                        {/* Text */}
                        <p className="text-[16px] text-[#444] italic leading-relaxed mb-6">
                          “{r.text}”
                        </p>

                        {/* Divider */}
                        <div className="w-8 h-1 bg-[#d87028] mb-3"></div>

                        {/* Name */}
                        <p className="font-semibold italic text-[#333] mb-1">
                          {r.name}
                        </p>

                        {/* Country */}
                        <p className="text-[#333] font-semibold underline text-[15px]">
                          {r.country}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              );

            case "package":
              return (
                <PackageSection
                  key={i}
                  bg=""
                  trips={trips}
                  destination={s.destination} // ✅ dynamic
                  layout={s.layout}
                  btnname={s.btnname}
                  btnlink={s.btnlink}
                  showArrows={s.showArrows}
                />
              );

            default:
              return null;
          }
        })}
        {/* <PackageSection
          bg=""
          trips={trips}
          destination="tanzania"
          layout="slider"
          btnname="See All Trips"
          btnlink="/tanzania-safaris"
          showArrows={true}
        /> */}

        {/* ===== Cards Grid ===== */}
        <div className=" flex items-center justify-between my-16">
          {/* 🔹 Share Title */}
          <h3 className="text-[24px] md:text-3xl capitalize text-[#111] text-center ">
            Share Article
          </h3>

          {/* 🔹 Social Icons */}
          <div className="text-sm text-gray-700 space-y-3 text-center ">
            <div className="flex justify-center gap-4 text-xl">
              {/* Facebook */}
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#d87028] hover:bg-[#c35f22] transition"
                aria-label="Facebook"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 320 512"
                  className="text-white"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/imarakileleni/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#d87028] hover:bg-[#c35f22] transition"
                aria-label="Instagram"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  className="text-white"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#d87028] hover:bg-[#c35f22] transition"
                aria-label="Twitter"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="text-white"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@imarakilelenisafaris-d3t"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#d87028] hover:bg-[#c35f22] transition"
                aria-label="YouTube"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 576 512"
                  className="text-white"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* 🔹 Author Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 text-left">
          {/* Author Image */}
          <div className="relative w-40 h-40 shrink-0">
            <Image
              src="/author-blog.webp" // replace with your image
              alt="Author"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Author Content */}
          <div>
            {/* Name + Badge */}
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-xl font-semibold">{blogData.authorName}</h3>
              <span className="bg-[#d87028] text-white text-sm px-3 py-1 rounded-md">
                {blogData.authorRole}
              </span>
            </div>

            {/* Description */}
            <p className="text-[#444] leading-relaxed mb-6 max-w-2xl">
              {blogData.authorDescription}
            </p>

            {/* Social Icons (Author) */}
            <div className="text-sm text-gray-700 space-y-3 text-center ">
              <div className="flex gap-4 text-xl">
                {/* Facebook */}
                <a
                  href={blogData.authorSocial?.facebook || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#d87028] hover:bg-[#c35f22] transition"
                  aria-label="Facebook"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 320 512"
                    className="text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href={blogData.authorSocial?.instagram || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#d87028] hover:bg-[#c35f22] transition"
                  aria-label="Instagram"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    className="text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                </a>

                {/* Pinterest */}
                <a
                  href={blogData.authorSocial?.twitter || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#d87028] hover:bg-[#c35f22] transition"
                  aria-label="Pinterest"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href={blogData.authorSocial?.youtube || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#d87028] hover:bg-[#c35f22] transition"
                  aria-label="YouTube"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 576 512"
                    className="text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
