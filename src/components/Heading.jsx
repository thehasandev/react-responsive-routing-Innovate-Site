import React from 'react'

function Heading(props) {
  return (
    <props.as className={`${props.className} ${props.as == "h1" && " text-[50px]  w-[380px] sm:text-large sm:w-[600px] md:w-[720px] lg:w-[720px]"} ${props.as == "h2" && "text-middle"} ${props.as=="h3" && "text-small"} ${props.as=="h5"&& "text-2xl text-[#29313D]"} font-sans font-bold text-secondary`}>{props.text}</props.as>
  )
}

export default Heading