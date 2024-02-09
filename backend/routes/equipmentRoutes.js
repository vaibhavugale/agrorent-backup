const { registerEquipment, nearByEquipmentSuggestionAlgorithm, getListOfEquipmentUserWise, deleteEquipment, getListOfEquipment } = require("../controllers/euipmentContollers");


const router = require("express").Router();

router.post("/user-equipment",getListOfEquipmentUserWise)
router.post("/registerEquipment",registerEquipment);
router.post("/getSuggestedEquipment",nearByEquipmentSuggestionAlgorithm)
router.post("/delete-equipment",deleteEquipment)



module.exports = router;