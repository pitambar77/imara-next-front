import React from "react";

const destinations = [
  {
    id: 1,
    name: "Austria",
    image:
      "https://natureswonderlandsafaris.com/wp-content/uploads/2025/02/Mara-4.jpg",
  },
  {
    id: 2,
    name: "New Zealand",
    image:
      "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/475000/475020-New-Zealand.jpg",
  },
  {
    id: 3,
    name: "Peru",
    image:
      "https://www.salkantaytrekmachu.com/img/animals-in-peru-06-897.jpg",
  },
  {
    id: 4,
    name: "Indonesia",
    image:
      "https://media.assettype.com/outlooktraveller%2F2024-05%2F5ec236bd-a9f7-4915-88db-6d8eb137bf2d%2Fshutterstock_631736717.jpg?w=480&auto=format%2Ccompress&fit=max",
  },
  {
    id: 5,
    name: "Canada",
    image:
      "https://matrix.in/cdn/shop/articles/canada3_960x.jpg?v=1709210626",
  },
  {
    id: 6,
    name: "South Africa",
    image:
      "https://www.go2africa.com/wp-content/uploads/2020/03/cape_town_go2africa.jpg",
  },
];

const ActiveTravelDestinations = () => {
  return (
    <section className=" py-8 md:py-16 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28 bg-white">
      <h2 className="text-center text-xl md:text-3xl capitalize font-extrabold text-[#111] mb-10">
        Top active travel destinations
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 place-items-center">
        {destinations.map((item) => (
          <div
            key={item.id}
            className="relative w-full max-w-[220px] h-[220px] rounded-xl overflow-hidden shadow-md cursor-pointer group"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover rounded-xl transition group-hover:scale-105"
            />
            <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-xl font-semibold drop-shadow-lg">
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActiveTravelDestinations;
