"use client";

import { useRef, useState } from "react";

const testimonials = [
  {
    name: "Arpit G",
    image: "/arpit.jpg",
    text: "We recently completed an incredible 15-day journey through Tanzania with imara kileleni, exploring all the major national parks on safari before heading to Zanzibar.",
  },
  {
    name: "Lilyy",
    image: "/lilyy.jpg",
    text: "Had an incredible Safari with Imara, It was my first time in Tanzania and I didn'know what to expect and I’m honestly still in awe..I visited serengeti....",
  },
  {
    name: "Gabriel P",
    image: "/gabriel-p.jpg",
    text: "This was the first time that we went to Tarangire National Park, but it very certainly might not be the last. Completely entrancing scenery. I can only recommend..",
  },
  {
    name: "Sven N",
    image: "/sven-n.jpg",
    text: "Climbing Kilimanjaro was an astonishing experience that we will hardly ever forget. It was certainly not the easiest, but with great effort comes great memories.",
  },
  {
    name: "Keegan H",
    image: "/keegan-h.jpg",
    text: "If you have never seen the great wildebeest migration I would suggest it genuinely. Such an atmosphere is difficult to find anywhere else.",
  },
];

export default function Testimonials() {
  const sliderRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);

  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // =========================
  // MOUSE DOWN
  // =========================
  const handleMouseDown = (event) => {
    if (!sliderRef.current) return;

    isDown.current = true;
    setIsDragging(true);

    startX.current =
      event.pageX - sliderRef.current.getBoundingClientRect().left;

    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  // =========================
  // MOUSE MOVE
  // =========================
  const handleMouseMove = (event) => {
    if (!isDown.current || !sliderRef.current) return;

    event.preventDefault();

    const x = event.pageX - sliderRef.current.getBoundingClientRect().left;

    const distance = x - startX.current;

    // Drag speed
    sliderRef.current.scrollLeft = scrollLeft.current - distance * 1.5;
  };

  // =========================
  // MOUSE UP
  // =========================
  const handleMouseUp = () => {
    isDown.current = false;
    setIsDragging(false);
  };

  // =========================
  // MOUSE LEAVE
  // =========================
  const handleMouseLeave = () => {
    isDown.current = false;
    setIsDragging(false);
  };

  return (
    <section className="w-full bg-white py-[55px] sm:py-[70px] md:py-[90px]">
      <div className="mx-auto w-full max-w-[1300px] px-[25px] sm:px-[40px] md:px-[60px]">
        {/* =========================
            HEADING
        ========================== */}
        <h2
          className="
            !font-cormorant
            m-0
            text-center
            text-[28px]
            text-[#29283b]
            sm:text-[36px]
            md:text-5xl
          "
        >
          What Our Travellers Say
        </h2>

        {/* =========================
            FEEFO / RATING
        ========================== */}
        <div
          className="
            mx-auto
            mt-[45px]
            flex
            max-w-[920px]
            items-center
            justify-between
            sm:mt-[55px]
            md:mt-[65px]
          "
        >
          <div>
            <img
              src="/trip.webp"
              alt="Tripadvisor"
              className="h-[65px] w-auto object-contain"
            />
          </div>

          {/* Rating */}
          <div
            className="
              flex
              items-center
              rounded-full
              bg-[#f3f3f3]
              px-[18px]
              py-[9px]
              sm:px-[22px]
              sm:py-[11px]
              md:px-[28px]
              md:py-[13px]
            "
          >
            <span
              className="
                !font-avenir
                text-[12px]
                font-medium
                text-[#29283b]
                sm:text-[15px]
                md:text-[18px]
              "
            >
              4.8
            </span>

            <span
              className="
                !font-avenir
                ml-[2px]
                text-[9px]
                text-[#999]
                sm:text-[11px]
                md:text-[14px]
              "
            >
              /5
            </span>

            <span
              className="
                ml-[10px]
                whitespace-nowrap
                text-[16px]
                tracking-[2px]
                text-[#f2b719]
                sm:ml-[12px]
                sm:text-[19px]
                md:ml-[15px]
                md:text-[23px]
              "
            >
              ★★★★★
            </span>
          </div>
        </div>

        {/* =========================
            TESTIMONIAL SLIDER
        ========================== */}
        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className={`
            mt-[55px]
            flex
            w-full
            min-w-0
            gap-[20px]
            overflow-x-auto
            overflow-y-hidden
            pt-5
            px-[5px]
            pb-[15px]
            select-none
            touch-pan-x

            sm:mt-[65px]
            sm:gap-[25px]

            md:mt-[75px]
            md:gap-[30px]

            [&::-webkit-scrollbar]:hidden
            [-ms-overflow-style:none]
            [scrollbar-width:none]

            ${isDragging ? "cursor-grabbing" : "cursor-grab"}
          `}
        >
          {testimonials.map((item, index) => (
            <article
              key={`${item.name}-${index}`}
              className="
                flex-none
                shrink-0
                w-[calc(100%-10px)]
                rounded-t-[50px]
                bg-white
                px-[25px]
                pb-[55px]
                pt-[35px]
                text-center
                shadow-[0_-2px_20px_rgba(0,0,0,0.10)]
                sm:w-[calc(50%-13px)]
                sm:px-[30px]
                sm:pb-[60px]
                sm:pt-[40px]

                md:w-[calc(33.333%-20px)]
                md:px-[38px]
                md:pb-[65px]
                md:pt-[42px]
              "
            >
              {/* =========================
                  TRAVELLER IMAGE
              ========================== */}
              <div className="flex justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  draggable="false"
                  className="
                    pointer-events-none
                    h-[105px]
                    w-[105px]
                    rounded-full
                    border-[8px]
                    border-[#eef0ef]
                    object-cover

                    sm:h-[115px]
                    sm:w-[115px]

                    md:h-[125px]
                    md:w-[125px]
                  "
                />
              </div>

              {/* =========================
                  NAME
              ========================== */}
              <h3
                className="
                  !font-avenir
                  m-0
                  mt-[25px]
                  text-[20px]
                  font-bold
                  leading-tight
                  text-[#29283b]

                  sm:text-[22px]

                  md:text-[25px]
                "
              >
                {item.name}
              </h3>

              {/* =========================
                  TRAVELLER
              ========================== */}
              <p
                className="
                  !font-avenir
                  m-0
                  mt-[8px]
                  text-[14px]
                  text-[#a4a4a4]

                  sm:text-[15px]

                  md:text-[17px]
                "
              >
                Traveller
              </p>

              {/* =========================
                  QUOTE
              ========================== */}
              <div
                className="
                  !font-cormorant
                  mt-[25px]
                  text-left
                  text-[55px]
                  leading-[0.5]
                  text-[#d9d9d9]

                  md:text-[60px]
                "
              >
                “
              </div>

              {/* =========================
                  REVIEW
              ========================== */}
              <p
                className="
                  !font-avenir
                  m-0
                  px-[5px]
                  text-center
                  text-[13px]
                  leading-[1.65]
                  text-[#818087]

                  sm:text-[14px]

                  md:text-[16px]
                  md:leading-[1.6]
                "
              >
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
