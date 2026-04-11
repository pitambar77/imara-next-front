import React from 'react'
import TravelguideCard from '../../components/TravelguideCard'
import BookWithConfidence from '../Home/BookWithConfidence';
import Featured from '../Home/Featured';


const TravelGuideLanding = () => {

    const asSeenItems = [
  {
    id: 1,
    image: "https://www.divergenttravelers.com/wp-content/uploads/2018/07/edit-9246-compressor-2080x1387.jpg",
    title: "Contiki travel brochure",
    text: "Tanzania’s Kilimanjaro National Park is situated near a town called Moshi and can easily be accessed by plane or road via Arusha town.",
    link: "Find out more",
  },
  {
    id: 2,
    image: "https://assets.vogue.com/photos/58eeb08844013d179c72a411/master/w_2560%2Cc_limit/00-lede-kenya-east-africa-safari-travel-guide.jpg",
    title: "Travel requirements & visa guide",
    text: "It spans up to approximately 650 square kilometers and is currently under the administration of Tanzania National Parks Authority (TANAPA). Besides the daring climbing adventures that take place in the park each year, Mount Kilimanjaro National Park   ",
    link: "Find out more",
  },
  {
    id: 3,
    image: "https://www.gorillaugandasafaris.com/wp-content/uploads/2025/04/africa-safari-for-beginers.jpg",
    title: "Travel Guides",
    text: "Several species of wildlife can be found in the Kilimanjaro National Park and some of these include the Cape Buffaloes that mainly inhabit the montane forests, grasslands, and moorland occasionally. The African bush elephants can be sighted in between the Tarakia  ",
    link: "Find out more",
  },
  {
    id: 4,
    image: "https://www.divergenttravelers.com/wp-content/uploads/2018/07/edit-9246-compressor-2080x1387.jpg",
    title: "Contiki travel brochure",
    text: "Several species of wildlife can be found in the Kilimanjaro National Park and some of these include the Cape Buffaloes that mainly inhabit the montane forests, grasslands, and moorland occasionally. The African bush elephants can be sighted  ",
    link: "Find out more",
  },
  {
    id: 5,
    image: "https://assets.vogue.com/photos/58eeb08844013d179c72a411/master/w_2560%2Cc_limit/00-lede-kenya-east-africa-safari-travel-guide.jpg",
    title: "Travel requirements & visa guide",
    text: "Latest visa and travel document requirements.",
    link: "Find out more",
  },
  {
    id: 6,
    image: "https://www.gorillaugandasafaris.com/wp-content/uploads/2025/04/africa-safari-for-beginers.jpg",
    title: "Travel Guides",
    text: "Explore the world's continents with our travel guides.",
    link: "Find out more",
  },
];

  return (
    <div>
         <div
        className="relative w-full h-[64vh] bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `url('https://greenedventures.com/wp-content/uploads/2024/06/Africa-Tanzania-Serengeti-Safari-Tour.jpg')`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        <h2 className=" text-xl md:text-5xl text-white uppercase z-10 ">
          All about travel guide
        </h2>
      </div>
      <TravelguideCard 
      items={asSeenItems}
      />
      <BookWithConfidence/>
      <Featured/>
    
    </div>
  )
}

export default TravelGuideLanding