"use client";

import Image from "next/image";

const reviews = [
  {
    text: "The safari literally couldn't have been much better. My partner and I just recently got engaged and we wanted to do a little celebration vacation. I've always wanted to do some safari or more adventurous so we reached out to them and it was settled swiftly.",
    name: "Braylee F",
  },
  {
    text: "I could happily go for a trip like this every year. Even going back again to the Serengeti national park is enticing to us, but we should probably try some of the other options for next year. Huge props to them for providing us more than we expected from a safari tour.",
    name: "Colt B",
  },
  {
    text: "A big thank you to Imara Kileleni Safaris for an unforgettable journey in Tarangire National Park. Everything was perfectly organized, and the guide’s knowledge made wildlife spotting truly special—especially the incredible elephant herds. ",
    name: "John M",
  },
  {
    text: "Imara Kileleni was able to facilitate a wonderful day trip to Tarangire National Park and also a wonderful Day trip to Mt. Kilimanjaro via Shira route We had a wonderful time to step out from work. It’s was well arranged with every nitty gritty taken care of .",
    name: "Blanca Opati",
  },
];

const videos = [
  {
    name: "Gabriel P",
    img: "/safari-review.jpg",
    text: "Completely entrancing scenery. I can only recommend other couples with a bit of wanderlust to do something like this!",
  },
  {
    name: "Sven N",
    img: "/review-kili.jpg",
    text: "Climbing Kilimanjaro was an astonishing experience that we will hardly ever forget. It was certainly not the easiest, but with great effort comes great memories.",
  },
  {
    name: "Ramona F",
    img: "/review-family.jpg",
    text: "Did the family safari. Great. Cant stop thinking about it still almost after a month now. I have discussed with the family if they want to do another safari trip later this year again haha.",
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
               Stories
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
                  {/* <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
                      ▶
                    </div>
                  </div> */}

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
