import React from 'react'
import Hero from '../../Components/Common/Hero'
import ContactInfoCards from '../../Components/Common/ContactInfoCards'
import data from '../../lib/consts/data.json'

const Contact = () => {
  return (
    <div>
      <Hero  index={2}/>
      <ContactInfoCards ContactInfoCardDetails={data.ContactInfoCardDetails}/>
    </div>
  )
}

export default Contact