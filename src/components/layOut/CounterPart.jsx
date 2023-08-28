import React from 'react'

import Container  from '../Container'
import Section  from '../Section'
import Image from '../Image'

import CounterImage from "../../assets/counter.png"

import Flex from '../Flex'
import Heading from '../Heading'
import Paragraph from '../Paragraph'

function CounterPart() {
  return (
    <Section className="py-10 bg-white">
        <Container>
            <Flex className="flex-wrap mx-4 2xl:mx-0 justify-between">
                <div className='w-[200px]'>
                  <Image src={CounterImage}/>
                </div>
                <div>
                    <Heading text="2.8x" as="h2"/>
                    <Paragraph text="We are ultra faste deal service" className="w-44"/>
                </div>
                <div>
                    <Heading text="78%" as="h2"/>
                    <Paragraph text="More deal closed services" className="w-44"/>
                </div>
                <div>
                    <Heading text="2.4x" as="h2"/>
                    <Paragraph text="We slove issue ultra faster" className="w-44"/>
                </div>
            </Flex>
        </Container>

    </Section>
  )
}

export default CounterPart