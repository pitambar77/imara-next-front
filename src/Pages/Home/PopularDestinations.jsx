import React from "react";
import Link from "next/link";
import Image from "next/image";

import arusha from "../../assets/Arusha.webp";
import Serengeti from "../../assets/Serengeti.webp";
import Tarangire from "../../assets/tarangire.webp";
import Ngorongoro from "../../assets/Ngorongoro.webp";
import Manyara from "../../assets/Manayara.webp";
import Kilimanjaro from "../../assets/kili-new.webp";
import Udzungwa from "../../assets/udzunga.webp";
import mikumi from "../../assets/mikumi.webp";
import Ruaha from "../../assets/ruaha.webp";
import Nyerere from "../../assets/nyerere.webp";

import PrimaryButton from "../../components/PrimaryButton";

const destinations = [
  {
    id: 1,
    name: "Arusha",
    image: arusha,
    link: "/tanzania-destinations/arusha-national-park",
  },
  {
    id: 2,
    name: "Serengeti",
    image: Serengeti,
    link: "/tanzania-destinations/serengeti-national-park",
  },
  {
    id: 3,
    name: "Tarangire",
    image: Tarangire,
    link: "/tanzania-destinations/tarangire-national-park",
  },
  {
    id: 4,
    name: "Ngorongoro",
    image: Ngorongoro,
    link: "/tanzania-destinations/ngorongoro-crater",
  },
  {
    id: 5,
    name: "Manyara",
    image: Manyara,
    link: "/tanzania-destinations/lake-manyara-national-park",
  },
  {
    id: 6,
    name: "Kilimanjaro",
    image: Kilimanjaro,
    link: "/tanzania-destinations/kilimanjaro-national-park",
  },
  {
    id: 7,
    name: "Udzungwa",
    image: Udzungwa,
    link: "/tanzania-destinations/udzungwa-mountains-national-park",
  },
  {
    id: 8,
    name: "Mikumi",
    image: mikumi,
    link: "/tanzania-destinations/mikumi-national-park",
  },
  {
    id: 9,
    name: "Ruaha",
    image: Ruaha,
    link: "/tanzania-destinations/ruaha-national-park",
  },
  {
    id: 10,
    name: "Nyerere",
    image: Nyerere,
    link: "/tanzania-destinations/nyerere-national-park",
  },
];

const PopularDestinations = () => {
  return (
    <section className="w-full py-8 md:py-16 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0">

        {/* Title */}
        <h2 className="text-3xl text-center mb-3 capitalize">
          Tanzania’s Most Popular Destinations
        </h2>

        <p className="text-center text-[#444] text-[18px] mb-12">
          Lorem Ipsum is simply dummy text of the printing
        </p>

        {/* Destination Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">

          {destinations.map((dest) => (
            <Link
              key={dest.id}
              href={dest.link}
              title={dest.name}
              className="relative w-full h-56 md:h-64 rounded-md overflow-hidden group cursor-pointer"
            >

              <Image
                src={dest.image}
                alt={dest.name}
                title={dest.name}
                fill
                sizes="(max-width:768px) 100vw, 20vw"
                className="object-cover transform group-hover:scale-105 transition duration-500"
              />

              {/* Centered Destination Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white hover:bg-[#d97129] duration-300 hover:text-white text-black font-semibold px-6 py-2 rounded-full shadow-md text-sm md:text-base">
                  {dest.name}
                </span>
              </div>

            </Link>
          ))}

        </div>

        {/* Button */}
        <div className="flex justify-center mt-12">
          <PrimaryButton href="/tanzania-destinations">
            View All Destinations
          </PrimaryButton>
        </div>

      </div>
    </section>
  );
};

export default PopularDestinations;
