import React from "react";

const TravelGuide = () => {
  return (
    <section className=" text-[#1a1a1a] py-16 px-6 md:px-10 lg:px-16 xl:px-18 2xl:px-28">
      {/* Top Row */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Testimonial Card */}
        <div className="rounded-md  shadow-sm">
          <img
            src="https://tanzania-specialist.com/wp-content/uploads/2023/07/10-Days-Tanzania-safari-all-northern-parks-in-1-trip-wildebeest-migration.jpg"
            alt="Kenya Safari"
            className="w-full h-48 md:h-[420px] rounded-md object-cover"
          />
        </div>

        {/* Right: Who We Are */}
        <div className="space-y-6 text-center">
          <p className=" leading-relaxed ">
            When we founded Timbuktu in 2014, we knew exactly what we wanted to
            do: make planning extraordinary trips to the far-flung corners of
            the world as easy and fun as the adventures themselves. make
            planning extraordinary trips to the far-flung corners of the world
            as easy
          </p>
          <p className=" leading-relaxed">
            Travel should never feel like admin. We don’t do lengthy emails or
            spreadsheets (unless you’d like one), but instead, our planning
            process is filled with daydreams, excitement, and “what if we went
            there too?” moments.
          </p>
        </div>
      </div>

      {/* Divider spacing */}
      <div className="mt-4"></div>

      {/* Bottom Row */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Description */}
        <div className="space-y-6 text-center leading-relaxed">
          <p className=" ">
            Armed with decades of travel experience and a healthy obsession with
            tech, we built our digital trip planner: a tool that lets you mix
            and match hotels and destinations with real-time prices and live
            availability. And right from the beginning, our travel experts are
            there alongside you, fine-tuning plans, taking care of logistics,
            and adding their magic touch.
          </p>
          <p>
            It is a matter of choice whether you would like to plan your
            Serengeti safari around the Great Migration. We have mentioned
            earlier that the Serengeti is a year-round destination as it covers
            a vast area and offers unparalleled wildlife viewing. Chances that
            you will be at the exact spot of the Great Migration herd crossing a
            river (either at the Grumeti or Mara River) are very slim. 
          </p>
        </div>

        {/* Right: Testimonial Card */}
        <div className=" shadow-sm">
          <img
            src="https://www.andbeyond.com/wp-content/uploads/sites/5/Africa-Tanzania-Serengeti-National-Park-hot-air-balloons-Website-1920x1080-fill-gravityauto-Q_AutoBest.jpg"
            alt="Chile Trip"
            className="w-full h-48 md:h-[420px] object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default TravelGuide;
