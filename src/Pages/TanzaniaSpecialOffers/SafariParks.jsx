"use client";

const parks = [
 
  {
    id: "Serengeti",
    title: "Serengeti",
    description:
      "Endless plains, abundant wildlife, and the legendary Great Migration.",
    image: "/serengeti-np.webp",
  },
  {
    id: "Ngorongoro",
    title: "Ngorongoro ",
    description: "A stunning crater with rich wildlife and a great place to see Africa's famous Big Five.",
    image: "/narangara.webp",
  },
  {
    id: "Tarangire",
    title: "Tarangire",
    description:
      "Ancient baobabs, large elephant herds, and excellent wildlife viewing.",
    image: "/tarangire-np.webp",
  },
  {
    id: "Lake Manyara",
    title: "Lake Manyara",
    description:
      "Lush landscapes, rich birdlife, flamingos, and famous tree-climbing lions",
    image: "/lake-manyara-np.webp",
  },
  {
    id: "Arusha",
    title: "Arusha",
    description:
      "Scenic landscapes, Mount Meru views, and rewarding wildlife experiences.",
    image: "/arusha-np.webp",
  },
  {
    id: "Zanzibar",
    title: "Zanzibar",
    description:
      "White beaches, turquoise waters, and historic Stone Town.",
    image: "/beach-zanzibar.webp",
  },
  {
    id: "Kilimanjaro",
    title: "Kilimanjaro",
    description:
      "Africa’s highest peak with breathtaking views and iconic trekking.",
    image: "/kilimanjaro-cl.webp",
  },
   {
    id: "Yet to Decide",
    title: "Yet To Decide",
    description: "We will suggest based on your plans, dates & duration",
    image: "/deside.webp",
  },
];

export default function SafariParks({ selected = [], onSelect }) {
  const handleSelect = (parkId) => {
    let updatedSelection;

    if (selected.includes(parkId)) {
      // Unselect
      updatedSelection = selected.filter((id) => id !== parkId);
    } else {
      // Select
      updatedSelection = [...selected, parkId];
    }

    onSelect(updatedSelection);

    // Scroll to next section
    setTimeout(() => {
      const nextSection = document.getElementById("party-size");

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
      id="parks"
      className="
        w-full
        bg-[#f7f7f7]
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
            md:text-4xl
            lg:text-5xl
          "
        >
          1. Which Tanzania destinations would you like to visit?
        </h2>

        {/* Description */}
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
          Pick the destinations you would most like to visit. Your choices will
          help our travel team shape a journey around your interests, available
          time, and preferred travel style.
        </p>

        {/* Cards */}
        <div
          className="
            mt-[30px]
            grid
            grid-cols-2
            gap-x-[12px]
            gap-y-[22px]

            sm:grid-cols-3
            sm:gap-x-[20px]
            sm:gap-y-[30px]

            lg:mt-[40px]
            lg:grid-cols-4
            lg:gap-x-[30px]
            lg:gap-y-[36px]
          "
        >
          {parks.map((park) => {
            // Multi-select check
            const isSelected = selected.includes(park.id);

            return (
              <button
                key={park.id}
                type="button"
                onClick={() => handleSelect(park.id)}
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
                  ${isSelected ? "ring-[3px] ring-[#d87028]" : "ring-0"}
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
                    src={park.image}
                    alt={park.title}
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

                {/* Card Content */}
                <div
                  className="
                    flex
                    min-h-[35px]
                    flex-col
                    items-center
                    bg-white
                    px-[8px]
                    pb-[15px]
                    pt-[18px]
                    text-center
                    
                    sm:min-h-[55px]
                    sm:px-[12px]
                    sm:pb-[20px]
                    sm:pt-[20px]

                    lg:min-h-[175px]
                    lg:px-[18px]
                    lg:pb-[25px]
                    lg:pt-[25px]
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
                    {park.title}
                  </h3>

                  <p
                    className="
                      !font-avenir
                      mt-[18px]
                      hidden
                      text-center
                      text-[16px]
                      leading-6
                      text-[#444]
                      md:block
                      lg:text-[17px]
                    "
                  >
                    {park.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
