import React from "react";
import { BiSolidUser } from "react-icons/bi";



const VehicleAndCabinSection = () => {

  return (
    <section className="bg-white py-8 md:py-16 max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0">
      {/* Top Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <img
          src={'/safari-fleet-2.webp'}
          alt="Safari Vehicle 1"
          className="w-full h-auto md:h-[420px] object-cover rounded-lg shadow-sm"
        />
        <img
          src={'/safari-fleet-3.webp'}
          alt="Safari Vehicle 2"
          className="w-full h-auto md:h-[420px] object-cover rounded-lg shadow-sm"
        />
      </div>

      {/* Title */}
      <div className="text-left  mb-16">
        <h3 className="text-[28px] md:text-[32px] font-semibold text-[#1a1a1a] mb-3">
          Vehicle Configuration
        </h3>
        <p className="text-[#444] text-[16px] max-w-2xl ">
          Our vehicles balance durability, comfort, and visibility, giving
          travellers a steady ride on rough terrain and clear viewing angles
          during every part of the safari.
        </p>
      </div>

      {/* Vehicle + Cabin Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Side - Vehicle Image */}
        <div className="flex ">
          <img
            src="https://bantuporijourneys.com/images/Vehicle_Layout_Bantu_Pori.jpg"
            alt="Vehicle Diagram"
            className="w-full max-w-[680px] object-contain"
          />
        </div>

        {/* Right Side - Cabin Categories */}
        <div className="flex flex-col gap-5">
          <h3 className="text-[20px] font-semibold capitalize text-[#111] pb-2">
            Vehicle Part

          </h3>

          <ul className="grid grid-cols-2 gap-x-16 gap-y-3 text-[15px] text-[#444]">
            <li className="flex items-center justify-between  pb-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                Pop-up viewing roof

              </div>
              <div className=" flex gap-1 items-center bg-gray-200 py-1 px-2 rounded-md">
                <BiSolidUser className="" />
                <span className="text-sm  mt-[2px]"> 2</span>
              </div>
            </li>
            <li className="flex items-center justify-between  pb-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                Porthole Cabin
              </div>
              <div className=" flex gap-1 items-center bg-gray-200 py-1 px-2 rounded-md">
                <BiSolidUser className="" />
                <span className="text-sm  mt-[2px]"> 2</span>
              </div>
            </li>
            <li className="flex items-center justify-between  pb-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                Penthouse Suite
              </div>
              <div className=" flex gap-1 items-center bg-gray-200 py-1 px-2 rounded-md">
                <BiSolidUser className="" />
                <span className="text-sm  mt-[2px]"> 2</span>
              </div>
            </li>
            <li className="flex items-center justify-between pb-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-purple-400 rounded-full"></span>
                Single Veranda Cabin
              </div>
              <div className=" flex gap-1 items-center bg-gray-200 py-1 px-2 rounded-md">
                <BiSolidUser className="" />
                <span className="text-sm  mt-[2px]"> 1</span>
              </div>
            </li>
            <li className="flex items-center justify-between pb-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                Deluxe Veranda Cabin
              </div>
              <div className=" flex gap-1 items-center bg-gray-200 py-1 px-2 rounded-md">
                <BiSolidUser className="" />
                <span className="text-sm  mt-[2px]"> 2</span>
              </div>
            </li>
            <li className="flex items-center justify-between  pb-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-emerald-400 rounded-full"></span>
                Triple Suite
              </div>
              <div className=" flex gap-1 items-center bg-gray-200 py-1 px-2 rounded-md">
                <BiSolidUser className="" />
                <span className="text-sm  mt-[2px]"> 3</span>
              </div>
            </li>
            <li className="flex items-center justify-between  pb-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-pink-400 rounded-full"></span>
                Veranda Cabin
              </div>
              <div className=" flex gap-1 items-center bg-gray-200 py-1 px-2 rounded-md">
                <BiSolidUser className="" />
                <span className="text-sm  mt-[2px]"> 2</span>
              </div>
            </li>
            <li className="flex items-center justify-between  pb-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                *Only available with queen-sized bed
              </div>
            </li>
          </ul>

          {/* Info Note */}
          <div className=" bg-[#fedec7] p-8 rounded-md">
            <p className=" mb-8">
             Start planning your Tanzania safari with a team that guides you confidently.
            </p>

            {/* Button */}
            <button
            onClick={()=>navigate('/contact-us')}
             className="bg-[#d76e28] cursor-pointer hover:bg-[#d86720] text-white hover:text-black/80 border border-[#d87028] rounded-md px-5 py-3 w-fit text-sm font-semibold transition">
              ← Book Your Safari Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleAndCabinSection;
