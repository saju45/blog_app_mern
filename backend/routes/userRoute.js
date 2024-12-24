import express from "express";
import {
  changePassword,
  checkCookie,
  getProfile,
  login,
  logout,
  register,
} from "../controller/userController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/signup", register);
router.post("/login", login);
router.post("/logout", logout);

//check cookie
router.get("/checkCookie", checkCookie);
router.get(
  "/getProfileData",
  authMiddleware.authVerify,
  authMiddleware.authorizeRole("user"),
  getProfile
);
router.patch(
  "/changePassword",
  authMiddleware.authVerify,
  authMiddleware.authorizeRole("user"),
  changePassword
);

export default router;
