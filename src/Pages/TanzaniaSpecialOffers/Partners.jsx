// import atta from "../../assets/atta.webp";
// import safaribooking from "../../assets/safaribooking.webp";
// import Tato from "../../assets/Tato.webp";
// import trip from "../../assets/trip.webp";
// import kpap from "../../assets/kpap.webp";

// const partners = [
//   { id: 1, name: "ATTA", img: atta, link: "" },
//   { id: 2, name: "SafariBookings", img: safaribooking, link: "" },
//   { id: 3, name: "TATO", img: Tato, link: "" },
//   {
//     id: 4,
//     name: "Tripadvisor",
//     img: trip,
//     link: "https://www.tripadvisor.com/Attraction_Review-g317084-d34222480-Reviews-Imara_Kileleni_Safaris-Moshi_Kilimanjaro_Region.html",
//   },
//   { id: 5, name: "KPAP", img: kpap, link: "" },
// ];

// export default function Partners() {
//   return (
//     <section className="w-full bg-[#f7f7f7] py-[35px] sm:py-[45px] md:py-[50px]">
//       <div className="mx-auto w-full max-w-[1140px] px-[30px] text-center sm:px-[40px] lg:px-0">
//         {/* Heading */}
//         <h2
//           className="
//              !font-cormorant m-0 mb-4 text-3xl text-[#29283b] md:text-4xl lg:text-5xl "
//         >
//           Our Partners
//         </h2>

//         {/* Description */}
//         <p
//           className="
//             !font-avenir
//             mx-auto
//             mt-[8px]
//             max-w-[650px]
//             text-[14px]
//             leading-[1.5]
//             text-[#c0a463]

//             sm:mt-[10px]
//             sm:text-[14px]

//             md:mt-[12px]
//             md:text-[17px]
//           "
//         >
//           Everything is about relationships. Fortunately, we've built great ones
//           working with the top names in Africa for more than 20 years.
//         </p>

//         {/* Partners */}
//         <div
//           className="
//             mt-[22px]
//             flex
//             flex-wrap
//             items-center
//             justify-center
//             gap-x-[25px]
//             gap-y-[12px]

//             sm:mt-[28px]
//             sm:gap-x-[40px]
//             sm:gap-y-[15px]

//             md:mt-[32px]
//             md:gap-x-[55px]
//           "
//         >
//           {partners.map((partner) => (
//             <span
//               key={partner}
//               className="
//                 !font-avenir
//                 text-[9px]
//                 font-light
//                 tracking-wide
//                 text-[#aaa9ad]

//                 sm:text-[12px]

//                 md:text-[15px]
//               "
//             >
//               {partner}
//             </span>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

const partners = [
  {
    id: 1,
    name: "ATTA",
    img: "/atta.webp",
    link: "",
  },
  {
    id: 2,
    name: "SafariBookings",
    img: "/safaribooking.webp",
    link: "",
  },
  {
    id: 3,
    name: "TATO",
    img: "/Tato.webp",
    link: "",
  },
  {
    id: 4,
    name: "Tripadvisor",
    img: "/trip.webp",
    link: "https://www.tripadvisor.com/Attraction_Review-g317084-d34222480-Reviews-Imara_Kileleni_Safaris-Moshi_Kilimanjaro_Region.html",
  },
  {
    id: 5,
    name: "KPAP",
    img: "/kpap.webp",
    link: "",
  },
];

export default function Partners() {
  return (
    <section className="w-full bg-[#f7f7f7] py-[35px] sm:py-[45px] md:py-[50px]">
      <div className="mx-auto w-full max-w-[1140px] px-[30px] text-center sm:px-[40px] lg:px-0">
        {/* Heading */}
        <h2
          className="
            !font-cormorant
            m-0
            mb-4
            text-3xl
            text-[#29283b]
            md:text-4xl
            lg:text-5xl
          "
        >
          Our Trusted Partners
        </h2>

        {/* Description */}
        <p
          className="
            !font-avenir
            mx-auto
            mt-[8px]
            max-w-[650px]
            text-[14px]
            leading-[1.5]
            text-[#d87028]

            sm:mt-[10px]
            sm:text-[14px]

            md:mt-[12px]
            md:text-[17px]
          "
        >
          Great journeys are built through strong collaboration. We work closely
          with carefully selected lodges, camps, guides, and travel partners
          across Africa to deliver reliable service and memorable travel
          experiences.
        </p>

        {/* Partners */}
        <div
          className="
            mt-[22px]
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-[25px]
            gap-y-[20px]

            sm:mt-[28px]
            sm:gap-x-[40px]
            sm:gap-y-[25px]

            md:mt-[32px]
            md:gap-x-[55px]
            md:gap-y-[30px]
          "
        >
          {partners.map((partner) =>
            partner.link ? (
              <a
                key={partner.id}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${partner.name}`}
                className="flex items-center justify-center"
              >
                <img
                  src={partner.img}
                  alt={partner.name}
                  className="
                    h-[45px]
                    w-auto
                    max-w-[110px]
                    object-contain
                    transition-transform
                    duration-300
                    hover:scale-105

                    sm:h-[55px]
                    sm:max-w-[140px]

                    md:h-[65px]
                    md:max-w-[170px]
                  "
                />
              </a>
            ) : (
              <div
                key={partner.id}
                className="flex items-center justify-center"
              >
                <img
                  src={partner.img}
                  alt={partner.name}
                  className="
                    h-[45px]
                    w-auto
                    max-w-[110px]
                    object-contain
                    transition-transform
                    duration-300
                    hover:scale-105

                    sm:h-[55px]
                    sm:max-w-[140px]

                    md:h-[65px]
                    md:max-w-[170px]
                  "
                />
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
