"use client";

import Image from "next/image";
import { useState } from "react";

const reviews = [
  {
    text: "Le safari n’aurait littéralement pas pu être beaucoup mieux. Mon partenaire et moi venions de nous fiancer et nous voulions faire un voyage spécial pour célébrer cela. J’ai toujours rêvé de faire un safari ou une aventure plus immersive, alors nous les avons contactés, et tout a été organisé rapidement.",
    name: "Braylee F",
  },
  {
    text: "Je pourrais refaire un voyage comme celui-ci chaque année. Même retourner au parc national du Serengeti nous tente beaucoup, mais nous devrions probablement essayer d’autres options l’année prochaine. Un grand bravo à l’équipe pour nous avoir offert bien plus que ce que nous attendions d’un safari. ",
    name: "Colt B",
  },
  {
    text: "Un grand merci à Imara Kileleni Safaris pour un voyage inoubliable dans le parc national de Tarangire. Tout était parfaitement organisé, et les connaissances du guide ont rendu l’observation de la faune vraiment spéciale — surtout les incroyables troupeaux d’éléphants. ",
    name: "John M",
  },
  {
    text: "Imara Kileleni a organisé pour nous une merveilleuse excursion d’une journée au parc national de Tarangire ainsi qu’une superbe excursion au mont Kilimandjaro via la route Shira. Nous avons passé un excellent moment loin du travail. Tout était très bien organisé, jusque dans les moindres détails. ",
    name: "Blanca Opati",
  },
];

const videos = [
  {
    name: "Sven N",
    img: "/review-kili.jpg",
    text: "L’ascension du Kilimandjaro a été une expérience incroyable que nous n’oublierons probablement jamais. Ce n’était certainement pas la plus facile, mais les grands efforts créent de grands souvenirs.",
  },
  {
    name: "Ramona F",
    img: "/review-family.jpg",
    text: "Nous avons fait le safari en famille. C’était formidable. Presque un mois plus tard, je n’arrête toujours pas d’y penser. J’ai déjà discuté avec ma famille pour savoir si nous voulions refaire un safari plus tard cette année, haha.",
  },
  {
    name: "Gabriel P",
    img: "/safari-review.jpg",
    text: "Des paysages absolument fascinants. Je ne peux que recommander aux autres couples avec une envie d’aventure de vivre une expérience comme celle-ci !",
  },
];

