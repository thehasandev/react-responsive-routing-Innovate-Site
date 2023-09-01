import React from 'react'

import Navbar from '../components/layOut/Navbar'
import Hero from '../components/layOut/Hero'
import Stacker from '../components/layOut/Stacker'
import Service from '../components/layOut/Service'
import Business from '../components/layOut/Business'
import Distribution from '../components/layOut/Distribution'
import BulitItems from '../components/layOut/BulitItems'
import CounterPart from '../components/layOut/CounterPart'
import Team from '../components/layOut/Team'
import Email from '../components/layOut/Email'
import Footer from '../components/layOut/Footer'

function Home() {
  return (
    <div>
     
      <Hero/>
      <Stacker/>
      <Service/>
      <Business/>
      <Distribution/>
      <BulitItems/>
      <CounterPart/>
      <Team/>
      <Email/>
     
    </div>
  )
}

export default Home