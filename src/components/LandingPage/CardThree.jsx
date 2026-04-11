import { FaStar } from "react-icons/fa";

const CardThree = ({
  title,
  rating = 5,
  description,
  author,
  date,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 text-center h-full flex flex-col">
      
      {/* Title */}
      <h3 className=" text-base mb-4 leading-tight">
        &quot;{title}&quot;
      </h3>

      {/* Rating */}
      <div className="flex justify-center gap-1 mb-4">
        {[...Array(rating)].map((_, index) => (
          <FaStar key={index} className="text-orange-400 text-sm" />
        ))}
      </div>

      {/* Description */}
      <p className="text-[15px] text-[#555] leading-relaxed mb-6 flex-grow">
        &quot;{description}&quot;
      </p>

      {/* Author */}
      <div className="text-sm text-[#555] mt-auto">
        – {author} <span className="block mt-1">{date}</span>
      </div>
    </div>
  );
};

export default CardThree;
