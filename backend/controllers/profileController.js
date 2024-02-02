const User = require("../models/User");
const { medianUpload } = require("../services/mediaUpload");
exports.uploadProfilePhoto = async (req, res) => {
  try {
    const file = req.files.profileImage;
    if (!file) {
      return res.status(404).json({
        success: false,
        message: "Image Not Found..",
      });
    }

    const safeUrl = await medianUpload(file);

    await User.updateOne(
      {},
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
    const { userId } = req.body.user._id;
    if (!lastName || !gender || !firstName || !email || !DOB) {
      return res.status(401).json({
        success: false,
        message: "All filed required..",
      });
    }
    const userData = await User.updateOne(
      { userId },
      {
        lastName,
        firstName,
        email,
        DOB,
        gender,
      }
    );

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
    });
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
    const { userID } = req.body.user._id;
    if(!city || !district || !country || !pincode || !countryState){
      return res.status(401).json({
         success:false,
         message:"All filed required..."
      })
    }
    await User.updateOne(
      { userID },
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
      message: "Internal server error",
    });
  }
};
