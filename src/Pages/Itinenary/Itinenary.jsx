import React from 'react'
import TripDetailsSection from './TripDetailsSection'
import ReviewBanner from './ReviewBanner'
import TripMomentsSection from './TripMomentsSection'
import MapItinerarySection from './MapItinerarySection'
import BookWithConfidence from '../Home/BookWithConfidence'
import BookedTrips from '../../components/BookedTrips'
import Featured from '../Home/Featured'

const Itinenary = () => {
  return (
    <div>
        <TripDetailsSection/>
        <ReviewBanner/>
        <TripMomentsSection/>
        {/* <TripExperiencesSection/> */}
        <MapItinerarySection/>
        <BookWithConfidence/>
        <BookedTrips/>
        <Featured/>
    </div>
  )
}

export default Itinenary