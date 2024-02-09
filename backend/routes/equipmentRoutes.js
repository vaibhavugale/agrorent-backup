const { registerEquipment, nearByEquipmentSuggestionAlgorithm, getListOfEquipmentUserWise } = require("../controllers/euipmentContollers");


const router = require("express").Router();

router.post("/user-equipment",getListOfEquipmentUserWise)
router.post("/registerEquipment",registerEquipment);
router.post("/getSuggestedEquipment",nearByEquipmentSuggestionAlgorithm)


module.exports = router;