import Image from "next/image";
import React from "react";

const Highlightsection = () => {

    const highlights = [
  {
    id: "1",
    image: "https://media.istockphoto.com/id/1031027106/photo/wildebeest-leaps-from-the-bank-of-the-mara-river.jpg?s=612x612&w=0&k=20&c=9ST1djnL_r7XN-ZhhyztGXrFvKF3vqInKy7bFVen1I4=",
    title: "Serengeti Safari Experience",
    description: "Floating above the Serengeti at sunrise feels surreal in the quietest way. The world below moves slowly—herds grazing, birds lifting off, rivers turning gold. It’s peaceful, gentle, and strangely emotional."
  },
  {
    id: "2",
    image: "https://media.istockphoto.com/id/1031027106/photo/wildebeest-leaps-from-the-bank-of-the-mara-river.jpg?s=612x612&w=0&k=20&c=9ST1djnL_r7XN-ZhhyztGXrFvKF3vqInKy7bFVen1I4=",
    title: "Ngorongoro Crater Adventure",
    description: "Floating above the Serengeti at sunrise feels surreal in the quietest way. The world below moves slowly—herds grazing, birds lifting off, rivers turning gold. It’s peaceful, gentle, and strangely emotional."
  },
  {
    id: "3",
    image: "https://media.istockphoto.com/id/1031027106/photo/wildebeest-leaps-from-the-bank-of-the-mara-river.jpg?s=612x612&w=0&k=20&c=9ST1djnL_r7XN-ZhhyztGXrFvKF3vqInKy7bFVen1I4=",
    title: "Zanzibar Beach Escape",
    description: "Floating above the Serengeti at sunrise feels surreal in the quietest way. The world below moves slowly—herds grazing, birds lifting off, rivers turning gold. It’s peaceful, gentle, and strangely emotional."
  }
];

  return (
    <div className=" py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {highlights.map((trip) => (
          <div
            key={trip.id}
            className="trip-card rounded-sm overflow-hidden bg-white shadow-sm hover:shadow-lg transition duration-300 mb-4"
          >
            <div className="relative h-[160px] w-full">
              <Image
                src={trip.image}
                alt={trip.title}
                fill
                sizes="(max-width:768px) 100vw, 300px"
                className="object-cover"
              />
            </div>

            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-xl mb-4 leading-tight">{trip.title}</h3>

                <p className="text-[15px] text-[#444] ">
                  {trip.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlightsection;
