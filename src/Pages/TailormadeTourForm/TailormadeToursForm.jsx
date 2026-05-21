import Banner from '@/components/Banner'
import EnquiryForm from '@/components/EnquiryForm'
import React from 'react'

const TailormadeToursForm = ({landing}) => {
  return (
   <>
   <Banner image={landing.image} title={landing.title} />
   <EnquiryForm/>
   </>
  )
}

export default TailormadeToursForm