import React from 'react'

function Button({text,className,type}) {
  return (
    <button className={` ${type == "navBtn" ? "text-lg":"text-xl"} bg-primary py-[14px] px-[18px] font-nunito font-semibold text-lg rounded-[18px] text-white border border-primary hover:bg-transparent duration-500 hover:text-secondary 
    ${className}`}>{text}</button>
  )
}

export default Button