"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    q: "Sind Ihre Safaris privat oder Gruppenreisen?",
    a: "Alle unsere Safaris sind privat und maßgeschneidert. Ihre Reise wird rund um Ihre Interessen, Ihren Reisestil, Ihr Tempo und Ihre gewünschten Erlebnisse gestaltet — keine geteilten Busse und keine festen Gruppenprogramme.",
  },

  {
    q: "Auf welche Reiseziele in Tansania sind Sie spezialisiert?",
    a: "Wir spezialisieren uns auf die beliebtesten Safari-Regionen Tansanias, darunter Serengeti, Ngorongoro-Krater, Tarangire, Lake Manyara, Arusha, Mount Kilimandscharo und Sansibar. Jede Reiseroute kann individuell an Ihre Interessen, Reisedauer und bevorzugten Erlebnisse angepasst werden.",
  },

  {
    q: "Können Sie meine Reiseroute individuell anpassen?",
    a: "Ja. Jede Safari wird individuell geplant — basierend auf Ihren Reisedaten, Ihrem Budget, Ihrer bevorzugten Unterkunft, Ihren Wildtierinteressen und Ihrem gewünschten Reisestil.",
  },

  {
    q: "Was ist in Ihren Safari-Paketen enthalten?",
    a: "Unsere Safari-Pakete beinhalten in der Regel Unterkunft, private Transportfahrzeuge, professionelle Guides, Parkgebühren, geplante Aktivitäten, Mahlzeiten gemäß Reiseplan und Unterstützung während der gesamten Reise. Die genauen Leistungen hängen vom ausgewählten Paket ab.",
  },

  {
    q: "Wann ist die beste Reisezeit für Tansania?",
    a: "Tansania ist das ganze Jahr über ein hervorragendes Safari-Reiseziel. Die beste Reisezeit hängt von Ihren persönlichen Reisewünschen ab:",
    list: [
      "<strong>Juni – Oktober:</strong> Beste Zeit für Tierbeobachtungen und Safaris in der Trockenzeit",
      "<strong>Dezember – März:</strong> Kalbungszeit und beeindruckende Erlebnisse der Tierwanderung",
      "<strong>Januar – Februar:</strong> Ideal, um die Geburten während der Serengeti-Migration zu erleben",
      "<strong>Sansibar:</strong> Ein attraktives Reiseziel während eines Großteils des Jahres",
    ],
    bottom:
      "Wir empfehlen Ihnen stets die beste Reisezeit, abgestimmt auf Ihre individuellen Safari-Wünsche.",
  },

  {
    q: "Warum mit Imara Kileleni Safaris reisen?",
    a: "Weil wir private, maßgeschneiderte Safari-Erlebnisse mit lokaler Expertise, sorgfältiger Planung und persönlicher Betreuung kombinieren. Unser Ziel ist es, Ihnen eine Safari zu bieten, die sich authentisch, reibungslos und unvergesslich anfühlt.",
  },
];

const safariCards = [
  {
    title: "Budget-Safari",
    content:
      "Genießen Sie eine gut organisierte und authentische Safari-Erfahrung mit komfortablen Lodges, Tented Camps oder ausgewählten Campingplätzen. Reisen Sie mit einem professionellen englischsprachigen Guide in einem geteilten oder privaten 4x4-Fahrzeug und erleben Sie zuverlässige Logistik sowie unvergessliche Begegnungen mit Wildtieren.",
  },
  {
    title: "Mittelklasse-Luxus-Safari",
    content:
      "Erleben Sie die perfekte Balance aus Komfort, Qualität und Preis-Leistungs-Verhältnis mit sorgfältig ausgewählten Lodges und Zeltcamps an wunderschönen Standorten. Freuen Sie sich auf erstklassigen Service, erfahrene Safari-Guides, komfortable 4x4-Fahrzeuge, reibungslose Transfers und ausgezeichnete kulinarische Erlebnisse.",
  },
  {
    title: "Luxus-Safari",
    content:
      "Genießen Sie Tansanias exklusivstes Safari-Erlebnis mit erstklassigen Lodges und luxuriösen Zeltcamps in den besten Wildtiergebieten. Freuen Sie sich auf private Pirschfahrten, erfahrene Safari-Guides, persönlichen Service, perfekt organisierte Abläufe und exklusive Erlebnisse.",
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
            Häufige Fragen
          </p>
          <div className="w-10 h-[1px] bg-[#d87029] mx-auto mb-4 md:mb-6"></div>

          <h2 className=" !font-cormorant text-3xl md:text-4xl lg:text-5xl text-[#111] capitalize">
            Alles, was Sie wissen müssen
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
