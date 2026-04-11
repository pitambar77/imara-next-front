// import CardTwo from "../../components/LandingPage/CardTwo";
// import solo from '../../assets/images/people-climbing/solo.webp'
// import duo from '../../assets/images/people-climbing/duo.webp'
// import trio from '../../assets/images/people-climbing/3-people.webp'
// import squard from '../../assets/images/people-climbing/4-people.webp'



// const routesData = [
//   {
//     image: solo,
//     title: "SOLO"
//   },
//   {
//     image: duo,
//     title: "DUO"
//   },
//   {
//     image:trio,
//     title: "3 PEOPLE"
//   },
//   {
//     image:squard,
//     title: "4+ PEOPLE"
//   }
// ];

// const PeopleClimbing = () => {
//   return (
//     <section className="py-8 md:py-10 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 mx-auto">
//       <div className="">
//         {/* Heading */}
//         <div className="mb-10 sm:mb-14 text-center sm:text-left">
//           <h2 className="text-2xl md:text-[32px] lg:text-[36px] font-bold text-[#1a1a1a] mb-4 capitalize">
//             2. How many people are climbing?
//           </h2>

//           <p className="text-[16px] md:text-[18px] text-[#555] mb-6 md:mb-10">
//             Select the number of climbers in your group so we can plan support, pacing, and logistics properly.
//           </p>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
//           {routesData.map((route, index) => (
//             <CardTwo key={index} {...route} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PeopleClimbing;

import { useState, forwardRef } from "react";
import CardTwo from "../../components/LandingPage/CardTwo";

import solo from "../../assets/images/people-climbing/solo.webp";
import duo from "../../assets/images/people-climbing/duo.webp";
import trio from "../../assets/images/people-climbing/3-people.webp";
import squard from "../../assets/images/people-climbing/4-people.webp";

const routesData = [
  { image: solo, title: "SOLO" },
  { image: duo, title: "DUO" },
  { image: trio, title: "3 PEOPLE" },
  { image: squard, title: "4+ PEOPLE" },
];

const PeopleClimbing = forwardRef(
  ({ onChange, scrollToPlanningDays }, ref) => {
    const [selectedPeople, setSelectedPeople] = useState(null);

    const handleSelect = (route) => {
      setSelectedPeople(route.title);   // UI state
      onChange?.(route.title);          // send to parent
      scrollToPlanningDays?.();         // keep behavior
    };

    const isSelected = (title) => selectedPeople === title;

    return (
      <section
        ref={ref}
        className="py-8 md:py-10 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 mx-auto"
      >
        {/* Heading */}
        <div className="mb-10 sm:mb-14 text-center sm:text-left">
          <h2 className="text-2xl md:text-[32px] lg:text-[36px] font-bold text-[#1a1a1a] mb-4 capitalize">
            2. How many people are climbing?
          </h2>

          <p className="text-[16px] md:text-[18px] text-[#555] mb-6 md:mb-10">
            Select the number of climbers in your group so we can plan support,
            pacing, and logistics properly.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {routesData.map((route, index) => (
            <CardTwo
              key={index}
              {...route}
              isSelected={isSelected(route.title)}
              onClick={() => handleSelect(route)}
            />
          ))}
        </div>
      </section>
    );
  }
);

export default PeopleClimbing;

