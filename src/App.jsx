import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Route/Home'
import Error from './Route/Error'
import "./App.css"
import About from './Route/About'
import ServicePage from './Route/ServicePage'
import PricingPage from './Route/PricingPage'
import BlogPage from './Route/BlogPage'
import Protfolio from './Route/Protfolio'


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<ServicePage/>}/>
        <Route path='/pricing' element={<PricingPage/>} />
        <Route path='/blog' element={<BlogPage/>}/>
        <Route path='/protfolio' element={<Protfolio/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App