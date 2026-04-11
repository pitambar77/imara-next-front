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

  return (
    <section  className="bg-[#fafafa] py-8 md:py-16 max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0 text-center">
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
        <div className="fixed inset-0 bg-black/80 z-50 flex flex-col p-6 justify-center items-center">
          {/* MODAL */}
          <div
            className="
        relative bg-[#fee3cc] rounded-lg
        w-full max-w-6xl
        p-4 md:p-6
        flex flex-col md:flex-row
        max-h-[90vh] md:max-h-none
        overflow-hidden
      "
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={closeModal}
              className="
          absolute top-3 right-3
          text-gray-700 hover:text-[#d97129]
          md:bg-transparent
          bg-white p-2 rounded-full cursor-pointer shadow md:shadow-none
          z-20
        "
            >
              <FaTimes size={20} />
            </button>

            {/* IMAGE */}
            <div className="flex justify-center items-center bg-black md:bg-transparent p-0 md:p-4">
              <img
                src={moments[activeIndex].image}
                alt={moments[activeIndex].title}
                className="
            w-full
            h-[400px]
            md:h-[480px]
            md:w-[420px]
            object-cover rounded
          "
              />
            </div>

            {/* TEXT */}
            <div className="flex-1 p-4 md:p-6 text-left overflow-y-auto">
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">
                {moments[activeIndex].title}
              </h3>
              <p className="text-sm md:text-[15px] text-[#444] leading-relaxed">
                {moments[activeIndex].caption}
              </p>
            </div>
          </div>
          {/* THUMBNAILS */}
          <div
            className="
        hidden md:flex
    absolute bottom-4 md:static
    gap-3
    mt-2 md:mt-6
    px-3 md:px-6
    overflow-x-auto
      "
          >
            {moments.map((m, i) => (
              <img
                key={m.id}
                src={m.image}
                onClick={() => setActiveIndex(i)}
                className={`
            w-16 h-16 md:w-20 md:h-20 
            object-cover rounded cursor-pointer
            transition
            ${
              i === activeIndex
                ? "ring-2 ring-[#d87028]"
                : "opacity-70 hover:opacity-100"
            }
          `}
              />
            ))}
          </div>

          {/* DESKTOP NAV BUTTONS (UNCHANGED) */}
          <button
            onClick={prevImage}
            className="
        hidden md:block
        absolute left-20 top-1/2 hover:text-[#d97129]
        bg-white p-2 cursor-pointer rounded-full
      "
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={nextImage}
            className="
        hidden md:block
        absolute right-20 top-1/2 hover:text-[#d97129]
        bg-white p-2 cursor-pointer rounded-full
      "
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </section>
  );
};

export default TripMomentsSection;
