import React from "react";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
/* 🔹 Recursive list renderer */
const RenderList = ({ items }) => {
  if (!Array.isArray(items) || !items.length) return null;

  return (
    <ul className="ml-6 space-y-2">
      {items.map((item) => (
        <li key={item.id} className="flex gap-3">
          <span className=" border-gray-600 mt-0.5">
            <GoDotFill />
          </span>

          <div>
            <span className="text-[16px] text-[#444]">{item.text}</span>

            {item.children?.length > 0 && <RenderList items={item.children} />}
          </div>
        </li>
      ))}
    </ul>
  );
};

const TravelGuideDetails = ({ blog }) => {
  if (!blog) return null;

  const sections = blog.sections || [];

  return (
    <section className="bg-[#F8E6D5] py-16">
      <div className="px-4 max-w-4xl mx-auto">
        {/* ===== MAIN HEADING ===== */}
        <h2 className="text-[24px] md:text-4xl capitalize text-center font-bold text-[#111] mb-4">
          {blog.title}
        </h2>

        <p className="mb-6 text-center capitalize">
          {blog.subtitle || "Travel Trips"}
        </p>

        {/* ===== HERO IMAGE ===== */}
        {blog.thumbnail && (
          // <img
          //   className="w-full h-56 md:h-[480px] rounded-md shadow-md object-cover mb-8"
          //   src={blog.thumbnail}
          //   alt={blog.title}
          // />
          <Image
            src={blog.thumbnail}
            alt={blog.title}
            width={1200}
            height={480}
            className="w-full h-56 md:h-[480px] rounded-md shadow-md object-cover mb-8"
          />
        )}

        {/* ===== CONTENT BLOCKS ===== */}
        {sections.map((s) => (
          <div key={s.id || Math.random()} className="mb-6">
            {s.type === "h1" && (
              <h3 className="text-[24px] md:text-4xl capitalize font-bold text-[#111] mb-4">
                {s.text}
              </h3>
            )}
            {s.type === "h2" && (
              <h3 className="text-[20px] md:text-3xl font-bold text-[#1a1a1a] mb-4">
                {s.text}
              </h3>
            )}

            {s.type === "paragraph" && (
              <p className="text-[16px] text-[#444] leading-relaxed mb-4">
                {s.text}
              </p>
            )}

            {s.type === "image" && s.imageUrl && (
              <Image
                src={s.imageUrl}
                alt={s.imageAlt || ""}
                width={1200}
                height={480}
                className="w-full h-56 md:h-[480px] rounded-md shadow-md object-cover mb-8"
              />
            )}

            {s.type === "list" && (
              <div className="mb-8">
                <RenderList items={s.items} />
              </div>
            )}
            {s.type === "cta" && (
              <div className="bg-[#d76e28] py-10 rounded-md text-center mb-10">
                <h3 className="text-3xl capitalize mb-4">{s.text}</h3>
                <p className="mb-4">{s.ctaTitle}</p>
                <a
                  href={s.ctaHref || "#"}
                  className="inline-block   py-2 px-5 border rounded-full font-bold uppercase"
                >
                  {s.ctaText || "Learn More"}
                </a>
              </div>
            )}
          </div>
        ))}

        {/* ===== CTA (STATIC – KEEP AS IS) ===== */}
        {/* <div className="bg-[#d76e28] py-8 rounded-md text-center mt-12">
          <h3 className="text-3xl mb-4">Still Searching?</h3>
          <p className="mb-4">
            Browse more travel styles with 200+ trips worldwide
          </p>
          <button className="py-2 px-5 border rounded-full font-bold uppercase">
            Find out more
          </button>
        </div> */}
        {/* ===== Cards Grid ===== */}
      </div>
    </section>
  );
};

export default TravelGuideDetails;
