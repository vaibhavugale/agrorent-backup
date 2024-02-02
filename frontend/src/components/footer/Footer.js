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
      <div className=" flex-col md:flex-row  flex items-center justify-evenly p-5 w-[1080px] mx-auto">
        <div>
          <p> Quick Link</p>
          <div className=" flex text-sm flex-col">
            <Link>FAQs</Link>
            <Link>Contact Us</Link>
            <Link>Home</Link>
            <Link>Login</Link>
          </div>
        </div>
        <div>
          <p> Quick Link</p>
          <div className=" flex text-sm flex-col">
            <Link>FAQs</Link>
            <Link>Contact Us</Link>
            <Link>Home</Link>
            <Link>Login</Link>
          </div>
        </div>
        <div>
          <p> Quick Link</p>
          <div className=" flex text-sm flex-col">
            <Link>FAQs</Link>
            <Link>Contact Us</Link>
            <Link>Home</Link>
            <Link>Login</Link>
          </div>
        </div>
        <div>
          <p> Quick Link</p>
          <div className=" flex text-sm flex-col">
            <Link>FAQs</Link>
            <Link>Contact Us</Link>
            <Link>Home</Link>
            <Link>Login</Link>
          </div>
        </div>
      </div>
      <div className=" border-t border-orange-500 flex-col flex  md:flex-row  justify-between items-center w-[1080px]   mx-auto">
        <div className=" flex p-2 ">
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
