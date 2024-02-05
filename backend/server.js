const express = require("express");
const app = express();
const dotenv = require('dotenv');
const dataBase = require("./config/database")
const cookieParser = require('cookie-parser');
const cors = require("cors")
const {cloudinaryConnect} = require("./config/cloudconfig");
const fileUpload = require("express-fileupload")
const authRoutes = require("./routes/auth");
const equipmentRoutes = require("./routes/equipmentRoutes");
const profileRoute = require("./routes/profile")
const { authentication } = require("./middleware/Auth");
const { sendMessage } = require("./services/whatsappService.js");
const router = require("express").Router();


dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin:["https://agrorent.vercel.app","http://localhost:3000","*"],
		credentials:true,
		
	})
)

app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: "/tmp/",
	})
);


cloudinaryConnect();


dataBase.connect();


app.use("/auth",authRoutes);
const PORT = process.env.PORT || 4000;
app.use("/equ",authentication,equipmentRoutes);
app.use("/profile",authentication,profileRoute)

app.listen(PORT,()=>{
    console.log(`Running on port ${PORT}`)
})
