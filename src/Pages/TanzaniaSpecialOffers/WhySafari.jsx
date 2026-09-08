// const benefits = [
//   {
//     title: "Witness The Wildebeest Migration",
//     text: "Hardly any other destination on Earth can offer a wildlife encounter to match the annual Wildebeest Migration. Forming the pride and joy of most Tanzania safari itineraries, the Migration is a mind-blowing display of nature at her most extraordinary.",
//   },
//   {
//     title: "Superb, Year-Round Game Viewing",
//     text: "Thanks to a mild climate, wide open spaces and an abundance of wildlife in heavyweight destinations like the Serengeti, Ngorongoro Crater and Tarangire, Tanzania delivers sensational safari experiences any time of the year.",
//   },
//   {
//     title: "Interact With The Masai",
//     text: "The iconic colorful attire and jumping dance of the Maasai have become synonymous with Africa, and it is in Tanzania and neighboring Kenya that these semi-nomadic people can be interacted with.",
//   },
//   {
//     title: "One-Of-A-Kind Experiences",
//     text: "From watching thousands of grunting wildebeest dodge massive crocodiles during the Migration's perilous river crossings to seeing each member of the Big 5, Tanzania offers the kind of experiences found nowhere else on Earth.",
//   },
//   {
//     title: "Exclusive Lodges & Camps",
//     text: "Despite some camps being situated in remote wilderness locations, they still offer superb amenities like private plunge pools, spas and gyms.",
//   },
//   {
//     title: "Quick & Easy Air Transfers",
//     text: "There are dedicated airports that service most of Tanzania's national parks and game reserves. The best Tanzania safaris are fly-in itineraries.",
//   },
// ];

// export default function WhySafari() {
//   return (
//     <section
//       className="
//         relative
//         z-30
//         mx-auto
//         -mt-[180px]
//         w-[calc(100%-120px)]
//         max-w-[1140px]
//         bg-white
//         px-[85px]
//         pb-[95px]
//         pt-[78px]
//       "
//     >
//       {/* ================= HEADING ================= */}
//       <h2
//         className="
//           !font-cormorant text-3xl md:text-4xl lg:text-5xl mb-4 capitalize mb-20
//         "
//       >
//         Why Go on a Tanzania Safari?
//       </h2>

//       {/* ================= BENEFITS ================= */}
//       <div
//         className="
//           grid
//           grid-cols-3
//           gap-x-[65px]
//           gap-y-[82px]
//         "
//       >
//         {benefits.map((item) => (
//           <article key={item.title} className="min-w-0">
//             {/* Icon */}
//             <img src="/check-tik.png" alt="Checkmark" className="w-10 h-10"/>

//             {/* Title */}
//             <h3
//               className="
//                 m-0
//                 mt-[25px]
//                 !font-cormorant
//                 text-[25px]
//                 font-medium
//                 leading-[1.15]
//                 tracking-[-0.01em]
//                 text-[#29283b]
//               "
//             >
//               {item.title}
//             </h3>

//             {/* Description */}
//             <p
//               className="
//                 m-0
//                 mt-[28px]
//                 !font-avenir text-[#444] text-[17px]
//               "
//             >
//               {item.text}
//             </p>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }

const benefits = [
  {
    title: "Wildlife Moments That Feel Unscripted",
    text: "Tanzania delivers the kind of encounters travelers remember for years — lions resting on the plains, elephants moving through baobab country, cheetahs scanning the horizon, and enormous herds gathering across the Serengeti.",
  },
  {
    title: "Remarkable Landscapes in One Journey",
    text: "Few destinations combine so much variety. Travel from the open grasslands of the Serengeti to the Ngorongoro highlands, Tarangire’s ancient baobabs, Kilimanjaro’s slopes, and the tropical coastline of Zanzibar.",
  },
  {
    title: "Different Experiences in Every Region",
    text: "No two parts of Tanzania feel the same. Enjoy classic game drives, walking experiences, cultural visits, crater exploration, mountain adventures, private concessions, or a relaxed island escape after your time in the wilderness.",
  },
  {
    title: "A Destination That Works Across Seasons",
    text: "Tanzania offers rewarding travel throughout the year. Different seasons bring changing wildlife movements, landscapes, temperatures, and experiences, making it possible to plan around what matters most to you.",
  },
  {
    title: "Stays That Become Part of the Experience",
    text: "Accommodation ranges from intimate tented camps in remote wilderness areas to elegant lodges overlooking dramatic landscapes. Many properties are designed to keep you close to nature without compromising comfort.",
  },
  {
    title: "Easy to Combine Safari, Mountain & Beach",
    text: "One trip can include several completely different experiences. Explore wildlife-rich national parks, trek Mount Kilimanjaro, then finish beside the Indian Ocean in Zanzibar — all within one destination.",
  },
];

