import React from 'react'

function Paragraph({text,className}) {
  return (
    <p className={`font-nunito font-normal text-lg text-secondary ${className}`}>{text}</p>
  )
}

export default Paragraph