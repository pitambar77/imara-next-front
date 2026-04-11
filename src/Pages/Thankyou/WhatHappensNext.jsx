import React from "react";

const WhatHappensNext = () => {
  const steps = [
    {
      id: 1,
      title: "An Introduction with Your Safari Planner",
      text: "Your dedicated planner will reach out to understand what excites you most. Your preferences will be used to create your ideal safari.",
    },
    {
      id: 2,
      title: "Tailoring Your Itinerary Together",
      text: "Your dedicated planner will reach out to understand what excites you most. Your preferences will be used to create your ideal safari.",
    },
    {
      id: 3,
      title: "Bringing Your Vision To Life",
      text: "Your dedicated planner will reach out to understand what excites you most. Your preferences will be used to create your ideal safari.",
    },
  ];

  return (
    <section className="bg-[#f7d1b8] py-8 md:py-16 px-4 md:px-10 lg:px-16 xl:px-24 2xl:px-40 text-center">
      <h2 className="text-xl md:text-4xl font-extrabold text-black mb-8 md:mb-14">
        What happens next?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black text-white text-2xl font-bold mb-6">
              {step.id}
            </div>

            <h3 className="text-xl font-bold text-black mb-4">
              {step.title}
            </h3>

            <p className="text-[16px] text-[#222] leading-relaxed w-[80%] mx-auto">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatHappensNext;
