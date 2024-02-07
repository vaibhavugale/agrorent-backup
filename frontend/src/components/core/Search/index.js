import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import Section from './Section/Section';
import { useSelector } from 'react-redux';

const Index = () => {
    const [showIndexAccordion,setShowIndexAccordion] = useState(true);
    const allEqu = useSelector((state)=>state?.equSlice?.allEqu);

  return (
    <div className='  min-w-[100dvw] mx-auto min-h-[100dvh] p-4' >
       
       {/* search box */}
       <div  className=' md:w-[60%] flex px-2 justify-between md:p-3  mx-auto  rounded-sm bg-white shadow-lg md:rounded-md'>
          <div className=' flex justify-between items-center gap-2 '>
          <CiSearch size={30} className=' md:block hidden' />
            <input className=' outline-none text-slate-500 w-full font-mono text-sm p-2   md:text-lg '  placeholder='Search Equipment'/>
          </div>
          <div className=' flex justify-center items-center gap-2'>
            <button className=' font-semibold md:text-xl tracking-wide text-black md:text-slate-100 transition-all duration-500 md:px-3 md:py-1 md:rounded-md md:bg-slate-400 md:hover:bg-slate-950 ' ><span className="md:block hidden">search</span>   <CiSearch size={20} className=' md:hidden   block' /></button>
           <abbr title='filter'>
           {/* <button><CiFilter size={30} /></button> */}
           </abbr>
          </div>
         
       </div>
       
        <Section allEqu={allEqu}  showIndexAccordion={showIndexAccordion}  setShowIndexAccordion={setShowIndexAccordion}/>
      

    </div>
  )
}

export default Index;