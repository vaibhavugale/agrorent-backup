import React from 'react'
import {  useOutletContext } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";

const Account = () => {
    const {location,user,img,address,navigate} = useOutletContext();
  
    
  return (
    <div className=' w-full min-h-full max-w-[1080px] flex flex-col  px-4 mx-auto my-5  mb-[10%] pb-10 overflow-scroll'>
      <p className=' tracking-widest'>{location?.pathname}</p>
       
       {/*  username section */}
      <section className='w-full  outline  outline-slate-300  mt-[8%] p-5 rounded-md flex justify-between '>
        <div className=' flex-col md:flex-row flex gap-5 '>
            <img src={img}  alt='img'  className=' w-[100px] h-[100px] object-cover rounded-full'/>
            <div>
                <p className=' font-bold tracking-wide' >{`${user?.firstName} ${user?.lastName }`}</p>
                <p className=' font-light'> {user?.phoneNumber}</p>
            </div>

        </div>
        <div>
        <button  onClick={ () => navigate("/profile/setting")} className=' bg-OR-50   px-3  md:p-2  p-1  rounded-md text-black font-semibold flex items-center gap-2'>Edit  <CiEdit /></button>

        </div>
      </section>


      {/* Personal detail section */}
      <section className='w-full  outline  outline-slate-300  mt-[8%] p-5 rounded-md flex flex-col justify-between ' >
        <div className=' flex justify-between  w-full'>
            <p className=' font-bold md:text-2xl'>Personal Details</p>
            <button  onClick={ () => navigate("/profile/setting")} className=' bg-OR-50   px-3  md:p-2  p-1 rounded-md text-black font-semibold flex items-center gap-2'>Edit  <CiEdit /></button>
        </div>

        <div className=' grid grid-cols-1 grid-rows-1 md:grid-rows-3 md:grid-cols-2 mt-4 gap-8'>
            <div className=' outline outline-slate-200 md: md:w-[50%] w-full  w-full rounded-md px-3'>
                <p className='text-sm text  font-light text-slate-900'>First Name</p>
                <p className=' font-bold'>{user?.firstName ? user?.firstName : "NA"}</p>
            </div>
            <div  className=' outline outline-slate-200  md: md:w-[50%] w-full  w-full  rounded-md px-3'>
                <p className='text-sm text  font-light text-slate-900'>Last Name</p>
                <p className=' font-bold'>{user?.lastName ? user?.lastName : "NA"}</p>
            </div>
            <div  className=' outline outline-slate-200  md: md:w-[50%] w-full  w-full rounded-md px-3'>
                <p className='text-sm text  font-light text-slate-900'>Email</p>
                <p className=' font-bold'>{user?.email ? user?.email : " NA"} </p>
            </div>
            <div  className=' outline outline-slate-200  md:w-[50%] w-full  rounded-md px-3'>
                <p className='text-sm text  font-light text-slate-900'>Phone Number</p>
                <p className=' font-bold'>{ user?.phoneNumber ? user?.phoneNumber : "NA"}</p>
            </div>
            <div  className=' outline outline-slate-200  md:w-[50%] w-full  rounded-md px-3'>
                <p className='text-sm text  font-light text-slate-900'>Gender</p>
                <p className=' font-bold'>{ user?.gender ? user?.gender : "NA"}</p>
            </div>
            <div  className=' outline outline-slate-200  md:w-[50%] w-full  rounded-md px-3'>
                <p className='text-sm text  font-light text-slate-900'>Date Of Birth</p>
                <p className=' font-bold'>{user?.DOB ? user?.DOB:"NA"}</p>
            </div>
        </div>

      </section>


      

      {/* Address section */}
    <section className='w-full  outline outline-slate-300  flex flex-col mt-[8%] p-5 rounded-md   justify-evenly  '>
        <div className=' flex justify-between  w-full'>
            <p className=' font-bold text-2xl' >Address</p>
            <button  onClick={ () => navigate("/profile/setting")} className=' bg-OR-50   px-3 md:p-2  p-1 rounded-md text-black font-semibold flex items-center gap-2'>Edit  <CiEdit /></button>
        </div>

        <div  className=' grid grid-cols-1 grid-rows-1 md:grid-rows-3 md:grid-cols-2 mt-4 gap-8' >
        <div className=' outline outline-slate-200  md:w-[50%] w-full  rounded-md px-3'>
                <p className='text-sm text  font-light text-slate-900'>City</p>
                <p className=' font-bold'>{user?.address ? user?.address?.city : address?.city}</p>
            </div>
            <div className=' outline outline-slate-200  md:w-[50%] w-full  rounded-md px-3'>
                <p className='text-sm text  font-light text-slate-900'>District</p>
                <p className=' font-bold'>{user?.address ? user?.address?.district : address?.district}</p>
            </div>
            <div className=' outline outline-slate-200  md:w-[50%] w-full  rounded-md px-3'>
                <p className='text-sm text  font-light text-slate-900'>State</p>
                <p className=' font-bold'>{user?.address ? user?.address?.countryState : address?.countryState}</p>
            </div>
            <div className=' outline outline-slate-200  md:w-[50%] w-full  rounded-md px-3'>
                <p className='text-sm text  font-light text-slate-900'>Country</p>
                <p className=' font-bold'>{user?.address ? user?.address?.country : address?.country}</p>
            </div>
            <div className=' outline outline-slate-200  md:w-[50%] w-full  rounded-md px-3'>
                <p className='text-sm text  font-light text-slate-900'>pin code</p>
                <p className=' font-bold'>{user?.address ? user?.address?.pincode : address?.pincode}</p>
            </div>
        </div>

      </section>
    </div>
  )
}

export default Account