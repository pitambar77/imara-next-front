// import React from "react";

// const MonthCircle = ({ month, isActive, onHover }) => {
//   return (
//     <div
//       onMouseEnter={() => onHover(month)}
//       className={`w-20 h-20 rounded-full flex items-center justify-center font-semibold uppercase transition-all duration-300 cursor-pointer ${
//         isActive
//           ? `${month.color} border-b-4 border-[#a89f82] scale-105`
//           : month.color
//       }`}
//     >
//       {month.name}
//     </div>
//   );
// };

// export default MonthCircle;

import React from "react";

/* Season → Tailwind color mapping */
const SEASON_COLOR_MAP = {
  high: "bg-[#A5D6A7]",     // High Season
  low: "bg-[#F1F8C0]",      // Low Season
  best: "bg-[#E1D7F8]",     // Best Weather
  default: "bg-gray-200",
};

const MonthCircle = ({ month, isActive, onHover }) => {
  const bgColor =
    SEASON_COLOR_MAP[month.seasonType] || SEASON_COLOR_MAP.default;

  return (
    // <div
    //   onMouseEnter={() => onHover(month)}
    //   className={`
    //     w-14 md:w-20 h-14 md:h-20 rounded-full flex items-center justify-center
    //     font-semibold uppercase cursor-pointer
    //     transition-all duration-300
    //     ${bgColor}
    //     ${
    //       isActive
    //         ? "border-b-4 border-[#a89f82] scale-105"
    //         : "hover:scale-105"
    //     }
    //   `}
    // >
    //   {month.name}
    // </div>
    <div
  onMouseEnter={() => onHover(month)}
  onClick={() => onHover(month)} // mobile tap support
  className={`
    w-10 h-10
    sm:w-14 sm:h-14
    md:w-20 md:h-20
    rounded-full
    flex items-center justify-center
    font-semibold uppercase
    text-[10px] sm:text-[12px] md:text-sm
    cursor-pointer
    transition-all duration-300
    ${bgColor}
    ${
      isActive
        ? "border-b-4 border-[#a89f82] scale-105"
        : "hover:scale-105 active:scale-95"
    }
  `}
>
  <p>{month.name}</p>
</div>

  );
};

export default MonthCircle;
