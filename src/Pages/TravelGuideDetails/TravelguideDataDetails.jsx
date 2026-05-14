import React from "react";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import Faqs from "../Travelguide/Faqs";
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

const TravelguideDataDetails = ({ blog, faqSection }) => {
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
              <div
                className=" rich-text max-w-none "
                dangerouslySetInnerHTML={{
                  __html: s.text || "",
                }}
              />
            )}
            {s.type === "h2" && (
              <div
                className="rich-text max-w-none "
                dangerouslySetInnerHTML={{
                  __html: s.text || "",
                }}
              />
            )}

            {s.type === "paragraph" && (
              <div
                className="rich-text max-w-none text-[#444] "
                dangerouslySetInnerHTML={{
                  __html: s.text || "",
                }}
              />
            )}
            {s.type === "quote" && (
              <blockquote className="border-l-4 border-[#d76e28] pl-4 italic my-6">
                <div
                  className="rich-text max-w-none"
                  dangerouslySetInnerHTML={{
                    __html: s.text || "",
                  }}
                />
              </blockquote>
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

        {/* ===== FAQ SECTION ===== */}
        {faqSection && (
          <Faqs
            title={faqSection.title}
            subtitle={faqSection.subtitle}
            faqs={faqSection.faqs}
          />
        )}
      </div>
    </section>
  );
};

export default TravelguideDataDetails;
