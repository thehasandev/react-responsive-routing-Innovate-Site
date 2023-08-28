import React from 'react'

function Section({className,children}) {
  return (
    <section className = {`${className}`}>{children}</section>
  )
}

export default Section