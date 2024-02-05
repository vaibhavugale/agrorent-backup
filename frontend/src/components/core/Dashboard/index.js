import React from 'react'
import SideBar from '../../common/SideBar/SideBar';
import { CiFilter } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import Section from './Section/Section';


const Dashboard = () => {
  return (
    <div className=' flex'>
    <SideBar />
    <div className=' w-[100vw] h-[100vh] bg-slate-200'>
      <div className='  w-[1080px]  min-h-full mx-auto py-5'>
       
       {/* search box */}
        <div className=' w-5/6 flex justify-between p-5  mx-auto mt-8 bg-white shadow-lg rounded-md'>
          <div className=' flex justify-between items-center gap-2 '>
          <CiSearch size={30} />
            <input className=' outline-none text-slate-500 font-mono   text-lg '  placeholder='Search Equipment'/>
          </div>
          <div className=' flex justify-center items-center gap-2'>
            <button className=' font-semibold text-xl tracking-wide text-slate-100 transition-all duration-500 px-3 py-1 rounded-md bg-slate-400 hover:bg-slate-950 ' >search</button>
           <abbr title='filter'>
           <button><CiFilter size={30} /></button>
           </abbr>
          </div>
         
        </div>
 
        <Section />
        <Section />
        <Section />
        <Section />
        
      </div>
    </div>


    </div>
  )
}

export default Dashboard