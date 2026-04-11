import React from 'react'


const experts = [
  {
    id: 1,
    name: "John Hipolite",
    location: "CHADA, KATAVI, WESTERN TANZANIA",
    image:
      "https://imagedelivery.net/TkcHhODAR5Y7jFoICvSX0Q/88d1c20d-67ef-4778-b267-8e4e7b545300/w=500",
  },
  {
    id: 2,
    name: "John Hipolite",
    location: "CHADA, KATAVI, WESTERN TANZANIA",
    image:
      "https://imagedelivery.net/TkcHhODAR5Y7jFoICvSX0Q/88d1c20d-67ef-4778-b267-8e4e7b545300/w=500",
  },

];


const SafariExpert = () => {
  return (
     <section className="bg-white py-20 px-4 md:px-10 lg:px-16 xl:px-18 2xl:px-28">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-xl md:text-3xl font-extrabold text-black">
          Meet Your Safari Experts
        </h2>
        <p className="text-gray-600 text-[16px] leading-relaxed mt-3">
          Head out in the company of Tanzania’s most knowledgeable, skillful and
          passionate guides. We owe so much to this talented team, who pour a
          lifetime of insight into ensuring guests spend their safaris utterly
          spellbound.
        </p>
      </div>

      {/* Experts Grid */}
      <div className=" flex flex-wrap justify-center gap-8">
        {experts.map((exp) => (
          <div key={exp.id} className="text-left">
            <img
              src={exp.image}
              alt={exp.name}
              className=" w-[400px] h-80 object-cover rounded"
            />

            <p className="mt-4 text-[20px] font-semibold text-black">
              {exp.name}
            </p>
            <p className="text-gray-600 text-[16px] mt-1 leading-relaxed">
              {exp.location}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SafariExpert