import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { IoAddOutline } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { BiLogOut } from "react-icons/bi"; 
import { useEffect } from 'react';
import {logout} from "../../api/authApi"
import { MdHistory } from "react-icons/md";

const Profile = () => {
  const user = useSelector((state)=>state.userSlice.userData);
  const img = useSelector((state)=>state.userSlice.imgUrl);
  const address = useSelector((state)=>state.userSlice.address);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
    if(!user){
      navigate("/");
      return;
    }
  },[user,navigate]);
  return (
    <div className='min-h-[91vh] flex'> 
         {/* Side bar */}
        <aside className=' border-r border-OR-50 min-w-[160px]  overflow-hidden  hidden  md:flex flex-col'>
          <div className=' flex flex-col justify-center  gap-3 w-full mt-5'>
          <Link to={"/profile/account"} className='flex rounded-sm items-center  hover:text-white gap-1 p-2 w-full  hover:bg-slate-600 transition-all duration-300 '> <MdAccountCircle size={20} />Account</Link>
          <Link to={"/profile/equipment"} className='flex rounded-sm items-center  hover:text-white  gap-1 p-2 w-full  hover:bg-slate-600 transition-all duration-300 ' ><IoAddOutline  size={20} />Equipment</Link>
          <Link to={"/profile/history"} className='flex rounded-sm items-center  hover:text-white  gap-1 p-2 w-full  hover:bg-slate-600 transition-all duration-300 '> <MdHistory size={20} />History</Link>
          <Link to={"/profile/setting"} className='flex rounded-sm items-center  hover:text-white   gap-1 p-2 w-full  hover:bg-slate-600 transition-all duration-300 ' > <IoIosSettings size={20}/>Setting</Link>
          <button onClick={ (e)=>logout(navigate,dispatch,e)} className='flex rounded-sm   hover:text-white  items-center  gap-2 p-2 w-full  hover:bg-slate-600 transition-all duration-300 '> <BiLogOut />Logout</button>
          </div>
        </aside>
       <Outlet  context={{location,user,img,address,navigate}} />
    </div>
  )
}

export default Profile