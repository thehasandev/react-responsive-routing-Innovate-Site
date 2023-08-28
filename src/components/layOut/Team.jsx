import React from 'react'

import { FaYoutube,FaTwitter } from 'react-icons/fa'
import { BiLogoFacebook } from 'react-icons/bi'

import Section from '../Section'
import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'
import Image from '../Image'
import Paragraph from '../Paragraph'

import Dev from "../../assets/dev.jpg"
import DevTwo from "../../assets/devTwo.jpg"

function Team() {
  return (
    <Section className="py-10">
        <Container>
            <Heading text="Build the right plan for your team." as="h2"  className="px-3 2xl:px-0 leading-[65px] md:w-[680px]"/>

            <Flex className="flex-wrap gap-y-5  justify-between  my-10">

                 <div className='w-[450px] px-4 2xl:px-0'>
                    <Image src={Dev} className="rounded-lg"/>
                 </div>

                 <div className='w-[300px] px-3 2xl:pl-0 mb-5 md:mb-0'>
                    <Paragraph text="As a leading digital platform in Paris, we look to engage with our clients beyond the conventional design and development agency relationship, becoming a partner to the people and companies we work with."/>
                    <Heading as="h3" text="Jonathon" className="font-normal my-5"/>

                    <div className='flex gap-x-2'>
                        
                           <div className='flex items-center justify-center h-[50px] w-[50px] border border-primary hover:border-secondary hover:bg-secondary rounded-full group'>
                                 <BiLogoFacebook size={40} className='text-primary group-hover:text-white'/>
                           </div>

                           <div className='flex items-center justify-center h-[50px] w-[50px] border border-primary hover:border-secondary hover:bg-secondary rounded-full group'>
                                 <FaTwitter size={30} className='text-primary group-hover:text-white'/>
                           </div>

                           <div className='flex items-center justify-center h-[50px] w-[50px] border border-primary hover:border-secondary hover:bg-secondary rounded-full group'>
                                 <FaYoutube size={30} className='text-primary group-hover:text-white'/>
                           </div>
                    </div>
                 </div>


                 <div className='w-[300px] relative h-96 mx-4 2xl:mx-0 md:pl-0'>
                    <div>      
                    <Image src={DevTwo} className="rounded-full w-[50px] h-[50px] absolute top-0 right-0"/>
                    <Image src={DevTwo} className="rounded-full w-[50px] h-[50px] absolute top-0 left-0"/>
                    <Image src={DevTwo} className="rounded-lg w-[80px] h-[80px] absolute top-[100px] left-[40%]"/>
                    <Image src={DevTwo} className="rounded-full w-[50px] h-[50px] absolute top-[200px] right-0"/>
                    <Image src={DevTwo} className="rounded-full w-[50px] h-[50px]  absolute top-[250px] left-0"/>      

                    </div>
                 </div>
            </Flex>
        </Container>
    </Section>
  )
}

export default Team