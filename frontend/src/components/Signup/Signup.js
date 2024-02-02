import React from "react";
import Sup from "../common/Sup/Sup";
import { useForm } from "react-hook-form";


import {useDispatch} from "react-redux"

import { signup } from "../../api/authApi";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handelSignup =async (data) =>{
      dispatch(signup(data,navigate));
  }
  return (
    <div className=" flex  justify-center  items-center  h-[70vh] ">
      <form onSubmit={handleSubmit((data)=> handelSignup(data))} className="shadow-2xl  p-5 rounded-md w-[400px]  outline outline-OR-50 shadow-green-900">
        <p className=" text-xl text-center mb-4">Signup</p>
        <div className=" flex gap-5 w-[350px]">
          <div>
            <p>
              firstName<Sup>*</Sup>
              {errors.firstName && <span className=" text-red-600 text-xs">This is required</span>}
            </p>
            <input
              type={"text"}
              className=" p-2 shadow-inner rounded-md  w-full  h-[30px] outline outline-blue-200"
              {...register("firstName", { required: true })}
            />
          </div>

          <div>
            <p>
              lastName<Sup>*</Sup>
              {errors.lastName && <span className=" text-red-600 text-xs">This is required</span>}
            </p>
            <input
              className=" p-2 shadow-inner rounded-md  w-full  h-[30px] outline outline-blue-200"
              type={"text"}
              {...register("lastName", { required: true })}
            />
          </div>
        </div>
        <div className=" mt-3">
          <p>
            phone<Sup>*</Sup>
            {errors.phone && <span className=" text-red-600 text-xs">{console.log(errors.phone)}</span>}
          </p>
          <input
            className=" p-2 shadow-inner rounded-md  w-full  h-[30px] outline outline-blue-200"
            type={"tel"}
            {...register("phone", { required: true,type:Number,maxLength:10 })}
          />
        </div>
        <div className=" mt-3">
          <p>
            password<Sup>*</Sup>
            {errors.password && <span className=" text-red-600 text-xs">This is required</span>}
          </p>
          <input
            className=" p-2 shadow-inner rounded-md  w-full  h-[30px] outline outline-blue-200"
            type={"password"}
            {...register("password", { required: true })}
          />
        </div>
        <div className=" mt-3">
          <p>
            confirm<Sup>*</Sup>
            {errors.cnfPassword && <span className=" text-red-600 text-xs">This is required</span>}
          </p>
          <input
            className=" p-2 shadow-inner rounded-md  w-full  h-[30px] outline outline-blue-200"
            type={"password"}
            {...register("cnfPassword", { required: true })}
          />
        </div>
        <button className=" mt-3 w-full bg-OR-50 p-2 rounded-md" type="submit"  title={"Submit"} />
          
        
      </form>
    </div>
  );
};

export default Signup;
