import React from 'react'

import { FaAngleRight } from "react-icons/fa";

import Paragraph from './Paragraph';
import Flex from './Flex';

function BuldList({paragraphOne,paragraphTwo}) {
  return (
<div className='mb-[28px]'>
<Flex className="justify-between">
     <Flex>
     <FaAngleRight className=' mr-5 mt-[5px] group-hover:text-white'/>
     <Paragraph text={paragraphOne} className="group-hover:text-white "/>
     </Flex>
    <Paragraph text={paragraphTwo} as="h5" className="font-bold group-hover:text-white text-primary"/>
  </Flex>
</div>
  )
}

export default BuldList