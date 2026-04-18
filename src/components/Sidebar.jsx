"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaMapMarkedAlt,
  FaUmbrellaBeach,
  FaHotel,
  FaRoute,
} from "react-icons/fa";

import Image from "next/image";
import imaralogo from "@/assets/imaralogo.png";

const Sidebar = () => {
  const pathname = usePathname();

  const links = [
    { name: "Travel Guide", icon: <FaMapMarkedAlt />, path: "/dashboard/travelguide" },
    { name: "Package", icon: <FaUmbrellaBeach />, path: "/dashboard/package" },
    { name: "Destination Details", icon: <FaRoute />, path: "/dashboard/destination" },
    { name: "Destination Landing", icon: <FaHotel />, path: "/dashboard/destination-landing" },
    { name: "Kilimanjarolanding", icon: <FaHotel />, path: "/dashboard/kilimanjaro" },
    { name: "Travel Group", icon: <FaHotel />, path: "/dashboard/travelgroup" },
    { name: "Zanzibar", icon: <FaHotel />, path: "/dashboard/zanzibar" },
    { name: "Sustanbility", icon: <FaHotel />, path: "/dashboard/sustainbility/seo" },
    { name: "Team", icon: <FaHotel />, path: "/dashboard/team/seo" },
    { name: "List", icon: <FaHotel />, path: "/dashboard/team-list" },
    { name: "About", icon: <FaHotel />, path: "/dashboard/about-us/seo" },
    { name: "Fleet", icon: <FaHotel />, path: "/dashboard/safari-fleet/seo" },
    { name: "Home Page", icon: <FaHotel />, path: "/dashboard/homepage/seo" },
    { name: "Safari Landing", icon: <FaHotel />, path: "/dashboard/safari-landing/seo" },
  ];

  return (
    <div className="bg-[#fde6d5] w-64 h-screen flex flex-col p-5 fixed top-0 left-0 overflow-y-auto">

      <Image
        src={imaralogo}
        alt="imara-logo"
        width={160}
        height={60}
        priority
      />

      <nav className="flex flex-col gap-3 mt-4">
        {links.map((link) => {
          const isActive = pathname === link.path;

          return (
            <Link
              key={link.name}
              href={link.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-[#d87028] text-white"
                  : "hover:bg-[#d87028] hover:text-white"
              }`}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          );
        })}
      </nav>

      <button className="mt-auto text-white bg-[#d87028] py-2 rounded-lg hover:bg-[#eb9050]">
        Logout
      </button>
    </div>
  );
};

export default Sidebar;