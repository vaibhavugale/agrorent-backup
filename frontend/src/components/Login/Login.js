import React from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../api/authApi";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelLogin = async (data) => {
    try {
      dispatch(login(data, navigate));
    } catch (err) {
      console.log(err);
    }
  };
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  return (
    <div className=" flex items-center justify-center h-[60vh]">
      <form
        className="flex  flex-col gap-5 p-5  shadow-2xl rounded-md w-[350px]  outline outline-OR-50 shadow-green-900"
        onSubmit={handleSubmit((data) => handelLogin(data))}
      >
        <p className=" text-center   text-xl ">Login</p>
        <div className=" relative">
          <label>
            username<sup className=" text-red-600">*</sup>
          </label>

          <input
            className=" p-2 shadow-inner rounded-md  w-full h-[30px] outline outline-blue-200"
            {...register("username", { required: true })}
          />

          {errors.username && (
            <p className=" absolute text-[12px] text-red-600 ">
              This is required
            </p>
          )}
        </div>

        <div className=" relative">
          <label>
            password<sup className=" text-red-600">*</sup>
          </label>
          <input
            type="password"
            className=" p-2 shadow-inner rounded-md  w-full h-[30px] outline outline-blue-200"
            {...register("password", { required: true })}
          />

          {errors.password && (
            <p className=" absolute text-[12px] text-red-600">
              This is required
            </p>
          )}
        </div>
        <button className=" bg-OR-50 p-2 rounded-md" type="submit">
          Submit
        </button>

        <span className=" text-sm ">
          Don't have Account?{" "}
          <NavLink className={"text-blue-500"} to="/signup">
            register
          </NavLink>{" "}
        </span>
      </form>
    </div>
  );
};

export default Login;
