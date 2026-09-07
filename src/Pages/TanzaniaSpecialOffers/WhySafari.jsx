const benefits = [
  {
    title: "Witness The Wildebeest Migration",
    text: "Hardly any other destination on Earth can offer a wildlife encounter to match the annual Wildebeest Migration. Forming the pride and joy of most Tanzania safari itineraries, the Migration is a mind-blowing display of nature at her most extraordinary.",
  },
  {
    title: "Superb, Year-Round Game Viewing",
    text: "Thanks to a mild climate, wide open spaces and an abundance of wildlife in heavyweight destinations like the Serengeti, Ngorongoro Crater and Tarangire, Tanzania delivers sensational safari experiences any time of the year.",
  },
  {
    title: "Interact With The Masai",
    text: "The iconic colorful attire and jumping dance of the Maasai have become synonymous with Africa, and it is in Tanzania and neighboring Kenya that these semi-nomadic people can be interacted with.",
  },
  {
    title: "One-Of-A-Kind Experiences",
    text: "From watching thousands of grunting wildebeest dodge massive crocodiles during the Migration's perilous river crossings to seeing each member of the Big 5, Tanzania offers the kind of experiences found nowhere else on Earth.",
  },
  {
    title: "Exclusive Lodges & Camps",
    text: "Despite some camps being situated in remote wilderness locations, they still offer superb amenities like private plunge pools, spas and gyms.",
  },
  {
    title: "Quick & Easy Air Transfers",
    text: "There are dedicated airports that service most of Tanzania's national parks and game reserves. The best Tanzania safaris are fly-in itineraries.",
  },
];

function GoldIcon() {
  return (
    <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full border-[4px] border-[#c2a35a]">
      <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full border-[2px] border-[#c2a35a] text-[25px] font-normal leading-none text-[#c2a35a]">
        ✓
      </div>
    </div>
  );
}

export default function WhySafari() {
  return (
    <section
      className="
        relative
        z-30
        mx-auto
        -mt-[180px]
        w-[calc(100%-120px)]
        max-w-[1140px]
        bg-white
        px-[85px]
        pb-[95px]
        pt-[78px]
      "
    >
      {/* ================= HEADING ================= */}
      <h2
        className="
          !font-cormorant text-3xl md:text-4xl lg:text-5xl mb-4 capitalize mb-20
        "
      >
        Why Go on a Tanzania Safari?
      </h2>

      {/* ================= BENEFITS ================= */}
      <div
        className="
          grid
          grid-cols-3
          gap-x-[65px]
          gap-y-[82px]
        "
      >
        {benefits.map((item) => (
          <article key={item.title} className="min-w-0">
            {/* Icon */}
            <img src="/tick-original.svg" alt="Checkmark" className="w-12 h-12"/>

            {/* Title */}
            <h3
              className="
                m-0
                mt-[25px]
                !font-cormorant
                text-[25px]
                font-medium
                leading-[1.15]
                tracking-[-0.01em]
                text-[#29283b]
              "
            >
              {item.title}
            </h3>

            {/* Description */}
            <p
              className="
                m-0
                mt-[28px]
                !font-avenir text-[#444] text-[17px]
              "
            >
              {item.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
