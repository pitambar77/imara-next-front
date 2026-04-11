import Image from "next/image";

const WhyVisitTanzania = () => {
  const cards = [
    {
      id: 1,
      image:
        "/why-visit-local.webp",
      title: "Locally Led Adventures",
      text: "Our roots here run deep, and that changes the way you experience each place. You’re not just following a route—you’re discovering quiet corners, real stories, and moments only locals know how to reveal.",
    },
    {
      id: 2,
      image:
        "/tailored-safari-journey.webp",
      title: "Tailored Safari Journeys",
      text: "We listen closely to what excites you and what doesn’t. Then we build an itinerary shaped around your rhythm, your comfort, and your style, so the whole journey feels naturally made for you.",
    },
    {
      id: 3,
      image:
        "/why-visit-last.webp",
      title: "Ethical Travel Choices",
      text: "Your safari supports local livelihoods and protects the wilderness you came to see. We prioritise fair work, community involvement, and gentle travel practices that genuinely make a difference on the ground.",
    },
  ];

  return (
    <section className="bg-white py-8 md:py-16 max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0">
      <h2 className="text-[24px] md:text-3xl capitalize font-bold text-center text-[#111] mb-3">
        Start exploring Tanzania’s most iconic safaris
      </h2>

      <p className="text-center text-[#444] text-[18px] mb-12">
        Lorem Ipsum is simply dummy text of the printing
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-60">
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <h3 className="text-[20px] md:text-[24px] text-[#111] mb-3">
                {card.title}
              </h3>
              <p className="text-[16px] text-[#333] leading-relaxed">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyVisitTanzania;