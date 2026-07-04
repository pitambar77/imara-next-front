"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    q: "Vos safaris sont-ils privés ou en groupe ?",
    a: "Tous nos safaris sont privés et sur mesure. Votre voyage est conçu selon vos intérêts, votre style de voyage, votre rythme et vos expériences préférées — aucun bus partagé et aucun programme de groupe fixe.",
  },

  {
    q: "Quelles destinations en Tanzanie connaissez-vous le mieux ?",
    a: "Nous sommes spécialisés dans les principales régions safari de Tanzanie, notamment le Serengeti, le cratère du Ngorongoro, Tarangire, le lac Manyara, Arusha, le mont Kilimandjaro et Zanzibar. Chaque itinéraire peut être personnalisé selon vos intérêts, la durée de votre voyage et vos expériences souhaitées.",
  },

  {
    q: "Pouvez-vous personnaliser mon itinéraire ?",
    a: "Oui. Chaque safari est planifié sur mesure selon vos dates de voyage, votre budget, votre hébergement préféré, vos intérêts animaliers et votre style de voyage.",
  },

  {
    q: "Qu’est-ce qui est inclus dans vos forfaits safari ?",
    a: "Nos forfaits safari incluent généralement l’hébergement, le transport privé, les guides professionnels, les frais d’entrée aux parcs, les activités prévues, les repas selon l’itinéraire et l’assistance tout au long du voyage. Les inclusions exactes dépendent du forfait choisi.",
  },

  {
    q: "Wann ist die beste Reisezeit für Tansania?",
    a: "La Tanzanie est une destination de safari idéale toute l'année. La meilleure période dépend de vos objectifs de voyage :",
    list: [
      "<strong>Juin – Octobre :</strong>  Idéal pour observer la faune et profiter des safaris en saison sèche",
      "<strong>Décembre – Mars :</strong>  Saison des naissances et expériences de la grande migration",
      "<strong>anvier – Février :</strong>  Excellente période pour assister aux naissances lors de la migration du Serengeti",
      "<strong>Zanzibar:</strong>  Une destination agréable pendant une grande partie de l'année",
    ],
    bottom:
      "Nous vous recommanderons toujours la meilleure période en fonction de vos priorités pour votre safari.",
  },

  {
    q: "Pourquoi voyager avec Imara Kileleni Safaris ?",
    a: "Parce que nous combinons des safaris privés et sur mesure avec une expertise locale, une planification soignée et un accompagnement personnalisé. Notre objectif est de vous offrir une expérience authentique, fluide et inoubliable.",
  },
];

const safariCards = [
  {
    title: "Safari économique",
    content:
      "Profitez d’une expérience safari bien organisée et authentique avec des lodges confortables, des camps de toile ou des campings sélectionnés. Voyagez avec un guide professionnel anglophone dans un véhicule 4x4 partagé ou privé, tout en bénéficiant d’une logistique fiable et de rencontres animalières inoubliables.",
  },
  {
    title: "Safari milieu de gamme luxe",
    content:
      "Découvrez l'équilibre parfait entre confort, qualité et excellent rapport qualité-prix grâce à une sélection soignée de lodges et de camps de tentes situés dans des lieux exceptionnels. Profitez d'un service de qualité, de guides de safari expérimentés, de véhicules 4x4 confortables, de transferts fluides et d'une excellente cuisine.",
  },
  {
    title: "Safari de luxe",
    content:
      "Offrez-vous l'expérience safari la plus prestigieuse de Tanzanie avec des lodges haut de gamme et des camps de tentes de luxe au cœur des plus belles réserves animalières. Profitez de safaris privés, de guides experts, d'un service personnalisé, d'une organisation sans faille et d'expériences exclusives.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section id="faq" className="bg-[#f6f3ee] py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <p className=" !font-avenir text-xs md:text-sm tracking-[0.2em] text-[#d87029] uppercase mb-3">
            Questions fréquentes
          </p>
          <div className="w-10 h-[1px] bg-[#d87029] mx-auto mb-4 md:mb-6"></div>

          <h2 className=" !font-cormorant text-3xl md:text-4xl lg:text-5xl text-[#111] capitalize">
            Tout ce que vous devez savoir
          </h2>
        </div>

        {/* Layout */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT SIDE */}

          <div>
            <div className="space-y-4">
              {safariCards.map((card, index) => (
                <div
                  key={index}
                  onClick={() => setActiveCard(index)}
                  className={`bg-white rounded-lg border p-6 cursor-pointer transition-all duration-300 ${
                    activeCard === index
                      ? "border-[#d87029]/40"
                      : "border-gray-200 hover:border-[#d87029]/40"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <h3
                      className={`!font-cormorant font-semibold text-xl ${
                        activeCard === index ? "text-[#d87029]" : "text-[#444]"
                      }`}
                    >
                      {card.title}
                    </h3>

                    <span className="text-[#d87029] text-xl">
                      {activeCard === index ? "−" : "+"}
                    </span>
                  </div>

                  {activeCard === index && (
                    <p className="!font-avenir leading-6 text-sm text-[#444] mt-4">
                      {card.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE (Accordion) */}
          <div className="divide-y divide-[#f6d3bc] border-t border-t-[#f6d3bc]">
            {faqs.map((item, i) => (
              <div key={i} className=" py-3 md:py-5">
                {/* Question */}
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex justify-between items-center text-left cursor-pointer"
                >
                  <span
                    className={` !font-cormorant font-[500] text-lg md:text-xl transition hover:text-[#d87029] ${
                      openIndex === i ? "text-[#d87029]" : "text-[#444]"
                    }`}
                  >
                    {item.q}
                  </span>
                  <span className="text-[#d87029] text-xl">
                    {openIndex === i ? "×" : "+"}
                  </span>
                </button>

                {/* Answer */}
                {/* {openIndex === i && (
                  <p className=" !font-avenir text-[#444] mt-4 leading-7">
                    {item.a}
                  </p>
                )} */}
                {/* Answer */}
                {openIndex === i && (
                  <div className="mt-4">
                    {/* Main Answer */}
                    {item.a && (
                      <p
                        className="!font-avenir text-[#444] leading-7 [&_strong]:font-medium"
                        dangerouslySetInnerHTML={{ __html: item.a }}
                      />
                    )}

                    {/* List */}
                    {item.list && (
                      <ul className="mt-4 space-y-2 ml-4">
                        {item.list.map((listItem, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-[#d87029] text-lg ">•</span>

                            <span
                              className="!font-avenir text-[#444] leading-7 [&_strong]:font-medium"
                              dangerouslySetInnerHTML={{ __html: listItem }}
                            />
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Bottom Text */}
                    {item.bottom && (
                      <p
                        className="!font-avenir text-[#444] leading-7 mt-4"
                        dangerouslySetInnerHTML={{ __html: item.bottom }}
                      />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
