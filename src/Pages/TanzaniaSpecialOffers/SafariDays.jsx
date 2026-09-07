"use client";

const durations = [
  {
    id: "2-3",
    title: "2 TO 3 DAYS",
    image: "/planning_days-fig-1.jpg",
  },
  {
    id: "4-5",
    title: "4 TO 5 DAYS",
    image: "/np-visit-1.jpg",
  },
  {
    id: "6-7",
    title: "6 TO 7 DAYS",
    image: "/np-visit-1.jpg",
  },
  {
    id: "8-plus",
    title: "8+ DAYS",
    image: "/np-visit-1.jpg",
  },
];

export default function SafariDays({ selected, onSelect }) {
  return (
    <section className="w-full bg-[#f7f7f7] py-[55px] sm:py-[60px] lg:py-[70px]">
      <div className="mx-auto w-full max-w-[1140px] px-[30px] sm:px-[40px] lg:px-0">
        {/* Heading */}
        <h2 className="!font-cormorant m-0 mb-4 text-3xl font-medium leading-tight text-[#29283b] md:text-4xl lg:text-5xl">
          3. How Many Days Of Safari Are You Planning?
        </h2>

        {/* Description */}
        <p className="!font-avenir m-0 mb-6 text-[17px] leading-[1.6] text-[#444] md:mb-12">
          Choose the safari duration that fits your travel plans.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-x-[30px] gap-y-[36px] sm:grid-cols-2 lg:grid-cols-4 ">
          {durations.map((item) => {
            const isSelected = selected === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelect(item.id)}
                aria-pressed={isSelected}
                className={`group w-full overflow-hidden bg-white text-left cursor-pointer  shadow-[0_10px_20px_rgba(0,0,0,0.12)] ${
                  isSelected ? "ring-2 ring-[#f0b51b]" : ""
                }`}
              >
                {/* Image */}
                <div className="h-[201.25px] w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full scale-125 object-cover transition-transform duration-700 ease-out group-hover:scale-100"
                  />
                </div>

                {/* Card Content */}
                <div className="flex items-center justify-center bg-white px-[10px] py-[15px] text-center">
                  <h3 className="!font-cormorant m-0 text-[22px] font-medium leading-tight text-[#d87028] transition-colors duration-300 group-hover:text-[#111]">
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
