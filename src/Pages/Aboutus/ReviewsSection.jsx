// "use client";

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";
// import { Star } from "lucide-react";

// const ReviewsSection = () => {
//   const reviews = [
//     {
//       id: 1,

//       name: "Colt B",
//       trip: "Ashburn, Virginia",
//       text: "I could happily go for a trip like this every year. Even going back again to the Serengeti national park is enticing to us, but we should probably try some of the other options for next year. Huge props to them for providing us more than we expected from a safari tour.",
//       img: "/colt-b.jpg",
//     },
//     {
//       id: 2,
//       name: "Braylee F",
//       trip: "Vancouver, Canada",
//       text: "The safari literally couldn't have been much better. My partner and I just recently got engaged and we wanted to do a little celebration vacation. I've always wanted to do some safari or more adventurous so we reached out to them and it was settled swiftly.",
//       img: "/braylee-f.jpg",
//     },
//     {
//       id: 3,
//       name: "Blanca Opati",
//       trip: "Nairobi, Kenya",
//       text: "Imara Kileleni was able to facilitate a wonderful day trip to Tarangire National Park and also a wonderful Day trip to Mt. Kilimanjaro via Shira route We had a wonderful time to step out from work. It’s was well arranged with every nitty gritty taken care of .",
//       img: "/opati-blanca.jpg",
//     },
//   ];

//   return (
//     <section className="bg-white py-12 md:py-16 max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0">
//       {/* Top Orange Bar */}
//       <div className="bg-[#d87028] text-white font-semibold text-center py-3 px-4 rounded-md mb-16 flex flex-wrap items-center justify-center gap-2">
//         <span className="flex items-center gap-1">
//           RATED 5
//           <Star size={16} className="fill-yellow-300 text-yellow-300" />
//           BY OVER 100 TRAVELLERS
//         </span>

//         <span className="flex items-center gap-1">
//           <Star size={16} className="fill-yellow-300 text-yellow-300" />
//           <Star size={16} className="fill-yellow-300 text-yellow-300" />
//           <Star size={16} className="fill-yellow-300 text-yellow-300" />
//           <Star size={16} className="fill-yellow-300 text-yellow-300" />
//           <Star size={16} className="fill-yellow-300 text-yellow-300" />
//         </span>

//         <span className="text-white/90 font-normal">5.0/5 (100 REVIEWS)</span>
//       </div>

//       {/* Title */}
//       <h2 className="text-[24px] md:text-3xl capitalize font-extrabold text-[#111] text-center mb-8 md:mb-24">
//         Real Stories From Our Travellers
//       </h2>

//       {/* Mobile Slider */}
//       {/* Slider */}
//       <div className="block lg:hidden">
//         <Swiper
//           modules={[Autoplay]}
//           spaceBetween={24}
//           autoplay={{
//             delay: 4000,
//             disableOnInteraction: false,
//           }}
//           breakpoints={{
//             0: {
//               slidesPerView: 1.1,
//               centeredSlides: true,
//             },
//             640: {
//               slidesPerView: 1.4,
//               centeredSlides: false,
//             },
//             768: {
//               slidesPerView: 2,
//               centeredSlides: false,
//             },
//             1024: {
//               slidesPerView: 2.5,
//               centeredSlides: false,
//             },
//           }}
//         >
//           {reviews.map((review) => (
//             <SwiperSlide key={review.id} className="pt-12 pb-4">
//               <div className="h-full bg-white rounded-md shadow-[0_10px_40px_rgba(0,0,0,0.08)] text-center pt-16 pb-8 px-6 flex flex-col items-center relative overflow-visible">
//                 {/* Profile */}
//                 <div className="absolute -top-10 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
//                   <Image
//                     src={review.img}
//                     alt={review.name}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>

//                 {/* Stars */}
//                 <div className="flex justify-center mb-5 text-[#d87029] text-xl">
//                   <Star size={18} className="fill-[#d87029] text-[#d87029]" />
//                   <Star size={18} className="fill-[#d87029] text-[#d87029]" />
//                   <Star size={18} className="fill-[#d87029] text-[#d87029]" />
//                   <Star size={18} className="fill-[#d87029] text-[#d87029]" />
//                   <Star size={18} className="fill-[#d87029] text-[#d87029]" />
//                 </div>

//                 {/* Text */}
//                 <p className="text-[14px] sm:text-[15px] text-[#444] italic leading-[1.9] mb-6">
//                   “{review.text}”
//                 </p>

//                 {/* Divider */}
//                 <div className="w-8 h-1 bg-[#d87028] mb-4"></div>

//                 {/* Name */}
//                 <h3 className="text-xl italic text-[#333] mb-1">
//                   {review.name}
//                 </h3>

