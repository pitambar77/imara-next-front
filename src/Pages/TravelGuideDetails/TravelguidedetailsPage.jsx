import React from 'react'
import TravelGuideDetails from './TravelGuideDetails'
import TripHighlights from '../../components/TripHighlights'
import ActiveTravelDestinations from './ActiveTravelDestinations';
import BookWithConfidence from '../Home/BookWithConfidence';
import Featured from '../Home/Featured';

const trips = [
  {
    id: 1,
    image:
      "https://africanscenicsafaris.com/assests/images/tanzania-safari-tours-banner.webp",
    title: "Tanzania Safari Adventure With Enjoy",

    description:
      "The one that sees you swish through the scenic south island kicking off in Christchurch The one that sees you swish through the scenic south island kicking off in Christchurch This epic 23 day trail through Europe balances all the sightseeing icons with unexpected marvels and underrated destinations. From walking the cobbled streets of Michelangelo's Florence and seeing Paris lit up at night, to being blown away by the",
  },
  {
    id: 2,
    image:
      "https://kilimanjarofairdeal.com/wp-content/uploads/2023/12/family-3.jpg",
    title: "Tanzania Family Safaris",

    description:
      "The one that takes you to west Thailand for a tour of Phuket, Koh Phi Phi, Krabi & other faves This epic 23 day trail through Europe balances all the sightseeing icons with unexpected marvels and underrated destinations. From walking the cobbled streets of Michelangelo's Florence and seeing Paris lit up at night, to being blown away by the",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    title: "Big Drop. Low Prices.",
    description:
      "The one that takes you to west Thailand for a tour of Phuket, Koh Phi Phi, Krabi & other faves This epic 23 day trail through Europe balances all the sightseeing icons with unexpected marvels and underrated destinations. From walking the cobbled streets of Michelangelo's Florence and seeing Paris lit up at night, to being blown away by the",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80",
    title: "Wildlife Budget Cultural Fly  ",

    description:
      "The one that gives you the ultimate Greek Island experience exploring Mykonos, Paros, Santorini and Ios This epic 23 day trail through Europe balances all the sightseeing icons with unexpected marvels and underrated destinations. From walking the cobbled streets of Michelangelo's Florence and seeing Paris lit up at night, to being blown away by the",
  },
  {
    id: 5,
    image:
      "https://africanscenicsafaris.com/assests/images/tanzania-safari-tours-banner.webp",
    title: "Tanzania Safari Adventure",

    description:
      "The one that sees you swish through the scenic south island kicking off in Christchurch This epic 23 day trail through Europe balances all the sightseeing icons with unexpected marvels and underrated destinations. From walking the cobbled streets of Michelangelo's Florence and seeing Paris lit up at night, to being blown away by the",
  },
  {
    id: 6,
    image:
      "https://ntandusafaris.com/wp-content/uploads/2024/12/Lion-Banner.webp",
    title: "Tanzania Family Safaris",

    description:
      "This epic 23 day trail through Europe balances all the sightseeing icons with unexpected marvels and underrated destinations. From walking the cobbled streets of Michelangelo's Florence and seeing Paris lit up at night, to being blown away by the",
  },
];

const TravelguidedetailsPage = () => {
  return (
    <div>
        <TravelGuideDetails/>
        <TripHighlights
        title=" Highlights of our africa safari tour"
        data={trips}
      />
      <ActiveTravelDestinations/>
      <BookWithConfidence/>
      <Featured/>
    </div>
  )
}

export default TravelguidedetailsPage