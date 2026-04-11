// const CardOne = ({
//   image,
//   title,
//   price,
//   highlights,
//   acclimatization,
//   successRate,
//   isSuggestion,
// }) => {
//   return (
//     <div className="bg-white shadow-md hover:shadow-lg transition overflow-hidden text-center rounded">
//       {/* Image */}
//       <img src={image} alt={title} className="h-44 w-full object-cover" />

//       {/* Content */}
//       <div className="p-4">
//         <h3 className="text-xl mb-4 leading-tight text-[#d87028]">{title}</h3>
//         {isSuggestion ? (
//           <p className="text-[14px] md:text-[16px]  mb-6 md:mb-10">
//             Not sure which route suits you best? We recommend the most suitable
//             option for you.
//           </p>
//         ) : (
//           <>
//             <div className=" space-y-1">
//               <p className=" text-[14px] md:text-[16px]">Price: {price}</p>
//               <p className="text-[14px] md:text-[16px] ">{highlights}</p>
//               <p className="text-[14px] md:text-[16px] ">
//                 Acclimatization: {acclimatization}
//               </p>
//               <p className="text-[14px] md:text-[16px] ">
//                 Success Rate: {successRate}
//               </p>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CardOne;

import { FaCheck } from "react-icons/fa";

const CardOne = ({
  image,
  title,
  price,
  highlights,
  acclimatization,
  successRate,
  isSuggestion,
  isSelected = false,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white cursor-pointer shadow-md transition overflow-hidden text-center rounded
        ${isSelected ? "" : "hover:shadow-lg"}`}
    >
      {/* Image */}
      <div className="relative">
        <img src={image} alt={title} className="h-44 w-full object-cover" />

        {/* Selected Overlay */}
        {isSelected && (
          <div className="absolute inset-0 bg-white/30 flex items-center justify-center">
            <div className="bg-white rounded-full p-3 shadow-md">
              <FaCheck size={36} strokeWidth={4} className="text-[#d87028]" />
            </div>
          </div>
        )}
      </div>

      {/* Content */}

      <div
        className={` 
    ${isSelected ? "bg-[#d87028] text-white" : ""}
  `}
      >
        <div
          className={` p-4 rounded-md transition
    ${isSelected ? "bg-[#d87028] text-white" : ""}
  `}
        >
          <h3
            className={`text-xl mb-4 leading-tight  ${isSelected ? "bg-[#d87028] text-white" : "bg-transparent text-[#d87028]"}`}
          >
            {title}
          </h3>

          {isSuggestion ? (
            <p className="text-[14px] md:text-[16px] mb-6 md:mb-9">
              Not sure which route suits you best? We recommend the most
              suitable option for you. 
            </p>
          ) : (
            <div className="space-y-1">
              <p className="text-[14px] md:text-[16px]">
                <strong>Price:</strong> {price}
              </p>
              <p className="text-[14px] md:text-[16px]">
                <strong>Highlights:</strong> {highlights}
              </p>
              <p className="text-[14px] md:text-[16px]">
                <strong>Acclimatization:</strong> {acclimatization}
              </p>
              <p className="text-[14px] md:text-[16px]">
                <strong>Success Rate:</strong> {successRate}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardOne;
