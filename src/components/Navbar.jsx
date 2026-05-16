"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { FiChevronDown, FiMenu, FiSearch, FiX } from "react-icons/fi";
import { FaPinterestP, FaStar, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoCaretForwardOutline } from "react-icons/io5";

import imaralogo from "@/assets/imaralogo.png";
import PrimaryButton from "./PrimaryButton";

const popularTrips = [
  {
    title: " Family Safari",
    link: "/travelgroup/tanzania-family-safari",
  },
  {
    title: " Luxury Safari",
    link: "/travelgroup/tanzania-luxury-safari",
  },
  {
    title: " Private Safari",
    link: "/travelgroup/tanzania-private-safari",
  },
  {
    title: " Wildlife Safari",
    link: "/travelgroup/tanzania-wildlife-safari",
  },
  {
    title: " Midrange Safari",
    link: "/travelgroup/tanzania-midrange-safari",
  },
  {
    title: " Honeymoon Safari",
    link: "/travelgroup/tanzania-honeymoon-safari",
  },
];

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const searchRef = useRef(null);

  const navRef = useRef(null);
  const [menuTop, setMenuTop] = useState(0);

  const getLink = (item) => {
    switch (item.type) {
      case "package":
        return `/package/${item.slug}`;
      case "safari":
        return `/tanzania-safaris`;
      case "destination":
        // ✅ MANUAL ROUTES

        if (item.title === "EXPLORE TANZANIA") {
          return `/tanzania-destinations`;
        }
        return `/`;
      case "destinationdetails":
        return `/tanzania-destinations/${item.slug}`;
      case "travelguide":
        return `/travel-guide/${item.slug}`;
      case "travelgroup":
        return `/travelgroup/${item.slug}`;
      case "kilimanjaro":
        if (item.title === "MOUNT KILIMANJARO CLIMBING") {
          return `/mount-kilimanjaro`;
        }
      case "zanzibar":
        if (item.title === "ZANZIBAR BEACH HOLIDAYS") {
          return `/zanzibar-beach`;
        }
      case "fleet":
        return `/safari-fleet`;
      case "about":
        return `/about-us`;

      default:
        return "/";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (query.length < 2) return;

    router.push(`/search?q=${query}`);
    setShowDropdown(false);
  };

  const handleSearch = async (value) => {
    setQuery(value);

    // ✅ FIX: clear everything when input is empty
    if (value.length < 2) {
      setResults([]); // clear old data
      setShowDropdown(false); // close dropdown
      return;
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/search?q=${value}`,
    );
    const data = await res.json();

    setResults(data);
    setShowDropdown(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // small delay to avoid React event conflict
      setTimeout(() => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
          setShowDropdown(false);
        }
      }, 0);
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      setShowDropdown(false);
    }
  }, [query]);

  useEffect(() => {
    setQuery("");
    setResults([]);
    setShowDropdown(false);
  }, [pathname]);

  useEffect(() => {
    const updateTop = () => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();

        setMenuTop(rect.bottom);
      }
    };

    updateTop();

    window.addEventListener("scroll", updateTop);
    window.addEventListener("resize", updateTop);

    return () => {
      window.removeEventListener("scroll", updateTop);
      window.removeEventListener("resize", updateTop);
    };
  }, []);

  const groupedResults = results.reduce((acc, item) => {
    if (!acc[item.type]) {
      acc[item.type] = [];
    }

    acc[item.type].push(item);

    return acc;
  }, {});

  const isActive = (path) => pathname === path;

  const menuItems = [
    // { title: "DESTINATIONS", path: "/tanzania-destinations" },
    {
      title: "DESTINATIONS",
      path: "/tanzania-destinations",
      megaMenu: true,
      leftLinks: [
        {
          label: "Kilimanjaro National Park",
          path: "/tanzania-destinations/kilimanjaro-national-park",
        },
        {
          label: "Serengeti National Park",
          path: "/tanzania-destinations/serengeti-national-park",
        },
        {
          label: "Ngorongoro Crater",
          path: "/tanzania-destinations/ngorongoro-crater",
        },
        {
          label: "Tarangire National Park",
          path: "/tanzania-destinations/tarangire-national-park",
        },
        { label: "Lake Natron", path: "/tanzania-destinations/lake-natron" },
        {
          label: "Mkomazi National Park",
          path: "/tanzania-destinations/mkomazi-national-park",
        },
        {
          label: "Lake Manyara National Park",
          path: "/tanzania-destinations/lake-manyara-national-park",
        },
        {
          label: "Arusha National Park",
          path: "/tanzania-destinations/arusha-national-park",
        },

        {
          label: "Mikumi National Park",
          path: "/tanzania-destinations/mikumi-national-park",
        },

        {
          label: "Ruaha National Park",
          path: "/tanzania-destinations/ruaha-national-park",
        },
        {
          label: "Nyerere National Park",
          path: "/tanzania-destinations/nyerere-national-park",
        },
        {
          label: "Udzungwa Mountains National Park",
          path: "/tanzania-destinations/udzungwa-mountains-national-park",
        },
      ],
    },
    {
      title: "SAFARI",
      path: "/tanzania-safaris",
      megaMenu: true,
      leftLinks: [
        {
          label: "14 Days Mid-range Wildlife Drive-in Safari",
          path: "/package/14-days-mid-range-wildlife-drive-in-safari",
        },
        {
          label: "8 Days Fly-In Drive-Out Budget Cultural Safari",
          path: "/package/8-days-fly-in-drive-out-budget-cultural-safari",
        },
        {
          label: "7 Days Wildlife Budget Cultural Fly in Safari",
          path: "/package/7-days-wildlife-budget-cultural-fly-in-safari",
        },
        {
          label: "12 Days Mid-Range Cultural Drive in Safari",
          path: "/package/12-days-mid-range-cultural-drive-in-safari",
        },
        {
          label: "9 Days Drive-in Drive-out Budget Wildlife Safari",
          path: "/package/9-days-drive-in-drive-out-budget-wildlife-safari",
        },
        {
          label: "7 Days Drive-In Drive-Out Luxury Safari",
          path: "/package/7-days-drive-in-drive-out-luxury-safari",
        },
        {
          label: "6 Days Drive-in Drive Out Mid-Range Wildlife Safari",
          path: "/package/6-days-drive-in-drive-out-mid-range-wildlife-safari",
        },
        {
          label: "5 Days Cultural Budget Fly-in- Safari",
          path: "/package/5-days-cultural-budget-fly-in-safari",
        },
        {
          label: "Lake Manyara National Park Day Trip",
          path: "/package/lake-manyara-national-park-day-trip",
        },
        {
          label: "Maasai Boma Day Trip Arusha",
          path: "/package/maasai-boma-day-trip-arusha",
        },

        {
          label: "3-Days Tanzania Safari",
          path: "/package/3-days-tanzania-safari",
        },
        // { label: "Ngorongoro day trip", path: "/package/ngorongoro-day-trip" },
        // {
        //   label: "Arusha National Park Day Trip",
        //   path: "/package/arusha-national-park-day-trip",
        // },
        // {
        //   label: "Tarangire National Park Day Trip",
        //   path: "/package/tarangire-national-park-day-trip",
        // },
        // { label: "Arusha City Tour", path: "/package/arusha-city-tour" },
        // {
        //   label: "Materuni Hot Spring Day Trip",
        //   path: "/package/materuni-hot-spring-day-trip",
        // },
      ],
      cards: [
        {
          title: "Luxury Safari",
          desc: "Explore Tanzania in style",
          image: "/menu1.jpg",
          path: "/travelgroup/tanzania-luxury-safari",
        },
        {
          title: "Family Safari",
          desc: "Perfect trips for families",
          image: "/menu2.jpg",
          path: "/travelgroup/tanzania-family-safari",
        },
        {
          title: "Wildlife Safari",
          desc: "Witness the Big Five",
          image: "/menu3.jpg",
          path: "/travelgroup/tanzania-wildlife-safari",
        },
      ],
    },

    // { title: "SAFARI", path: "/tanzania-safaris" },
    // { title: "KILIMANJARO", path: "/mount-kilimanjaro" },
    {
      title: "KILIMANJARO",
      path: "/mount-kilimanjaro",
      megaMenu: true,
      leftLinks: [
        {
          label: "9 Days Northern Circuit Route",
          path: "/package/9-days-northern-circuit-route",
        },
        {
          label: "8 Days Lemosho Route",
          path: "/package/8-days-lemosho-route",
        },
        {
          label: "7 Days Umbwe Route",
          path: "/package/7-days-umbwe-route",
        },
        {
          label: "8 Days Rongai Route",
          path: "/package/8-days-rongai-route",
        },
        {
          label: "7 Days Machame Route",
          path: "/package/7-days-machame-route",
        },
        {
          label: "6 Days Marangu Route",
          path: "/package/6 Days Marangu Route",
        },
      ],
      cards: [
        {
          title: "Kilimanjaro Climbing",
          desc: "Explore Tanzania in style",
          image: "/mount-mega.webp",
          path: "/mount-kilimanjaro",
        },
        {
          title: "Klimanjaro Guide",
          desc: "Witness the Big Five",
          image: "/guide-megamenu.webp",
          path: "/kilimanjaro-travel-guide",
        },
      ],
    },
    { title: "ZANZIBAR", path: "/zanzibar-beach" },

    {
      title: "TRAVEL STYLES",
      path: "#",
      megaMenu: true,

      cards: [
        {
          title: "Tanzania Family Safari",
          desc: "Explore Tanzania in style",
          image:
            "https://res.cloudinary.com/dq0ug85oe/image/upload/v1766137278/imarakileleni_uploads/w6zr4jk8uyqgen3kjwpz.webp",
          path: "/travelgroup/tanzania-family-safari",
        },
        {
          title: "Tanzania Luxury Safari",
          desc: "Perfect trips for families",
          image:
            "https://res.cloudinary.com/dq0ug85oe/image/upload/v1766142715/imarakileleni_uploads/zzkwoahg7qe4c24ztnzz.webp",
          path: "/travelgroup/tanzania-luxury-safari",
        },
        {
          title: "Tanzania Private Safari",
          desc: "Witness the Big Five",
          image:
            "https://res.cloudinary.com/dq0ug85oe/image/upload/v1766230333/imarakileleni_uploads/k7ag4jucahqvxrbqmbht.webp",
          path: "/travelgroup/tanzania-private-safari",
        },
        {
          title: "Tanzania Wildlife Safari",
          desc: "Explore Tanzania in style",
          image:
            "https://res.cloudinary.com/dq0ug85oe/image/upload/v1766155003/imarakileleni_uploads/y5ggxzr1i41fzvyovduk.webp",
          path: "/travelgroup/tanzania-wildlife-safari",
        },
        {
          title: "Tanzania Midrange Safari",
          desc: "Perfect trips for families",
          image:
            "https://res.cloudinary.com/dq0ug85oe/image/upload/v1766157623/imarakileleni_uploads/fwgfwaprlrywkeeg8tmi.webp",
          path: "/travelgroup/tanzania-midrange-safari",
        },
        {
          title: "Tanzania Honeymoon Safari",
          desc: "Witness the Big Five",
          image:
            "https://res.cloudinary.com/dq0ug85oe/image/upload/v1766157705/imarakileleni_uploads/yeotxqql71x5no7epzrs.webp",
          path: "/travelgroup/tanzania-honeymoon-safari",
        },
      ],
    },

    // {
    //   title: "ABOUT IMARA",
    //   links: [
    //     { label: "About us", path: "/about-us" },
    //     { label: "Safari Fleet", path: "/safari-fleet" },
    //     { label: "Sustainability", path: "/sustainability" },
    //     { label: "Core Values", path: "/core-values" },
    //   ],
    // },
    {
      title: "ABOUT IMARA",
      path: "/about-us",
      megaMenu: true,
      leftLinks: [
        {
          label: "About Us",
          path: "/about-us",
        },
        {
          label: "Safari Fleet",
          path: "/safari-fleet",
        },
        {
          label: "Sustainability",
          path: "/sustainability",
        },
        {
          label: "Core Values",
          path: "/core-values",
        },
      ],
      cards: [
        {
          title: "Our Team",
          desc: "People Behind Safaris",
          image:
            "https://media.istockphoto.com/id/514632058/photo/lions-on-african-safari-in-tanzania.jpg?s=612x612&w=0&k=20&c=tZ2hwpz8Uub6p2dPcUk02qf1qLFEmcCvg4S4cU0fgt4=",
          path: "/team",
        },
        {
          title: "Safari Fleet",
          desc: "Built for Rugged Roads",
          image:
            "https://res.cloudinary.com/dq0ug85oe/image/upload/v1766502250/imarakileleni_uploads/up869so8a9lzobojlsxf.webp",
          path: "/safari-fleet",
        },
        {
          title: "Sustainability",
          desc: "Travel With Care",
          image:
            "https://res.cloudinary.com/dq0ug85oe/image/upload/v1766153262/imarakileleni_uploads/b9knsdoni8grrxcznqx2.webp",
          path: "/sustainability",
        },
        {
          title: "Core Values",
          desc: "Guided by Purpose",
          image: "/corevalue-megamenu.webp",
          path: "/core-values",
        },
      ],
    },
  ];

  return (
    <>
      {/* Top Bar */}
      <header className="w-full bg-white shadow-sm">
        <div className="hidden xl:flex justify-end items-center text-[12px] text-[#444] py-2 pt-4 max-w-[1300px] mx-auto px-4 space-x-4 border-b border-gray-100">
          <Link
            href="/blog"
            className={`hover:underline ${
              isActive("/blog")
                ? "text-[#d87028] font-semibold"
                : "text-gray-600"
            }`}
          >
            Blog
          </Link>
          <Link
            href="/contact-us"
            className={`hover:underline ${
              isActive("/contact-us")
                ? "text-[#d87028] font-semibold"
                : "text-gray-600"
            }`}
          >
            Contact Us
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
      <nav ref={navRef} className="sticky top-0 z-50 w-full bg-white ">
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
              // <li
              //   key={index}
              //   className={`relative cursor-pointer hover:text-orange-600 ${
              //     item.links ? "group" : ""
              //   }`}
              //   onMouseEnter={() => item.links && setOpenMenu(index)}
              //   onMouseLeave={() => setOpenMenu(null)}
              // >
              <li
                key={index}
                className="relative"
                onMouseEnter={() => setOpenMenu(index)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <div
                  className={`flex items-center uppercase ${
                    item.path && isActive(item.path)
                      ? "text-[#d87028]"
                      : "hover:text-orange-600"
                  }`}
                >
                  {/* {item.path ? (
                    <Link href={item.path} className=" uppercase">
                      {item.title}
                    </Link>
                  ) : (
                    item.title
                  )} */}

                  <Link href={item.path || "#"} className="uppercase">
                    {item.title}
                  </Link>
                  {item.links && <FiChevronDown className="ml-1" />}
                </div>

                {/* ===== MEGA MENU ===== */}
                {item.megaMenu && openMenu === index && (
                  <>
                    {/* HOVER BRIDGE */}
                    <div
                      className="absolute left-0 top-full h-[30px] w-full z-40"
                      onMouseEnter={() => setOpenMenu(index)}
                    />

                    {/* ===== DESTINATIONS MENU ===== */}
                    {item.title === "DESTINATIONS" ||
                    item.title === "SAFARI" ? (
                      <div
                        onMouseEnter={() => setOpenMenu(index)}
                        style={{ top: `${menuTop}px` }}
                        className="fixed left-0  w-full bg-white shadow-2xl border-t border-gray-100 z-50"
                      >
                        <div className="max-w-[1300px] mx-auto px-6 py-10">
                          <div className="grid grid-cols-12 gap-10 h-[300px]">
                            {/* LEFT CONTENT */}
                            <div className="col-span-8">
                              <div className="flex items-center gap-3 mb-8">
                                {/* <h3 className="text-lg text-[#111]">
                                  {item.title === "DESTINATIONS"
                                    ? "Tanzania Destinations"
                                    : "Tanzania Safari"}
                                </h3> */}
                                <Link
                                  href={
                                    item.title === "DESTINATIONS"
                                      ? "/tanzania-destinations"
                                      : "/tanzania-safaris"
                                  }
                                  onClick={() => setOpenMenu(null)}
                                  className=" flex gap-x-3 items-center text-lg text-[#111]  hover:text-[#d87029] transition"
                                >
                                  <h3 className=" uppercase">
                                    {item.title === "DESTINATIONS"
                                      ? "Tanzania Destinations"
                                      : "Tanzania Safari"}
                                  </h3>
                                  <span className="text-2xl">›</span>
                                </Link>
                              </div>

                              <div className="grid grid-cols-3 gap-x-16 gap-y-5">
                                {item.leftLinks.map((link, idx) => (
                                  <Link
                                    key={idx}
                                    href={link.path}
                                    onClick={() => setOpenMenu(null)}
                                    className=" text-[15px] text-[#444] hover:text-[#d87029] transition"
                                  >
                                    {link.label}
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* RIGHT IMAGE */}
                            <div className="col-span-4 relative rounded-md overflow-hidden">
                              <Image
                                src={
                                  item.title === "DESTINATIONS"
                                    ? "/dest-megamenu.webp"
                                    : "/safa-megamenu.webp"
                                }
                                alt={
                                  item.title === "DESTINATIONS"
                                    ? "Tanzania Destinations"
                                    : "Tanzania Safari"
                                }
                                fill
                                className="object-cover"
                              />

                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                                <h2 className="text-4xl capitalize mb-5">
                                  {item.title === "DESTINATIONS"
                                    ? "Tanzania "
                                    : " Safari"}
                                </h2>

                                <Link
                                  href={
                                    item.title === "DESTINATIONS"
                                      ? "/tanzania-destinations"
                                      : "/tanzania-safaris"
                                  }
                                  onClick={() => setOpenMenu(null)}
                                  className="bg-[#d87028] text-white px-[21px] font-semibold py-3 rounded-full font-semibold hover:bg-[#eb8034de] transition cursor-pointer "
                                >
                                  Find Out More
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : item.title === "KILIMANJARO" ? (
                      <div
                        onMouseEnter={() => setOpenMenu(index)}
                        style={{ top: `${menuTop}px` }}
                        className="fixed left-0  w-full bg-white shadow-2xl border-t border-gray-100 z-50"
                      >
                        <div className="max-w-[1300px] mx-auto px-6 py-10">
                          <div className="grid grid-cols-12 gap-6 h-[300px]">
                            {/* LEFT CONTENT */}
                            <div className=" col-span-5">
                              <div className="flex items-center gap-3 mb-8">
                                <Link
                                  href={"/mount-kilimanjaro"}
                                  onClick={() => setOpenMenu(null)}
                                  className=" flex gap-x-3 items-center text-lg text-[#111]  hover:text-[#d87029] transition"
                                >
                                  <h3 className=" uppercase">
                                    Mount Kilimanjaro
                                  </h3>
                                  <span className="text-2xl">›</span>
                                </Link>
                              </div>

                              {/* 2 COLUMN LINKS */}
                              <div className="grid grid-cols-2 gap-x-10 gap-y-5">
                                {item.leftLinks.map((link, idx) => (
                                  <Link
                                    key={idx}
                                    href={link.path}
                                    onClick={() => setOpenMenu(null)}
                                    className="text-[15px] text-[#444] hover:text-[#d87029] transition"
                                  >
                                    {link.label}
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* RIGHT IMAGES */}
                            <div className=" col-span-7">
                              <div className=" grid grid-cols-2 gap-6">
                                {item.cards.map((card, idx) => (
                                  <Link
                                    key={idx}
                                    href={card.path}
                                    onClick={() => setOpenMenu(null)}
                                    className="relative min-h-[300px] rounded-md overflow-hidden group"
                                  >
                                    <Image
                                      src={card.image}
                                      alt={card.title}
                                      fill
                                      className="object-cover group-hover:scale-105 transition duration-500"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                                      <h3 className="text-2xl capitalize mb-3">
                                        {card.title}
                                      </h3>

                                      <span className="bg-[#d87028] text-white px-5 py-2 rounded-full text-sm font-semibold">
                                        Find Out More
                                      </span>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : item.title === "TRAVEL STYLES" ? (
                      <div
                        onMouseEnter={() => setOpenMenu(index)}
                        style={{ top: `${menuTop}px` }}
                        className="fixed left-0  w-full bg-white shadow-2xl border-t border-gray-100 z-50"
                      >
                        <div className="max-w-[1300px] mx-auto px-6 py-10 ">
                          {/* TITLE */}

                          {/* 6 CARDS */}
                          <div className="grid grid-cols-3 gap-5">
                            {item.cards.map((card, idx) => (
                              <Link
                                key={idx}
                                href={card.path}
                                onClick={() => setOpenMenu(null)}
                                className="group overflow-hidden rounded-md"
                              >
                                <div className="relative h-[140px] rounded-md overflow-hidden">
                                  <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-500"
                                  />

                                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                                  <div className="absolute inset-0 flex items-end justify-center text-center text-white p-4">
                                    <h4 className="text-2xl capitalize ">
                                      {card.title}
                                    </h4>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        onMouseEnter={() => setOpenMenu(index)}
                        style={{ top: `${menuTop}px` }}
                        className="fixed left-0  w-full bg-white shadow-2xl border-t border-gray-100 z-50"
                      >
                        <div className="max-w-[1300px] mx-auto px-6 py-10">
                          <div className="grid grid-cols-4 gap-6">
                            {item.cards.map((card, idx) => (
                              <Link
                                key={idx}
                                href={card.path}
                                onClick={() => setOpenMenu(null)}
                                className="group rounded-md overflow-hidden bg-black"
                              >
                                {/* IMAGE */}
                                <div className="relative h-[220px] overflow-hidden">
                                  <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-500"
                                  />
                                </div>

                                {/* BOTTOM CONTENT */}
                                <div className="bg-[#d87029] px-5 py-3 ">
                                  <h3 className="text-white text-lg uppercase tracking-wide ">
                                    {card.title}
                                  </h3>

                                  <p className="text-white text-sm leading-relaxed">
                                    {card.desc}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                          {/* <div className="grid grid-cols-12 gap-10">
                           
                            <div className="col-span-3 border-r border-gray-200 pr-8">
                              <div className="space-y-5">
                                {item.leftLinks.map((link, idx) => (
                                  <Link
                                    key={idx}
                                    href={link.path}
                                    onClick={() => setOpenMenu(null)}
                                    className="block text-[16px] font-medium text-[#444] hover:text-[#d87028] transition"
                                  >
                                    {link.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                            <div className="col-span-9">
                              <div className="grid grid-cols-3 gap-6">
                                {item.cards.map((card, idx) => (
                                  <Link
                                    key={idx}
                                    href={card.path}
                                    onClick={() => setOpenMenu(null)}
                                    className="group rounded-md overflow-hidden bg-black"
                                  >
                               
                                    <div className="relative h-[220px] overflow-hidden">
                                      <Image
                                        src={card.image}
                                        alt={card.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition duration-500"
                                      />
                                    </div>

                                  
                                    <div className="bg-[#d87029] px-5 py-3">
                                      <h3 className="text-white text-lg  ">
                                        {card.title}
                                      </h3>

                                      <p className="text-white text-sm leading-relaxed">
                                        {card.desc}
                                      </p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* NORMAL DROPDOWN */}
                {item.links && !item.megaMenu && openMenu === index && (
                  <ul className="absolute top-10 left-0 bg-white shadow-lg rounded-xl py-3 w-64 text-gray-700 z-50">
                    {item.links.map((link, idx) => (
                      <li
                        key={idx}
                        className={`px-5 py-3 text-[13px] uppercase ${
                          isActive(link.path)
                            ? "text-[#d87028] font-bold"
                            : "hover:bg-orange-50 hover:text-orange-600"
                        }`}
                      >
                        <Link href={link.path}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Right Section */}
          <div className="hidden xl:flex items-center space-x-4">
            <div ref={searchRef} className="relative">
              <form onSubmit={handleSubmit} className="relative w-full">
                <input
                  type="text"
                  placeholder="Find and book your ...."
                  value={query}
                  onFocus={() => setShowDropdown(true)}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="border border-[#d87029] px-4 pr-10 py-2 rounded-full w-full
    focus:outline-none focus:ring-1 focus:ring-[#d97129] focus:border-[#d97129]"
                />

                {/* 🔍 Search Icon Button */}
                <button
                  type="submit"
                  className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 bg-[#d87029] text-white p-2.5  rounded-full  "
                >
                  <FiSearch size={22} />
                </button>
              </form>

              {showDropdown && (
                <div className="absolute z-50 right-0 mt-4.5 w-[600px] bg-white border-b border-b-[#d87029]/20 rounded-b-sm  p-8 shadow-2xl z-50 max-h-[80vh] overflow-y-auto">
                  {/* ===== DEFAULT CONTENT ===== */}
                  {query.length < 2 ? (
                    <>
                      <h3 className="text-xl  mb-8">Start Tanzania Travel</h3>
                      <div className="grid grid-cols-3 gap-2 mb-12">
                        <Link
                          onClick={() => setShowDropdown(false)}
                          href="/tanzania-destinations"
                          className=""
                        >
                          <div className=" flex items-center border gap-2 rounded-md border-[#d87029]/10 hover:bg-[#f9f6f4] p-4 font-semibold">
                            <Image
                              src="/destinat.png"
                              alt="Imara Kileleni Safaris"
                              width={180}
                              height={60}
                              priority
                              className="h-8 w-auto"
                            />
                            <h4>Destinations</h4>
                          </div>
                        </Link>
                        <Link
                          onClick={() => setShowDropdown(false)}
                          href="/tanzania-safaris"
                        >
                          <div className=" flex items-center border gap-2 rounded-md border-[#d87029]/10 hover:bg-[#f9f6f4] p-4 font-semibold">
                            <Image
                              src="/safaril.png"
                              alt="Imara Kileleni Safaris"
                              width={180}
                              height={60}
                              priority
                              className="h-10 w-auto"
                            />
                            <h4>Safari</h4>
                          </div>
                        </Link>
                        <Link
                          onClick={() => setShowDropdown(false)}
                          href="/mount-kilimanjaro"
                        >
                          <div className=" flex items-center border gap-2 rounded-md border-[#d87029]/10 hover:bg-[#f9f6f4] p-4 font-semibold">
                            <Image
                              src="/kilimanj.png"
                              alt="Imara Kileleni Safaris"
                              width={180}
                              height={60}
                              priority
                              className="h-10 w-auto"
                            />
                            <h4>Kilimanjaro</h4>
                          </div>
                        </Link>
                        <Link
                          onClick={() => setShowDropdown(false)}
                          href="/zanzibar-beach"
                        >
                          <div className=" flex items-center border gap-2 rounded-md border-[#d87029]/10 hover:bg-[#f9f6f4] p-4 font-semibold">
                            <Image
                              src="/zanzibarb.png"
                              alt="Imara Kileleni Safaris"
                              width={180}
                              height={80}
                              priority
                              className="h-10 w-auto"
                            />
                            <h4>Zanzibar</h4>
                          </div>
                        </Link>
                        <Link
                          onClick={() => setShowDropdown(false)}
                          href="/about-us"
                        >
                          <div className=" flex items-center border gap-2 rounded-md border-[#d87029]/10 hover:bg-[#f9f6f4] p-4 font-semibold">
                            <Image
                              src="/aboutu.png"
                              alt="Imara Kileleni Safaris"
                              width={180}
                              height={60}
                              priority
                              className="h-10 w-auto"
                            />
                            About us
                          </div>
                        </Link>
                        <Link
                          onClick={() => setShowDropdown(false)}
                          href="/blog"
                        >
                          <div className=" flex items-center border gap-2 rounded-md border-[#d87029]/10 hover:bg-[#f9f6f4] p-4 font-semibold">
                            <Image
                              src="/blogl.png"
                              alt="Imara Kileleni Safaris"
                              width={180}
                              height={60}
                              priority
                              className="h-10 w-auto"
                            />
                            <h4>Blog</h4>
                          </div>
                        </Link>
                      </div>

                      {/* Popular Trips */}
                      <h3 className="text-xl mb-5">Popular Tanzania Safari</h3>

                      <div className=" grid grid-cols-2 space-y-4 ">
                        {popularTrips.map((trip, index) => (
                          <div key={index} className="flex items-center  gap-4">
                            <Link
                              onClick={() => setShowDropdown(false)}
                              href={trip.link}
                              className=" hover:text-[#d87029] transition text-sm text-[#444]"
                            >
                              {trip.title}
                            </Link>

                            {/* Stars */}
                            <div className="flex text-sm text-[#d87029]">
                              {[...Array(5)].map((_, i) => (
                                <FaStar key={i} />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      {/* ===== SEARCH RESULTS ===== */}

                      <div className="space-y-8">
                        {Object.keys(groupedResults).length > 0 ? (
                          Object.entries(groupedResults).map(
                            ([type, items]) => (
                              <div key={type}>
                                {/* Group Heading */}
                                <h3 className="text-xl capitalize mb-4">
                                  {items[0]?.label || type}
                                </h3>

                                {/* Group Items */}
                                <div className="space-y-1">
                                  {items.map((item, i) => (
                                    <Link
                                      key={i}
                                      href={getLink(item)}
                                      onClick={() => setShowDropdown(false)}
                                    >
                                      <div className="px-4 py-2 rounded-xl hover:bg-gray-100 hover:text-[#d87029] cursor-pointer transition">
                                        <p className="">
                                          {item.title
                                            .toLowerCase()
                                            .replace(/\b\w/g, (char) =>
                                              char.toUpperCase(),
                                            )}
                                        </p>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ),
                          )
                        ) : (
                          <p className="text-gray-500">No results found</p>
                        )}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* <a
              href="https://wa.me/255748002696"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#d97129] rounded-full p-2"
            >
              <FaWhatsapp className="text-[#d97129]" size={22} />
            </a> */}

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
            Plan A Trip
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
              <a
                href="https://www.pinterest.com/imarakilelenisafaris/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#d87028] hover:bg-[#c35f22] transition"
                aria-label="YouTube"
              >
                <FaPinterestP className="text-white" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
