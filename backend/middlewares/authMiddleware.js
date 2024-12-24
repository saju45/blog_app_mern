import jwt from "jsonwebtoken";
import User from "../model/userModel.js";

// middleware to verify token
const authMiddleware = {
  authVerify: async (req, res, next) => {
    let token;

    // check if token is in cookies
    if (req.cookies.blogApp) {
      token = req.cookies.blogApp;
    }

    console.log("token", token);

    try {
      if (!token) {
        return res.status(401).json({ message: "Token not provided" });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //fetch user details
      const user = await User.findById(decoded._id);

      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }
      req.user = user;
      next();
    } catch (error) {
      res.status(401).json({ message: "Token is invalid" });
    }
  },
  authorizeRole: (role) => {
    return async (req, res, next) => {
      if (req.user.role !== role) {
        return res
          .status(403)
          .json({ message: "You are not authorized to access this resource" });
      }
      next();
    };
  },
};

export default authMiddleware;
