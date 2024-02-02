const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config();

exports.connect = () => {
  try{
    mongoose.connect(process.env.DATA_BASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })
    .then(() => console.log("DB Connected Successfully"))
    .catch( (error) => {
        console.log("DB Connection Failed");
        console.error(error);
        process.exit(1);
    } )
  }catch(err){
    console.log(err)
  }
};