//                 {/* Location */}
//                 <p className="text-[#333] font-semibold underline text-[15px]">
//                   {review.trip}
//                 </p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Desktop Grid */}
//       <div className="hidden lg:grid lg:grid-cols-3 gap-8">
//         {reviews.map((review) => (
//           <div
//             key={review.id}
//             className="bg-white rounded-md shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-500 text-center pt-16 pb-8 px-8 flex flex-col items-center relative overflow-visible"
//           >
//             {/* Profile */}
//             <div className="absolute -top-12 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
//               <Image
//                 src={review.img}
//                 alt={review.name}
//                 fill
//                 className="object-cover"
//               />
//             </div>

//             {/* Stars */}
//             <div className="flex justify-center mb-5 text-[#d87029] text-xl">
//               <Star size={18} className="fill-[#d87029] text-[#d87029]" />
//               <Star size={18} className="fill-[#d87029] text-[#d87029]" />
//               <Star size={18} className="fill-[#d87029] text-[#d87029]" />
//               <Star size={18} className="fill-[#d87029] text-[#d87029]" />
//               <Star size={18} className="fill-[#d87029] text-[#d87029]" />
//             </div>

//             {/* Text */}
//             <p className="text-[16px] text-[#444] italic leading-relaxed mb-6">
//               “{review.text}”
//             </p>

//             {/* Divider */}
//             <div className="w-8 h-1 bg-[#d87028] mb-4"></div>

//             {/* Name */}
//             <h3 className="text-xl italic text-[#333] mb-1">{review.name}</h3>

//             {/* Location */}
//             <p className="text-[#333] font-semibold underline text-[15px]">
//               {review.trip}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Button */}
//       <div className="mt-8 md:mt-14 text-center">
//         <Link
//           href="https://www.tripadvisor.com/Attraction_Review-g317084-d34222480-Reviews-Imara_Kileleni_Safaris-Moshi_Kilimanjaro_Region.html"
//           target="_blank"
//           className="border hover:border-[#d87028] hover:bg-[#d87028] hover:text-white border-[#111] text-[#111] font-semibold px-8 py-3 cursor-pointer rounded-full transition"
//         >
//           VIEW ALL REVIEWS
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default ReviewsSection;

