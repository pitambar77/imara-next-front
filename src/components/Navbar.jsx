"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { FaPinterestP, FaStar, FaWhatsapp, FaYoutube } from "react-icons/fa";

import { IoCaretForwardOutline } from "react-icons/io5";

import imaralogo from "@/assets/imaralogo.png";
import PrimaryButton from "./PrimaryButton";
import { ChevronDown, Menu, Search, Star, X } from "lucide-react";

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

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

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
            "/landing-team-members.webp",
          path: "#",
        },
        {
          title: "Safari Fleet",
          desc: "Built for Rugged Roads",
          image:
            "/imara-vechille-2.webp",
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
      <nav ref={navRef} className="sticky top-0 z-[50] w-full bg-white ">
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
                  <Link href={item.path || "#"} className="uppercase">
                    {item.title}
                  </Link>
                  {item.links && <ChevronDown strokeWidth={1.5} />}
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
                  <Search strokeWidth={1.5} />
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
                                <Star  key={i} size={18} className=" fill-[#d87029]" />
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

            <PrimaryButton href="/tailor-made-tours">Plan A Trip</PrimaryButton>
          </div>

          {/* Mobile Toggle */}
          <button
            className="xl:hidden text-2xl "
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}

      {mobileOpen && (
        // <div className="xl:hidden bg-white w-full uppercase font-semibold px-4 py-4 shadow-lg animate-slide-down">
        <div
          className="
      xl:hidden
      fixed
      top-[72px]
      left-0
      w-full
      h-[calc(100vh-72px)]
      overflow-y-auto
      bg-white
      uppercase
      font-semibold
      px-4
      py-4
      shadow-lg
      z-[999]
      animate-slide-down
    "
        >
          {menuItems.map((item, index) => (
            <div key={index} className="border-b border-gray-200 py-2">
              <div className="flex justify-between items-center uppercase ">
                {item.leftLinks || item.cards ? (
                  // <button
                  //   onClick={() =>
                  //     setOpenMenu(openMenu === index ? null : index)
                  //   }
                  //   className="w-full text-left flex justify-between items-center"
                  // >
                  //   {item.title}
                  //   <<ChevronDown strokeWidth={1.5} />
                  //     className={`transition-transform ${
                  //       openMenu === index ? "rotate-180" : ""
                  //     }`}
                  //   />
                  // </button>
                  <div className="w-full flex items-center justify-between">
                    {/* Landing Page Link */}
                    <Link
                      href={item.path || "#"}
                      onClick={() => {
                        setMobileOpen(false);
                        setOpenMenu(null);
                      }}
                      className={`uppercase font-semibold ${
                        isActive(item.path) ? "text-[#d87028]" : "text-gray-800"
                      }`}
                    >
                      {item.title}
                    </Link>

                    {/* Dropdown Toggle */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();

                        setOpenMenu(openMenu === index ? null : index);
                      }}
                      className="p-1"
                    >
                      <ChevronDown
                        strokeWidth={1.5}
                        className={`transition-transform duration-300 ${
                          openMenu === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
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

              {(item.leftLinks || item.cards) && openMenu === index && (
                <ul className="pl-4 pb-2 space-y-2 mt-3 text-sm uppercase font-semibold">
                  {item.leftLinks?.length > 0
                    ? item.leftLinks.map((link, idx) => (
                        <li
                          key={idx}
                          className="hover:text-orange-600 transition"
                        >
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
                          >
                            <IoCaretForwardOutline className="text-[#d87028] text-sm shrink-0" />

                            <span className="text-[12px] font-semibold">
                              {link.label}
                            </span>
                          </Link>
                        </li>
                      ))
                    : item.cards?.map((card, idx) => (
                        <li key={idx}>
                          <Link
                            href={card.path}
                            onClick={() => {
                              setMobileOpen(false);
                              setOpenMenu(null);
                            }}
                            className="flex items-center gap-3 text-gray-800 hover:text-[#d87028]"
                          >
                            <IoCaretForwardOutline className="text-[#d87028] text-sm shrink-0" />

                            <span className="text-[12px] font-medium">
                              {card.title}
                            </span>
                          </Link>
                        </li>
                      ))}
                </ul>
              )}
            </div>
          ))}

          {/* ===== Mobile Extra Links ===== */}
          <div className=" mb-3 space-y-2 font-semibold ">
            <Link
              href="/blog"
              onClick={() => setMobileOpen(false)}
              className={`block font-semibold border-b border-gray-200 py-2 ${
                isActive("/blog") ? "text-[#d87028]" : "text-gray-800"
              }`}
            >
              <span className="uppercase  font-semibold">Blog</span>
            </Link>
            <Link
              href="/tanzania-travel-guide"
              onClick={() => setMobileOpen(false)}
              className={`block font-semibold border-b border-gray-200 py-2 ${
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
              className={`block font-semibold border-b border-gray-200 py-2  ${
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
              className={`block font-semibold border-b border-gray-200 py-2 ${
                isActive("/contact-us") ? "text-[#d87028]" : "text-gray-800"
              }`}
            >
              <span className=" uppercase font-semibold">Contact Us</span>
            </Link>
          </div>
          <button
            onClick={() => {
              router.push("/tailor-made-tours");
              setMobileOpen(false); // ✅ CLOSE MENU
              setOpenMenu(null);
            }}
            className="w-full bg-[#d87028] text-white py-2 rounded-full mt-4 font-semibold cursor-pointer"
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
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 320 512"
                  className="text-white"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/imarakileleni/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#d87028] hover:bg-[#c35f22] transition"
                aria-label="Instagram"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  className="text-white"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </a>

              {/* Pinterest */}
              <a
                href="https://x.com/imarakileleni/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#d87028] hover:bg-[#c35f22] transition"
                aria-label="Pinterest"
              >
                {/* <FaXTwitter className="text-white" /> */}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="text-white"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#d87028] hover:bg-[#c35f22] transition"
                aria-label="YouTube"
              >
                {/* <FaYoutube className="text-white" /> */}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 576 512"
                  className="text-white"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                </svg>
              </a>
              <a
                href="https://www.pinterest.com/imarakilelenisafaris/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#d87028] hover:bg-[#c35f22] transition"
                aria-label="YouTube"
              >
                {/* <FaPinterestP className="text-white" /> */}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 384 512"
                  className="text-white"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
