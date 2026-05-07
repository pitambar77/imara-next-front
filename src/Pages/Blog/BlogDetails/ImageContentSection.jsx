const { default: Image } = require("next/image");

const ImageContentSection = ({ title = "Heading", sections }) => {
  if (!sections?.length) return null;

  return (
    <section className="text-[#111] py-10 max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0">
      {title && (
        <h2 className="text-left capitalize text-2xl md:text-[36px] mb-12">
          {title}
        </h2>
      )}

      {sections.map((item, index) => {
        const isRight = item.layout === "right";

        return (
          <div key={index} className="mb-6 md:mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 items-center">
              
              {/* IMAGE */}
              <div
                className={`shadow-sm rounded-md ${
                  isRight ? "md:order-2" : "md:order-1"
                }`}
              >
                <div className="relative w-full h-[300px] md:h-[380px]">
                  <Image
                    src={item.image?.url || item.image}
                    alt={item.heading || "Adventure"}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </div>

              {/* TEXT */}
              <div
                className={` leading-relaxed ${
                  isRight ? "md:order-1" : "md:order-2"
                }`}
              >
                <h3 className="text-2xl md:text-3xl text-[#1a1a1a] leading-snug capitalize mb-3">
                  {item.heading}
                </h3>

                <h4 className="text-[16px] md:text-[22px] font-semibold text-[#1a1a1a] mb-3">
                  {item.subheading}
                </h4>

                <p className="text-[#444] text-[15px] md:text-[16px] leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ImageContentSection;