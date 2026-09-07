"use client";

const parks = [
  {
    id: "decide",
    title: "YET TO DECIDE",
    description: "We will suggest based on your plans, dates & duration",
    image: "/np-visit-1.jpg",
  },
  {
    id: "serengeti",
    title: "SERENGETI NP",
    description:
      "Tanzania's most celebrated national park, the Great Migration",
    image: "/np-visit-1.jpg",
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
    image: "/np-visit-1.jpg",
  },
  {
    id: "arusha",
    title: "ARUSHA NP",
    description:
      "Walking safari, excellent birding near Momella lakes, Mount Meru",
    image: "/np-visit-1.jpg",
  },
];

export default function SafariParks({ selected, onSelect }) {
  return (
    <section className="w-full bg-[#f7f7f7] py-[55px] sm:py-[60px] lg:py-[70px]">
      <div className="mx-auto w-full max-w-[1140px] px-[30px] sm:px-[40px] lg:px-0">
        {/* Heading */}
        <h2
          className="
            !font-cormorant text-3xl md:text-4xl lg:text-5xl mb-4 capitalize "
        >
          1. Which Parks Do You Want To Visit?
        </h2>

        {/* Description */}
        <p
          className="
            !font-avenir text-[#444] text-[17px] mb-6 md:mb-12
          "
        >
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
            const isSelected = selected === park.id;

            return (
              <button
                key={park.id}
                type="button"
                onClick={() => onSelect(park.id)}
                aria-pressed={isSelected}
                className={`
    group
    w-full
    overflow-hidden
    bg-white
    text-left
    shadow-[0_10px_20px_rgba(0,0,0,0.12)]
    cursor-pointer
   
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
      object-cover
      scale-125
      transition-transform
      duration-700
      ease-out
      group-hover:scale-100
    "
                  />
                </div>

                {/* Card content */}
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
                  {/* Title */}
                  <h3
                    className="
        !font-cormorant
        m-0
        mb-4
        text-center
        text-[22px]
        font-medium
        leading-tight
        text-[#d87028]
        transition-colors
        duration-300
        group-hover:text-[#111]
      "
                  >
                    {park.title}
                  </h3>

                  {/* Description */}
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
