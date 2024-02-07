import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import Card from '../Card/Card';

const Section = ({showIndexAccordion,setShowIndexAccordion,allEqu}) => {

  return (
    <div  className= {` mt-4 md:max-w-[70%] p-2 mx-auto md:rounded-md bg-white rounded-sm  ${!showIndexAccordion ? "shadow-md" :""} md:min-h-3 `}>
     <div onClick={()=>setShowIndexAccordion(!showIndexAccordion)} className=' flex justify-between items-center  cursor-pointer px-3'>
        <p className=' md:text-lg md:font-semibold  tracking-wider'>All ({allEqu.length}) </p>
        <IoIosArrowDown  />
     </div>

   {
     
    showIndexAccordion && allEqu.map((cardData)=>{
     return  <Card key={cardData?._id} cardData={cardData} />
    })
   }
      
    </div>
  )
}

export default Section