import React, { useState } from 'react';
import {useForm} from "react-hook-form"
import Button from '../../common/Button/Button';
import { updateProfile } from '../../../api/authApi';
import { MdOutlineFileUpload } from "react-icons/md";

const UpdateProfile = ({user,img,location}) => {
    const token = user?.token;
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const [disabled,setDisabled] = useState(false);

      const submitHandler = async (data) =>{
        setDisabled(true);
        const res = await updateProfile(data,token)
        setDisabled(false);
      }
  return (
   <form onSubmit={handleSubmit(submitHandler)} className="w-full  outline  outline-slate-300  mt-[8%] p-5 rounded-sm flex  flex-col gap-5">
    <p className=" text-2xl font-semibold">Edit Personal Detail</p>
    <div className=" grid grid-cols-1 grid-rows-1 md:grid-rows-3 md:grid-cols-2 mt-4 gap-8">
      <div>
        <p className="text-sm text  font-light text-slate-900">
          First Name
        </p>
        <input
          defaultValue={user?.firstName}
          type="text"
   
          {...register("firstName", { required: true })}
          className=" outline outline-slate-200  font-semibold mt-1 md:w-[50%] w-full  rounded-sm px-3"
        />
      </div>
      <div>
        <p className="text-sm text  font-light text-slate-900">Last Name</p>
        <input
          type="text"
          defaultValue={user?.lastName}
 
          {...register("lastName" ,{required:true})}
          className=" outline outline-slate-200  md:w-[50%] w-full font-semibold mt-1   rounded-sm px-3"
        />
      </div>
      <div>
        <p className="text-sm text  font-light text-slate-900">Email </p>
        <input
          type="email"
          defaultValue={user?.email}
         
          {...register("email",{required:true})}
          className=" outline outline-slate-200  md:w-[50%] w-full  font-semibold mt-1  rounded-sm px-3"
        />
      </div>
      <div>
        <p className="text-sm text  font-light text-slate-900">
          Phone Number
        </p>
        <input
          type="tel"
        
          {...register("phoneNumber")}
          defaultValue={user?.phoneNumber}
          disabled
          className=" outline outline-slate-200 hover:cursor-not-allowed  md:w-[50%] w-full font-semibold mt-1  rounded-sm px-3"
        />
      </div>
      <div>
        <p className="text-sm text  font-light text-slate-900">Gender</p>
        <select  onChange={handleSubmit} className=" outline outline-slate-200  md:w-[50%] w-full  h-[50%]  cursor-pointer  rounded-sm px-1 mt-1" {...register("gender",{required:true})}>
          <option disabled defaultValue={"gender"} >
            gender
          </option>
          <option defaultValue={"male"}>Male</option>

          <option defaultValue={"Female"}>Female</option>
        </select>
      </div>
      <div>
        <p className="text-sm text  font-light text-slate-900">
          Date Of Birth
        </p>
        <input
          type="date"
          defaultValue={user?.DOB}
          {...register("DOB" ,{required:true})}
          className=" outline outline-slate-200  md:w-[50%] w-full font-semibold mt-1  rounded-sm px-3"
        />
      </div>
    </div>

    <Button disabled={disabled} backGroundColor={"bg-green-700"} width={"w-[15%]"} title={<><MdOutlineFileUpload className=' block md:hidden' size={30}/> <p className=' hidden md:block'>Upload</p></>}/>
  </form>
  )
}

export default UpdateProfile