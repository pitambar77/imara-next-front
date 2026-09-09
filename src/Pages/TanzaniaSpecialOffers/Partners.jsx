

"use client";

const partners = [
  {
    id: 1,
    name: "ATTA",
    img: "/atta-im.png",
    link: "",
  },
  {
    id: 2,
    name: "SafariBookings",
    img: "/Safari-booking-im.png",
    link: "",
  },
  {
    id: 3,
    name: "TATO",
    img: "/Tato-im.png",
    link: "",
  },
  {
    id: 4,
    name: "Tripadvisor",
    img: "/trip-im.png",
    link: "",
  },
  {
    id: 5,
    name: "KPAP",
    img: "/Kapap-im.png",
    link: "",
  },
];

export default function Partners() {
  return (
    <section className="w-full bg-[#f7f7f7] py-[35px] sm:py-[45px] md:py-[50px]">
      <div className="mx-auto w-full max-w-[1140px] px-[30px] text-center sm:px-[40px] lg:px-0">
        {/* Heading */}
        <h2
          className="
            !font-cormorant
            m-0
            mb-4
            text-3xl
            text-[#29283b]
            md:text-4xl
            lg:text-5xl
          "
        >
          Our trusted partners
        </h2>

        {/* Description */}
        <p
          className="
            !font-avenir
            mx-auto
            mt-[8px]
            max-w-[650px]
            text-[14px]
            leading-[1.5]
            text-[#d87028]
            sm:mt-[10px]
            sm:text-[14px]
            md:mt-[12px]
            md:text-[17px]
          "
        >
          Great journeys are built through strong collaboration. We work closely
          with carefully selected lodges, camps, guides, and travel partners
          across Africa to deliver reliable service and memorable travel
          experiences.
        </p>

        {/* Partners */}
        <div
          className="
            mt-[22px]

            /* MOBILE SLIDER */
            flex
            snap-x
            snap-mandatory
            flex-nowrap
            justify-start
            gap-[25px]
            overflow-x-auto
            pb-[10px]
            scrollbar-hide

            sm:mt-[28px]
            sm:gap-[40px]

            /* DESKTOP - ORIGINAL LAYOUT */
            md:flex-wrap
            md:justify-center
            md:gap-x-[55px]
            md:gap-y-[30px]
            md:overflow-visible
            md:pb-0
            md:snap-none
          "
        >
          {partners.map((partner) => {
            const content = (
              <img
                src={partner.img}
                alt={partner.name}
                className="
                  h-[55px]
                  w-auto
                  max-w-[140px]
                  object-contain
                  transition-transform
                  duration-300
                  hover:scale-105

                  md:h-[65px]
                  md:max-w-[170px]
                "
              />
            );

            return partner.link ? (
              <a
                key={partner.id}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${partner.name}`}
                className="
                  flex
                  h-[75px]
                  min-w-[150px]
                  shrink-0
                  snap-center
                  items-center
                  justify-center

                  md:h-auto
                  md:min-w-0
                  md:shrink
                  md:snap-none
                "
              >
                {content}
              </a>
            ) : (
              <div
                key={partner.id}
                className="
                  flex
                  h-[75px]
                  min-w-[150px]
                  shrink-0
                  snap-center
                  items-center
                  justify-center

                  md:h-auto
                  md:min-w-0
                  md:shrink
                  md:snap-none
                "
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
