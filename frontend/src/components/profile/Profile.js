import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
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