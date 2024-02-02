const { getListOfEquipment, registerEquipment, nearByEquipmentSuggestionAlgorithm } = require("../controllers/euipmentContollers");


const router = require("express").Router();

router.get("/getList",getListOfEquipment);
router.post("/registerEquipment",registerEquipment);
router.post("/getSuggestedEquipment",nearByEquipmentSuggestionAlgorithm)


module.exports = router;