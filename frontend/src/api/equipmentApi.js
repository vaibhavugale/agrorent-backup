import toast from "react-hot-toast";
import { apiConnector } from "./apiConnector";
import { REGISTER_EQUIPMENT } from "../constant/constant";

export  function registeredEquip(formData,reset,setData){
    return async (dispatch)=>{
        const toastId = toast.loading("Uploading ")
        try{

            const res = await apiConnector("POST",REGISTER_EQUIPMENT,formData);
            if(res?.data?.success){
                toast.success("Registration successfully..");
                toast.dismiss(toastId);
                setData(null)
                reset();
            }

        }catch(err){
            console.log(err);
            toast.error("Something went wrong while registration..");
            toast.dismiss(toastId);
        }
    }
}