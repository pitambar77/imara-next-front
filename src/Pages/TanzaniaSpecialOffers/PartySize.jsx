"use client";

const partySizes = [
  {
    id: "Solo",
    title: "Solo",
    image: "/solo-gp.webp",
  },
  {
    id: "Couple",
    title: "Couple",
    image: "/couple-gp.webp",
  },
  {
    id: "Small Group (3 to 4)",
    title: "Small Group (3 to 4)",
    image: "/smgp.webp",
  },
  {
    id: "Big Group (5+)",
    title: "Big Group (5+)",
    image: "/bggp.webp",
  },
];

export default function PartySize({ selected, onSelect }) {
  const handleSelect = (partyId) => {
    onSelect(partyId);

    setTimeout(() => {
      const nextSection = document.getElementById("safari-days");

      if (nextSection) {
        nextSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 250);
  };

  return (
    <section
      id="party-size"
      className="w-full bg-white py-[55px] sm:py-[60px] lg:py-[70px]"
    >
      <div className="mx-auto w-full max-w-[1140px] px-[20px] sm:px-[40px] lg:px-0">
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
          2. How many people are travelling?
        </h2>

        {/* Description */}
        <p
          className="
            !font-avenir
            m-0
            mb-6
            text-[17px]
            leading-[1.6]
            text-[#444]
            md:mb-12
          "
        >
          Tell us your group size so we can recommend the most suitable Tanzania
          safari option. We arrange private safaris as well as small-group
          joining departures.
        </p>

        <div
          className="
    grid
    grid-cols-2
    gap-x-[15px]
    gap-y-[20px]
    lg:grid-cols-4
    lg:gap-x-[30px]
    lg:gap-y-[36px]
  "
        >
          {partySizes.map((item) => {
            const isSelected = selected === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelect(item.id)}
                aria-pressed={isSelected}
                className={`
          group
          w-full
          overflow-hidden
          bg-white
          text-left
          shadow-[0_10px_20px_rgba(0,0,0,0.12)]
          cursor-pointer
          ${isSelected ? "ring-2 ring-[#d87028]" : ""}
        `}
              >
                {/* Image */}
                <div className="h-[150px] w-full overflow-hidden sm:h-[180px] lg:h-[201.25px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
              h-full
              w-full
              scale-125
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-100
            "
                  />
                </div>

                {/* Card title */}
                <div
                  className="
            flex
            min-h-[35px]
            items-center
            justify-center
            bg-white
            px-[8px]
            py-[12px]
            text-center
            sm:min-h-[70px]
          "
                >
                  <h3
                    className={`
              !font-cormorant
              m-0
              text-[18px]
              font-medium
              leading-tight
              transition-colors
              duration-300
              sm:text-[21px]
              lg:text-[22px]
              ${
                isSelected
                  ? "text-[#111]"
                  : "text-[#d87028] group-hover:text-[#111]"
              }
            `}
                  >
                    {item.title}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
