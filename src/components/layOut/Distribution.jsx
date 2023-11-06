import React from 'react'

import Section from '../Section'
import  Container from '../Container'
import Button from '../Button'
import Image from '../Image'

import DistiButor from "../../assets/watch.png"
import CommonCard from '../card/CommonCard'

function Distribution() {
  return (
    <Section className="py-10">
      <Container>
         <div className='bg-[#DBCCFC] rounded-lg mx-4 2xl:mx-0'>
            <div className='flex flex-wrap gap-y-4 justify-between p-5'>
            <Button text="Artificial Intelligence"/>
            
            <Button text="Header Builder" />
            
            <Button text="Safe and Private" />
            
            <Button text="Mobility Solutions" />
            </div>
         </div>

         <div className='my-[50px]'>
              <div className=' md:flex flex-wrap justify-between'>
                <div className='my-5 mx-5 2xl:mx-0 xl:w-[500px] flex items-center justify-center'>
                   <Image src={DistiButor}/>
                </div>

                <div className=' px-4 2xl:px-0'>
                    <CommonCard heading="No more messy distribution lists." paragraph="Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page. You can also use the shop features for all demos." btnText="Get started" headingStyle=" md:text-large text-[22px] leading-[50px] xl:text-large  md:w-[500px] md:leading-[65px]" paragraphStyle=" md:w-[450px] md:w-[575px] my-4"/>
                </div>
              </div>
         </div>
      </Container>
    </Section>
  )
}

export default Distribution