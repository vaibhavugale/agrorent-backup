import React from 'react'

const Button = ({backGroundColor,className,width,title,disabled}) => {
  return (
    <button   type='submit' className= {` ${className} ${width ? width :"w-[20%] "} p-2 text-white font-semibold rounded-md ${disabled ? " cursor-not-allowed bg-green-800":` ${backGroundColor ? backGroundColor :"bg-green-700" } cursor-pointer`} `} >{title}</button>
  )
}

export default Button