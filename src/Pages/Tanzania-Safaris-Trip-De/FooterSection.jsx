"use client";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer>
      {/* TOP CTA */}
      <div className="bg-gradient-to-r bg-[#d87029] py-12 md:py-20 px-6 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text */}
          <div className="max-w-2xl">
            <h2 className=" !font-cormorant text-[24px] md:text-4xl leading-snug mb-3 text-center md:text-left">
              Ihre einmalige Tansania-Safari beginnt mit einem Gespräch.
            </h2>

            <p className=" !font-avenir text-sm text-center md:text-left opacity-90">
              Die Verfügbarkeit ist begrenzt. Die meisten Reiserouten werden
              8–14 Monate im Voraus gebucht.
            </p>
          </div>

          {/* Button */}
          <div className="w-full md:w-auto">
            <button
              onClick={() => {
                const section = document.getElementById("destinations");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              aria-label="Ihre individuelle Safari erstellen"
              className="w-full md:w-auto text-[#d87028] !font-avenir bg-white px-6 py-3 md:py-2.5 rounded-xs text-xs tracking-[0.72px] md:tracking-[2.4px] uppercase hover:bg-[#f0b184de] hover:text-white transition cursor-pointer shadow duration-300"
            >
              Ihre individuelle Safari erstellen →
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="bg-gradient-to-r from-[#1a0f08] via-[#2a1a0f] to-[#1a0f08] py-6 px-6 text-sm text-gray-400">
        <div className="  max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left */}
          <p className=" order-2 md:order-1 !font-avenir text-center">
            © 2026 Imara Kileleni Safaris. Alle Rechte vorbehalten.
          </p>

          {/* Right */}
          <div className="flex flex-col md:flex-row gap-1.5 md:gap-6 text-center order-1 md:order-2">
            <Link
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className=" !font-avenir hover:text-white transition"
            >
              Datenschutzerklärung
            </Link>
            <Link
              href="/terms-and-conditions"
              target="_blank"
              rel="noopener noreferrer"
              className="!font-avenir hover:text-white transition"
            >
              Allgemeine Geschäftsbedingungen
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
