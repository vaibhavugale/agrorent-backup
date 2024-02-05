import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { IoAddOutline } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { FcSurvey } from "react-icons/fc";
import { BiLogOut } from "react-icons/bi"; 
import { useEffect } from 'react';
import {logout} from "../../api/authApi"
import { MdHistory } from "react-icons/md";
import SideBar from '../common/SideBar/SideBar';

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
    <div className='min-h-[91vh]   transition-all duration-300 flex'> 
         {/* Side bar */}
        <SideBar location={location} navigate={navigate} dispatch={dispatch} />
       <Outlet  context={{location,user,img,address,navigate}} />
    </div>
  )
}

export default Profile