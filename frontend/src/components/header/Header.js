import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { FcBusinessContact } from "react-icons/fc";
import { CiLogout } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
import { logout } from "../../api/authApi";
import { RxCross1 } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { IoAddOutline } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { FcSurvey } from "react-icons/fc";
import { BiLogOut } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userSlice);
  const imgUrl = useSelector((state) => state.userSlice.imgUrl);
  const [show, setShow] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  return (
    <div className=" z-30   flex justify-center items-center border-emerald-500 border-b  top-0 left-0 right-0 bottom-0  sticky  backdrop-blur-sm h-[70px] ">
      <nav className=" h-full flex justify-between w-[1080px] p-2">
        <Link to="/">
          {" "}
          <img src={logo} className=" object-fill h-full" alt="img" />
        </Link>

        <div className=" hidden md:flex justify-between items-center gap-7">
          <NavLink to="/">Home</NavLink>
          <NavLink
            className={
              "flex justify-center items-center gap-2 hover:text-green-700"
            }
            to="/search"
          >
            <FiSearch /> Search
          </NavLink>
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
            <abbr className=" relative" title="click to open menu box">
              <img
                src={imgUrl}
                onClick={() => navigate("/profile/account")}
                className="  cursor-pointer w-[40px] h-[40px] object-cover rounded-full"
                alt="img"
              />
            </abbr>
          )}
        </div>

        <div
          onClick={(e) => {
            e.stopPropagation();
            setShow(!show);
          }}
          className="  md:hidden cursor-pointer flex justify-center gap-2 items-center p-4"
        >
          <CiSearch
            onClick={() => navigate("/search")}
            size={30}
            className=" block md:hidden"
          />
          <RxHamburgerMenu size={30} className=" block md:hidden" />
        </div>

        {show && (
          <div className=" absolute min-w-[70%] md:hidden block min-h-[200px] top-[78px] right-[10px] shadow-slate-400 outline outline-slate-300 bg-white shadow-2xl rounded-md p-5  ">
            <button
              onClick={() => setShow(false)}
              className=" flex items-center justify-end min-w-full gap-2 m-2"
            >
              <RxCross1 />
            </button>
            <ul className=" flex flex-col   min-h-[150px] justify-between ">
              <li>
                {" "}
                <NavLink
                  onClick={() => setShow(false)}
                  className={"flex  items-center gap-1"}
                  to="/"
                >
                  <FaHome /> Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setShow(false)}
                  className={"flex  items-center gap-1"}
                  to="/about"
                >
                  <FcAbout /> About
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink
                  onClick={() => setShow(false)}
                  className={"flex  items-center gap-1"}
                  to="/contact"
                >
                  <FcBusinessContact />
                  Contact
                </NavLink>
              </li>{" "}
              {user?.userData && (
                <li>
                  <div
                    onClick={() => {
                      setOpenProfile(!openProfile);
                    }}
                    className=" w-full flex justify-between cursor-pointer flex-col  items-center"
                  >
                    <div className=" w-full flex justify-between items-center">
                      <p className={"flex  items-center gap-1"}>
                        {" "}
                        <CgProfile /> profile
                      </p>

                      <div
                        className={`${
                          !openProfile ? "rotate-[0deg]" : "rotate-[180deg]"
                        }`}
                      >
                        <IoIosArrowDown />
                      </div>
                    </div>

                    {openProfile && (
                      <ul
                        onClick={() => setShow(false)}
                        className=" scale-100 transition-all duration-300 w-full ml-[2.25rem]"
                      >
                        <Link
                          to={"/profile/account"}
                          className={`flex  rounded-sm items-center hover:text-white gap-1 p-2 w-full  hover:bg-slate-600 transition-all duration-300 `}
                        >
                          {" "}
                          <MdAccountCircle size={20} />
                          {show ? "Account" : ""}
                        </Link>
                        <Link
                          to={"/profile/equipment"}
                          className={`flex  hover:text-white  gap-1 p-2 w-full  hover:bg-slate-600 transition-all duration-300 `}
                        >
                          <IoAddOutline size={20} />
                          {show ? "Equipment" : ""}
                        </Link>
                        <Link
                          to={"/profile/history"}
                          className={`flex  hover:text-white  gap-1 p-2 w-full  hover:bg-slate-600 transition-all duration-300 `}
                        >
                          {" "}
                          <MdHistory size={20} />
                          {show ? "History" : ""}
                        </Link>
                        <Link
                          to={"/profile/setting"}
                          className={`flex  hover:text-white   gap-1 p-2 w-full  hover:bg-slate-600 transition-all duration-300 `}
                        >
                          {" "}
                          <IoIosSettings size={20} />
                          {show ? "Setting" : ""}
                        </Link>
                        <Link
                          to={"/profile/user-product"}
                          className={`flex    hover:text-white   gap-1 p-2 w-full  hover:bg-slate-600 transition-all duration-300 `}
                        >
                          {" "}
                          <FcSurvey size={20} />
                          {show ? "Your Product" : ""}
                        </Link>
                      </ul>
                    )}
                  </div>
                </li>
              )}
              <li>
                {!user?.userData ? (
                  <NavLink
                    onClick={() => setShow(false)}
                    className={"flex  items-center gap-1"}
                    to="/login"
                  >
                    {" "}
                    <CiLogin />
                    Login
                  </NavLink>
                ) : (
                  <Link
                    className={"flex  items-center gap-1"}
                    onClick={(e) => {
                      logout(navigate, dispatch, e);
                      setShow(false);
                    }}
                  >
                    {" "}
                    <CiLogout />
                    Logout
                  </Link>
                )}
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
