import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "How long does an African safari take?",
    answer:
      "The average duration of our African safaris is 12–14 days, the longest being 21 days. For the ultimate wildlife experience, we recommend scheduling two weeks, which will allow you plenty of time to explore the sights, discover the animals and experience epic adventures. But if you’re short on time, we do have African safari trips that run for 1 week or less.",
  },
  {
    question: "What is the best month to go on an African safari?",
    answer:
      "The best months vary by region, but typically the dry season (June to October) offers the best wildlife viewing opportunities across most African parks.",
  },
  {
    question: "What are the best times of year to see wildlife on an African safari?",
    answer:
      "Wildlife viewing is generally best during the dry season, when animals congregate around waterholes and rivers. However, green season safaris offer lush landscapes and fewer tourists.",
  },
  {
    question: "What accommodation options are available on African safari tours?",
    answer:
      "Our safaris include a mix of accommodations — from luxury lodges and tented camps to boutique hotels — ensuring comfort at every step of your adventure.",
  },
  {
    question: "What's included in typical safari tour packages?",
    answer:
      "Our safari packages typically include accommodation, daily meals, guided game drives, park fees, and transfers. Optional add-ons and activities are also available.",
  },
];

const SafariFAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28">
      {/* Title */}
      <h2 className="text-[28px] md:text-3xl text-center capitalize font-extrabold text-[#111] mb-12">
        What do travellers ask about our African safari tours?
      </h2>

      {/* FAQ List */}
      <div className=" border-t border-[#111]/30">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-[#111]/30 overflow-hidden">
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full flex justify-between items-center text-left text-[18px] font-semibold py-5 px-4 transition-all duration-300 ${
                openIndex === index
                  ? "bg-[#fde6d5] text-[#111]"
                  : "hover:bg-[#f7f7f7] text-[#111]"
              }`}
            >
              {faq.question}
              <span className="text-[14px] text-[#111]">
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
            </button>

            {/* Animated Answer */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-5 text-[#333] text-[16px] leading-relaxed bg-white">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SafariFAQSection;



