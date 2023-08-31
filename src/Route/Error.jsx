import React from 'react'
import Container from '../components/Container'

import { Link } from 'react-router-dom'

function Error() {
  return (
    <section className='py-20'>
      <Container>
          <h1 className='text-7xl font-sans font-extraBold mb-8 text-black'>Page Error 404</h1>
          <Link to="/">
            <button className='bg-gray-700 text-lg text-white py-4 px-8 rounded-lg'>Goto Home Page</button>
          </Link>
      </Container>
    </section>
  )
}

export default Error