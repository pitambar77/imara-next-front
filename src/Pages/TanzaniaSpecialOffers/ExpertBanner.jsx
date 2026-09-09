export default function ExpertBanner() {
  return (
    <section className="relative w-full">
      <div
        className="
          relative
          h-[600px]
          w-full
          bg-cover
          bg-center
          bg-fixed

          md:h-[700px]
        "
        style={{
          backgroundImage: "url('/export-banner-new.webp')",
        }}
      >
        {/* =========================
            MOBILE EXPERT CONTENT
        ========================== */}
        <div
          className="
            absolute
            left-0
            right-0
            top-[45px]
            z-20
            px-[12px]

            md:hidden
          "
        >
          <div
            className="
              w-full
              bg-white
              px-[18px]
              py-[28px]
              shadow-[0_8px_30px_rgba(0,0,0,0.12)]
            "
          >
            {/* Expert Image */}
            <div className="flex justify-center">
              <img
                src="/profile-im.webp"
                alt="Profile Image"
                className="
                  h-[145px]
                  w-[145px]
                  rounded-full
                  object-cover
                "
              />
            </div>

            {/* Expert Information */}
            <div className="mt-[22px] text-center">
              <h2
                className="
                  !font-avenir
                  m-0
                  text-[20px]
                  font-semibold
                  leading-[1.25]
                  text-[#d87028]
                "
              >
                Gervas Ngikari
                <br />
                <span className="text-[#29283b] text-[17px] font-normal leading-[1.4] italic">
                  {" "}
                  Founder, Imara Kileleni Safari
                </span>
              </h2>

              <p
                className="
                  !font-avenir
                  m-0
                  mt-[20px]
                  text-[14px]
                  leading-[1.65]
                  tracking-[0.01em]
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

            {/* Divider */}
            <div className="mt-[25px] h-px w-full bg-[#f0b51b]" />
          </div>
        </div>
      </div>
    </section>
  );
}
