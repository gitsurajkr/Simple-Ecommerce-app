import User from "../Model/userModel.js";
import jwt from "jsonwebtoken";

const checkAdmin = async (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  } else {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.userId).select("-password");
      console.log(user);
      console.log(user.isAdmin);
      if (user.isAdmin) {
        next();
      }
    } catch (err) {
      console.log(err);
      res.status(401).json({ message: "Unauthorized" });
    }
  }
};

module.exports = checkAdmin;