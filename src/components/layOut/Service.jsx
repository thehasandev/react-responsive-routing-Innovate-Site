import React from 'react'

import Section from '../Section'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import SolutionCard from "../card/SolutionCard"

import  SolutionOne from "../../assets/solutionA.png"
import  SolutionTwo from "../../assets/solutionB.png"
import  SolutionThree from "../../assets/solutionC.png"
import  SolutionFour from "../../assets/solutionD.png"
import  SolutionFive from "../../assets/solutionE.png"
import  SolutionSix from "../../assets/solutionF.png"


function Service() {
  return (
    <Section className="py-5">
       <Container>
          <div className='px-8 2xl:px-0'>
            <div className="md:flex  justify-between"> 
                <Heading text="The best solutions in one tool" as="h2" className="  
                
                lg:w-[450px] leading-[70px]"/>

                 <Paragraph text="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus temporibus autem." className=" pt-5 lg:w-[400px] md:w-[600px]"/>
            </div>
          </div>

          <div className='pt-5 px-8 2xl:px-0'>
            <Flex className="flex-wrap justify-between gap-y-5">
                <SolutionCard heading="Set Daily Alarms" image={SolutionOne}/>
                <SolutionCard heading="Advanced Search" image={SolutionFour}/>
                <SolutionCard heading="Share Blog Posts" image={SolutionThree}/>
                <SolutionCard heading="Archive Content" image={SolutionFour}/>
                <SolutionCard heading="Secure Checkout" image={SolutionFive}/>
                <SolutionCard heading="Faster Response" image={SolutionSix}/>
            </Flex>
          </div>
       </Container>
    </Section>
  )
}

export default Service