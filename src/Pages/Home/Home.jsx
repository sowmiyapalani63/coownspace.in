import React from 'react'
import Dashboard from '../../Components/Hpmepage/dashboard'
import TrustedCompanies from '../../Components/Hpmepage/trustedcompanies'
import Blog from '../../Components/Hpmepage/blog'

import Aboutus from '../../features/Aboutus/Aboutus'
import AccordionDetails from '../../lib/consts/data.json'
import WhyChooseUs from '../../Components/whyChooseUs'


const Home = () => {
  return (
    <div>
    
      <Dashboard />
    <TrustedCompanies />
    <Aboutus  data={AccordionDetails.AccordionDetails}/>
  <Blog />
  <WhyChooseUs />
  {/* <Card /> */}
  
    </div>
  )
}

export default Home