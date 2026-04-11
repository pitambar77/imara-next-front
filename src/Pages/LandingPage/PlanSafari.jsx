import React, { useState } from "react";

import bannerImage from '../../assets/tanzania-banner-2.webp'

/* ================= DATA OBJECTS ================= */

/* HERO */
const heroData = {
  title: "PLAN YOUR TANZANIA SAFARI HERE",
  subtitle:
    "Tailor-made safari journeys across Tanzania guided by local experts",
  image:bannerImage,
  buttonText: "Start Planning",
};

/* DESTINATIONS */
const destinationsData = {
  title: "Which Parts Of Tanzania Would You Like To Explore?",
  description:
    "Choose the national parks and regions that interest you most.",
  items: [
    { name: "Serengeti", content:"Endless savannahs famous for the Great Migration, predator sightings, open landscapes, and classic game drives throughout different seasons.", image: bannerImage },
    { name: "Tarangire", content:"Endless savannahs famous for the Great Migration, predator sightings, open landscapes, and classic game drives throughout different seasons.", image: bannerImage },
    { name: "Lake Manyara", content:"Endless savannahs famous for the Great Migration, predator sightings, open landscapes, and classic game drives throughout different seasons.", image: bannerImage },
    { name: "Kilimanjaro", content:"Endless savannahs famous for the Great Migration, predator sightings, open landscapes, and classic game drives throughout different seasons.", image: bannerImage },
    { name: "Arusha", content:"Endless savannahs famous for the Great Migration, predator sightings, open landscapes, and classic game drives throughout different seasons.", image: bannerImage },
    { name: "Zanzibar", content:"Endless savannahs famous for the Great Migration, predator sightings, open landscapes, and classic game drives throughout different seasons.", image: bannerImage },
    { name: "Ngorongoro Crater", content:"Endless savannahs famous for the Great Migration, predator sightings, open landscapes, and classic game drives throughout different seasons.", image: bannerImage },
    { name: "Not Sure / Other", content:"Endless savannahs famous for the Great Migration, predator sightings, open landscapes, and classic game drives throughout different seasons.", image: bannerImage },
  ],
};

/* DURATION */
const durationData = {
  title: "How Long Do You Want To Travel?",
  options: ["4–6 Days", "6–8 Days", "8–10 Days", "12+ Days"],
};

/* SAFARI TYPE */
const safariTypeData = {
  title: "What Kind Of Safari Suits You?",
  options: [
    { label: "Budget", image: "/images/safari/budget.jpg" },
    { label: "Economy", image: "/images/safari/economy.jpg" },
    { label: "Luxury", image: "/images/safari/luxury.jpg" },
    { label: "Not Decided Yet", image: "/images/safari/not-decided.jpg" },
  ],
};

/* MONTHS */
const monthsData = {
  title: "When Would You Like To Travel?",
  months: [
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec",
  ],
};

/* BENEFITS */
const benefitsData = {
  title: "WHY CHOOSE IMARA KILELENI SAFARIS?",
  items: [
    {
      title: "Local Safari Experts",
      description:
        "Born and raised in Tanzania with deep local safari knowledge.",
    },
    {
      title: "Tailored Travel Planning",
      description:
        "Every safari is customized to match your style, budget, and interests.",
    },
    {
      title: "Trusted Safari Operations",
      description:
        "Professional guides, reliable vehicles, and safety-first operations.",
    },
    {
      title: "Honest Local Pricing",
      description:
        "Fair pricing without middlemen, offering the best local value.",
    },
  ],
};

/* TESTIMONIAL */
const testimonialData = {
  quote: "One of the Best Experiences of My Life! Memories Forever!",
  author: "James K.",
};

/* GALLERY */
const galleryData = {
  title: "Moments From Our Safaris",
  images: [
    "/images/gallery/1.jpg",
    "/images/gallery/2.jpg",
    "/images/gallery/3.jpg",
    "/images/gallery/4.jpg",
    "/images/gallery/5.jpg",
    "/images/gallery/6.jpg",
    "/images/gallery/7.jpg",
    "/images/gallery/8.jpg",
  ],
};

/* ================= COMPONENT ================= */

const PlanSafari = () => {
  const [selectedMonth, setSelectedMonth] = useState("Jan");

  return (
    <div className="w-full">

      {/* HERO */}
      <section
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${heroData.image})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-white max-w-3xl px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {heroData.title}
          </h1>
          <p className="mb-6">{heroData.subtitle}</p>
          <button className="bg-orange-600 px-6 py-3 rounded font-medium">
            {heroData.buttonText}
          </button>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-semibold mb-2">
          1. {destinationsData.title}
        </h2>
        <p className="text-gray-600 mb-6">
          {destinationsData.description}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {destinationsData.items.map((item) => (
            <div
              key={item.name}
              className=" rounded-sm overflow-hidden hover:shadow-lg cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-36 w-full object-cover"
              />
              <div className=" mt-3 text-center font-medium">
                <h3>{item.name}</h3>
              </div>
              <div className=" p-4 ">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DURATION */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6">
            2. {durationData.title}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {durationData.options.map((d) => (
              <div
                key={d}
                className="bg-white p-6 rounded-lg text-center font-medium shadow hover:shadow-md cursor-pointer"
              >
                {d}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAFARI TYPE */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-semibold mb-6">
          3. {safariTypeData.title}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {safariTypeData.options.map((item) => (
            <div
              key={item.label}
              className="border rounded-lg overflow-hidden hover:bg-orange-50 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.label}
                className="h-32 w-full object-cover"
              />
              <div className="p-4 text-center font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MONTH SELECTOR */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-6">
            4. {monthsData.title}
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {monthsData.months.map((m) => (
              <button
                key={m}
                onClick={() => setSelectedMonth(m)}
                className={`px-4 py-2 rounded border ${
                  selectedMonth === m
                    ? "bg-orange-600 text-white"
                    : "bg-white"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          5. Share Your Details Here
        </h2>

        <form className="space-y-4">
          <input className="w-full border p-3 rounded" placeholder="Full Name" />
          <input className="w-full border p-3 rounded" placeholder="Email" />
          <input className="w-full border p-3 rounded" placeholder="Phone Number" />
          <input className="w-full border p-3 rounded" placeholder="Number of People" />
          <textarea
            className="w-full border p-3 rounded"
            rows="4"
            placeholder="Additional Information"
          />
          <button className="w-full bg-orange-600 text-white py-3 rounded font-medium">
            SEND ME AN OFFER
          </button>
        </form>
      </section>

      {/* BENEFITS */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-10">
            {benefitsData.title}
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {benefitsData.items.map((item) => (
              <div key={item.title} className="bg-white p-6 rounded shadow">
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-16 text-center max-w-4xl mx-auto px-4">
        <p className="text-xl italic mb-4">
          “{testimonialData.quote}”
        </p>
        <p className="text-sm text-gray-600">
          — {testimonialData.author}
        </p>
      </section>

      {/* GALLERY */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {galleryData.title}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryData.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Safari"
              className="rounded-lg object-cover h-48 w-full"
            />
          ))}
        </div>
      </section>

    </div>
  );
};

export default PlanSafari;
