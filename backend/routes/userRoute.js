import express from "express";
import {
  changePassword,
  checkCookie,
  getProfile,
  login,
  logout,
  register,
  updateProfilePicture,
} from "../controller/userController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import upload from "../middlewares/imageUpload.js";

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

router.put(
  "/changeAvatar",
  authMiddleware.authVerify,
  authMiddleware.authorizeRole("user"),
  upload.single("image"),
  updateProfilePicture
);

export default router;
