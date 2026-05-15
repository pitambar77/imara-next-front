"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Faqs = ({ title, subtitle, faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const validFaqs = faqs?.filter((faq) => {
    const hasQuestion = faq.question?.trim();

    const hasAnswer = faq.answer?.some((block) => {
      if (typeof block.content === "string") {
        return block.content.trim() !== "";
      }

      if (Array.isArray(block.content)) {
        return block.content.length > 0;
      }

      return false;
    });

    return hasQuestion || hasAnswer;
  });

  if (!validFaqs || validFaqs.length === 0) {
    return null;
  }

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const formatTitle = (text) => {
    if (!text) return "";
    return text.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <section id="faq" className=" py-6">
      {/* Title */}
      {title && (
        <h2 className=" text-[24px] md:text-3xl text-left capitalize text-[#1a1a1a] mb-3 ">
          {formatTitle(title)}
        </h2>
      )}
      {subtitle && (
        <p className="text-[18px] text-[#444] font-semibold mb-8 md:mb-12 text-left ">
          {subtitle}
        </p>
      )}

      <div className="border-t border-[#111]/30">
        {validFaqs?.map((faq, index) => (
          <div
            key={index}
            className="border-b border-[#111]/30 overflow-hidden"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full flex justify-between cursor-pointer items-center text-left text-[16px] md:text-[18px] font-semibold py-3 md:py-5 px-4 transition-all duration-300 ${
                openIndex === index
                  ? "bg-[#f5d8c1] text-[#444]"
                  : " text-[#444]"
              }`}
            >
              {faq.question}

              <span className="text-[14px] text-[#111]">
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
            </button>

            {/* ANSWER */}
            <div
              className={`transition-all  duration-500 ease-in-out overflow-hidden ${
                openIndex === index
                  ? "max-h-[2000px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-5 pt-4 text-[#444] text-[16px] leading-relaxed space-y-4">
                <div className="space-y-4">
                  {faq.answer?.map((block, idx) => {
                    /* HEADER */
                    if (block.type === "header") {
                      return (
                        <div
                          key={idx}
                          className=" rich-text max-w-none"
                          dangerouslySetInnerHTML={{
                            __html: block.content || "",
                          }}
                        />
                      );
                    }

                    /* PARAGRAPH */
                    if (block.type === "paragraph") {
                      return (
                        <div
                          key={idx}
                          className="rich-text max-w-none text-[#444]"
                          dangerouslySetInnerHTML={{
                            __html: block.content || "",
                          }}
                        />
                      );
                    }

                    /* LIST */
                    if (block.type === "list") {
                      return (
                        <ul key={idx} className="list-disc ml-6 space-y-2">
                          {Array.isArray(block.content) &&
                            block.content.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                        </ul>
                      );
                    }

                    return null;
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
