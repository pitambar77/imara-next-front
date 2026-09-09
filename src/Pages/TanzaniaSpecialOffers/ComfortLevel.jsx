"use client";

const comfortOptions = [
  {
    id: "Basic Camping",
    title: "Basic Camping",
    image: "/comfrt_levl-fig-1.jpg",
  },
  {
    id: "Mid-Range Safaris",
    title: "Mid-Range Safaris",
    image: "/mid-rang.webp",
  },
  {
    id: "Luxury Safaris",
    title: "Luxury Safaris",
    image: "/lux-safari.webp",
  },
  {
    id: "Yet to Decide",
    title: "Yet To Decide",
    image: "/basic-campaign.webp",
  },
];

export default function ComfortLevel({ selected, onSelect }) {
  const handleSelect = (comfortId) => {
    // Select the comfort level
    onSelect(comfortId);

    // Scroll to next section
    setTimeout(() => {
      const nextSection = document.getElementById("safari-date");

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
      id="comfort-level"
      className="
        w-full
        bg-white
        py-[55px]
        sm:py-[60px]
        lg:py-[70px]
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1140px]
          px-[20px]
          sm:px-[40px]
          lg:px-0
        "
      >
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
          4. What type of safari accommodation would you prefer?
        </h2>
        <p
          className="
            !font-avenir
            m-0
            mb-6
            text-[16px]
            leading-[1.6]
            text-[#444]
            md:mb-12
            md:text-[17px]
          "
        >
          Choose your preferred Tanzania safari accommodation, from comfortable
          mid-range lodges to luxury tented camps. We match every stay to your
          budget, comfort level, and location inside the parks.
        </p>

        {/* Cards */}
        <div
          className="
            mt-[30px]
            grid
            grid-cols-2
            gap-x-[12px]
            gap-y-[22px]

            sm:grid-cols-2
            sm:gap-x-[20px]
            sm:gap-y-[30px]

            lg:mt-[40px]
            lg:grid-cols-4
            lg:gap-x-[30px]
            lg:gap-y-[36px]
          "
        >
          {comfortOptions.map((item) => {
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
                  cursor-pointer
                  overflow-hidden
                  bg-white
                  text-left
                  shadow-[0_10px_20px_rgba(0,0,0,0.12)]
                  transition-all
                  duration-200
                  ${isSelected ? "ring-[3px] ring-[#d87028] " : "ring-0"}
                `}
              >
                {/* Image */}
                <div
                  className="
                    h-[150px]
                    w-full
                    overflow-hidden

                    sm:h-[180px]

                    lg:h-[201.25px]
                  "
                >
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

                {/* Title */}
                <div
                  className="
                    flex
                    min-h-[35px]
                    items-center
                    justify-center
                    bg-white
                    px-[8px]
                    py-[15px]
                    text-center

                    sm:min-h-[55px]
                    sm:px-[12px]
                    sm:py-[18px]

                    lg:min-h-[62px]
                    lg:px-[10px]
                    lg:py-[15px]
                  "
                >
                  <h3
                    className={`
                      !font-cormorant
                      m-0
                      text-[18px]
                      font-medium
                      leading-[1.15]
                      transition-colors
                      duration-300

                      sm:text-[20px]

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
