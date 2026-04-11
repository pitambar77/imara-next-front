"use client"

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQSection = ({ title,subtitle, faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-8 md:py-16 max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0">

      {/* Title */}
      {title && (
        <h2 className="text-[24px] md:text-3xl text-center capitalize font-extrabold text-[#1a1a1a] mb-3 ">
          {title}
        </h2>
      )}
       {subtitle && (
            <p className="text-[18px] text-[#444] mb-8 md:mb-12 text-center ">{subtitle}</p>
          )}

      <div className="border-t border-[#111]/30">
        {faqs?.map((faq, index) => (
          <div
            key={index}
            className="border-b border-[#111]/30 overflow-hidden"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full flex justify-between cursor-pointer items-center text-left text-[16px] md:text-[18px] font-semibold py-3 md:py-5 px-4 transition-all duration-300 ${
                openIndex === index
                  ? "bg-[#fde6d5] text-[#444]"
                  : "hover:bg-[#f7f7f7] text-[#444]"
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
              <div className="px-6 pb-5 pt-4 text-[#444] text-[16px] leading-relaxed bg-gray-50 space-y-4">

                {faq.answerBlocks?.map((block, i) => {

                  // Support MULTIPLE PARAGRAPHS inside 1 block
                  if (block.type === "paragraph") {
                    return (
                      <div key={i} className="space-y-3">
                        {Array.isArray(block.text)
                          ? block.text.map((para, idx) => (
                              <p key={idx}>{para}</p>
                            ))
                          : <p>{block.text}</p>}
                      </div>
                    );
                  }

                  if (block.type === "heading") {
                    return (
                      <h3 key={i} className="text-lg font-bold text-[#444]">
                        {block.text}
                      </h3>
                    );
                  }

                  if (block.type === "list") {
                    return (
                      <ul key={i} className="list-disc ml-6 text-[#444] space-y-2">
                        {block.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    );
                  }

                  return null;
                })}
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
