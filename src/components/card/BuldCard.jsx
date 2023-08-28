import React from 'react'

import Heading from '../Heading'
import BuldList from "../BuldList"
import Button from '../Button'


function BuldCard({heading,peraA,peraB,peraC,peraD,peraE}) {
  return (
    <div className='w-[400px] bg-white  duration-500 hover:bg-[#181059] group p-[48px] rounded-[20px]'>
     <Heading text={heading} as="h4" className=" text-3xl mb-[30px] group-hover:text-white"/>  
     <BuldList paragraphOne="Hosting Space"  paragraphTwo={peraA} />
     <BuldList paragraphOne="Emails" paragraphTwo={peraB} />
     <BuldList paragraphOne="Pricing Feature"  paragraphTwo={peraC} />
     <BuldList paragraphOne="Included" paragraphTwo={peraD} />
     <BuldList paragraphOne="Yes"  paragraphTwo={peraE} />
     <Button text="Get Started" className="hover:text-white"/>
    </div>
  )
}

export default BuldCard