export default function FinalCTA() {
  return (
    <section className="w-full bg-white py-[20px]">
      <div className="mx-auto w-full max-w-[1300px] px-[25px] sm:px-[40px] md:px-[60px]">
        {/* =========================
            DESKTOP OVERLAPPING CTA
        ========================== */}
        <div className="relative min-h-0 md:min-h-[610px] lg:min-h-[730px]">
          {/* =========================
              GREY CONTENT PANEL
          ========================== */}
          <div
            className="
              relative
              z-0
              ml-auto
              flex
              w-full
              min-h-[360px]
              flex-col
              justify-center
              bg-[#f4f4f4]
              pl-[65px]
              py-[45px]

              sm:px-[50px]
              sm:py-[55px]

              md:absolute
              md:right-0
              md:top-0
              md:h-[650px]
              md:w-[47%]
              md:pl-[85px]
              md:py-[60px]

              
            "
          >
            <div className="md:ml-[35px] lg:ml-[40px]">
              {/* Heading */}
              <h2
                className="
                  !font-cormorant
                  m-0
                  max-w-[390px]
                  text-[30px]
                  font-medium
                  leading-[1.12]
                  text-[#29283b]

                  sm:text-[34px]

                  md:text-[36px]

                  lg:text-[43px]
                "
              >
                How Many Once
                <br />
                In A Lifetimes
                <br />
                Will You Have?
              </h2>

              {/* Description */}
              <p
                className="
                  !font-avenir
                  m-0
                  mt-[25px]
                  max-w-[390px]
                  text-[13px]
                  font-normal
                  leading-[1.55]
                  tracking-[0.02em]
                  text-[#85848b]

                  sm:mt-[28px]
                  sm:text-[14px]

                  md:mt-[30px]
                  md:text-[15px]

                  lg:mt-[32px]
                  lg:text-[16px]
                "
              >
                Contact us to start planning your first, with no obligation.
              </p>

              {/* Button */}
              <a
                href="#planner"
                className="
                  !font-avenir
                  mt-[35px]
                  inline-flex
                  h-[48px]
                  w-fit
                  items-center
                  justify-center
                  bg-[#f6b719]
                  px-[28px]
                  text-[12px]
                  font-semibold
                  tracking-[0.02em]
                  text-white
                  transition-colors
                  duration-300
                  hover:bg-[#dfa509]

                  sm:mt-[38px]
                  sm:h-[52px]
                  sm:px-[30px]
                  sm:text-[13px]

                  md:mt-[40px]
                  md:h-[55px]
                  md:px-[32px]
                  md:text-[14px]
                "
              >
                HELP ME PLAN
              </a>
            </div>
          </div>

          {/* =========================
              OVERLAPPING IMAGE
          ========================== */}
          <div
            className="
              relative
              z-10
              mt-[-1px]
              h-[300px]
              w-full
              overflow-hidden

              sm:h-[380px]

              md:absolute
              md:left-0
              md:top-[60px]
              md:mt-0
              md:h-[518px]
              md:w-[60%]

              
            "
          >
            <img
              src="/hmolwyh-fig-1.jpg"
              alt="Tanzania safari dining"
              className="
                h-full
                w-full
                object-cover
                object-center
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
