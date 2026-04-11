// const CardTwo = ({ image, title }) => {
//     return (
//         <div className="bg-white shadow-md hover:shadow-lg transition overflow-hidden text-center rounded">
//             {/* Image */}
//             <img
//                 src={image}
//                 alt={title}
//                 className="h-44 w-full object-cover"
//             />

//             {/* Content */}
//             <div className="p-4">
//                 <h3 className="text-xl mb-4 leading-tight text-[#d87028]">{title}</h3>
//             </div>
//         </div>
//     );
// };

// export default CardTwo;

import { FaCheck } from "react-icons/fa";

const CardTwo = ({
  image,
  title,
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
        <img
          src={image}
          alt={title}
          className="h-44 w-full object-cover"
        />

        {/* Selected Overlay */}
        {isSelected && (
          <div className="absolute inset-0 bg-white/30 flex items-center justify-center">
            <div className="bg-white rounded-full p-3 shadow-md">
              <FaCheck
                size={36}
                strokeWidth={4}
                className="text-[#d87028]"
              />
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className={` ${isSelected ? "bg-[#d87028] text-white" : "bg-transparent "}`}>

      
      <div className="p-4">
        <h3 className={`text-xl mb-4 leading-tight  ${isSelected ? "bg-[#d87028] text-white" : "bg-transparent text-[#d87028]"}`}>
          {title}
        </h3>
      </div>
      </div>
    </div>
  );
};

export default CardTwo;

