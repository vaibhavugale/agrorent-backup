import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className=" relative  bottom-0 bg-orange-950 text-white   ">
      <div className=" grid md:grid-cols-4 grid-cols-1 p-2  items-center justify-center justify-items-center co gap-5 md:p-5 max-w-[1080px] mx-auto">
        <div className="flex  justify-between w-full md:flex-col flex-row">
          <p> Quick Link</p>
          <div className=" flex text-sm flex-col">
            <Link>FAQs</Link>
            <Link>Contact Us</Link>
            <Link>Home</Link>
            <Link>Login</Link>
          </div>
        </div>
        <div  className="flex  justify-between w-full md:flex-col flex-row">
          <p> Quick Link</p>
          <div className=" flex text-sm flex-col">
            <Link>FAQs</Link>
            <Link>Contact Us</Link>
            <Link>Home</Link>
            <Link>Login</Link>
          </div>
        </div>
        <div  className="flex  justify-between w-full md:flex-col flex-row">
          <p> Quick Link</p>
          <div className=" flex text-sm flex-col">
            <Link>FAQs</Link>
            <Link>Contact Us</Link>
            <Link>Home</Link>
            <Link>Login</Link>
          </div>
        </div>
        <div  className="flex  justify-between w-full md:flex-col flex-row">
          <p> Quick Link</p>
          <div className=" flex text-sm flex-col">
            <Link>FAQs</Link>
            <Link>Contact Us</Link>
            <Link>Home</Link>
            <Link>Login</Link>
          </div>
        </div>
      </div>
      <div className=" border-t border-orange-500 overflow-clip flex-col flex  md:flex-row  justify-center md:justify-between items-center max-w-[1080px]   mx-auto">
        <div className=" flex justify-center p-2">
          <img src={logo} className=" w-[40px] h-[25px] " alt="img" />
          <p className=" font-bold flex justify-center items-center">
            AGRORENT
            <span className=" mt-1">
              {" "}
              <MdCopyright />
            </span>
            .<span className=" font-normal">All rights reserved.</span>
          </p>
        </div>
        <div className=" h-full flex gap-2 p-5">
          <FaFacebook />
          <FaInstagram />
          <FaXTwitter />
          <CiYoutube />
          <FaGoogle />
        </div>
      </div>
    </div>
  );
};

export default Footer;
