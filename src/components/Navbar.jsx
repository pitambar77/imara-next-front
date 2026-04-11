"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoCaretForwardOutline } from "react-icons/io5";

import imaralogo from "@/assets/imaralogo.png";
import PrimaryButton from "./PrimaryButton";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  const menuItems = [
    { title: "DESTINATIONS", path: "/tanzania-destinations" },
    { title: "SAFARI", path: "/tanzania-safaris" },
    { title: "KILIMANJARO", path: "/mount-kilimanjaro" },
    { title: "ZANZIBAR", path: "/zanzibar-beach" },
    {
      title: "TRAVEL STYLES",
      links: [
        {
          label: "Tanzania Family Safari",
          path: "/travelgroup/tanzania-family-safari",
        },
        {
          label: "Tanzania Luxury Safari",
          path: "/travelgroup/tanzania-luxury-safari",
        },
        {
          label: "Tanzania Private Safari",
          path: "/travelgroup/tanzania-private-safari",
        },
        {
          label: "Tanzania Wildlife Safari",
          path: "/travelgroup/tanzania-wildlife-safari",
        },
        {
          label: "Tanzania Midrange Safari",
          path: "/travelgroup/tanzania-midrange-safari",
        },
        {
          label: "Tanzania Honeymoon Safari",
          path: "/travelgroup/tanzania-honeymoon-safari",
        },
      ],
    },
    {
      title: "ABOUT IMARA",
      links: [
        { label: "About us", path: "/about-us" },
        { label: "Safari Fleet", path: "/safari-fleet" },
        { label: "Sustainability", path: "/sustainability" },
        { label: "Core Values", path: "/core-values" },
      ],
    },
  ];

  return (
    <>
      {/* Top Bar */}
      <header className="w-full bg-white shadow-sm">
        <div className="hidden xl:flex justify-end items-center text-[12px] text-[#444] py-2 pt-4 max-w-[1300px] mx-auto px-4 space-x-4 border-b border-gray-100">
          <Link
            href="/contact-us"
            className={`hover:underline ${
              isActive("/contact-us")
                ? "text-[#d87028] font-semibold"
                : "text-gray-600"
            }`}
          >
            Contact us
          </Link>

          <Link
            href="/tanzania-travel-guide"
            className={`hover:underline ${
              isActive("/tanzania-travel-guide")
                ? "text-[#d87028] font-semibold"
                : "text-gray-600"
            }`}
          >
            Tanzania Travel Guide
          </Link>

          <Link
            href="/kilimanjaro-travel-guide"
            className={`hover:underline ${
              isActive("/kilimanjaro-travel-guide")
                ? "text-[#d87028] font-semibold"
                : "text-gray-600"
            }`}
          >
            Kilimanjaro Guide
          </Link>
        </div>
      </header>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-white">
        <div className="flex items-center justify-between max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={imaralogo}
              alt="Imara Kileleni Safaris"
              width={180}
              height={60}
              priority
              className="h-10 sm:h-11 md:h-12 w-auto"
            />
          </Link>
          {/* Desktop Menu */}
          <ul className="hidden xl:flex space-x-6 font-semibold text-sm text-gray-800 relative">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`relative cursor-pointer hover:text-orange-600 ${
                  item.links ? "group" : ""
                }`}
                onMouseEnter={() => item.links && setOpenMenu(index)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <div
                  className={`flex items-center uppercase ${
                    item.path && isActive(item.path)
                      ? "text-[#d87028]"
                      : "hover:text-orange-600"
                  }`}
                >
                  {item.path ? (
                    <Link href={item.path} className=" uppercase">
                      {item.title}
                    </Link>
                  ) : (
                    item.title
                  )}

                  {item.links && <FiChevronDown className="ml-1" />}
                </div>

                {/* {item.links && openMenu === index && (
                  <ul className="absolute top-5 left-0 bg-white shadow-lg  rounded-md py-2 w-56 text-gray-700 animate-fade-in">
                    {item.links.map((link, idx) => (
                      <li
                        key={idx}
                        className={`px-4 py-2 text-[13px] uppercase ${
                          isActive(link.path)
                            ? "text-[#d87028] font-bold"
                            : "hover:bg-orange-50 hover:text-orange-600"
                        }`}
                      >
                        <Link href={link.path}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                )} */}
                {item.links && openMenu === index && (
                  <ul className="absolute top-5 left-0 bg-white shadow-lg  rounded-md py-2 w-56 text-gray-700 animate-fade-in">
                    {item.links.map((link, idx) => (
                      <li
                        key={idx}
                        className={`px-4 py-2 text-[13px] uppercase ${
                          isActive(link.path)
                            ? "text-[#d87028] font-bold"
                            : "hover:bg-orange-50 hover:text-orange-600"
                        }`}
                      >
                        {typeof link === "string" ? (
                          link
                        ) : (
                          <Link href={link.path} className=" uppercase">
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Right Section */}
          <div className="hidden xl:flex items-center space-x-4">
            <a
              href="https://wa.me/255748002696"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#d97129] rounded-full p-2"
            >
              <FaWhatsapp className="text-[#d97129]" size={22} />
            </a>

            <PrimaryButton href="/tailor-made-form">Plan A Trip</PrimaryButton>
          </div>

          {/* Mobile Toggle */}
          <button
            className="xl:hidden text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}

      {mobileOpen && (
        <div className="xl:hidden bg-white w-full uppercase font-semibold px-4 py-4 shadow-lg animate-slide-down">
          {menuItems.map((item, index) => (
            <div key={index} className="border-b border-gray-200 py-3">
              <div className="flex justify-between items-center uppercase font-semibold">
                {item.links ? (
                  <button
                    onClick={() =>
                      setOpenMenu(openMenu === index ? null : index)
                    }
                    className="w-full text-left font-semibold flex justify-between items-center"
                  >
                    {item.title}
                    <FiChevronDown
                      className={`transition-transform ${
                        openMenu === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`w-full font-semibold ${
                      isActive(item.path) ? "text-[#d87028]" : "text-gray-800"
                    }`}
                  >
                    <span className=" uppercase font-semibold">
                      {" "}
                      {item.title}{" "}
                    </span>
                  </Link>
                )}
              </div>

              {item.links && openMenu === index && (
                <ul className="pl-4 pb-2 space-y-3 mt-3  uppercase font-semibold">
                  {item.links.map((link, idx) => (
                    <li key={idx} className="hover:text-orange-600 transition">
                      <Link
                        href={link.path}
                        onClick={() => {
                          setMobileOpen(false);
                          setOpenMenu(null);
                        }}
                        className={`flex items-center gap-3 ${
                          isActive(link.path)
                            ? "text-[#d87028]"
                            : "text-gray-800"
                        }`}
                        // className="flex items-center gap-3"
                      >
                        {/* Common Icon */}
                        <IoCaretForwardOutline className="text-[#d87028] text-sm shrink-0" />

                        {/* Label */}
                        <span className=" font-semibold">{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* ===== Mobile Extra Links ===== */}
          <div className=" mb-3 space-y-2">
            <Link
              href="/tanzania-travel-guide"
              onClick={() => setMobileOpen(false)}
              className={`block font-semibold border-b border-gray-200 py-3 ${
                isActive("/tanzania-travel-guide")
                  ? "text-[#d87028]"
                  : "text-gray-800"
              }`}
            >
              <span className="uppercase font-semibold">
                Tanzania Travel Guide
              </span>
            </Link>

            <Link
              href="/kilimanjaro-travel-guide"
              onClick={() => setMobileOpen(false)}
              className={`block font-semibold border-b border-gray-200 py-3  ${
                isActive("/kilimanjaro-travel-guide")
                  ? "text-[#d87028]"
                  : "text-gray-800"
              }`}
            >
              <span className=" uppercase font-semibold">
                Kilimanjaro Travel Guide
              </span>
            </Link>

            <Link
              href="/contact-us"
              onClick={() => setMobileOpen(false)}
              className={`block font-semibold border-b border-gray-200 py-3 ${
                isActive("/contact-us") ? "text-[#d87028]" : "text-gray-800"
              }`}
            >
              <span className=" uppercase font-semibold">Contact Us</span>
            </Link>
          </div>
          <button
            onClick={() => {
              navigate("/tanzania-safaris");
              setMobileOpen(false); // ✅ CLOSE MENU
              setOpenMenu(null);
            }}
            className="w-full bg-[#d87028] text-white py-3 rounded-full mt-4 font-semibold cursor-pointer"
          >
            VIEW TRIPS
          </button>
          {/* ===== Mobile Social Icons ===== */}

          <div className="text-sm text-gray-700 space-y-3 text-center py-10">
            <div className="flex justify-center gap-4 text-xl">
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
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#d87028] hover:bg-[#c35f22] transition"
                aria-label="YouTube"
              >
                <FaYoutube className="text-white" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
