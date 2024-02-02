import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./style.css";
import { useSelector } from "react-redux";


const Header = () => {
  const user = useSelector((state) => state.userSlice);
  const imgUrl = useSelector((state) => state.userSlice.imgUrl);
  const [show, setShow] = useState(false);
  return (
    <div className=" z-30   flex justify-center items-center border-emerald-500 border-b  top-0 left-0 right-0 bottom-0  sticky  backdrop-blur-sm h-[70px] ">
      <nav className=" h-full flex justify-between w-[1080px] p-2">
        <Link to="/">
          {" "}
          <img src={logo} className=" object-fill h-full" alt="img" />
        </Link>

        <div className=" hidden md:flex justify-between items-center gap-7">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          {!user?.userData ? (
            <NavLink
              to="/login"
              className={
                " bg-orange-400 p-1 hover:bg-orange-500 text-white font-semibold transition-all duration-300  tracking-wider px-5 rounded-full"
              }
            >
              Login
            </NavLink>
          ) : (
            <Link to={"/profile/account"}>
             <abbr className=" relative" title="click to open menu box">
             <img
                src={imgUrl}
                className="  w-[40px] h-[40px] object-cover rounded-full"
                alt="img"
              />

              
             </abbr>
            </Link>
          )}
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            setShow(!show);
          }}
          className="  md:hidden flex justify-center items-center p-4"
        >
          {!user?.userData ? (
            <NavLink
              onClick={(e) => {
                e.stopPropagation();
              }}
              to="/login"
              className={
                " bg-orange-400 p-1 hover:bg-orange-500 text-white font-semibold transition-all duration-300  tracking-wider px-5 rounded-full"
              }
            >
              Login
            </NavLink>
          ) : (
            <Link to={"/profile/account"}>
              <img
                src={imgUrl}
                className=" w-[40px] cursor-pointer rounded-full"
                alt="img"
              />
            </Link>
          )}
        </div>
        {show && (
          <div className=" absolute w-[70%] md:hidden block min-h-[200px] top-[78px] right-[10px] shadow-slate-400 outline outline-slate-300 bg-white shadow-2xl rounded-md p-5  ">
            <ul className=" flex flex-col   min-h-[150px] justify-between ">
              <li>
                {" "}
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
