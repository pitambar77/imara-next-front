// import React from "react";

// const OverviewSections = ({
//   label,
//   title,
//   paragraphs,
//   image,
//   imagePosition = "right", // "left" or "right"
//   bg = "#fcfcfc",
// }) => {
//   return (
//     <section id="overview" style={{ backgroundColor: bg }} className="py-16">
//       <div
//         className={`grid grid-cols-1 lg:grid-cols-[62%_38%] px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 mx-auto ${
//           imagePosition === "left" ? "lg:grid-cols-[38%_62%]" : ""
//         }
//         }`}
//       >
//         {/* TEXT COLUMN */}
//         <div
//           className={`text-[#222] leading-relaxed ${
//             imagePosition === "left" ? "order-2 lg:order-1" : ""
//           }`}
//         >
//           {label && (
//             <p className="uppercase text-sm font-semibold tracking-wider text-[#7a7a7a] mb-4">
//               {label}
//             </p>
//           )}

//           <h3 className="text-[30px] md:text-[36px] leading-snug font-bold text-[#111] mb-8">
//             {title}
//           </h3>

//           <div className="text-[16px] text-[#333] space-y-4 leading-[1.8] [column-count:2] [column-gap:3rem]">
//             {paragraphs.map((text, index) => (
//               <p
//                 key={index}
//                 className={text.italic ? "italic text-[#444]" : ""}
//               >
//                 {text.content}
//               </p>
//             ))}
//           </div>
//         </div>

//         {/* IMAGE COLUMN */}
//         <div
//           className={`flex justify-end  ${
//             imagePosition === "left" ? "order-1 lg:order-2" : ""
//           }`}
//         >
//           <img
//             src={image}
//             alt={title}
//             className="rounded-md w-full max-w-[420px] h-[520px] object-cover shadow-sm"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OverviewSections;


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
    <section id="overview" style={{ backgroundColor: bg }} className=" py-8 md:py-16">
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
              text-[15px] text-[#444] space-y-4 leading-[1.8]
              md:[column-count:2] md:[column-gap:3rem]
            "
          >
            {paragraphs.map((text, index) => (
              <p key={index} className={text.italic ? "italic text-[#444]" : ""}>
                {text.content}
              </p>
            ))}
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
    </section>
  );
};

export default OverviewSections;
