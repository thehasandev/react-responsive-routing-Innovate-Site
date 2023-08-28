import React from 'react'
import Section from '../Section'
import  Container  from '../Container'
import  Flex  from '../Flex'
import Image from '../Image'

import BusinessA from "../../assets/businessOne.png"
import BusinessB from "../../assets/businessTwo.png"
import BusinessC from "../../assets/businessThree.png"
import CommonCard from '../card/CommonCard'

function Business() {
  return (
    <div>
        <Section className="bg-[#F5F2FB] py-10  md:px-0">
          <Container>
           <div className=' md:flex justify-between px-5 2xl:px-0'>
             <div>
                <Flex>
                   <div className='w-[210px] pt-[60px]'>
                   <Image src={BusinessA}/>
                   </div>
                   <div>
                    <Image src={BusinessB} className="w-[248px] pt-5"/>
                    <Image src={BusinessC} className="w-[180px]"/>
                   </div>
                </Flex>
             </div>

             <div>
                  <CommonCard heading=" Join with any business tasks and any goals" paragraph="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus temporibus autem." btnText="Sign up" headingStyle="pr-3 md:pr-0 text-[30px]  w-[400px]  md:w-[500px] lg:w-[650px] xl:leading-[65px] xl:text-large text-[36px]" paragraphStyle="md-w-[450px] lg:w-[575px] py-5 " />
             </div>
           </div>
          </Container>
        </Section>
    </div>
  )
}

export default Business