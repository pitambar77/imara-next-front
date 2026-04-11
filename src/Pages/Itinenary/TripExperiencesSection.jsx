import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
  FaTree,
  FaGlobe,
  FaPaw,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";

const experiencesData = {
  Local: [
    {
      id: 1,
      image:
        "https://jenmansafaris.com/wp-content/uploads/2024/03/Mto-wa-Mbu-Village.jpg",
      type: "INCLUDED EXPERIENCE",
      title: "Explore Mto Wa Mbu Market",
      location: "Mto Wa Mbu, Tanzania",
    },
    {
      id: 2,
      image:
        "https://www.elewanacollection.com/images/spc/Serengeti-Pioneer-Camp---activities---private-dinner-overlooking-the-savannah.jpg",
      type: "INCLUDED EXPERIENCE",
      title: "Stay at Kon tiki Serengeti Camp",
      location: "Serengeti, Tanzania",
    },
    {
      id: 3,
      image:
        "https://www.shadowsofafrica.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/u/g/ugali-and-fish_.jpg",
      type: "INCLUDED EXPERIENCE",
      title: "Taste traditional Tanzanian dishes",
      location: "Arusha, Tanzania",
    },
    {
      id: 4,
      image:
        "https://jenmansafaris.com/wp-content/uploads/2024/03/Mto-wa-Mbu-Village.jpg",

      type: "INCLUDED EXPERIENCE",
      title: "Explore Mto Wa Mbu Market",
      location: "Mto Wa Mbu, Tanzania",
    },
    {
      id: 5,
      image:
        "https://www.elewanacollection.com/images/spc/Serengeti-Pioneer-Camp---activities---private-dinner-overlooking-the-savannah.jpg",

      type: "INCLUDED EXPERIENCE",
      title: "Stay at Kon tiki Serengeti Camp",
      location: "Serengeti, Tanzania",
    },
    {
      id: 6,
      image:
        "https://www.shadowsofafrica.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/u/g/ugali-and-fish_.jpg",

      title: "Taste traditional Tanzanian dishes",
      location: "Arusha, Tanzania",
    },
  ],
  Nature: [
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1572437679981-89b44c81d8da?auto=format&fit=crop&w=900&q=80",
      type: "INCLUDED EXPERIENCE",
      title: "Take a morning Game Drive in the Serengeti",
      location: "Serengeti, Tanzania",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1520872029868-0d97c9eae4ac?auto=format&fit=crop&w=900&q=80",
      type: "INCLUDED EXPERIENCE",
      title: "Evening Wildlife Experience",
      location: "Ngorongoro, Tanzania",
    },
  ],
  Safari: [
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1604975701268-8c0f8d197fd3?auto=format&fit=crop&w=900&q=80",
      type: "INCLUDED EXPERIENCE",
      title: "Take an afternoon Game Drive in the Serengeti",
      location: "Serengeti, Tanzania",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=900&q=80",
      type: "INCLUDED EXPERIENCE",
      title: "Explore Tarangire National Park",
      location: "Tarangire, Tanzania",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=900&q=80",
      type: "INCLUDED EXPERIENCE",
      title: "Take a sunrise drive through Serengeti plains",
      location: "Serengeti, Tanzania",
    },
  ],
};

const TripExperiencesSection = () => {
  const [activeTab, setActiveTab] = useState("Local");
  const swiperPrevRef = useRef(null);
  const swiperNextRef = useRef(null);

  const tabs = [
    { name: "Local", icon: <FaGlobe /> },
    { name: "Nature", icon: <FaTree /> },
    { name: "Safari", icon: <FaPaw /> },
  ];

  return (
    <section className="bg-[#fafafa] py-16 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 text-center relative">
      {/* Section Title */}
      <h2 className="text-[28px] md:text-[32px] font-extrabold text-[#111] mb-8">
        Trip Experiences
      </h2>

      {/* Tabs */}
      <div className="flex justify-center mb-10 gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={` gap-2 px-6 py-2 rounded-md font-semibold shadow-sm transition-all ${
              activeTab === tab.name
                ? "bg-[#fde6d5] text-[#d87028] "
                : "bg-white text-[#222] border-gray-200 hover:bg-gray-100"
            }`}
          >
            <div className=" flex flex-col items-center ">
              <div className=" mb-2">{tab.icon}
                </div>
              {tab.name} ({experiencesData[tab.name].length})
            </div>
          </button>
        ))}
      </div>

      {/* Slider Container */}
      <div className="relative max-w-7xl mx-auto">
        {/* Navigation Arrows */}
        <button
          ref={swiperPrevRef}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 text-gray-800 rounded-full p-3 shadow-md hover:bg-gray-100"
        >
          <FaChevronLeft />
        </button>
        <button
          ref={swiperNextRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 text-gray-800 rounded-full p-3 shadow-md hover:bg-gray-100"
        >
          <FaChevronRight />
        </button>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 4.5 },
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = swiperPrevRef.current;
            swiper.params.navigation.nextEl = swiperNextRef.current;
          }}
          navigation={{
            prevEl: swiperPrevRef.current,
            nextEl: swiperNextRef.current,
          }}
          className="px-8"
        >
          {experiencesData[activeTab].map((exp) => (
            <SwiperSlide key={exp.id}>
              <div className="bg-white rounded-md shadow-sm hover:shadow-lg transition duration-300 text-left overflow-hidden h-[340px] mb-4">
                {/* Image */}
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-48 object-cover"
                />

                {/* Content */}
                <div className="p-4">
                  <p className="text-xs font-semibold text-gray-500 mb-2">
                    {exp.type}
                  </p>
                  <h3 className="text-xl font-bold text-[#111] mb-3 leading-tight line-clamp-2">
                    {exp.title}
                  </h3>

                  <div className="flex items-center text-gray-600 text-sm">
                    <FaMapMarkerAlt className="mr-2 text-[#d87028]" />
                    {exp.location}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TripExperiencesSection;
