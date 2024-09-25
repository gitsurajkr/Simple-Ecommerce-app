const jwt = require('jsonwebtoken');
const User = require('../Model/userSchema');

const requireAuth = async (req, res, next)=>{
    const token = req.cookies.jwt;

    // check if token exists and is verified
    if(token){
        try{
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.userId).select('-password');
            console.log(decoded);
            next();
        }catch(err){
            console.log(err);
            res.status(401).json({message: "Unauthorized"});
        }   
    }else{
        res.status(401).json({message: "Unauthorized"});
    }
}
module.exports = requireAuth;