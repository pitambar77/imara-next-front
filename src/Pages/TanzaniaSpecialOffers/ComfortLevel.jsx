"use client";

const comfortOptions = [
  {
    id: "decide",
    title: "YET TO DECIDE",
    image: "/comfrt_levl-fig-1.jpg",
  },
  {
    id: "basic",
    title: "BASIC CAMPING",
    image: "/comfrt_levl-fig-1.jpg",
  },
  {
    id: "mid",
    title: "MID-RANGE SAFARIS",
    image: "/comfrt_levl-fig-1.jpg",
  },
  {
    id: "luxury",
    title: "LUXURY SAFARIS",
    image: "/comfrt_levl-fig-1.jpg",
  },
];

export default function ComfortLevel({ selected, onSelect }) {
  return (
    <section className="w-full bg-white py-[55px] sm:py-[60px] lg:py-[70px]">
      <div className="mx-auto w-full max-w-[1140px] px-[30px] sm:px-[40px] lg:px-0">
        {/* Heading */}
        <h2 className="!font-cormorant m-0 mb-4 text-3xl font-medium leading-tight text-[#29283b] md:text-4xl lg:text-5xl">
          4. Select The Comfort Level On Your Tanzania Safari
        </h2>

        {/* Cards */}
        <div className="mt-[40px] grid grid-cols-1 gap-x-[30px] gap-y-[36px] sm:grid-cols-2 lg:grid-cols-4">
          {comfortOptions.map((item) => {
            const isSelected = selected === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelect(item.id)}
                aria-pressed={isSelected}
                className={`group w-full cursor-pointer overflow-hidden bg-white text-left shadow-[0_10px_20px_rgba(0,0,0,0.12)] ${
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

                {/* Title */}
                <div className="flex min-h-[62px] items-center justify-center bg-white px-[10px] py-[15px] text-center">
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
