const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.authentication = async (req, res, next) => {
  try {
    const token = 
    req.cookies.token ||
    req.body.token ||
    req.header("Authorization").replace("Bearer ", "");
<<<<<<< HEAD
    // const authHeader = req.headers['authorization'];
    // const token = authHeader.split(' ')[1]; 
=======
>>>>>>> origin/main
    
    if (!token) {
      return res.status(403).json({
        success: false,
        message: "Token not found...",
      });
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);


    if (decode) {
      const user = decode;
     
      req.body.user = user;
      // console.log(user);

      next();
    } else {
      return res.status(403).json({
        success: false,
        message: "Invalid token...",
      });
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      error:err.message,
      message: "Internal server error, Return from middleware...",
    });
  }
};
