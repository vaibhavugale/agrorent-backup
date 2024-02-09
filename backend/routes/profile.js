const { uploadProfilePhoto, updateAddress, updatePassword } = require("../controllers/profileController");
const { updateProfileDetails } = require("../controllers/profileController");

const router = require("express").Router();

router.put("/updateImage", uploadProfilePhoto);
router.put("/update-user-detail", updateProfileDetails);
router.put("/update-user-address",updateAddress);
router.put("/update-password",updatePassword);

module.exports = router;
