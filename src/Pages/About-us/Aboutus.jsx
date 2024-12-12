import React from 'react'
import Aboutus from '../../features/Aboutus/Aboutus'
import AccordionDetails from '../../lib/consts/data.json'
import Hero from '../../Components/Common/Hero';
import WhyChooseUs from '../../Components/whyChooseUs'
import WhatSetusApart from '../../Components/WhatSetusApart';
import OurApproach from '../../Components/OurApproach';
import FooterTopCTA from '../../Components/FooterTopCta';
import Card from '../../Components/Common/Card';


const AboutUs = () => {
  
  return (
    <div>
      <Hero  index={1}/>
       <Aboutus data={AccordionDetails.AccordionDetails}/>
     <WhyChooseUs/>
      <WhatSetusApart/>
      <OurApproach/>
      <Card/>
      {/* <FooterTopCTA/> */}
      
    </div>
    
  )
}

export default AboutUs