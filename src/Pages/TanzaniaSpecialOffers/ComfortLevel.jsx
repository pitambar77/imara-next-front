// "use client";

// const comfortOptions = [
//   {
//     id: "decide",
//     title: "YET TO DECIDE",
//     image: "/comfrt_levl-fig-1.jpg",
//   },
//   {
//     id: "basic",
//     title: "BASIC CAMPING",
//     image: "/comfrt_levl-fig-1.jpg",
//   },
//   {
//     id: "mid",
//     title: "MID-RANGE SAFARIS",
//     image: "/comfrt_levl-fig-1.jpg",
//   },
//   {
//     id: "luxury",
//     title: "LUXURY SAFARIS",
//     image: "/comfrt_levl-fig-1.jpg",
//   },
// ];

// export default function ComfortLevel({ selected, onSelect }) {
//   const handleSelect = (comfortId) => {
//     // Select the comfort level
//     onSelect(comfortId);

//     // Scroll to next section
//     setTimeout(() => {
//       const nextSection = document.getElementById("safari-date");

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
//       id="comfort-level"
//       className="w-full bg-white py-[55px] sm:py-[60px] lg:py-[70px]"
//     >
//       <div className="mx-auto w-full max-w-[1140px] px-[30px] sm:px-[40px] lg:px-0">
//         {/* Heading */}
//         <h2 className="!font-cormorant m-0 mb-4 text-3xl  text-[#29283b] md:text-4xl lg:text-5xl">
//           4. Select The Comfort Level On Your Tanzania Safari
//         </h2>

//         {/* Cards */}
//         <div
//           className="mt-[40px] grid grid-cols-2 gap-x-[12px]
//             gap-y-[22px]
// gap-x-[12px]
//             gap-y-[22px]
//             sm:grid-cols-2
//             sm:gap-x-[20px]
//             sm:gap-y-[30px]
//  md:gap-x-[30px] md:gap-y-[36px] sm:grid-cols-3 lg:grid-cols-4"
//         >
//           {comfortOptions.map((item) => {
//             const isSelected = selected === item.id;

//             return (
//               <button
//                 key={item.id}
//                 type="button"
//                 onClick={() => handleSelect(item.id)}
//                 aria-pressed={isSelected}
//                 className={`group w-full cursor-pointer overflow-hidden bg-white text-left shadow-[0_10px_20px_rgba(0,0,0,0.12)] ${
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

//                 {/* Title */}
//                 <div className="flex min-h-[62px] items-center justify-center bg-white px-[10px] py-[15px] text-center">
//                   <h3
//                     className={`!font-cormorant m-0 text-[22px] font-medium leading-tight transition-colors duration-300 ${
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

const comfortOptions = [
  
  {
    id: "basic",
    title: "Basic Camping",
    image: "/comfrt_levl-fig-1.jpg",
  },
  {
    id: "midrange",
    title: "Mid-Range Safaris",
    image: "/mid-rang.webp",
  },
  {
    id: "luxury",
    title: "Luxury Safaris",
    image: "/lux-safari.webp",
  },
  {
    id: "decide",
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
          4. What Level of Comfort Do You Prefer?
        </h2>

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
                  ${
                    isSelected
                      ? "ring-[3px] ring-[#d87028] "
                      : "ring-0"
                  }
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
