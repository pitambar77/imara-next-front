"use client"

import React, {  useState } from 'react'
import Banner from './Banner'
import WhySection from './WhySection'
import SafariGridSection from './SafariGridSection'
import DestinationStepSection from './DestinationStepSection'
import StepTwoSection from './StepTwoSection'
import ExperienceTabsSection from './ExperienceTabsSection'
import FitSection from './FitSection'
import FAQSection from './FAQSection'
import TestimonialsSection from './TestimonialsSection'
import FooterSection from './FooterSection'

const Hero = () => {

  const [selectedDestinations, setSelectedDestinations] = useState([]);
  return (
    <div>
        <Banner/>
        <WhySection/>
        <SafariGridSection setSelected={setSelectedDestinations}/>
        <DestinationStepSection setSelected={setSelectedDestinations} />
        <StepTwoSection selectedDestinations={selectedDestinations} />
        <ExperienceTabsSection/>
        <FitSection/>
        <FAQSection/>
        <TestimonialsSection/>
        <FooterSection/>
    </div>
  )
}

export default Hero