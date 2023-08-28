import React from 'react'

import Section from '../Section'
import Container  from '../Container'
import Heading from '../Heading'
import Button from '../Button'
import Paragraph from '../Paragraph'

function Email() {
  return (
    <Section className="pb-5">
       <Container>
           <Heading text="Ready to get started? Start your free trial." className=" md:w-[700px] mx-auto md:text-center leading-[65px] px-4 2xl:-px-0" as="h2" />
            
           <Paragraph text="Free 30 days trial   |   Exclusive Support   |   No Fees" className="text-center my-5"/>

           <div className=' md:w-[620px] bg-[#F9F6FE] p-5 rounded-lg flex relative mx-auto'>
                <input type="text" placeholder='Enter your email' className='w-[180px] sm:w-[400px] px-5 py-3  border'/>
                <Button text="Try For Free" className="absolute top-1/2 -translate-y-1/2 sm:right-10 right-2 "/>
           </div>
       </Container>
    </Section>
  )
}

export default Email