"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,

      name: "Colt B",
      trip: "Ashburn, Virginia",
      text: "I could happily go for a trip like this every year. Even going back again to the Serengeti national park is enticing to us, but we should probably try some of the other options for next year. Huge props to them for providing us more than we expected from a safari tour.",
      img: "/colt-b.jpg",
    },
    {
      id: 2,
      name: "Braylee F",
      trip: "Vancouver, Canada",
      text: "The safari literally couldn't have been much better. My partner and I just recently got engaged and we wanted to do a little celebration vacation. I've always wanted to do some safari or more adventurous so we reached out to them and it was settled swiftly.",
      img: "/braylee-f.jpg",
    },
    {
      id: 3,
      name: "Blanca Opati",
      trip: "Nairobi, Kenya",
      text: "Imara Kileleni was able to facilitate a wonderful day trip to Tarangire National Park and also a wonderful Day trip to Mt. Kilimanjaro via Shira route We had a wonderful time to step out from work. It’s was well arranged with every nitty gritty taken care of .",
      img: "/opati-blanca.jpg",
    },
  ];

  return (
    <section className="bg-white py-12 md:py-16 max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0">
      {/* Top Orange Bar */}
      <div className="bg-[#d87028] text-white font-semibold text-center py-3 px-4 rounded-md mb-16 flex flex-wrap items-center justify-center gap-2">
        <span className="flex items-center gap-1">
          RATED 5
          <Star size={16} className="fill-yellow-300 text-yellow-300" />
          BY OVER 100 TRAVELLERS
        </span>

        <span className="flex items-center gap-1">
          <Star size={16} className="fill-yellow-300 text-yellow-300" />
          <Star size={16} className="fill-yellow-300 text-yellow-300" />
          <Star size={16} className="fill-yellow-300 text-yellow-300" />
          <Star size={16} className="fill-yellow-300 text-yellow-300" />
          <Star size={16} className="fill-yellow-300 text-yellow-300" />
        </span>

        <span className="text-white/90 font-normal">5.0/5 (100 REVIEWS)</span>
      </div>

      {/* Title */}
      <h2 className="text-[24px] md:text-3xl capitalize font-extrabold text-[#111] text-center mb-8 md:mb-24">
        Real Stories From Our Travellers
      </h2>

      {/* Mobile Custom Slider */}
      <div className="block lg:hidden">
        <CustomReviewSlider reviews={reviews} />
      </div>

      {/* Desktop Grid */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-md shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-500 text-center pt-16 pb-8 px-8 flex flex-col items-center relative overflow-visible"
          >
            {/* Profile */}
            <div className="absolute -top-12 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src={review.img}
                alt={review.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-5 text-[#d87029] text-xl">
              <Star size={18} className="fill-[#d87029] text-[#d87029]" />
              <Star size={18} className="fill-[#d87029] text-[#d87029]" />
              <Star size={18} className="fill-[#d87029] text-[#d87029]" />
              <Star size={18} className="fill-[#d87029] text-[#d87029]" />
              <Star size={18} className="fill-[#d87029] text-[#d87029]" />
            </div>

            {/* Text */}
            <p className="text-[16px] text-[#444] italic leading-relaxed mb-6">
              “{review.text}”
            </p>

            {/* Divider */}
            <div className="w-8 h-1 bg-[#d87028] mb-4"></div>

            {/* Name */}
            <h3 className="text-xl italic text-[#333] mb-1">{review.name}</h3>

            {/* Location */}
            <p className="text-[#333] font-semibold underline text-[15px]">
              {review.trip}
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-8 md:mt-14 text-center">
        <Link
          href="https://www.tripadvisor.com/Attraction_Review-g317084-d34222480-Reviews-Imara_Kileleni_Safaris-Moshi_Kilimanjaro_Region.html"
          target="_blank"
          className="border hover:border-[#d87028] hover:bg-[#d87028] hover:text-white border-[#111] text-[#111] font-semibold px-8 py-3 cursor-pointer rounded-full transition"
        >
          VIEW ALL REVIEWS
        </Link>
      </div>
    </section>
  );
};

export default ReviewsSection;

const CustomReviewSlider = ({ reviews }) => {
  const [current, setCurrent] = useState(0);
  const [transition, setTransition] = useState(true);

  const startX = useRef(0);
  const isDragging = useRef(false);

  const [slidesPerView, setSlidesPerView] = useState(1.1);

  // RESPONSIVE
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1.1);
      } else if (window.innerWidth < 768) {
        setSlidesPerView(1.4);
      } else {
        setSlidesPerView(2);
      }
    };

    updateSlides();

    window.addEventListener("resize", updateSlides);

    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  // CLONE
  const cloneCount = Math.ceil(slidesPerView);
  const sliderData = [...reviews, ...reviews.slice(0, cloneCount)];

  // NEXT
  const nextSlide = () => {
    if (current >= reviews.length) return;

    setCurrent((prev) => prev + 1);
    setTransition(true);
  };

  // PREV
  const prevSlide = () => {
    if (current === 0) {
      setTransition(false);
      setCurrent(reviews.length - 1);

      setTimeout(() => {
        setTransition(true);
      }, 50);

      return;
    }

    setCurrent((prev) => prev - 1);
  };

  // AUTO SLIDE ONLY MOBILE/TABLET
  useEffect(() => {
    if (window.innerWidth >= 1024) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [current]);

  // RESET LOOP
  useEffect(() => {
    if (current >= reviews.length) {
      const timeout = setTimeout(() => {
        setTransition(false);
        setCurrent(0);

        setTimeout(() => {
          setTransition(true);
        }, 50);
      }, 700);

      return () => clearTimeout(timeout);
    }
  }, [current, reviews.length]);

  // SWIPE START
  const handleStart = (clientX) => {
    startX.current = clientX;
    isDragging.current = true;
  };

  // SWIPE END
  const handleEnd = (clientX) => {
    if (!isDragging.current) return;

    const distance = startX.current - clientX;

    if (Math.abs(distance) < 10) {
      isDragging.current = false;
      return;
    }

    if (distance > 50) {
      nextSlide();
    }

    if (distance < -50) {
      prevSlide();
    }

    isDragging.current = false;
  };

  return (
    <>
      <div
        className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseUp={(e) => handleEnd(e.clientX)}
        onMouseLeave={(e) => {
          if (isDragging.current) {
            handleEnd(e.clientX);
          }
        }}
      >
        {/* TRACK */}
        <div
          className={`flex ${
            transition ? "transition-transform duration-700 ease-in-out" : ""
          }`}
          style={{
            gap: "24px",
            transform: `translateX(calc(-${
              current * (100 / slidesPerView)
            }% - ${current * 24}px))`,
          }}
        >
          {sliderData.map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 pt-12 pb-4"
              style={{
                width: `calc(${100 / slidesPerView}% - ${
                  24 - 24 / slidesPerView
                }px)`,
              }}
            >
              <div className="h-full bg-white rounded-md shadow-[0_10px_40px_rgba(0,0,0,0.08)] text-center pt-16 pb-8 px-6 flex flex-col items-center relative overflow-visible">
                {/* Profile */}
                <div className="absolute -top-10 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src={review.img}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Stars */}
                <div className="flex justify-center mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-[#d87029] text-[#d87029]"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-[14px] sm:text-[15px] text-[#444] italic leading-[1.9] mb-6">
                  “{review.text}”
                </p>

                {/* Divider */}
                <div className="w-8 h-1 bg-[#d87028] mb-4"></div>

                {/* Name */}
                <h3 className="text-xl italic text-[#333] mb-1">
                  {review.name}
                </h3>

                {/* Location */}
                <p className="text-[#333] font-semibold underline text-[15px]">
                  {review.trip}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DOTS */}
      <div className="flex justify-center mt-6 gap-3">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index);
              setTransition(true);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              current % reviews.length === index
                ? "bg-[#d87028] scale-125"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </>
  );
};
