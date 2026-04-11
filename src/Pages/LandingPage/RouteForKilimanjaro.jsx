

import { forwardRef, useState, useEffect } from "react";
import CardOne from "../../components/LandingPage/CardOne";

import northcircuit from "../../assets/images/kilimanjaro-route/northern-circuit-route.webp";
import lemosho from "../../assets/images/kilimanjaro-route/lemosho-route.webp";
import Umbwe from "../../assets/images/kilimanjaro-route/umbwe-route.webp";
import Rongai from "../../assets/images/kilimanjaro-route/rongai-route.webp";
import Machame from "../../assets/images/kilimanjaro-route/machame-route.webp";
import Marangu from "../../assets/images/kilimanjaro-route/marangu-route.webp";
import NotDecided from "../../assets/images/kilimanjaro-route/not-decided-yet.webp";

const routesData = [
  {
    image: northcircuit,
    title: "Northern Circuit (9 Days)",
    price: "On Request",
    highlights: "Longest, quietest, scenic",
    acclimatization: "Very Good",
    successRate: "95–98%",
  },
  {
    image: lemosho,
    title: "Lemosho (8 Days)",
    price: "On Request",
    highlights: "Scenic, gradual, quieter",
    acclimatization: "Good",
    successRate: "90–96%",
  },
  {
    image: Umbwe,
    title: "Umbwe  (7 Days)",
    price: "On Request",
    highlights: "Steep, direct, challenging",
    acclimatization: "Poor",
    successRate: "70–80%",
  },
  {
    image: Rongai,
    title: "Rongai  (8 Days)",
    price: "On Request",
    highlights: "Quiet, dry, steady",
    acclimatization: "Good",
    successRate: "86–93%",
  },
  {
    image: Machame,
    title: "Machame  (7 Days)",
    price: "On Request",
    highlights: "Popular, scenic, varied",
    acclimatization: "Good",
    successRate: "88–95%",
  },
  {
    image: Marangu,
    title: "Marangu (6 Days)",
    price: "On Request",
    highlights: "Short, hut-based, direct",
    acclimatization: "Poor",
    successRate: "80–85%",
  },
  {
    image: NotDecided,
    title: "Not Decided Yet",
    isSuggestion: true,
  },
];


const RouteForKilimanjaro = forwardRef(
  ({ onChange, scrollToPlanningDays }, ref) => {
    const [selectedRoute, setSelectedRoute] = useState(null);

    const handleRouteClick = (routeTitle) => {
      setSelectedRoute(routeTitle);
      onChange?.(routeTitle);          // ✅ call here ONLY
      scrollToPlanningDays?.();
    };

    return (
   
      <section
        ref={ref}
        className="py-8 md:py-12 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 mx-auto"
      >
        {/* Heading */}
        <div className="mb-10 sm:mb-14 text-center sm:text-left">
          <h2 className="text-2xl md:text-[32px] lg:text-[36px] font-bold text-[#1a1a1a] mb-4 capitalize">
            1. Which Kilimanjaro Route Fits You?
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#555]">
            Select the route that matches your pace, comfort, and time
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {routesData.map((route, index) => (
            <CardOne
              key={route.title}
              {...route}
              isSelected={selectedRoute === route.title}
              onClick={() => handleRouteClick(route.title)}
            />
          ))}
        </div>
      </section>
    );
  }
);


export default RouteForKilimanjaro;

