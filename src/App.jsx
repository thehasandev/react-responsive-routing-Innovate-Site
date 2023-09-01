import React from 'react'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,RouterProvider
} from "react-router-dom";

import Home from "./Pages/Home"
import Error from "./Pages/Error"
import About from "./Pages/About"
import ServicePage from "./Pages/ServicePage"
import BlogPage from "./Pages/BlogPage"
import Protfolio from "./Pages/Protfolio"
import RouteLayouts from './components/RouteLayouts';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<RouteLayouts/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/service' element={<ServicePage/>}/>
      <Route path='/blog' element={<BlogPage/>}/>
      <Route path='/protfolio' element={<Protfolio/>}/>
      <Route path='*' element={<Error/>}/>
  </Route>
  
  )
);


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App


