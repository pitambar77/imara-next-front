import React from "react";


const CoreValue = () => {
  return (
    <>
      <div
        className="relative w-full h-[40vh] md:h-[64vh] bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `url('/corevalues.webp')`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        <h1 className="text-3xl md:text-5xl text-white uppercase z-10">
         CORE VALUES
        </h1>
      </div>

      <div className="py-8 sm:py-12 md:py-16 max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0 space-y-8 text-[#444] ">
        <section>
          <h2 className="text-3xl text-[#222]  mb-2"> Communication</h2>
          <p>
            Our lifeblood is good communication. Our travellers tell us what
            they want, what they need, and we listen. Then we deliver it. We
            communicate openly and honestly, ensuring that travellers’
            expectations are met. At Imara Kileleni Safaris communication means
            that everyone understands what is required, that everyone is on the
            same page. If our traveller has a special dietary requirement, we
            ensure that the hotels and safari camps are aware of this and meet
            their needs; if travellers have specific wish-lists of wildlife they
            want to see out on safari, our driver-guides will bend over
            backwards to try and fulfill them.
          </p>
        </section>

        <section>
          <h2 className="text-3xl text-[#222]  mb-2">Knowledge</h2>
          <p>
            We have the knowledge, we want to share it. As a company with years
            of experience, we really know Tanzania – its landscapes, its people,
            its wildlife. But equally importantly, we are determined to share
            that knowledge with you, so that you can get to know our beautiful
            country, too. From the moment you make your first inquiry to the
            moment you leave, you’ll find we have the knowledge to make your
            trip unforgettable. Our staff will help you plan your trip; our
            driver-guides are often praised for ‘going the extra mile’ to ensure
            that our travellers have the best experience possible. Our knowledge
            becomes your knowledge.
          </p>
        </section>

        <section>
          <h2 className="text-3xl  text-[#222] mb-2">Honesty</h2>
          <p>
            We know that reputations are hard to win and easy to lose. That’s
            why we set such importance on integrity, honesty and fairness
            throughout our organization. We listen to our customers and strive
            to meet their expectations. From the moment when we help our
            customers to make the right choice about their travel experience to
            Tanzania, we say what we mean and mean what we say, communicating
            clearly throughout. Perhaps even more importantly, we ensure that we
            do what we say, delivering on our promises while carrying out our
            business in accordance with the very highest ethical standards.
          </p>
        </section>
        <section>
          <h2 className="text-3xl text-[#222]  mb-2">Passion</h2>
          <p>
            We know that Tanzania is a very special place, a unique place with
            some of nature’s most spectacular sights and wonders. We are really
            passionate about sharing its natural gifts with all our travellers –
            that is our challenge. Here at Imara Kileleni Safaris we pride
            ourselves on our team of people, recruiting passionate and motivated
            people and training them to the highest standards to make sure that
            they make our travellers’ Tanzanian experience unforgettable. We are
            all committed to showing you the very best of our region, committed
            to ensuring that our passion becomes your passion. we work hard to
            make sure that you take home the very best memories of our company,
            our people, and of beautiful Tanzania.
          </p>
        </section>
        <section>
          <h2 className="text-3xl text-[#222]  mb-2">Valuing Relationship</h2>
          <p>
            At Imara Kileleni Safaris we value all our relationships –
            relationships with our customers, relationships with our partners,
            relationships with our communities and relationships with our
            environment. Building a sustainable business is only possible
            through longstanding, sustainable relationships and we believe that
            establishing, valuing and nurturing these relationships is the key
            to the satisfaction of our customers and the success of our
            business.
          </p>
        </section>
        <section>
          <h2 className="text-3xl text-[#222] mb-2">Experience</h2>
          <p>
            we have a lifetime of experience and we are determined to use it to
            give you… the experience of a lifetime. Most of our travellers want
            to get off the beaten track and explore and we have the expertise
            and experience to make that happen. Our drivers and guides are
            focused on trying to find something unique, something special,
            something unforgettable for all our travellers. But above all, our
            experiences are authentic.
          </p>
        </section>
        <section>
          <h2 className="text-3xl text-[#222]  mb-2">Excellent Service</h2>
          <p>
            Delivering excellent service, every time. That’s our objective the
            very benchmark for judging our success. Whether it’s helping you to
            work out an itinerary, or answering your queries fully and promptly,
            or providing you with the best photo opportunities out on safari, we
            are constantly reviewing our performance to ensure we are meeting
            the high standards we demand of ourselves. And of course, the high
            standards that our guests demand of us. At Imara Kileleni safaris
            excellent service is a way of life, not a choice. Providing it to
            every traveller, every time is our goal. As you would expect of a
            well-established, professional organization, we have certain core
            values which are at the heart of everything we do.
          </p>
        </section>
      </div>
    </>
  );
};

export default CoreValue;
