"use client";

const reasons = [
  {
    number: "1",
    title: "Local knowledge",
    text: "Our team understands Tanzania firsthand, from its famous national parks to lesser-known regions, seasonal wildlife movements, and the best ways to connect each destination.",
  },
  {
    number: "2",
    title: "Personalised planning",
    text: "Every journey is shaped around your interests, travel dates, budget, pace, and preferred experiences rather than built from a standard itinerary.",
  },
  {
    number: "3",
    title: "Carefully selected stays",
    text: "We recommend camps and lodges based on location, service, comfort, atmosphere, and overall safari experience, helping you choose the right stay for every stage of your trip.",
  },
  {
    number: "4",
    title: "Seamless travel",
    text: "From airport arrivals and safari transfers to accommodation, park logistics, domestic flights, and special arrangements, we coordinate the details so your journey runs smoothly.",
  },
  {
    number: "5",
    title: "Support when you need it",
    text: "You have reliable assistance before departure and throughout your trip, giving you a trusted point of contact whenever plans, questions, or unexpected situations arise.",
  },
  {
    number: "6",
    title: "Experiences that matter",
    text: "We focus on creating meaningful journeys, whether you are looking for exceptional wildlife viewing, a private family safari, a honeymoon, photography opportunities, or a safari-and-beach combination.",
  },
];

export default function WhyTravel() {
  return (
    <section className="relative w-full">
      <div
        className="
          mx-auto
          w-full
          max-w-[1140px]
          px-[30px]

          sm:px-[40px]

          lg:px-0
        "
      >
        {/* =====================================
            DESKTOP EXPERT CONTENT
            Hidden on mobile
        ====================================== */}
        <div
          className="
            relative
            z-10
            hidden
            bg-white
            px-[60px]
            py-[60px]

            md:-mt-[160px]
            md:block
          "
        >
          <div className="flex items-center gap-[35px]">
            {/* Expert Image */}
            <img
              src="/profile-im.webp"
              alt="Profile Image"
              className="
                h-[150px]
                w-[150px]
                shrink-0
                rounded-full
                object-cover
              "
            />

            {/* Expert Information */}
            <div className="min-w-0 flex-1">
              <h2
                className="
                  !font-avenir
                  m-0
                  text-[25px]
                  font-semibold
                  leading-[1.2]
                  text-[#d87028]
                "
              >
                Gervas Ngikari
                <span className="text-[#29283b]">
                  {" "}
                  Founder, Imara Kileleni Safari
                </span>
              </h2>

              <p
                className="
                  !font-avenir
                  m-0
                  mt-[25px]
                  text-[17px]
                  leading-[1.6]
                  text-[#77777e]
                "
              >
                Tanzania offers an extraordinary mix of wildlife, scenery,
                culture, and adventure, making it easy to create a journey that
                feels truly personal. Explore the vast Serengeti plains, descend
                into the Ngorongoro Crater, discover Tarangire’s elephant
                country, or experience the remote wilderness of southern
                Tanzania.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-[65px] h-px w-full bg-[#f0b51b]" />
        </div>

        {/* =====================================
            WHY TRAVEL
        ====================================== */}
        <div
          className="
            bg-white
            pt-[45px]
            pb-[60px]
            sm:pt-[50px]

            md:pt-[5px]
            md:pb-[100px]
          "
        >
          <h2
            className="
              !font-cormorant
              m-0
              text-center
              text-[32px]
              text-[#29283b]

              sm:text-[25px]

              md:text-left
              md:text-5xl
            "
          >
            Why travel with us
          </h2>

          {/* =====================================
              REASONS
          ====================================== */}
          <div
            className="
              mt-[40px]
              flex
              snap-x
              snap-mandatory
              gap-[20px]
              overflow-x-auto
              pb-[15px]

              sm:mt-[35px]
              sm:grid
              sm:grid-cols-2
              sm:gap-x-[35px]
              sm:gap-y-[35px]
              sm:overflow-visible
              sm:pb-0

              md:mt-[55px]
              md:grid-cols-3
              md:gap-x-[50px]
              md:gap-y-[55px]
            "
          >
            {reasons.map((item, index) => (
              <article
                key={`${item.number}-${index}`}
                className="
                  w-[82vw]
                  min-w-[82vw]
                  shrink-0
                  snap-start

                  sm:w-auto
                  sm:min-w-0
                  sm:shrink
                "
              >
                {/* Number */}
                <div
                  className="
                    flex
                    h-[42px]
                    w-[42px]
                    items-center
                    justify-center
                    rounded-full
                    border-[3px]
                    border-[#d87028]

                    md:h-[40px]
                    md:w-[40px]
                  "
                >
                  <span
                    className="
                      !font-avenir
                      flex
                      h-[28px]
                      w-[28px]
                      items-center
                      justify-center
                      rounded-full
                      bg-[#d87028]
                      text-[12px]
                      font-semibold
                      text-white
                    "
                  >
                    {item.number}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="
                    !font-cormorant
                    m-0
                    mt-[25px]
                    text-[25px]
                    font-medium
                    leading-tight
                    text-[#29283b]

                    sm:mt-3
                    sm:text-[14px]

                    md:mt-4
                    md:text-[22px]
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    !font-avenir
                    m-0
                    mt-[15px]
                    text-[16px]
                    leading-[1.7]
                    text-[#818087]

                    sm:mt-2
                    sm:text-[9px]

                    md:text-[14px]
                    md:leading-[1.7]
                  "
                >
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          {/* Mobile indicators */}
          <div className="mt-[18px] flex justify-center gap-[5px] sm:hidden">
            {reasons.map((_, index) => (
              <span
                key={index}
                className="h-[4px] w-[4px] rounded-full bg-[#d87028]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
