import React from "react";

const AboutInfoSection = () => {
  return (
    <section className="bg-[#fcfcfc] py-16 ">
      <div className=" grid grid-cols-1 lg:grid-cols-[62%_38%] justify-between px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 mx-auto">
        {/* LEFT COLUMN */}
        <div className="text-[#222] leading-relaxed">
          {/* Small Label */}
          <p className="uppercase text-sm font-semibold tracking-wider text-[#7a7a7a] mb-4">
            Tanzania Safaris
          </p>

          {/* Main Heading */}
          <h3 className="font-serif text-[30px] md:text-[36px] leading-snug font-bold text-[#111] mb-8">
            In Kilimanjaro's footprint, Tanzania mesmerizes with the great
            wildebeest migration  wildlife 
          </h3>

          {/* Paragraphs with Auto Column Flow */}
          <div className="text-[16px] text-[#333] space-y-4 leading-[1.8] [column-count:2] [column-gap:3rem]">
            <p className="italic text-[#444]">
              “We are seasoned off-the-beaten-track travellers and I marvel
              that everything worked exactly as it was supposed to,” wrote a
              recent traveller of his Expert Africa safari. “Here we were, in
              the middle of central Tanzania, waiting for a 10:05 flight.
              Guess what? At 10:03, there was the plane, buzzing animals off
              the grass runway, then touching down to pick us up. It happened
              every time. Dazzling!”
            </p>

            <p>
              The same traveller went on to describe visceral wildlife
              encounters: “Having a leopard on your tent porch is not
              something I will soon forget. This is not Disneyland.”
            </p>

            <p>
              Tanzania’s tropical coast, sun-dappled beaches and scattering
              of islands are equally fascinating. Here cosmopolitan towns
              date back centuries to early trade routes and secluded Indian
              Ocean islands lie surrounded by white-sand beaches and
              colourful coral reefs.
            </p>

            <p className="italic text-[#444]">
              “Our eyes were wide with wonder from the moment we left the
              airstrip,” sighed a couple returning to Tanzania for the first
              time since their honeymoon 30 years earlier: “We had the most
              mind-blowing, amazing experience.”
            </p>

           
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-end">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5f1ab4309bd4b45e29ec3e4b/1688629973354-NWWQV5E0GV2KDOY12YSU/South-Africa-Ngala-Safari-Lodge-andBeyonder-butlers-_3_-Collections-3000w.jpg"
            alt="Tanzania Safari Giraffe"
            className="rounded-md w-full max-w-[460px] object-cover shadow-sm"
          />
        </div>
      </div>
    </section>
  );
};


export default AboutInfoSection