import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import Flex from "./Flex"
function Menu({text,type,des,className}) {
  return (

         <li className={`${des == "footer"?"font-nunito  mb-6 font-semibold text-lg text-secomdary" : " text-lg font-sans font-semibold hover:text-primary"} ${className}`}>
           <Flex>
           {text}
            {
              type &&  <span className='mt-[5px] ml-[10px] text-xl'><FaAngleRight/></span>
            }
           </Flex>
         </li>
 
  )
}

export default Menu