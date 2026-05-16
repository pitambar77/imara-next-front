// responsive

import React from "react";

const OverviewSections = ({
  label,
  title,
  paragraphs,
  image,
  imagePosition = "right",
  bg = "#fcfcfc",
}) => {
  return (
    <section
      id="overview"
      style={{ backgroundColor: bg }}
      className=" py-8 md:py-16"
    >
      <div
        className={`
          grid grid-cols-1 lg:grid-cols-[62%_38%] 
          ${imagePosition === "left" ? "lg:grid-cols-[38%_62%]" : ""}
          gap-10 lg:gap-0
          max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0
        `}
      >
        {/* TEXT COLUMN */}
        <div
          className={`
            text-[#222] leading-relaxed
            ${imagePosition === "left" ? "order-2 lg:order-1" : ""}
          `}
        >
          {label && (
            <p className="uppercase text-sm font-semibold tracking-wider text-[#7a7a7a] mb-4">
              {label}
            </p>
          )}

          <h3 className="text-[20px] md:text-[30px] lg:text-[36px] leading-snug font-bold text-[#111] mb-6 md:mb-8">
            {title}
          </h3>

          {/* Responsive Text Columns */}

  <div
            className="
              text-[15px] md:text-[16px] text-[#333] space-y-4 leading-[1.8]
              md:[column-count:2] md:[column-gap:3rem]
            "
          >
            <div
              className="rich-text text-[#444]"
              dangerouslySetInnerHTML={{
                __html: paragraphs|| "",
              }}
            />
          </div>
        </div>

        {/* IMAGE COLUMN */}
        <div
          className={`flex justify-center lg:justify-end ${
            imagePosition === "left" ? "order-1 lg:order-2" : ""
          }`}
        >
          <img
            src={image}
            alt={title}
            className="
              rounded-md w-full max-w-[420px]
              h-auto md:h-[420px] lg:h-[560px]
              object-cover shadow-sm
            "
          />
        </div>
      </div>

      <style>
        {`
     .overview-description,
    .overview-description p,
    .overview-description span,
    .overview-description li,
    .overview-description a,
    .overview-description strong,
    .overview-description em {
      font-family: "Soleil", sans-serif !important;
      color: #444 !important;
      line-height: 1.8
    }

    .overview-description a {
      color: #d87029 !important;
      text-decoration: underline;
      font-weight: 500;
    }

    .overview-description a:hover {
      opacity: 0.8;
    }

    .overview-description p {
      margin-bottom: 1rem;
      break-inside: avoid;
      font-size: 15px;
    }

    .overview-description strong {
      font-weight: 700;
      color: #111 !important;
    }

    .overview-description mark {
      background: #fef08a;
      padding: 0 4px;
    }
  `}
      </style>
    </section>
  );
};

export default OverviewSections;
