import React, { useEffect, useRef, useState } from 'react'

import { Link } from 'react-router-dom'

import {AiOutlineMenu} from "react-icons/ai"
import List from './Menu'

function DropDown() {
    let [open,setOpen] = useState(false)

    let menuRef = useRef(null)

     useEffect(()=>{
        let handle = (e)=>{
           if(!menuRef.current.contains(e.target)){
              setOpen(false)
           }
        }
       document.addEventListener("mousedown",handle)
       return()=>{
        document.removeEventListener("mousedown",handle)
       }
       
     })

  return (
    <div  className='relative'>
        <AiOutlineMenu onClick={()=>{setOpen(!open)}} size={30} className='md:hidden'/>

        <ul ref={menuRef} className={`${open ? "opacity-1 visible translate-y-0 -translate-x-2 duration-500" : "opacity-0 invisible translate-x-0 translate-y-[-50px] duration-500"}  md:hidden bg-secondary text-white z-10 p-12 flex flex-col gap-y-5 absolute top-[50px] right-[10px]`}>
                <Link to = "/"> 
                  <List text="Home"/>
                </Link>
                
                <Link to = "/about">
                  <List text="About" />
                </Link>

                <Link to = "/service">
                  <List text="Service" />
                </Link>

                <Link to = "/protfolio">
                <List text="Protfolio" />
                </Link>

                <Link to = "/pricing">
                <List text="Price" />
                </Link>

                <Link to = "/blog">
                <List text="Blog" />
                </Link>

        </ul>

    </div>
  )
}

export default DropDown