export default function TestimonialsSection() {
  const [currentReview, setCurrentReview] = useState(0);
  const [currentStory, setCurrentStory] = useState(0);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const [storyTouchStart, setStoryTouchStart] = useState(null);
  const [storyTouchEnd, setStoryTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;

    if (distance > minSwipeDistance) nextReview();
    if (distance < -minSwipeDistance) prevReview();
  };

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const onStoryTouchStart = (e) => {
    setStoryTouchEnd(null);
    setStoryTouchStart(e.targetTouches[0].clientX);
  };

  const onStoryTouchMove = (e) => {
    setStoryTouchEnd(e.targetTouches[0].clientX);
  };

  const onStoryTouchEnd = () => {
    if (!storyTouchStart || !storyTouchEnd) return;

    const distance = storyTouchStart - storyTouchEnd;

    if (distance > minSwipeDistance) nextStory();
    if (distance < -minSwipeDistance) prevStory();
  };

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % videos.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  return (
    <section id="review" className="bg-[#fffaf6] py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <p className=" !font-avenir text-xs md:text-sm tracking-[0.2em] text-[#d87029] uppercase mb-3">
            Témoignages de nos voyageurs
          </p>
          <div className="w-10 h-[1px] bg-[#d87029] mx-auto mb-4 md:mb-6"></div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl !font-cormorant text-[#111] capitalize">
            Des histoires qui restent en mémoire
          </h2>
        </div>

        {/* TOP REVIEWS */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <p className=" !font-avenir text-xs md:text-sm tracking-[0.2em] text-[#d87029] uppercase whitespace-nowrap">
             Avis Tripadvisor
            </p>
            <div className="flex-1 h-[1px] bg-[#f5dbca]"></div>
          </div>

          {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {reviews.map((item, i) => (
              <div key={i} className="bg-white rounded-md p-6 shadow-sm ">
              
                <div className="text-[#d87029] mb-3">★★★★★</div>

                <p className=" !font-avenir text-sm text-[#444] italic mb-4 leading-6">
                  "{item.text}"
                </p>

                <p className="!font-avenir text-xs text-[#d87029] tracking-wider">
                  {item.name}
                </p>
              </div>
            ))}
          </div> */}

          <div className="hidden lg:grid lg:grid-cols-4 gap-6">
            {reviews.map((item, i) => (
              <div key={i} className="bg-white rounded-md p-6 shadow-sm">
                <div className="text-[#d87029] mb-3">★★★★★</div>

                <p className="!font-avenir text-sm text-[#444] italic mb-4 leading-6">
                  "{item.text}"
                </p>

                <p className="!font-avenir text-xs text-[#d87029] tracking-wider">
                  {item.name}
                </p>
              </div>
            ))}
          </div>

          <div className="lg:hidden">
            <div
              className="overflow-hidden"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentReview * 100}%)`,
                }}
              >
                {reviews.map((item, i) => (
                  <div key={i} className="min-w-full px-1">
                    <div className="bg-white rounded-md p-6 shadow-sm">
                      <div className="text-[#d87029] mb-3">★★★★★</div>

                      <p className="!font-avenir text-sm text-[#444] italic mb-4 leading-6">
                        "{item.text}"
                      </p>

                      <p className="!font-avenir text-xs text-[#d87029] tracking-wider">
                        {item.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  aria-label={`Go to review ${index + 1}`}
                  className={`transition-all rounded-full ${
                    currentReview === index
                      ? "bg-[#d87029] w-8 h-2"
                      : "bg-gray-300 w-2 h-2"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* VIDEO STORIES */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <p className=" !font-avenir text-sm md:text-sm tracking-[0.2em] text-[#d87029] uppercase whitespace-nowrap">
             Histoires
            </p>
            <div className="flex-1 h-[1px] bg-[#f5dbca]"></div>
          </div>

          <div className="hidden lg:grid lg:grid-cols-3 gap-6">
            {videos.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-md overflow-hidden shadow-sm"
              >
                <div className="relative h-[240px]">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />

                  <div className=" !font-avenir absolute bottom-3 w-full bg-[#d87029] text-white text-xs text-center py-2 tracking-widest">
                    {item.name}
                  </div>
                </div>

                <div className="p-5">
                  <p className=" !font-avenir text-sm text-[#444] leading-6 italic mb-3">
                    "{item.text}"
                  </p>

                  <div className="text-[#d87029] mb-4">★★★★★</div>

                  <p className=" !font-avenir text-xs text-[#d87029] tracking-wider">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:hidden">
            <div
              className="overflow-hidden"
              onTouchStart={onStoryTouchStart}
              onTouchMove={onStoryTouchMove}
              onTouchEnd={onStoryTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentStory * 100}%)`,
                }}
              >
                {videos.map((item, i) => (
                  <div key={i} className="min-w-full px-1">
                    <div className="bg-white rounded-md overflow-hidden shadow-sm">
                      {/* Image */}
                      <div className="relative h-[240px]">
                        <Image
                          src={item.img}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />

                        <div className="!font-avenir absolute bottom-3 w-full bg-[#d87029] text-white text-xs text-center py-2 tracking-widest">
                          {item.name}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <p className="!font-avenir text-sm text-[#444] leading-6 italic mb-3">
                          "{item.text}"
                        </p>

                        <div className="text-[#d87029] mb-4">★★★★★</div>

                        <p className="!font-avenir text-xs text-[#d87029] tracking-wider">
                          {item.name}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStory(index)}
                   aria-label={`Go to story ${index + 1}`}
                  className={`transition-all rounded-full ${
                    currentStory === index
                      ? "bg-[#d87029] w-8 h-2"
                      : "bg-gray-300 w-2 h-2"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
