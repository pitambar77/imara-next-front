"use client";

const partySizes = [
  {
    id: "solo",
    title: "SOLO",
    image: "/np-visit-1.jpg",
  },
  {
    id: "couple",
    title: "COUPLE",
    image: "/np-visit-1.jpg",
  },
  {
    id: "small",
    title: "SMALL GROUP (3 TO 4)",
    image: "/np-visit-1.jpg",
  },
  {
    id: "big",
    title: "BIG GROUP (5+)",
    image: "/np-visit-1.jpg",
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
      <div className="mx-auto w-full max-w-[1140px] px-[30px] sm:px-[40px] lg:px-0">
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
          2. How Big Is Your Party?
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
          Group size for your Tanzania Safari. We arrange Private Safaris and
          Joining Small Group only.
        </p>

        {/* Cards */}
        <div
          className="
            grid
            grid-cols-1
            gap-x-[30px]
            gap-y-[36px]
            sm:grid-cols-2
            lg:grid-cols-4
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
                <div className="h-[201.25px] w-full overflow-hidden">
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
                    
                    items-center
                    justify-center
                    bg-white
                    px-[10px]
                    py-[15px]
                    text-center
                  "
                >
                  <h3
                    className={`
                      !font-cormorant
                      m-0
                      text-[22px]
                      font-medium
                      leading-tight
                      
                      transition-colors
                      duration-300
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
