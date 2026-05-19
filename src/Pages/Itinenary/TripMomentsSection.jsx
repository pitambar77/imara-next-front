import React, { useState, useEffect } from "react";
import {
  FaExpand,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const TripMomentsSection = ({ experience = [] }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const { heading, subheading } = experience[0];

  /* ================= BUILD MOMENTS FROM API ================= */
  const moments = experience.flatMap((exp) =>
    exp.section.map((sec, index) => ({
      id: `${exp._id}-${index}`,
      image: sec.image,
      caption: sec.description,
      title: sec.title,
    })),
  );

  if (!moments.length) return null;

  const openModal = (index) => setActiveIndex(index);
  const closeModal = () => setActiveIndex(null);

  const nextImage = () => setActiveIndex((prev) => (prev + 1) % moments.length);

  const prevImage = () =>
    setActiveIndex((prev) => (prev === 0 ? moments.length - 1 : prev - 1));

  /* ESC close */
  useEffect(() => {
    const handleKeyDown = (e) => e.key === "Escape" && closeModal();
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeIndex]);

  return (
    <section className="bg-[#fafafa] py-8 md:py-16 max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0 text-center">
      <h2 className="text-[24px] md:text-3xl font-extrabold mb-1 text-[#111]">
        {heading}
      </h2>
      <p className="text-[16px] text-[#444] mb-8 md:mb-12">{subheading}</p>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {moments.slice(0, 3).map((moment, index) => (
          <div
            key={moment.id}
            onClick={() => openModal(index)}
            className="relative group overflow-hidden rounded-md cursor-pointer"
          >
            <img
              src={moment.image}
              alt="Moment"
              className="w-full h-[500px] object-cover rounded-md group-hover:scale-105 transition"
            />

            <div
              onClick={() => openModal(index)}
              className="absolute top-3 right-3 bg-black/50 rounded-full p-2"
            >
              <FaExpand className="text-white text-[14px]" />
            </div>

            <div className="absolute  bottom-0 w-full bg-gradient-to-t from-black/100 to-transparent text-white px-4 py-3 text-[14px]">
              <p className=" text-lg  pb-4">{moment.title}</p>
            </div>
          </div>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6">
          {/* WRAPPER */}
          <div className="relative w-full max-w-6xl flex flex-col items-center">
            {/* CLOSE BUTTON */}
            <button
              onClick={closeModal}
              className="
        absolute
        top-3
        right-3
        md:top-3
        md:right-3
        z-30
        w-9
        h-9
        
        flex
        items-center
        justify-center
        rounded-full
       
        backdrop-blur-sm
        text-[#d97129]
    hover:text-[#f07822]
        transition-all
        duration-300
        
        cursor-pointer
      "
            >
              <FaTimes size={18} />
            </button>

            {/* MODAL */}
            <div
              className="
        relative
        bg-[#fee3cc]
        rounded-lg
        w-full
        overflow-hidden
        flex
        flex-col
        md:flex-row
        max-h-[90vh]
        shadow-2xl
      "
            >
              {/* IMAGE */}
              <div
                className="
          relative
          w-full
          md:w-[40%]
          flex
          justify-center
          items-center
          bg-black
          
          md:bg-transparent
        "
              >
                <img
                  src={moments[activeIndex].image}
                  alt={moments[activeIndex].title}
                  className="
            w-full
  h-[260px]
  sm:h-[360px]
  md:h-[520px]
  object-contain
  bg-black
  md:rounded-l-lg
          "
                />
              </div>

              {/* TEXT */}
              <div
                className="
          flex-1
          p-5
          sm:p-6
          md:py-12
         
          overflow-y-auto
        "
              >
                <h3 className="text-xl sm:text-2xl mb-3 md:mb-4 text-[#111] leading-snug">
                  {moments[activeIndex].title}
                </h3>

                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.9]">
                  {moments[activeIndex].caption}
                </p>
              </div>
            </div>

            {/* THUMBNAILS */}
            <div
              className="
        hidden md:flex
        gap-3
        mt-6
        px-4
        overflow-x-auto
        scrollbar-hide
      "
            >
              {moments.map((m, i) => (
                <img
                  key={m.id}
                  src={m.image}
                  onClick={() => setActiveIndex(i)}
                  className={`
            w-20
            h-20
            object-cover
            rounded
            cursor-pointer
            transition-all
            duration-300
            flex-shrink-0
            ${
              i === activeIndex
                ? "ring-2 ring-[#d87028] scale-105"
                : "opacity-70 hover:opacity-100"
            }
          `}
                />
              ))}
            </div>

            {/* DESKTOP NAV */}
            <button
              onClick={prevImage}
              className="
        hidden md:flex
        absolute
        left-[-60px]
        top-1/2
        -translate-y-1/2
        bg-white
        hover:text-[#d97129]
        p-3
        rounded-full
        cursor-pointer
        shadow-lg
        transition-all
        duration-300
      "
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={nextImage}
              className="
        hidden md:flex
        absolute
        right-[-60px]
        top-1/2
        -translate-y-1/2
        bg-white
        hover:text-[#d97129]
        p-3
        rounded-full
        cursor-pointer
        shadow-lg
        transition-all
        duration-300
      "
            >
              <FaChevronRight />
            </button>

            {/* MOBILE NAV */}
            <div className="hidden gap-4 mt-5">
              <button
                onClick={prevImage}
                className="
          bg-white
          hover:text-[#d97129]
          p-3
          rounded-full
          shadow-lg
          transition-all
          duration-300
        "
              >
                <FaChevronLeft />
              </button>

              <button
                onClick={nextImage}
                className="
          bg-white
          hover:text-[#d97129]
          p-3
          rounded-full
          shadow-lg
          transition-all
          duration-300
        "
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TripMomentsSection;
