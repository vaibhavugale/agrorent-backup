const router = require("express").Router();
const {signIn,signUp, logout} = require("../controllers/Auth");
const {sendMessage} = require("../services/whatsappService.js")



router.post("/login",signIn);
router.post("/signup",signUp);
router.post("/logout",logout)
router.post("/send-message",sendMessage);
module.exports = router