import { NavLink } from "react-router-dom";
import {
  FaMapMarkedAlt,
  FaUmbrellaBeach,
  FaHotel,
  FaRoute,
} from "react-icons/fa";

import imaralogo from '../assets/imaralogo.png'

const Sidebar = () => {
  const links = [
    { name: "Travel Guide", icon: <FaMapMarkedAlt />, path: "/dashboard/create-travelguide" },
    { name: "Package", icon: <FaUmbrellaBeach />, path: "/dashboard/create-package" },
    { name: "Destination Details", icon: <FaRoute />, path: "/dashboard/create-destination-details" },
    { name: "Destination Landing", icon: <FaHotel />, path: "/dashboard/create-destination-landing" },
    { name: "kilimanjarolanding", icon: <FaHotel />, path: "/dashboard/create-kilimanjarolanding" },

    { name: "Travel Group", icon: <FaHotel />, path: "/dashboard/create-travel-group" },
    { name: "Sustanbility", icon: <FaHotel />, path: "/dashboard/create-sustanbility" },
    { name: "Team", icon: <FaHotel />, path: "/dashboard/create-team" },
    { name: "List", icon: <FaHotel />, path: "/dashboard/team-list" },
    { name: "About", icon: <FaHotel />, path: "/dashboard/create-about" },

    { name: "Fleet", icon: <FaHotel />, path: "/dashboard/create-fleet" },


  ];

  return (
    <div className="bg-[#fde6d5] w-64 min-h-screen flex flex-col p-5 fixed top-0 left-0">


    <img src={imaralogo} alt="imara-logo" className="" />


      <nav className="flex flex-col gap-3 mt-4">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive ? "bg-[#d87028] text-white" : " hover:bg-[#d87028] hover:text-white"
              }`
            }
          >
            {link.icon}
            <span>{link.name}</span>
          </NavLink>
        ))}
      </nav>

      <button className="mt-auto text-white  bg-[#d87028] py-2 rounded-lg hover:bg-[#eb9050]">
        Logout
      </button>
    </div>
  );
};

export default Sidebar;

