import React, { useState } from 'react'

import { Link } from 'react-router-dom'


import DropDown from '../DropDown'
import  Container from '../Container'
import List from "../Menu"
import Image from "../Image"
import Button from "../Button"

import Logo from "../../assets/logo.png"

function Navbar() {

  return (
    <Container>
        <nav className='a relative px-4 py-2  2xl:px-0  md:py-4 flex items-center justify-between'>
            
            <div>
              <Image src={Logo}/>
            </div>

            <div className='hidden md:block'>
             
                <ul className='flex md:gap-x-2 lg:gap-x-5'>
                <Link to = "/"> 
                  <List text="Home" type/>
                </Link>
                
                <Link to = "/about">
                  <List text="About" type/>
                </Link>

                <Link to = "/service">
                  <List text="Service" type/>
                </Link>

                <Link to = "/protfolio">
                <List text="Protfolio" type/>
                </Link>

                <Link to = "/pricing">
                <List text="Price" type/>
                </Link>

                <Link to = "/blog">
                <List text="Blog" type/>
                </Link>

                </ul>
            </div>
           <div>
        
           </div>
            
            <div>
              
                <DropDown/>
                <Button text="Contract Us" className='hidden md:block md:text-sm xl:text-lg'/>
            </div>
        </nav>
    </Container>
  )
}

export default Navbar