export default function WhySafari() {
  return (
    <section
      className="
        relative
        z-30
        mx-auto

        /* Desktop */
        -mt-[100px]
        w-[calc(100%-120px)]
        max-w-[1140px]
        bg-white
        px-[85px]
        pb-[95px]
        pt-[78px]

        /* Tablet */
        md:-mt-[180px]
        md:w-[calc(100%-60px)]
        md:px-[50px]
        md:pb-[70px]
        md:pt-[60px]

        /* Mobile */
        max-md:mt-0
        max-md:w-full
        max-md:max-w-none
        max-md:px-0
        max-md:pb-[55px]
        max-md:pt-[50px]
      "
    >
      {/* ================= HEADING ================= */}

      <h2
        className="
          !font-cormorant
          m-0
          mb-[50px]
          px-[25px]
          text-3xl
          font-medium
          leading-tight
          text-[#29283b]

          md:px-0
          md:text-4xl

          lg:mb-20
          lg:text-5xl
        "
      >
        Why Tanzania Is Your Dream Safari Choice
      </h2>

      {/* ================= BENEFITS ================= */}

      <div
        className="
          /* Desktop grid */
          grid
          grid-cols-3
          gap-x-[65px]
          gap-y-[82px]

          /* Mobile horizontal slider */
          max-md:flex
          max-md:gap-[20px]
          max-md:overflow-x-auto
          max-md:px-[25px]
          max-md:pb-[15px]
          max-md:snap-x
          max-md:snap-mandatory
          max-md:scroll-smooth

          /* Hide scrollbar */
          max-md:[scrollbar-width:none]
          max-md:[&::-webkit-scrollbar]:hidden
        "
      >
        {benefits.map((item) => (
          <article
            key={item.title}
            className="
              min-w-0

              /* Mobile card */
              max-md:w-[82vw]
              max-md:min-w-[82vw]
              max-md:shrink-0
              max-md:snap-start
              max-md:bg-[#fafafa]
              max-md:px-[25px]
              max-md:py-[30px]
            "
          >
            {/* Icon */}

            <img
              src="/check-tik.png"
              alt="Checkmark"
              className="
                h-10
                w-10
                object-contain
              "
            />

            {/* Title */}

            <h3
              className="
                m-0
                mt-[25px]
                !font-cormorant
                text-[25px]
                font-medium
                leading-[1.15]
                tracking-[-0.01em]
                text-[#29283b]

                max-md:text-[24px]
              "
            >
              {item.title}
            </h3>

            {/* Description */}

            <p
              className="
                m-0
                mt-[28px]
                !font-avenir
                text-[17px]
                leading-[1.6]
                text-[#444]

                max-md:text-[16px]
                max-md:leading-[1.65]
              "
            >
              {item.text}
            </p>
          </article>
        ))}
      </div>

      {/* ================= MOBILE SLIDE HINT ================= */}

      {/* <div
        className="
          mt-[25px]
          flex
          items-center
          justify-center
          gap-[7px]

          md:hidden
        "
      >
        <span className="h-[4px] w-[25px] rounded-full bg-[#d87028]" />
        <span className="h-[4px] w-[7px] rounded-full bg-[#ddd]" />
        <span className="h-[4px] w-[7px] rounded-full bg-[#ddd]" />
        <span className="h-[4px] w-[7px] rounded-full bg-[#ddd]" />
      </div> */}
    </section>
  );
}
