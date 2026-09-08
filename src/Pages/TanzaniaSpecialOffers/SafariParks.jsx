

"use client";

const parks = [
  {
    id: "decide",
    title: "YET TO DECIDE",
    description: "We will suggest based on your plans, dates & duration",
    image: "/deside.webp",
  },
  {
    id: "serengeti",
    title: "SERENGETI NP",
    description:
      "Tanzania's most celebrated national park, the Great Migration",
    image: "/serengeti-np.webp",
  },
  {
    id: "ngorongoro",
    title: "NGORONGORO CRATER",
    description: "Big 5, Olduvai Gorge and Maasai village",
    image: "/np-visit-1.jpg",
  },
  {
    id: "tarangire",
    title: "TARANGIRE NP",
    description:
      "Huge herds of elephants, Baobab trees and the Tarangire river",
    image: "/np-visit-1.jpg",
  },
  {
    id: "manyara",
    title: "LAKE MANYARA NP",
    description:
      "Escarpment of the Great Rift Valley, flamingoes and tree climbing lions",
    image: "/lake-manyara-np.webp",
  },
  {
    id: "arusha",
    title: "ARUSHA NP",
    description:
      "Walking safari, excellent birding near Momella lakes, Mount Meru",
    image: "/arusha-np.webp",
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
      className="w-full bg-[#f7f7f7] py-[55px] sm:py-[60px] lg:py-[70px]"
    >
      <div className="mx-auto w-full max-w-[1140px] px-[30px] sm:px-[40px] lg:px-0">
        {/* Heading */}
        <h2 className="!font-cormorant mb-4 text-3xl md:text-4xl lg:text-5xl">
          1. Which Parks Do You Want To Visit?
        </h2>

        {/* Description */}
        <p className="!font-avenir mb-6 text-[17px] text-[#444] md:mb-12">
          Please select all the National parks you want to visit in Tanzania. In
          case you want us to suggest, please select the first option from below
          list.
        </p>

        {/* Cards */}
        <div
          className="
            mt-[40px]
            grid
            grid-cols-1
            gap-x-[30px]
            gap-y-[36px]
            sm:grid-cols-2
            lg:grid-cols-4
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
                  ${
                    isSelected
                      ? "ring-[3px] ring-[#d87028] "
                      : ""
                  }
                `}
              >
                {/* Image */}
                <div className="h-[201.25px] w-full overflow-hidden">
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
                    min-h-[175px]
                    flex-col
                    items-center
                    bg-white
                    px-[18px]
                    pb-[25px]
                    pt-[25px]
                    text-center
                  "
                >
                  <h3
                    className={`
                      !font-cormorant
                      m-0
                      mb-4
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
                    {park.title}
                  </h3>

                  <p
                    className="
                      !font-avenir
                      hidden
                      text-center
                      leading-6
                      text-[#444]
                      md:block
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
