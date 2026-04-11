import Image from "next/image";

const AdventureTour = ({ title, sections }) => {
  return (
    <section
      id="adventure"
      className="text-[#1a1a1a] py-8 md:py-16 max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0"
    >
      {title && title.trim() !== "" && (
        <h2 className="text-center capitalize text-2xl md:text-[36px] mb-12 md:mb-16">
          {title}
        </h2>
      )}

      {sections.map((item, index) => (
        <div key={index} className="mb-2 md:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 items-center">
            {/* IMAGE BLOCK */}
            <div
              className={`shadow-sm rounded-md ${
                index % 2 !== 0 ? "md:order-2" : "md:order-1"
              }`}
            >
              <div className="relative w-full h-[300px] md:h-[420px]">
                <Image
                  src={item.image}
                  alt={item.heading || "Adventure"}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            </div>

            {/* TEXT BLOCK */}
            <div
              className={`space-y-4 md:space-y-6 leading-relaxed ${
                index % 2 !== 0 ? "md:order-1" : "md:order-2"
              }`}
            >
              <h2 className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug mb-4 md:mb-6 capitalize">
                {item.heading}
              </h2>

              <h3 className="text-[17px] md:text-[18px] text-[#1a1a1a] leading-snug mb-3">
                {item.subheading}
              </h3>

              <p className="text-[#444] text-[15px] md:text-[16px] mb-4 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AdventureTour;