import toast from "react-hot-toast";

import { setUser, setToken ,setImg, setAddress} from "../store/slices/userSlice";
import { apiConnector } from "./apiConnector";
import { LOGIN_API, LOGOUT, SIGNUP_API, UPDATE_ADDRESS, UPDATE_IMAGE, UPDATE_PROFILE } from "../constant/constant";



export function login(data,navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");

    try {
      const response = await apiConnector("POST", LOGIN_API, data);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
     
        
   

      toast.success("Login Successful");
      if(response?.data?.user?.address ) {
        dispatch(setAddress(response?.data?.user?.address))
      }
      dispatch(setToken(response.data.token));
      dispatch(setUser(response.data.user));


        
     dispatch(setImg(response?.data?.user?.image ? response.data.user.image : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName}`))
     localStorage.setItem('token',response.data.token);
     localStorage.setItem('userData',JSON.stringify(response.data.user));
     localStorage.setItem('imgUrl',response?.data?.user?.image ? response.data.user.image : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName}`);
      
      navigate("/profile/account");
    } catch (error) {
      console.log("LOGIN API ERROR............", error);
      toast.error("Login Failed");
    }

    toast.dismiss(toastId);
  };
}
export function signup(data, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");

    try {
      const response = await apiConnector("POST", SIGNUP_API, data);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Account created Successful");
      navigate("/login");
    } catch (error) {
      console.log("LOGIN API ERROR............", error);
      toast.error(error?.response?.data?.message);
    }

    toast.dismiss(toastId);
  };
}
export async function logout(navigate,dispatch,e,token){
 try{
  e.stopPropagation();
  
 
  dispatch(setAddress(null));
  dispatch(setImg(null));
  dispatch(setUser(null));
  
  localStorage.clear('user');
  localStorage.clear('token');
  localStorage.clear('imgUrl');
  await apiConnector("POST",LOGOUT);
  navigate("/");

 }catch(err){
    console.log(Error)
 }
}

export async function  updateAddress(data ,token){
 
     const toastId = toast.loading("loading")
        try{
          
          const res = await apiConnector("PUT",UPDATE_ADDRESS,data,{
            "Content-Type": "multipart/form-data",
            'Authorization': `Bearer ${token}`,
          });
          if(res?.data?.success){
            toast.success("Updated successfully , Login Again To Aee Changes",{
              timeout: 5000,
            });
            toast.dismiss(toastId);
            return true;
          }

        }catch(err){
          toast.error("Something went wrong")        
          console.log(err);
          toast.dismiss(toastId);
          return false;
        }

}
export async function  updateProfile(data ,token){
 
  const toastId = toast.loading("loading")
     try{
       const res = await apiConnector("PUT",UPDATE_PROFILE,data,{
        "Content-Type": "multipart/form-data",
        'Authorization': `Bearer ${token}`,
      });
       if(res?.data?.success){
         toast.success("Updated successfully , Login Again To Aee Changes",{
          timeout: 5000,
        });
         toast.dismiss(toastId);
         return true;
       }

     }catch(err){
       toast.error("Something went wrong")        
       console.log(err);
       toast.dismiss(toastId);
       return false;
     }

}

export async  function updateProfileImage(data,token){
 
     const toastId = toast.loading("Loading");
    try{
      const res = await apiConnector("PUT",UPDATE_IMAGE,data,{
        "Content-Type": "multipart/form-data",
        'Authorization': `Bearer ${token}`,
      });
      if(res?.data?.success){
        toast.success("Image updated successfully");
      }
      
    }catch(err){
      console.log(err);
      toast.error("Something went wrong");
  }
  toast.dismiss(toastId);
}
