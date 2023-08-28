import React from 'react'

import Section from '../Section'
import  Container  from '../Container'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import Button from '../Button'
import Image from '../Image'

import Banner from "../../assets/Cards.png"


function Hero() {
  return (
    <Section className=" md:py-[80px]">
      <Container>
          <div className="justify-between lg:flex">
              <div className='pt-8 md:pt-0'>
                <Heading text="Professional task manager tool to grow" as="h1" className="sm:leading-[70px] sm:pl0 pl-8 sm:pl-0 md:pl-0"/>
                <Paragraph text="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime." className="sm:w-[500px] my-4 w-[300px] pl-8 md:pl-0"/>

                <div className=' md:w-[620px] bg-[#F9F6FE] p-5 rounded-lg flex relative'>
                    <input type="text" placeholder='Join with us using your gmail address' className='w-[180px] sm:w-[400px] px-5 py-3  border'/>
                    <Button text="Sign up" className="absolute top-1/2 -translate-y-1/2 sm:right-10 right-2 "/>
                </div>
              </div>

              <div>
                <div className='w-[300px] lg:w-[300px] xl:w-[450px] pr-10 2xl:pr-0'>
                <Image src={Banner}/>
                </div>
              </div>
          </div>
      </Container>
    </Section>
  )
}

export default Hero