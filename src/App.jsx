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

import Navbar from './components/layOut/Navbar'
import Footer from './components/layOut/Footer'


function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='*' element={<Error/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/service' element={<ServicePage/>}/>
            <Route path='/pricing' element={<PricingPage/>} />
            <Route path='/blog' element={<BlogPage/>}/>
            <Route path='/protfolio' element={<Protfolio/>}/>
          </Routes>
        <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App