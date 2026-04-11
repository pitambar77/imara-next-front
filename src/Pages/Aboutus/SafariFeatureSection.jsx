import React from "react";
import Link from "next/link";
import Image from "next/image";


const SafariIntroSection = () => {
  return (
    <section className="bg-white py-8 md:py-16 max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0 space-y-8">
      <div className=" bg-[#fde6d5] rounded-md overflow-hidden shadow-sm flex flex-col md:flex-row items-center p-4">
        {/* Left Image */}
        <div className="w-full md:w-2/5">
          <Image
            src="/safari-team-safarifeature.jpg"
            alt="Safari Team"
            width={600}
            height={420}
            className="w-full h-auto md:h-[420px] object-cover rounded-lg"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 px-4 xl:px-12 py-5 md:py-10 text-center xl:text-left">
          <p className="text-sm text-[#444] mb-2">Meet the Team</p>
          <h3 className="text-[24px] md:text-[36px] font-semibold text-[#222] leading-snug mb-4">
            Experts Who Guide Your Adventures
          </h3>
          <p className="text-[17px] text-[#444] leading-relaxed mb-8 ">
            Our team blends local insight, field experience, and genuine warmth
            to create safe and memorable journeys across Tanzania’s parks,
            mountains, and cultural landscapes.
          </p>
        </div>
      </div>

      <div className=" bg-[#fde6d5] rounded-md overflow-hidden shadow-sm flex flex-col md:flex-row items-center p-4">
        {/* Right Content */}
        <div className="w-full md:w-1/2 px-1 md:px-12 py-5 md:py-10 text-left order-2 md:order-1">
          <p className="text-sm text-[#444] mb-2">
            Our Sustainability Commitment
          </p>
          <h3 className="text-[24px] md:text-[36px] font-semibold text-[#222] leading-snug mb-4">
            Tourism That Supports Local Communities
          </h3>
          <p className="text-[17px] text-[#444] leading-relaxed mb-8 ">
            We prioritise responsible practices, partner with local communities,
            and ensure every journey respects wildlife, protects ecosystems, and
            contributes positively to Tanzania’s long-term wellbeing.
          </p>
          <Link
            href={"/sustanbility"}
            // onClick={() => navigate("/sustanbility")}
            className="bg-[#d87028] hover:bg-[#c35f22] cursor-pointer text-white font-semibold px-8 py-3 rounded-md transition"
          >
            See Sustainability Directory
          </Link>
        </div>
        {/* Left Image */}
        <div className="w-full md:w-3/5 order-1 md:order-2">
          <Image
            src={'/sustanability-about.webp'}
            alt="Safari Team"
            width={700}
            height={460}
            className="w-full h-auto md:h-[460px] object-cover rounded-lg"
          />
        </div>
      </div>
      <div className=" bg-[#fde6d5] rounded-md overflow-hidden shadow-sm flex flex-col md:flex-row items-center p-4">
        {/* Left Image */}
        <div className="w-full md:w-2/5">
          <Image
            src={'/safari-vechile.webp'}
            alt="Safari Vehicle"
            width={600}
            height={420}
            className="w-full h-auto md:h-[420px] object-cover rounded-lg"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 px-1 md:px-12 py-5 md:py-10 text-left">
          <p className="text-sm text-[#444] mb-2">Safari Vehicles</p>
          <h3 className="text-[24px] md:text-[36px] font-semibold text-[#222] leading-snug mb-4">
            Comfortable Rides Built For Exploration
          </h3>
          <p className="text-[17px] text-[#444] leading-relaxed mb-8 ">
            Our customised 4x4 vehicles offer comfort, reliability, and
            excellent wildlife viewing, ensuring smooth travel across varied
            terrain throughout your safari experience.
          </p>
          <Link
            href={"/safari-fleet"}
            // onClick={() => navigate("/safari-fleet")}
            className="bg-[#d87028] hover:bg-[#c35f22] cursor-pointer text-white font-semibold px-8 py-3 rounded-md transition"
          >
            See Vehicles Directory
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SafariIntroSection;
