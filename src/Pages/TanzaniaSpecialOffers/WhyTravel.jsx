const reasons = [
  {
    number: "1",
    title: "Expert Advice",
    text: "We are fully independent and unbiased: we don't own or operate any lodges or hotels, and we only recommend those that are tried-and-tested by us.",
  },
  {
    number: "2",
    title: "Best Value",
    text: "We guarantee you'll never find a better price and our service is always complimentary.",
  },
  {
    number: "3",
    title: "Tailor-Made",
    text: "We plan every trip from scratch – from rustic camps to lavish lodges – for families, couples, solo travellers and more.",
  },
  {
    number: "4",
    title: "Full Service",
    text: "All the details including flights, hotels, transfers and logistics are taken care of in one seamless itinerary.",
  },
  {
    number: "5",
    title: "Peace Of Mind",
    text: "24/7 support along with our trusted partners on the ground means you can leave everything worrying to us.",
  },
  {
    number: "6",
    title: "Expert Advice",
    text: "We are fully independent and unbiased and only recommend tried-and-tested safari experiences.",
  },
];

export default function WhyTravel() {
  return (
    <section className="relative w-full bg-white">
      <div className="mx-auto w-full max-w-[1140px] px-[30px] sm:px-[40px] lg:px-0">
        {/* Expert Content */}
        <div
          className="
             relative z-10
            -mt-[50px]
            bg-white
            px-[15px] py-[18px]

            sm:-mt-[80px]
            sm:px-[25px] sm:py-[22px]

            md:-mt-[230px]
            md:px-[75px] md:py-[70px]
          "
        >
          <div className="flex items-center gap-[12px] sm:gap-[20px] md:gap-[35px]">
            {/* Expert Image */}
            <img
              src="/peter-charls-fig-1.jpg"
              alt="Peter Charles"
              className="
                h-[48px] w-[48px]
                shrink-0
                rounded-full
                object-cover

                sm:h-[60px] sm:w-[60px]

                md:h-[150px] md:w-[150px]
              "
            />

            {/* Expert Information */}
            <div className="min-w-0 flex-1">
              <h2
                className="
                  !font-avenir
                  m-0
                  text-[8px]
                  font-bold
                  leading-[1.2]
                  text-[#f6b719]

                  sm:text-[13px]

                  md:text-[25px]
                "
              >
                Peter Charles
                <span className="text-[#29283b]"> Tanzania Safari Expert</span>
              </h2>

              <p
                className="
                  !font-avenir
                  m-0
                  mt-[5px]
                  text-[6px]
                  leading-[1.45]
                  text-[#77777e]

                  sm:mt-[8px]
                  sm:text-[10px]

                  md:mt-[25px]
                  md:text-[17px]
                  md:leading-[1.6]
                "
              >
                Tanzania attracts both first-time and repeat visitors to its
                diverse landscapes and variety of safari experiences for any
                type of traveler. From witnessing the Great Migration in the
                Serengeti and seeing the Big 5 in the Ngorongoro Crater to
                enjoying water- and land-based safari activities in Nyerere
                National Park (Selous). You can travel with your own private
                driver/guide in a 4x4 vehicle or fly directly to your
                hand-picked camps and lodges via charter airplane.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-[35px] h-px w-full bg-[#f0b51b] md:mt-[65px]" />

          {/* Why Travel */}
          <div className="pt-[30px] sm:pt-[40px] md:pt-[105px]">
            <h2
              className="
              !font-cormorant
              m-0
              text-[18px]
              font-medium
              leading-tight
              text-[#29283b]

              sm:text-[25px]

              md:text-5xl
            "
            >
              Why Travel With Us
            </h2>

            {/* Reasons */}
            <div className="mt-[25px] grid grid-cols-3 gap-x-[15px] gap-y-[25px] sm:mt-[35px] sm:gap-x-[35px] sm:gap-y-[35px] md:mt-[55px] md:gap-x-[50px] md:gap-y-[55px]">
              {reasons.map((item, index) => (
                <article key={`${item.number}-${index}`}>
                  {/* Number */}
                  <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full border border-[#bda45d] sm:h-[25px] sm:w-[25px] md:h-[40px] md:w-[40px] md:border-2">
                    <span className="!font-avenir text-[6px] font-medium text-[#a58b47] sm:text-[8px] md:text-[13px]">
                      {item.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="!font-cormorant m-0 mt-[7px] text-[8px] font-medium leading-tight text-[#111] sm:mt-3 sm:text-[14px] md:mt-4 md:text-[22px]">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="!font-avenir m-0 mt-[4px] text-[5px] leading-[1.5] text-[#818087] sm:mt-2 sm:text-[9px] md:text-[14px] md:leading-[1.7]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
