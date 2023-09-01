import React from 'react'

import Navbar from './layOut/Navbar'
import Footer from './layOut/Footer'
import { Outlet } from 'react-router-dom'

function RouteLayouts() {
  return (
    <>
        <Navbar/>
          <Outlet/>
        <Footer/>
    </>
  )
}

export default RouteLayouts