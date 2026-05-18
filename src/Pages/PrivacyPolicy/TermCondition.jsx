import React from "react";

const TermCondition = ({landing}) => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative w-full h-[40vh] md:h-[64vh] bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `url(${landing?.image})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        <h1 className="text-3xl md:text-5xl text-white uppercase z-10 text-center px-4">
          {landing?.title}
        </h1>
      </div>

      {/* Content */}
      <div className="py-8 sm:py-12 max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0">
        {landing?.overviewinfo?.map((item, index) => (
          <div
            key={index}
            className="rich-text space-y-8 text-[#444]"
            dangerouslySetInnerHTML={{
              __html: item.description,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default TermCondition;
