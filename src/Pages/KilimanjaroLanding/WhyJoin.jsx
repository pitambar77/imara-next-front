import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const WhyJoinSection = () => {
  return (
    <section className="w-full bg-[#ffffff] py-8 md:py-16 max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl capitalize text-[#1a1a1a]">Why Climb with Us</h2>
        <p className="text-[#444] text-[16px] mt-2">Because You Matter</p>
      </div>

      {/* BOX */}
      <div className="bg-[#f7f7f7] rounded-md shadow-sm p-10 md:p-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">

          {/* LEFT COLUMN */}
          <div className="space-y-6 text-[#444] leading-relaxed">
            <Benefit text="Our mountain crew treats every climber like family, not another booking." />

            <Benefit text="Your Kilimanjaro rhythm sets our pace; we never rush anyone." />

            <Benefit text="Every route is planned with care so your body adjusts gently." />

            <Benefit text="Our guides read the mountain’s moods long before clouds change direction." />

            <Benefit text="Hot meals taste better when cooked by people who actually care." />
             <Benefit text="Safety talks feel calm and honest, never loud or intimidating." />
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6 text-[#444] leading-relaxed">
            <Benefit text="You sleep easier knowing our porters protect you through unpredictable nights." />

           

            <Benefit text="We adjust plans quietly when weather surprises us without stressing you." />

            <Benefit text="You feel supported even on days when altitude makes everything harder." />
            <Benefit text="You feel supported even on days when altitude makes everything harder.The summit moment feels deeper because the journey never felt lonely." />

          </div>

        </div>
      </div>
    </section>
  );
};

// Reusable Item Component
const Benefit = ({ text }) => (
  <div className="flex items-start gap-4">
    <FaCheckCircle className="text-[#d87328] text-xl flex-shrink-0" />
    <p className="text-[16px] text-[#111]  leading-relaxed">
      {text}
    </p>
  </div>
);

export default WhyJoinSection;
