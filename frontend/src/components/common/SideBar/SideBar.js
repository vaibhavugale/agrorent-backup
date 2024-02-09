import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { IoAddOutline } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";

import { IoIosSettings } from "react-icons/io";
import { FcSurvey } from "react-icons/fc";
import { BiLogOut } from "react-icons/bi"; 
import { logout } from '../../../api/authApi';
import { MdHistory } from "react-icons/md";
import { MdKeyboardDoubleArrowRight ,MdKeyboardDoubleArrowLeft} from "react-icons/md";

const SideBar = ({location,navigate,dispatch}) => {
   const [show,setShow] = useState(true);
   
  return (
    <aside className={`border-r border-OR-50 ${show ? "min-w-[160px] ":""} max-w-[160px]  overflow-hidden  hidden md:flex flex-col`}>
    <div onClick={()=>setShow(!show)} className=' cursor-pointer w-full mt-5 flex justify-end p-3'> {!show ? <MdKeyboardDoubleArrowRight size={30} /> :<MdKeyboardDoubleArrowLeft size={30} /> }</div>
    <div className=' flex flex-col justify-start min-h-[720px]  gap-3 w-full mt-5'>
    <Link to={"/profile/account"} className={`flex ${ !show ? "justify-center":""} rounded-sm items-center ${location?.pathname=="/profile/account" ?"bg-slate-600 text-white":""}  hover:text-white gap-1 p-2 w-full  hover:bg-slate-600 transition-all duration-300 `} > <MdAccountCircle size={20} />{ show ? "Account" :""}</Link>
    <Link to={"/profile/equipment"} className={`flex ${ !show ? "justify-center":""}  rounded-sm items-center  ${location?.pathname=="/profile/equipment" ?"bg-slate-600 text-white":""}  hover:text-white  gap-1 p-2 w-full  hover:bg-slate-600 transition-all duration-300 `} ><IoAddOutline  size={20} />{show ? "Equipment":""}</Link>
    <Link to={"/profile/history"} className={`flex ${ !show ? "justify-center":""}  rounded-sm items-center ${location?.pathname=="/profile/history" ?"bg-slate-600 text-white":""}  hover:text-white  gap-1 p-2 w-full  hover:bg-slate-600 transition-all duration-300 `}> <MdHistory size={20} />{show ? "History":""}</Link>
    <Link to={"/profile/setting"} className={`flex ${ !show ? "justify-center":""}  rounded-sm items-center ${location?.pathname=="/profile/setting" ?"bg-slate-600 text-white":""}  hover:text-white   gap-1 p-2 w-full  hover:bg-slate-600 transition-all duration-300 `} > <IoIosSettings size={20}/>{show ?"Setting":""}</Link>
    <Link to={"/profile/user-product"} className={`flex  ${ !show ? "justify-center":""} rounded-sm items-center ${location?.pathname=="/profile/user-product" ?"bg-slate-600 text-white":""}  hover:text-white   gap-1 p-2 w-full  hover:bg-slate-600 transition-all duration-300 `}> <FcSurvey size={20} />{ show ? "Your Product":""}</Link>
    <button onClick={ (e)=>logout(navigate,dispatch,e)} className={`flex rounded-sm  ${ !show ? "justify-center":""}   hover:text-white  items-center  gap-2 p-2 w-full  hover:bg-slate-600 transition-all duration-300 `}> <BiLogOut  size={18}/>{show ? "Logout":""}</button>
    </div>
  </aside>
  )
}

export default SideBar