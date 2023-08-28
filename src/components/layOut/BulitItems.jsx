import React from 'react'

import Section from '../Section'
import  Container  from '../Container'
import Heading from '../Heading'
import BuldCard from '../card/BuldCard'

function BulitItems() {
  return (
    <Section className="py-8">
      <Container>
        <Heading text="Build the right plan for your team." className=" md:w-[612px] mx-auto px-2 xl:px-0 xl:text-center leading-[60px]" as="h2"/>

      <div className='flex justify-between flex-wrap gap-y-4 my-10 px-3 2xl:px-0'>
           <BuldCard heading="Intro" peraA="300GB" peraB="Not Avai." peraC="Unlimited" peraD="Not Avai."  peraE="Not Avi"/>

           <BuldCard heading="Pro" peraA="500GB" peraB="Not Avai." peraC="limited" peraD="Avai."  peraE="Not Avi" />

           <BuldCard heading="Exclusive" peraA="700GB" peraB="Not Avai." peraC="Unlimited" peraD="Not Avai."  peraE="Not Avi" />
      </div>
      </Container>
    </Section>
  )
}

export default BulitItems