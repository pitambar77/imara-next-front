"use client";


import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcDiscover,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiChevronDown } from "react-icons/fi";
// import { FaFlagUsa } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import Link from "next/link";
import FooterForm from "./FooterForm";


const Footer = () => {
  const [open, setOpen] = useState({
    help: false,
    plan1: false,
    plan2: false,
  });

  const toggle = (section) => {
    setOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <footer className="w-full">
      <div className=" py-3 bg-[#fff8f2]" />
      {/* Top section */}
      <div className="bg-white pt-8 md:pt-16  max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0">
        <div className=" grid grid-cols-1 md:grid-cols-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 ">
            {/* Column 1 */}
            <div>
              {/* Mobile Dropdown Header */}
              <button
                className="flex md:hidden justify-between items-center w-full font-bold text-lg mb-2"
                onClick={() => toggle("help")}
              >
                Help & Info
                <FiChevronDown
                  className={`transition-transform duration-300 ${
                    open.help ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Desktop Header */}
              <h3 className="hidden md:block font-bold text-lg mb-4 capitalize">
                Quick link
              </h3>

              {/* List */}
              {/* List */}
              <ul
                className={`space-y-2 mb-4 text-gray-700 ${
                  open.help ? "block" : "hidden md:block"
                }`}
              >
                <li>
                  <Link
                    href="/about-us"
                    className="hover:text-[#d87028] transition"
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    href="/tanzania-destinations"
                    className="hover:text-[#d87028] transition"
                  >
                    Tanzania Destinations
                  </Link>
                </li>

                <li>
                  <Link
                    href="/tanzania-safaris"
                    className="hover:text-[#d87028] transition"
                  >
                    Tanzania Safaris
                  </Link>
                </li>

                <li>
                  <Link
                    href="/mount-kilimanjaro"
                    className="hover:text-[#d87028] transition"
                  >
                    Mount Kilimanjaro
                  </Link>
                </li>

                <li>
                  <Link
                    href="/zanzibar-beach"
                    className="hover:text-[#d87028] transition"
                  >
                    Zanzibar Beach
                  </Link>
                </li>

                <li>
                  <Link
                    href="/kilimanjaro-travel-guide"
                    className="hover:text-[#d87028] transition"
                  >
                    Kilimanjaro Travel Guide
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <button
                className="flex md:hidden justify-between items-center w-full font-bold text-lg mb-2"
                onClick={() => toggle("plan1")}
              >
                Travel Planning
                <FiChevronDown
                  className={`transition-transform duration-300 ${
                    open.plan1 ? "rotate-180" : ""
                  }`}
                />
              </button>

              <h3 className="hidden md:block font-bold text-lg mb-4">
                Travel Style
              </h3>

              <ul
                className={`space-y-2 text-gray-700 mb-4 ${
                  open.plan1 ? "block" : "hidden md:block"
                }`}
              >
                <li>
                  <Link
                    href="travelgroup/tanzania-family-safari"
                    className="hover:text-[#d87028] transition"
                  >
                    Family Safari
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    href="/travelgroup/tanzania-luxury-safari"
                    className="hover:text-[#d87028] transition"
                  >
                    Luxury Safari
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    href="/travelgroup/tanzania-private-safari"
                    className="hover:text-[#d87028] transition"
                  >
                    Private Safari
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    href="/travelgroup/tanzania-wildlife-safari"
                    className="hover:text-[#d87028] transition"
                  >
                    Wildlife Safari
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    href="/travelgroup/tanzania-midrange-safari"
                    className="hover:text-[#d87028] transition"
                  >
                    Midrange Safari
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    href="/travelgroup/tanzania-honeymoon-safari"
                    className="hover:text-[#d87028] transition"
                  >
                    Honeymoon Safari
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <button
                className="flex md:hidden justify-between items-center w-full font-bold text-lg mb-2"
                onClick={() => toggle("plan2")}
              >
                Travel Planning
                <FiChevronDown
                  className={`transition-transform duration-300 ${
                    open.plan2 ? "rotate-180" : ""
                  }`}
                />
              </button>

              <h3 className="hidden md:block font-bold text-lg mb-4">
                Tanzania Travel Guide
              </h3>

              <ul
                className={`space-y-2 text-gray-700 mb-4 capitalize ${
                  open.plan2 ? "block" : "hidden md:block"
                }`}
              >
                <li>
                  <Link
                    href="/travel-guide/when-is-the-best-time-to-visit-tanzania"
                    className="hover:text-[#d87028] transition"
                  >
                    Best Time to Visit
                  </Link>
                </li>
                <li>
                  <Link
                    href="/travel-guide/what-to-pack-for-a-tanzania-safari"
                    className="hover:text-[#d87028] transition"
                  >
                    what to pack
                  </Link>
                </li>
                <li>
                  <Link
                    href="/travel-guide/what-to-eat-on-a-tanzania-safari"
                    className="hover:text-[#d87028] transition"
                  >
                    Tanzania food
                  </Link>
                </li>
                <li>
                  <Link
                    href="/travel-guide/what-are-the-requirements-for-a-tanzania-visa"
                    className="hover:text-[#d87028] transition"
                  >
                    Tanzania visa
                  </Link>
                </li>
                <li>
                  <Link
                    href="/travel-guide/how-much-does-it-cost-to-visit-tanzania"
                    className="hover:text-[#d87028] transition"
                  >
                    tanzania cost
                  </Link>
                </li>
                <li>
                  <Link
                    href="/travel-guide/how-safe-is-a-safari-in-tanzania"
                    className="hover:text-[#d87028] transition"
                  >
                    travel safety
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className=" flex md:justify-end justify-center mt-4 md:mt-0">
            {/* Column 4 - Newsletter */}
            <div className=" w-full md:w-2/3 ">
      
             
             <FooterForm/>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className=" my-8 text-sm text-gray-700">
          <p>
            Imara Kileleni Safaris is a proud member of{" "}
            <a href="#" className="underline text-[#d87028]">
              The Travel Corporation
            </a>{" "}
            portfolio of brands.
            <br /># Imara Kileleni Safaris
            <br />
           Kiusa Line Street, Moshi, Kilimanjaro, P.O. Box 623
          </p>
        </div>
      </div>

      
      <div className="bg-[#f9e1d7] py-4">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Region Selector */}
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <IoLocationSharp className="text-3xl" />
            <div className="text-center md:text-left">
              <p className="text-xs text-gray-600">Selected Region</p>
              <p className="font-semibold text-black">Moshi,Tanzania</p>
            </div>
          </div>

          {/* Payment Icons */}
          <div className="text-center text-[10px] font-semibold flex flex-col items-center">
            <div className="flex items-center justify-center gap-4 text-3xl text-gray-600 mb-6">
              <FaCcVisa />
              <FaCcMastercard />
              <FaCcAmex />
              <FaCcDiscover />
              <FaCcMastercard />
            </div>
            <p className="text-[12px] leading-5 px-2">
              Copyright 2026 Imara Kileleni Safaris. All rights reserved.
              <br />
             <a href="https://safarimarketingpro.com/">SAFARI MARKETING PRO® </a> 
            </p>
            {/* <p>is a trademark of The TreadRight Foundation,
              registered in the U.S. and other countries and regions, and is
              being used under license.</p> */}
          </div>

          {/* Social & Links */}
          <div className="text-sm text-gray-700 space-y-3 text-center md:text-right">
            <div className="flex justify-center md:justify-end gap-4 text-xl">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/imarakileleni/?_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#d87028] hover:bg-[#c35f22] transition"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-white" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/imarakileleni/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#d87028] hover:bg-[#c35f22] transition"
                aria-label="Instagram"
              >
                <FaInstagram className="text-white" />
              </a>

              {/* Pinterest */}
              <a
                href="https://x.com/imarakileleni/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#d87028] hover:bg-[#c35f22] transition"
                aria-label="Pinterest"
              >
                <FaXTwitter className="text-white" />
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@imarakilelenisafaris-d3t"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#d87028] hover:bg-[#c35f22] transition"
                aria-label="YouTube"
              >
                <FaYoutube className="text-white" />
              </a>
            </div>

          

            <div className="flex flex-wrap justify-center md:justify-end gap-2 text-sm mt-4 font-semibold">
              <Link href="sustainability" className=" hover:text-[#d87028]">Sustanbility</Link>
              <Link href="core-values" className=" hover:text-[#d87028]">Core Values</Link>
              <Link href="#" className=" hover:text-[#d87028]">Sitemap</Link>
            </div>

            <div className="flex flex-wrap justify-center md:justify-end gap-2 text-sm mt-4 font-semibold ">
              <Link href="terms-and-conditions" className=" hover:text-[#d87028]">Terms and Conditions</Link>
              {/* <a href="#" className=" hover:text-[#d87028]">Booking Conditions</a> */}
               <Link href="privacy-policy" className=" hover:text-[#d87028]">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom orange strip */}
      <div className="bg-[#d87028] py-3 w-full ">
        <div className=" flex items-center gap-4 justify-center">
          <img
            src="https://www.contiki.com/media/xcal1m5i/iata.svg?center=0.5%2C0.5&format=webp&mode=crop&width=600&height=200&quality=80"
            alt=""
            className=" h-8"
          />
          <img
            src="https://www.contiki.com/media/fjzpw34c/treadright-1.svg?center=0.5%2C0.5&format=webp&mode=crop&width=600&height=200&quality=80"
            alt=""
            className=" h-10"
          />
          <img
            src="https://www.contiki.com/media/bj1odtrx/logo_cato_white_export_01-1.svg?center=0.5%2C0.5&format=webp&mode=crop&width=600&height=200&quality=80"
            alt=""
            className="h-6"
          />
          <img
            src="https://www.contiki.com/media/xcal1m5i/iata.svg?center=0.5%2C0.5&format=webp&mode=crop&width=600&height=200&quality=80"
            alt=""
            className=" h-8"
          />
          <img
            src="https://www.contiki.com/media/bj1odtrx/logo_cato_white_export_01-1.svg?center=0.5%2C0.5&format=webp&mode=crop&width=600&height=200&quality=80"
            alt=""
            className="h-6"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
