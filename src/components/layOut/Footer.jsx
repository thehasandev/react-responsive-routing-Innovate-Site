import React from 'react'

import { Link } from 'react-router-dom'

import Section from '../Section'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'

import Logo from "../../assets/logo.png"
import Paragraph from '../Paragraph'
import Heading from '../Heading'
import List from '../Menu'


function Footer() {
  return (
    <Section className="py-10">
       <Container>
           <Flex className="justify-between flex-wrap px-4 gap-y-4 2xl:px-0">
             <div>
                <Image src={Logo}/>
                <Paragraph text="Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page." className=" md:w-[450px] mt-6"/>
             </div>

             <div>
                <Heading as="h5" text="Features" className="mb-5"/>
                 <ul>
                        <Link to="/">
                          <List text="Home" des="footer"/>
                        </Link>

                        <Link to="/">
                          <List text="About" des="footer"/>
                        </Link>

                        <Link to="/">
                          <List text="Benifit" des="footer"/>
                        </Link>

                        <Link to="/">
                          <List text="Pricing" des="footer"/>
                        </Link>

                        <Link to="/">
                          <List text="Blog" des="footer"/>
                        </Link>
                    
                    
                 </ul>
             </div>

             <div>
                <Heading as="h5" text="Features" className="mb-5"/>
                 <ul>
                        <Link to="/">
                          <List text="Task Management" des="footer"/>
                        </Link>

                        <Link to="/">
                          <List text="Company growth" des="footer"/>
                        </Link>

                        <Link to="/">
                          <List text="Time tracking" des="footer"/>
                        </Link>
                    
                 </ul>
             </div>

             <div>
                <Heading as="h5" text="Features" className="mb-5"/>
                 <ul>
                        <Link to="/">
                          <List text="Customer service" des="footer"/>
                        </Link>

                        <Link to="/">
                          <List text="Accessibility" des="footer"/>
                        </Link>

                        <Link to="/">
                          <List text="Contact us" des="footer"/>
                        </Link>
                 </ul>
             </div>
           </Flex>

           <Flex className="mt-4 justify-between px-4 2xl:px-0">
                <Paragraph text="@20201 Innovate.All rights reserved."/>
              <div>
                <Flex className="gap-x-5">
                <Paragraph text="Privacy policy"/>
                <Paragraph text="Terms & condition"/>
                </Flex>
              </div>
             
           </Flex>
       </Container>
    </Section>
  )
}

export default Footer