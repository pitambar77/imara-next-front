import React from 'react'

const AdventureTour = () => {
  return (
     <section className=" text-[#1a1a1a] py-16 px-6 md:px-10 lg:px-16 xl:px-18 2xl:px-28">
      
      <h2 className=' text-center text-3xl mb-16'>Why go on an adventure tour with contiki?</h2>
            
      {/* Top Row */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Testimonial Card */}
        <div className="rounded-md  shadow-sm">
          <img
            src="https://www.contiki.com/media/wcxfjs4s/south-america-peru.jpg?center=0.5%2C0.5&format=webp&mode=crop&width=900&height=600&quality=80"
            alt="Kenya Safari"
            className="w-full h-48 md:h-[420px] rounded-md object-cover"
          />
        </div>

        {/* Right: Who We Are */}
        <div className="space-y-6 text-center">
         <h3 className="text-[22px]   text-[#111] leading-snug mb-4">
            Whether it’s backpacking, camping or sailing, a Contiki adventure
            tour will totally redefine your idea of broadening your mind.
          </h3>
           <p className="text-gray-700 text-[16px] leading-relaxed">
            You’ll traverse Norway in search of Arctic whales and the Northern
            Lights. You’ll kayak along Vietnam’s majestic Nho Que River. You’ll
            ride a horse on the jaw-dropping plains of Patagonia. Adventure travel
            is all about unleashing a new side of yourself and discovering what
            you’re capable of, and that’s exactly what you’ll do on these trips –
            whether you’re trekking Peru’s Inca Trail or swimming in the Great
            Barrier Reef.
          </p>
        </div>
      </div>

      {/* Divider spacing */}
      <div className="mt-4"></div>

      {/* Bottom Row */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Description */}
        <div className="space-y-6 text-center leading-relaxed">
          <h3 className="text-[22px]  text-[#111] leading-snug mb-4">
            Adventure travel is all about the unbelievable people you meet, the
            new foods you try and the activities you embark on.
          </h3>

          <p className="text-gray-700 text-[15px] leading-relaxed">
            What comes to mind when you hear the word ‘adventure’? Exploring
            cultural hotspots in historical cities, jumping out of planes over
            the gobsmacking landscapes of New Zealand or exploring the plains of
            Africa on a wildlife safari? Whatever you’re looking for on your
            adventure tour, it’s ready and waiting with Contiki.
          </p>
        </div>

        {/* Right: Testimonial Card */}
        <div className=" shadow-sm">
          <img
            src="https://www.contiki.com/media/jqah4mlo/bungy-jumping-in-new-zealand.jpg?center=0.5%2C0.5&format=webp&mode=crop&width=900&height=600&quality=80"
            alt="Chile Trip"
            className="w-full h-48 md:h-[420px] object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  )
}

export default AdventureTour