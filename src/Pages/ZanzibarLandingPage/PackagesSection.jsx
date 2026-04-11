import React, { useState } from "react";
import {
  FaStar,
  FaCalendarAlt,
  FaInfo,
  FaMapMarkerAlt,
  FaGlobe,
  FaInfoCircle,
} from "react-icons/fa";
import TripCard from "../../components/TripCard";
import { IoClose } from "react-icons/io5";

const PackagesSection = () => {
  const trips = [
    {
      id: 1,
      image:
        "https://www.contiki.com/media/azyfwhto/thailand2024_brandshoot-095-1-7.jpg?center=0.5%2C0.5&format=webp&mode=crop&width=1920&height=1720&quality=80",
      title: "Thai Island Hopper West",
      rating: 4.6,
      days: "8 Days",
      places: "3 Places",
      country: "1 Country",
      standardPrice: "$1,235",
      discountedPrice: "$1,050",
      description:
        "The one that takes you to west Thailand for a tour of Phuket, Koh Phi Phi, Krabi & other faves...",
    },
    {
      id: 2,
      image:
        "https://www.trafalgar.com/media/by3ihnoz/arc-de-triomphe-paris-france-3.jpg?crop=0%2C0.25%2C0%2C0&cropmode=percentage&format=webp&mode=crop&width=800&height=450&quality=80",
      title: "European Whirl",
      rating: 4.7,
      days: "19 Days",
      places: "6 Places",
      country: "8 Countries",
      discountedPrice: "$3,425",
      description:
        "The one that combines urban parties, ancient history and mountain beauty in 19 days",
    },
    {
      id: 3,
      image: "https://www.contiki.com/media/z05l51pp/0119eurs2022-8.jpg",
      title: "Croatia Island Sail",
      rating: 4.5,
      days: "8 Days",
      places: "6 Places",
      country: "1 Country",
      standardPrice: "$1,765",
      discountedPrice: "$1,616",
      description:
        "The one that lets you cruise the Dalmatian Coastline & go Croatian island hopping, from Split to Dubrovnik...",
      tag: "Sailing",
    },
    {
      id: 4,
      image:
        "https://media.bookmundi.com/files/agency/trafalgar/cropped/products/6c91c4d5-ffd0-4f02-ab96-f8412e06fc7e.jpg?format=auto&quality=60&width=960",
      title: "Great Britain and Ireland",
      rating: 4.8,
      days: "18 Days",
      places: "31 Places",
      country: "5 Countries",
      discountedPrice: "$3,832",
      description:
        "The one that shows you Britain’s best hotspots, topped off with The Emerald Isles",
    },
  ];

  const [selectedTrip, setSelectedTrip] = useState(null);
  const openModal = (trip) => setSelectedTrip(trip);
  const closeModal = () => setSelectedTrip(null);

  return (
    <section id="safaris" className="bg-[#fde6d5] py-16 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28">
      {/* Heading */}
      <div className="mb-12 max-w-5xl mx-auto text-center">
        <h2 className="text-[28px] md:text-3xl capitalize font-extrabold text-[#111] mb-4">
          Choosing a safari in Zanzibar
        </h2>
        <p className=" text-[16px] font-bold mb-6">
          Adored by 18–35s worldwide since 1962
        </p>

        <p className="text-[16px] text-[#333] leading-relaxed mb-5">
          A safari to the Serengeti often includes other regions of{" "}
          <a href="#" className="text-[#d87028] underline font-medium">
            Tanzania
          </a>{" "}
          and can even include neighbouring countries such as{" "}
          <a href="#" className="text-[#d87028] underline font-medium">
            Kenya
          </a>{" "}
          or{" "}
          <a href="#" className="text-[#d87028] underline font-medium">
            Rwanda
          </a>
          .
        </p>

        <p className="text-[16px] text-[#333] leading-relaxed mb-5">
          Many of Expert Africa’s travellers will include the Ngorongoro
          Highlands on their trips, visiting the awe-inspiring{" "}
          <a href="#" className="text-[#d87028] underline font-medium">
            Ngorongoro Crater
          </a>{" "}
          before or after exploring the Serengeti. A little further south, the
          magical swamps and woodland of{" "}
          <a href="#" className="text-[#d87028] underline font-medium">
            Tarangire National Park
          </a>{" "}
          are much less known and comparatively little visited, and deliver
          outstanding wildlife rewards.
        </p>

        <p className="text-[16px] text-[#333] leading-relaxed">
          All our trips are custom-made.{" "}
          <a href="#" className="text-[#d87028] underline font-medium">
            Contact us
          </a>{" "}
          and we’ll help create a safari that perfectly fits your preferences.
        </p>
      </div>

      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trips.map((trip) => (
            <TripCard key={trip.id} trip={trip} onQuickView={openModal} />
          ))}
        </div>

        {/* Quick View Modal */}
        {selectedTrip && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white w-[90%] md:w-[700px] rounded-xl shadow-lg overflow-hidden relative">
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-600 hover:text-black"
              >
                <IoClose size={28} />
              </button>

              <img
                src={selectedTrip.image}
                alt={selectedTrip.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6 text-gray-800">
                <h3 className="text-2xl font-bold mb-2">
                  {selectedTrip.title}
                </h3>

                <div className="flex items-center text-yellow-500 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} size={16} />
                  ))}
                  <span className="text-black ml-2 font-semibold">
                    {selectedTrip.rating}
                  </span>
                </div>

                <div className="text-sm flex flex-wrap items-center gap-4 mb-3 text-gray-600">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt /> {selectedTrip.days}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt /> {selectedTrip.places}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaGlobe /> {selectedTrip.country}
                  </span>
                </div>

                <p className="text-gray-700 mb-4">{selectedTrip.description}</p>

                <div className="text-sm mb-4 flex justify-between items-center">
                  <div>
                    {selectedTrip.standardPrice && (
                      <p>
                        Standard Price <br /> {selectedTrip.standardPrice}
                      </p>
                    )}
                    <p className="font-bold text-black">
                      From{" "}
                      <span className="text-[#d87028]">
                        {selectedTrip.discountedPrice}
                      </span>
                    </p>
                  </div>

                  <button className="bg-[#d87028] hover:bg-orange-700 text-white font-semibold px-6 py-2 rounded-full">
                    VIEW TRIPss
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className=" mt-10 text-center">
        <button className="bg-[#d87028] hover:bg-[#c35f22] text-white font-semibold text-[15px] px-6 py-3 rounded-full transition">
          SEE ALL TRIPS
        </button>
      </div>
    </section>
  );
};


export default PackagesSection