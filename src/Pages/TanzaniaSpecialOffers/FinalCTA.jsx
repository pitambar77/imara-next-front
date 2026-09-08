import { useEffect, useState } from "react";

export default function FinalCTA() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToForm = () => {
    const section = document.getElementById("parks");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="w-full bg-white py-[20px]">
      <div
        className="
          mx-auto
          w-full
          max-w-[1300px]
          px-[20px]

          sm:px-[40px]

          md:px-[60px]
        "
      >
        {/* =========================
            CTA CONTAINER
        ========================== */}
        <div
          className="
            relative
            flex
            flex-col

            md:min-h-[610px]

            lg:min-h-[730px]
          "
        >
          {/* =========================
              IMAGE
          ========================== */}
          <div
            className="
              relative
              z-10
              order-1
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
              src="/tz-jony.webp"
              alt="Tanzania safari dining"
              className="
                h-full
                w-full
                object-cover
                object-center
              "
            />
          </div>

          {/* =========================
              GREY CONTENT PANEL
          ========================== */}
          <div
            className="
              relative
              z-0
              order-2
              ml-0
              flex
              w-full
              min-h-[300px]
              flex-col
              justify-center
              bg-[#f4f4f4]
              px-[25px]
              py-[45px]

              sm:px-[50px]
              sm:py-[55px]

              md:absolute
              md:right-0
              md:top-0
              md:ml-auto
              md:h-[650px]
              md:w-[47%]
              md:px-0
              md:pl-[85px]
              md:py-[60px]
            "
          >
            <div
              className="
              text-center
              md:text-left
                md:ml-[35px]
                lg:ml-[40px]
        
              "
            >
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
                  text-center
                  md:text-left
                "
              >
                {/* How Many Once
                <br className="hidden md:block" />
                In A Lifetimes
                <br className="hidden md:block" />
                Will You Have? */}
                Your Tanzania Journey Starts With One Conversation
              </h2>

              {/* Description */}
              <p
                className="
                  !font-avenir
                  m-0
                  mt-[25px]
                  max-w-[390px]
                  text-[16px]
                  font-normal
                  leading-[1.55]
                  tracking-[0.02em]
                  text-[#85848b]

                  sm:mt-[28px]
                  sm:text-[16px]

                  md:mt-[30px]
                  md:text-[17px]

                  lg:mt-[32px]
                  lg:text-[17px]
                  text-center
                  md:text-left
                "
              >
                Tell us what you have in mind, and our travel specialists will
                help shape it into a personalized journey — with no pressure and
                no obligation.
              </p>

              {/* Button */}
              <button
                type="button"
                aria-label="Plan my Tanzania safari"
                onClick={handleScrollToForm}
                className="
    !font-avenir
    mt-[35px]
    inline-flex
    w-fit
    cursor-pointer
    items-center
    justify-center
    rounded-[10px]
    bg-[#d87028]
    px-[28px]
    py-2.5
    text-[14px]
    font-semibold
    tracking-[0.02em]
    text-white
    transition-colors
    duration-300
    hover:bg-[#e78e4b]

    sm:mt-[38px]
    sm:px-[30px]
    sm:py-3
    sm:text-[13px]

    md:mt-[40px]
    md:px-[32px]
    md:py-4
    md:text-[14px]
  "
              >
                START PLANNING
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
