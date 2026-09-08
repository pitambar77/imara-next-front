// "use client";

// const durations = [
//   {
//     id: "2-3",
//     title: "2 TO 3 DAYS",
//     image: "/2-3days.webp",
//   },
//   {
//     id: "4-5",
//     title: "4 TO 5 DAYS",
//     image: "/np-visit-1.jpg",
//   },
//   {
//     id: "6-7",
//     title: "6 TO 7 DAYS",
//     image: "/np-visit-1.jpg",
//   },
//   {
//     id: "8-plus",
//     title: "8+ DAYS",
//     image: "/np-visit-1.jpg",
//   },
// ];

// export default function SafariDays({ selected, onSelect }) {
//   const handleSelect = (durationId) => {
//     // Select the duration
//     onSelect(durationId);

//     // Scroll to next section
//     setTimeout(() => {
//       const nextSection = document.getElementById("comfort-level");

//       if (nextSection) {
//         nextSection.scrollIntoView({
//           behavior: "smooth",
//           block: "start",
//         });
//       }
//     }, 250);
//   };

//   return (
//     <section
//       id="safari-days"
//       className="w-full bg-[#f7f7f7] py-[55px] sm:py-[60px] lg:py-[70px]"
//     >
//       <div className="mx-auto w-full max-w-[1140px] px-[30px] sm:px-[40px] lg:px-0">
//         {/* Heading */}
//         <h2 className="!font-cormorant m-0 mb-4 text-3xl font-medium leading-tight text-[#29283b] md:text-4xl lg:text-5xl">
//           3. How Many Days Of Safari Are You Planning?
//         </h2>

//         {/* Description */}
//         <p className="!font-avenir m-0 mb-6 text-[17px] leading-[1.6] text-[#444] md:mb-12">
//           Choose the safari duration that fits your travel plans.
//         </p>

//         {/* Cards */}
//         <div className="grid grid-cols-1 gap-x-[30px] gap-y-[36px] sm:grid-cols-2 lg:grid-cols-4 ">
//           {durations.map((item) => {
//             const isSelected = selected === item.id;

//             return (
//               <button
//                 key={item.id}
//                 type="button"
//                 onClick={() => handleSelect(item.id)}
//                 aria-pressed={isSelected}
//                 className={`group w-full overflow-hidden bg-white text-left cursor-pointer  shadow-[0_10px_20px_rgba(0,0,0,0.12)] ${
//                   isSelected ? "ring-2 ring-[#d87028]" : ""
//                 }`}
//               >
//                 {/* Image */}
//                 <div className="h-[201.25px] w-full overflow-hidden">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="h-full w-full scale-125 object-cover transition-transform duration-700 ease-out group-hover:scale-100"
//                   />
//                 </div>

//                 {/* Card Content */}
//                 <div className="flex items-center justify-center bg-white px-[10px] py-[15px] text-center">
//                   <h3
//                     className={`!font-cormorant m-0 text-[22px] transition-colors duration-300 ${
//                       isSelected
//                         ? "text-[#111]"
//                         : "text-[#d87028] group-hover:text-[#111]"
//                     }
//                     `}
//                   >
//                     {item.title}
//                   </h3>
//                 </div>
//               </button>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

const durations = [
  {
    id: "2-3",
    title: "2 To 3 Days",
    image: "/2-3days.webp",
  },
  {
    id: "4-5",
    title: "4 To 5 Days",
    image: "/4-5d.webp",
  },
  {
    id: "6-7",
    title: "6 To 7 Days",
    image: "/6-7d.webp",
  },
  {
    id: "8-plus",
    title: "8+ Days",
    image: "/8ds.webp",
  },
];

export default function SafariDays({ selected, onSelect }) {
  const handleSelect = (durationId) => {
    // Select the duration
    onSelect(durationId);

    // Scroll to next section
    setTimeout(() => {
      const nextSection = document.getElementById("comfort-level");

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
      id="safari-days"
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
            font-medium
            leading-tight
            text-[#29283b]
            md:text-4xl
            lg:text-5xl
          "
        >
          3. How Long Would You Like to Spend on Safari?
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
          Select the number of days that works best for your schedule, travel
          style, and the experiences you would like to include.
        </p>

        {/* Cards */}
        <div
          className="
            grid
            grid-cols-2
            gap-x-[12px]
            gap-y-[22px]

            sm:grid-cols-2
            sm:gap-x-[20px]
            sm:gap-y-[30px]

            lg:grid-cols-4
            lg:gap-x-[30px]
            lg:gap-y-[36px]
          "
        >
          {durations.map((item) => {
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

                {/* Card Content */}
                <div
                  className="
                    flex
                    min-h-[65px]
                    items-center
                    justify-center
                    bg-white
                    px-[8px]
                    py-[15px]
                    text-center

                    sm:min-h-[75px]
                    sm:px-[12px]
                    sm:py-[18px]

                    lg:min-h-[75px]
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
