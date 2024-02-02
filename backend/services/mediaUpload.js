const cloudinary = require("cloudinary").v2;

exports.medianUpload = async (file, option={},res) => {
  try {
    return await cloudinary.uploader.upload(file.tempFilePath, option);
  } catch (err) {
     console.log(err.message);
  }
};
