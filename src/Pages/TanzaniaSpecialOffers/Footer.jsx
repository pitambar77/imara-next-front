import Link from "next/link";

export default function Footer() {
  return (
    <>
      <section className="w-full bg-[#f7f7f7] px-[25px] py-[30px] sm:px-[40px] sm:py-[35px] md:px-[60px] md:py-[40px]">
        <p
          className="
            !font-avenir
            mx-auto
            max-w-[850px]
            text-center
            text-[9px]
            font-normal
            leading-[1.7]
            tracking-[0.01em]
            text-[#85848b]

            sm:text-[15px]

            md:text-[17px]
          "
        >
          We are committed to delivering an online experience that is always
          improving. By submitting your information, you agree to the use of it
          as described in our{" "}
          <Link href="https://imarakilelenisafaris.com/privacy-policy" className="font-semibold text-[#c3a15b]">privacy policy</Link>{" "}
          so that we can best meet your personal needs. You may opt out of
          receiving communications at any time.
        </p>
      </section>

      {/* =========================
          FOOTER
      ========================== */}
      <footer
        className="
          w-full
          bg-[#2a1a0f]
          px-[20px]
          py-[18px]
          text-center

          sm:py-[20px]
        "
      >
        <p
          className="
            !font-avenir
            m-0
            text-[15px]
            font-normal
            leading-none
            tracking-[0.02em]
            text-white

            sm:text-[17px]
          "
        >
         © 2026 Imara Kileleni Safaris. All rights reserved.
        </p>
      </footer>
    </>
  );
}
