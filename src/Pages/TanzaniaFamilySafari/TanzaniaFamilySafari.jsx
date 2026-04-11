import React from 'react'
import LandingBanner from '../../components/LandingBanner'
import OverviewSections from '../../components/OverviewSections'
import ChoosingSafariSection from '../SerengetiNationalPark/ChoosingSafariSection'
import AdventureTour from '../../components/AdventureTour'
import FAQSection from '../../components/FAQSection'
import BookWithConfidence from '../Home/BookWithConfidence'
import Featured from '../Home/Featured'

const data = [
  {
    image: "https://www.contiki.com/media/wcxfjs4s/south-america-peru.jpg",
    heading:"SERENGETI NATIONAL PARK",
    subheading:
      "Whether it’s backpacking, camping or sailing, a Contiki adventure tour will totally redefine your idea of broadening your mind.",
    description:
      "You’ll traverse Norway in search of Arctic whales and the Northern Lights. You’ll kayak along Vietnam’s majestic Nho Que River. You’ll ride a horse on the jawdropping plains of Patagonia. Adventure travel is all about unleashing a new side of yourself and discovering what you’re capable of, and that’s exactly what you’ll do on these trips - whether you’re trekking Peru’s Inca Trail or swimming in the Great Barrier Reef.",
  },
  {
    image:
      "https://www.contiki.com/media/jqah4mlo/bungy-jumping-in-new-zealand.jpg",
       heading:"NGORONGORO CRATER",
    subheading:
      "Adventure travel is all about the unbelievable people you meet, the new foods you try and the activities you embark on.",
    description:
      "What comes to mind when you hear the word ‘adventure’? Exploring cultural hotspots in historical cities, jumping out of planes over the gobsmacking landscapes of New Zealand or exploring the plains of Africa on a wildlife safari? Whatever you’re looking for on your adventure tour, it’s ready and waiting with Contiki.",
  },
//   {
//     image: "https://www.contiki.com/media/wcxfjs4s/south-america-peru.jpg",
//      heading:"TARANGIRE NATIONAL PARK",
//     subheading:
//       "Whether it’s backpacking, camping or sailing, a Contiki adventure tour will totally redefine your idea of broadening your mind.",
//     description:
//       "You’ll traverse Norway in search of Arctic whales and the Northern Lights. You’ll kayak along Vietnam’s majestic Nho Que River. You’ll ride a horse on the jawdropping plains of Patagonia. Adventure travel is all about unleashing a new side of yourself and discovering what you’re capable of, and that’s exactly what you’ll do on these trips - whether you’re trekking Peru’s Inca Trail or swimming in the Great Barrier Reef.",
//   },
//   {
//     image:
//       "https://www.contiki.com/media/jqah4mlo/bungy-jumping-in-new-zealand.jpg",
//        heading:"LAKE MANYARA NATIONAL PARK",
//     subheading:
//       "Adventure travel is all about the unbelievable people you meet, the new foods you try and the activities you embark on.",
//     description:
//       "What comes to mind when you hear the word ‘adventure’? Exploring cultural hotspots in historical cities, jumping out of planes over the gobsmacking landscapes of New Zealand or exploring the plains of Africa on a wildlife safari? Whatever you’re looking for on your adventure tour, it’s ready and waiting with Contiki.",
//   },
];

const safariFaqs = [
  {
    question: "How long does an African safari take?",
    answerBlocks: [
      {
        type: "paragraph",
        text: [
          "Mount Kilimanjaro is a large dormant volcano in Tanzania. It is the highest mountain in Africa and the highest free-standing mountain above sea level in the world, at 5,895 m above sea level and 4,900 m above its plateau base.",
          "Mount Kilimanjaro is a large dormant volcano in Tanzania. It is the highest mountain in Africa and the highest free-standing mountain above sea level in the world, at 5,895 m above sea level and 4,900 m above its plateau base.",
          "For a deeper experience, 2 weeks is ideal.",
        ],
      },
      {
        type: "heading",
        text: "Recommended Duration:",
      },
      {
        type: "list",
        items: [
          "Short Safaris: 3–5 days",
          "Mount Kilimanjaro is a large dormant volcano in Tanzania. It is the highest mountain in Africa and the highest free-standing mountain above sea level in the world, at 5,895 m above sea level and 4,900 m above its plateau base.",
          "Full Safari Experience: 12–14 days",
          "Extended Adventure: 21+ days",
        ],
      },
      {
        type: "paragraph",
        text: "If you want the full wildlife experience, 2 weeks is ideal.",
      },
    ],
  },

  {
    question: "What is the best month to go on safari?",
    answerBlocks: [
      {
        type: "paragraph",
        text: [
          "June to October is considered the dry season.",
          "Mount Kilimanjaro is a large dormant volcano in Tanzania. It is the highest mountain in Africa and the highest free-standing mountain above sea level in the world, at 5,895 m above sea level and 4,900 m above its plateau base.",
        ],
      },
      {
        type: "heading",
        text: "Why Dry Season?",
      },
      {
        type: "paragraph",
        text: "Animals gather around water sources, making sightings easier.",
      },
    ],
  },
];

const TanzaniaFamilySafari = () => {
  return (
    <div>
        <LandingBanner 
        bannerImg={'https://yellowzebrasafaris.com/media/6593/22319554402_f7972d1d8b_o.jpg?width=2048&height=1024&format=jpg&v=1da5e161bac7770'}
        title={'Tanzania Family Safari'}
        />
        <OverviewSections 
        label="Tanzania Family Safaris"
      title="Why Should I Go On A Tanzania Family Safari?"
      image="https://altezzatravel.com/upload/medialibrary/7ba/bngydoha013tdt4zulhi3ut6i2f1lf9e.webp"
      imagePosition="right"
      bg="#fcfcfc"
      paragraphs={[
        {
          content:
            "Situated in the heart of East Africa, Tanzania has earned a distinguished reputation as a top-tier safari spot, showcasing a breathtaking variety of wildlife, diverse landscapes, and rich cultural heritage. With an increasing appeal for family-centric travel adventures, driven by the allure of unspoiled wilderness, Tanzania has emerged as a prime choice for family safaris.",
        },
        {
          content:
            "Join us on this exploration as we navigate the wonders of Tanzania’s wildlife, landscapes, and cultural heritage through the lens of a family safari. the wonders of Tanzania’s wildlife",
        },
        {
          content:
            "Opting for a Tanzania family safari guarantees a distinctive and enriching journey that caters to the diverse interests and requirements of each family member. The nation’s abundant biodiversity, showcasing iconic wildlife and conservation havens like the Serengeti National Park and Ngorongoro Crater, sets a unique stage for witnessing the annual Great Migration. ",
        },
        {
          italic: true,
          content:
            "“Our eyes were wide with wonder from the moment we left the airstrip...”",
        },
      ]}
        />
        <ChoosingSafariSection/>
        <AdventureTour 
        sections={data}
        />
        <FAQSection 
        title="Top Frequently ask questions" faqs={safariFaqs}
        />
        <BookWithConfidence/>
        <Featured/>

    </div>
  )
}

export default TanzaniaFamilySafari