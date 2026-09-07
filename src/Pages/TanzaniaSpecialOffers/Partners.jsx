const partners = [
  "African",
  "BEYOND",
  "Asilia",
  "MORE",
  "Singita",
  "WILDERNESS",
];

export default function Partners() {
  return (
    <section className="w-full bg-[#f7f7f7] py-[35px] sm:py-[45px] md:py-[50px]">
      <div className="mx-auto w-full max-w-[1140px] px-[30px] text-center sm:px-[40px] lg:px-0">
        {/* Heading */}
        <h2
          className="
             !font-cormorant m-0 text-[18px] mb-4 font-medium leading-tight text-[#29283b]  sm:text-[25px]  md:text-5xl 
          "
        >
          Our Partners
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
            text-[#c0a463]

            sm:mt-[10px]
            sm:text-[14px]

            md:mt-[12px]
            md:text-[17px]
          "
        >
          Everything is about relationships. Fortunately, we've built great ones
          working with the top names in Africa for more than 20 years.
        </p>

        {/* Partners */}
        <div
          className="
            mt-[22px]
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-[25px]
            gap-y-[12px]

            sm:mt-[28px]
            sm:gap-x-[40px]
            sm:gap-y-[15px]

            md:mt-[32px]
            md:gap-x-[55px]
          "
        >
          {partners.map((partner) => (
            <span
              key={partner}
              className="
                !font-avenir
                text-[9px]
                font-light
                tracking-wide
                text-[#aaa9ad]

                sm:text-[12px]

                md:text-[15px]
              "
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
