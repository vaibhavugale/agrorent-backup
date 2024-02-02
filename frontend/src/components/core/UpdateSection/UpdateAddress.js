import React, { useState } from 'react'
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux"
import Button from '../../common/Button/Button';
import { updateAddress } from '../../../api/authApi';

const UpdateAddress = () => {
    const {city,district ,countryState , country,pincode} = useSelector((state)=>state.userSlice.address);
    const [disabled,setDisabled] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const submitHandler = async (data) =>{
        setDisabled(true);
        const res = await updateAddress(data)
        setDisabled(false);
      }

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="w-full  outline  outline-slate-300  mt-[8%] p-5 rounded-sm flex  flex-col gap-5">
    <p className=" text-2xl font-semibold">Update Address</p>

    {/* grid section */}
    <section className=" grid grid-cols-1 grid-rows-1 md:grid-rows-3 md:grid-cols-2 mt-4 gap-8">
         <div>
          <p className=' font-light text-sm'>City</p>
          <input type='text' {...register("city",{required:true})} defaultValue={city} className=" outline outline-slate-200  font-semibold mt-1 md:w-[50%] w-full  rounded-sm px-3"/>
         </div>
         <div>
          <p className=' font-light text-sm'>District</p>
          <input type='text' {...register("district",{required:true})}   defaultValue={district ? district:" "} className=" outline outline-slate-200  font-semibold mt-1 md:w-[50%] w-full  rounded-sm px-3"/>
         </div>
        
         <div>
          <p className=' font-light text-sm'>State</p>
          <input type='text' {...register("countryState",{required:true})}  defaultValue={countryState ? countryState : ""} className=" outline outline-slate-200  font-semibold mt-1 md:w-[50%] w-full  rounded-sm px-3"/>
         </div>
         <div>
          <p className=' font-light text-sm'>Country</p>
          <input type='text' {...register("country",{required:true})}  defaultValue={country ? country:""} className=" outline outline-slate-200  font-semibold mt-1 md:w-[50%] w-full  rounded-sm px-3"/>
         </div>
         <div>
          <p className=' font-light text-sm'>Pin code</p>
          <input type='text' {...register("pincode",{required:true})}  defaultValue={pincode ? country:""} className=" outline outline-slate-200  font-semibold mt-1 md:w-[50%] w-full  rounded-sm px-3"/>
         </div>
        
    </section>
    <Button disabled={disabled} backGroundColor={"bg-green-700"} width={"w-[15%]"} title={"Update"}/>
    
    </form>
  )
}

export default UpdateAddress