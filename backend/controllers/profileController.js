const { findOne } = require("../models/Equipment");
const User = require("../models/User");
const { medianUpload } = require("../services/mediaUpload");
const bcrypt = require("bcrypt");
exports.uploadProfilePhoto = async (req, res) => {
  try {
    const file = req.files.profileImage;
    const userID  = req?.body?.user?.user?._id;
    if (!file) {
      return res.status(404).json({
        success: false,
        message: "Image Not Found..",
      });
    }

    const safeUrl = await medianUpload(file);

    await User.updateOne(
      { _id:userID },
      {
        image: safeUrl?.secure_url,
      }
    );

    return res.status(200).json({
      success: true,
      message: "Image updated sccuessfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message,
      message: "Internal server error..",
    });
  }
};
exports.updateProfileDetails = async (req, res) => {
  try {
    const { lastName, gender, firstName, email, DOB } = req.body;
    const  userId  = req?.body?.user?.user?._id;

    if (!lastName || !gender || !firstName || !email || !DOB) {
      return res.status(401).json({
        success: false,
        message: "All filed required..",
      });
    }
    const userData = await User.findOneAndUpdate(
      { _id:userId },
      {
        lastName,
         gender, 
         firstName,
          email,
           DOB 
      }
      
    );
   if(userData){
    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
    });
   }else{
    throw new Error("Can not update data",userData);
   }
  } catch (err) {
    return res.status(500).json({
      success: true,
      error: err.message,
      message: "Internal server error...",
    });
  }
};
exports.updateAddress = async (req, res) => {
  try {
    const { city, district, country, pincode, countryState } = req.body;
    const  userId  = req?.body?.user?.user?._id;
    if(!city || !district || !country || !pincode || !countryState){
      return res.status(401).json({
         success:false,
         message:"All filed required..."
      })
    }
    await User.updateOne(
      { _id:userId },
      {
        address: {
          city,
          district,
          country,
          pincode,
          countryState,
        },
      }
    );
    return res.status(200).json({
      success:true,
      message:"Address updated successfully"
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      error:err.message,
      message: "Internal server error",
    });
  }
};
exports.updatePassword  = async (req,res) =>{
  try{
    const  userId  = req?.body?.user?.user?._id;
    const {newPassword , oldPassword,cnfPassword} = req.body;
    if(!newPassword || !oldPassword || !cnfPassword){
      return res.status(404).json({
        success:false,
        message:"All field require..."
      })
    }

    if(newPassword!=cnfPassword){
      return res.json({
        success:false,
        message:"Password not match"
      })
    }
    let userData = await User.findOne({_id:userId});
   
    const userPassword = userData?.password;

    const result = bcrypt.compare(userPassword,oldPassword);

    if(result){
      const updatedPassword = await bcrypt.hash(newPassword,10);
      await User.findOneAndUpdate({_id:userId},{
        password:updatedPassword,
      })
       return res.status(200).json({
        success:true,
        message:"Password updated successfully"
       })
    }else{
      return res.status(403).json({
        success:false,
        message:"Password Not match"
      })
    }
  }catch(err){
   return res.status(500).json({
     success:false,
     error:err.message,
     message:"Internal server Error"
   })
  }
}