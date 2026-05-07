"use client";

import Image from "next/image";

const reviews = [
  {
    text: "I usually get a bit anxious with travel planning, but this was probably the most relaxed I've ever felt on a trip. Wild Voyager handled everything — and it all ran so smoothly. We saw SO much wildlife.",
    name: "J. & RUBY M",
  },
  {
    text: "Everything was very well planned from the itinerary to the stays and safari experiences. It didn't feel like a packaged tour; it felt like a thoughtfully curated journey.",
    name: "P. & ALTO H",
  },
  {
    text: "Our guide was amazing, making sure we saw everything from big to small animals and the plentiful bird life in the Serengeti. The entire experience was seamless.",
    name: "GRACE E",
  },
  {
    text: "Great 16 days family safari holidays in Serengeti, Ngorongoro & Tarangire. Outstanding guides and excellent organisation by Deepak & team.",
    name: "ANDREAS",
  },
];

const videos = [
  {
    name: "DR. IRA FREDDER, USA",
    img: "https://media.istockphoto.com/id/1370705436/photo/female-traveler-contemplating-safari-trip-across-the-scenic-african-savannah.jpg?s=612x612&w=0&k=20&c=KWSF4DJvngcOJUKIzhOfge-mnO5cdF04D7f8joM4I9k=",
    text: "The Serengeti river crossing was the most dramatic thing I’ve ever witnessed.",
  },
  {
    name: "ALICE KEMPER, USA",
    img: "https://media.istockphoto.com/id/2244811741/photo/masai-giraffe-walks-across-a-dirt-road-in-front-of-a-safari-vehicle-on-the-savannah-plains-of.jpg?s=612x612&w=0&k=20&c=FKGtQLi8vV0-C_wJWMKB4Vd55s_eEQb5v7gt449mgZY=",
    text: "From the first email to the last night at camp — these people are genuinely world class.",
  },
  {
    name: "KAYLA STEVENSON, USA",
    img: "https://media.istockphoto.com/id/1370705436/photo/female-traveler-contemplating-safari-trip-across-the-scenic-african-savannah.jpg?s=612x612&w=0&k=20&c=KWSF4DJvngcOJUKIzhOfge-mnO5cdF04D7f8joM4I9k=",
    text: "By day three we felt like we’d lived on the Serengeti our whole lives.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="review" className="bg-[#fffaf6] py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <p className=" !font-avenir text-xs md:text-sm tracking-[0.2em] text-[#d87029] uppercase mb-3">
            From Our Travelers
          </p>
          <div className="w-10 h-[1px] bg-[#d87029] mx-auto mb-4 md:mb-6"></div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl !font-cormorant text-[#111]">
            Stories That Stay With You
          </h2>
        </div>

        {/* TOP REVIEWS */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <p className=" !font-avenir text-xs md:text-sm tracking-[0.2em] text-[#d87029] uppercase whitespace-nowrap">
              Tripadvisor Reviews
            </p>
            <div className="flex-1 h-[1px] bg-[#f5dbca]"></div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {reviews.map((item, i) => (
              <div key={i} className="bg-white rounded-md p-6 shadow-sm ">
                {/* Stars */}
                <div className="text-[#d87029] mb-3">★★★★★</div>

                <p className=" !font-avenir text-sm text-[#444] italic mb-4 leading-6">
                  "{item.text}"
                </p>

                <p className="!font-avenir text-xs text-[#d87029] tracking-wider">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* VIDEO STORIES */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <p className=" !font-avenir text-sm md:text-sm tracking-[0.2em] text-[#d87029] uppercase whitespace-nowrap">
              Video Stories
            </p>
            <div className="flex-1 h-[1px] bg-[#f5dbca]"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-md overflow-hidden shadow-sm"
              >
                {/* Image + overlay */}
                <div className="relative h-[240px]">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />

                  {/* Play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
                      ▶
                    </div>
                  </div>

                  {/* Name strip */}
                  <div className=" !font-avenir absolute bottom-3 w-full bg-[#d87029] text-white text-xs text-center py-2 tracking-widest">
                    {item.name}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className=" !font-avenir text-sm text-[#444] leading-6 italic mb-3">
                    "{item.text}"
                  </p>

                  <div className="text-[#d87029] mb-4">★★★★★</div>

                  <p className=" !font-avenir text-xs text-[#d87029] tracking-wider">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
