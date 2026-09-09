const benefits = [
  {
    title: "Wildlife moments that feel unscripted",
    text: "Tanzania delivers the kind of encounters travelers remember for years — lions resting on the plains, elephants moving through baobab country, cheetahs scanning the horizon, and enormous herds gathering across the Serengeti.",
  },
  {
    title: "Remarkable landscapes in one journey",
    text: "Few destinations combine so much variety. Travel from the open grasslands of the Serengeti to the Ngorongoro highlands, Tarangire’s ancient baobabs, Kilimanjaro’s slopes, and the tropical coastline of Zanzibar.",
  },
  {
    title: "Different experiences in every region",
    text: "No two parts of Tanzania feel the same. Enjoy classic game drives, walking experiences, cultural visits, crater exploration, mountain adventures, private concessions, or a relaxed island escape after your time in the wilderness.",
  },
  {
    title: "A destination that works across seasons",
    text: "Tanzania offers rewarding travel throughout the year. Different seasons bring changing wildlife movements, landscapes, temperatures, and experiences, making it possible to plan around what matters most to you.",
  },
  {
    title: "Stays that become part of the experience",
    text: "Accommodation ranges from intimate tented camps in remote wilderness areas to elegant lodges overlooking dramatic landscapes. Many properties are designed to keep you close to nature without compromising comfort.",
  },
  {
    title: "Easy to combine safari, mountain & beach",
    text: "One trip can include several completely different experiences. Explore wildlife-rich national parks, trek Mount Kilimanjaro, then finish beside the Indian Ocean in Zanzibar — all within one destination.",
  },
];

export default function WhySafari() {
  return (
    <section
      className="
        relative
        z-30
        mx-auto

        /* Desktop */
        -mt-[100px]
        w-[calc(100%-120px)]
        max-w-[1140px]
        bg-white
        px-[85px]
        pb-[95px]
        pt-[78px]

        /* Tablet */
        md:-mt-[180px]
        md:w-[calc(100%-60px)]
        md:px-[50px]
        md:pb-[70px]
        md:pt-[60px]

        /* Mobile */
        max-md:mt-0
        max-md:w-full
        max-md:max-w-none
        max-md:px-0
        max-md:pb-[55px]
        max-md:pt-[50px]
      "
    >
      {/* ================= HEADING ================= */}

      <h2
        className="
          !font-cormorant
          m-0
          mb-[50px]
          px-[25px]
          text-3xl
          font-medium
          leading-tight
          text-[#29283b]

          md:px-0
          md:text-4xl

          lg:mb-20
          lg:text-5xl
        "
      >
        Why Tanzania is a leading African Safari destination
      </h2>

      {/* ================= BENEFITS ================= */}

      <div
        className="
    grid
    grid-cols-3
    gap-x-[65px]
    gap-y-[82px]

    max-md:flex
    max-md:w-full
    max-md:max-w-full
    max-md:overflow-x-auto
    max-md:overflow-y-hidden
    max-md:gap-[20px]
    max-md:px-[25px]
    max-md:pb-[15px]
    max-md:snap-x
    max-md:snap-mandatory
    max-md:scroll-smooth
    max-md:[scrollbar-width:none]
    max-md:[&::-webkit-scrollbar]:hidden
  "
      >
        {benefits.map((item) => (
          <article
            key={item.title}
            className="
              min-w-0

              /* Mobile card */
              max-md:w-[82vw]
              max-md:min-w-[82vw]
              max-md:shrink-0
              max-md:snap-start
              max-md:bg-[#fafafa]
              max-md:px-[25px]
              max-md:py-[30px]
            "
          >
            {/* Icon */}

            <img
              src="/check-tik.png"
              alt="Checkmark"
              className="
                h-10
                w-10
                object-contain
              "
            />

            {/* Title */}

            <h3
              className="
                m-0
                mt-[25px]
                !font-cormorant
                text-[25px]
                font-medium
                leading-[1.15]
                tracking-[-0.01em]
                text-[#29283b]

                max-md:text-[24px]
              "
            >
              {item.title}
            </h3>

            {/* Description */}

            <p
              className="
                m-0
                mt-[28px]
                !font-avenir
                text-[17px]
                leading-[1.6]
                text-[#444]

                max-md:text-[16px]
                max-md:leading-[1.65]
              "
            >
              {item.text}
            </p>
          </article>
        ))}
      </div>

      {/* ================= MOBILE SLIDE HINT ================= */}

      {/* <div
        className="
          mt-[25px]
          flex
          items-center
          justify-center
          gap-[7px]

          md:hidden
        "
      >
        <span className="h-[4px] w-[25px] rounded-full bg-[#d87028]" />
        <span className="h-[4px] w-[7px] rounded-full bg-[#ddd]" />
        <span className="h-[4px] w-[7px] rounded-full bg-[#ddd]" />
        <span className="h-[4px] w-[7px] rounded-full bg-[#ddd]" />
      </div> */}
    </section>
  );
}
