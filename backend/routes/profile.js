const { uploadProfilePhoto, updateAddress } = require("../controllers/profileController");
const { updateProfileDetails } = require("../controllers/profileController");

const router = require("express").Router();

router.put("/updateImage", uploadProfilePhoto);
router.put("/update-user-detail", updateProfileDetails);
router.put("/update-user-address",updateAddress);

module.exports = router;
