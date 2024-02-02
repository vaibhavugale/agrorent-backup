import React, { useRef } from "react";
import { redirect, useOutletContext } from "react-router-dom";
import { MdOutlineFileUpload } from "react-icons/md";
import { useForm } from "react-hook-form";
import UpdateProfile from "../core/UpdateSection/UpdateProfile";
import UpdateAddress from "../core/UpdateSection/UpdateAddress";
import { useDispatch } from "react-redux";
import { setImg } from "../../store/slices/userSlice";
import { updateProfileImage } from "../../api/authApi";
const Setting = () => {
  const { location, img, user } = useOutletContext();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const submitHandler =  (data) =>{
     const formData = new FormData();
     formData.append("profileImage",data?.profileImage[0])
     updateProfileImage(formData);
  }
  const preview =async (e) =>{
    const reader = new FileReader();
    console.log(e);
    const file = e.target.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = ()=>{
      dispatch(setImg(reader.result));
    }
  }
  return (
    <div className=" w-full min-h-full max-w-[1080px] flex flex-col  px-4 mx-auto my-5  mb-[10%] pb-10 overflow-scroll">
      <p className=" tracking-widest">{location?.pathname}</p>

      {/* img update */}
      <form  onSubmit={handleSubmit(submitHandler)} className="w-full  outline  outline-slate-300  mt-[8%] p-5 rounded-sm flex  gap-5">
        <img src={img} alt="img" className=" md:w-[100px] w-[50px] h-[50px] md:h-[100px] object-cover rounded-full"  />
        <div>
          <p className=" tracking-wide text-xl">Choose Your Photo  {errors.profileImage &&<span className=" text-red-700 text-sm">Choose image </span> }</p>
          <div className=" text-white md:flex-row  flex flex-col gap-5 mt-3">
            <input
              type="file"
              {...register("profileImage", { required: true })}
              onChange={preview}
              className=" bg-gray-600 md:p-2 md:px-4 p-1  rounded-md w-full  "
              id="photo_input"
            />
            <button type="submit" className=" bg-green-700 md:px-4 tracking-wider w-[40px] md:w-3/6 flex items-center justify-center  md:gap-3 md:justify-between rounded-md">
              <span className="md:block hidden">upload</span> <MdOutlineFileUpload size={25} />
            </button>
          </div>
        </div>
      </form>

      
      <UpdateProfile user={user} img={img} location={location} />
      <UpdateAddress user={user} img={img} location={location} />
    </div>
  );
};

export default Setting;
