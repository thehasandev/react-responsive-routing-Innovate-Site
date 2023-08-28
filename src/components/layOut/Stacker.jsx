import React from 'react'
import Section from '../Section'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'

import StickerOne from "../../assets/stickerOne.png"
import StickerTwo from "../../assets/stickerTwo.png"
import StickerThree from "../../assets/stickerThree.png"
import StickerFour from "../../assets/stickerFour.png"
import StickerFive from "../../assets/stickerFive.png"
import StickerSix from "../../assets/stickerSix.png"

function Stacker() {
  return (
    <Section className=" py-5 bg-white">
        <Container>
            <Flex className="justify-between items-center flex-wrap">
                <Image src={StickerOne} className="w-[180px] xl:w-[210px]"/>
                <Image src={StickerTwo} className="w-[180px] xl:w-[210px]"/>
                <Image src={StickerThree} className="w-[180px] xl:w-[210px]"/>
                <Image src={StickerFour} className="w-[180px] xl:w-[210px]"/>
                <Image src={StickerFive} className="w-[180px] xl:w-[210px]"/>
                <Image src={StickerSix} className="w-[180px] xl:w-[210px]"/>
            </Flex>
        </Container>
    </Section>
  )
}

export default Stacker