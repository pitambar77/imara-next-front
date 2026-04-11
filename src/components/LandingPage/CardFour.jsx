const CardFour = ({ image, title, subtitle, description }) => {
  return (
    <div className="rounded shadow-md px-6 py-8 transition p-6 text-center h-full flex flex-col items-center bg-[#f9f9f9]">

      {/* Circular Image */}
      <div className="w-38 h-38 rounded-full overflow-hidden mb-5">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <h3 className="text-xl mb-4 leading-tight">
        {title}
      </h3>

      {/* Subtitle */}
      <p className="text-[15px] italic text-gray-700 mb-4">
        {subtitle}
      </p>

      {/* Description */}
      <p className="text-[15px] text-[#555] leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default CardFour;
